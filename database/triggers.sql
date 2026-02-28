-- validate passenger
CREATE OR REPLACE TRIGGER trg_validate_passenger
BEFORE INSERT OR UPDATE ON PASSENGER
FOR EACH ROW
BEGIN
    IF NOT is_valid_email(:NEW.EMAIL) THEN
        RAISE_APPLICATION_ERROR(-10001, 'Invalid email format for Passenger.');
    END IF;

    IF NOT is_valid_phone(:NEW.PHONE) THEN
        RAISE_APPLICATION_ERROR(-10002, 'Invalid phone format for Passenger.');
    END IF;
END;
/

-- validate staff
CREATE OR REPLACE TRIGGER trg_validate_staff
BEFORE INSERT OR UPDATE ON STAFF
FOR EACH ROW
BEGIN
    IF NOT is_valid_email(:NEW.EMAIL) THEN
        RAISE_APPLICATION_ERROR(-10004, 'Invalid email format for Staff.');
    END IF;

    IF :NEW.ROLE IS NOT NULL AND NOT is_valid_staff_role(:NEW.ROLE) THEN
        RAISE_APPLICATION_ERROR(-10005, 'Invalid role for Staff.');
    END IF;
END;
/

-- validate station
CREATE OR REPLACE TRIGGER trg_validate_station
BEFORE INSERT OR UPDATE ON STATION
FOR EACH ROW
BEGIN
    IF NOT is_valid_state(:NEW.STATE) THEN
        RAISE_APPLICATION_ERROR(-10007, 'Invalid state code for Station.');
    END IF;

    IF NOT is_valid_zip(:NEW.ZIP) THEN
        RAISE_APPLICATION_ERROR(-10008, 'Invalid ZIP code format for Station.');
    END IF;

    IF NOT is_valid_latitude(:NEW.LATITUDE) THEN
        RAISE_APPLICATION_ERROR(-10009, 'Invalid latitude value for Station.');
    END IF;

    IF NOT is_valid_longitude(:NEW.LONGITUDE) THEN
        RAISE_APPLICATION_ERROR(-10010, 'Invalid longitude value for Station.');
    END IF;
END;
/

-- validate vehicle
CREATE OR REPLACE TRIGGER trg_validate_vehicle
BEFORE INSERT OR UPDATE ON VEHICLE
FOR EACH ROW
BEGIN
    IF NOT is_valid_vehicle_type(:NEW.VEHICLE_TYPE) THEN
        RAISE_APPLICATION_ERROR(-10012, 'Invalid vehicle type (must be 0 or 1).');
    END IF;
END;
/

-- validate schedule
CREATE OR REPLACE TRIGGER trg_validate_schedule
BEFORE INSERT OR UPDATE ON SCHEDULE
FOR EACH ROW
BEGIN
    IF :NEW.DEPARTURE_TIME IS NOT NULL AND :NEW.ARRIVAL_TIME IS NOT NULL THEN
        IF :NEW.ARRIVAL_TIME <= :NEW.DEPARTURE_TIME THEN
            RAISE_APPLICATION_ERROR(-10013, 'Arrival time must be after departure time.');
        END IF;
    END IF;
END;
/

-- validate route
CREATE OR REPLACE TRIGGER trg_validate_route
BEFORE INSERT OR UPDATE ON ROUTE
FOR EACH ROW
BEGIN
    IF :NEW.DURATION_MINUTES <= 0 THEN
        RAISE_APPLICATION_ERROR(-10016, 'Route duration must be greater than zero.');
    END IF;

    IF :NEW.DISTANCE_MILES <= 0 THEN
        RAISE_APPLICATION_ERROR(-10017, 'Route distance must be greater than zero.');
    END IF;
END;
/
-- autogenerate email for staff, email consists of firstname.lastnamestaffid@amtrak.com
CREATE OR REPLACE TRIGGER trg_generate_unique_email
BEFORE INSERT OR UPDATE OF F_NAME, L_NAME, EMAIL ON STAFF
FOR EACH ROW
DECLARE
    base_email VARCHAR2(100);
    unique_email VARCHAR2(100);
BEGIN
    IF :NEW.EMAIL IS NULL OR 
       :NEW.F_NAME != :OLD.F_NAME OR 
       :NEW.L_NAME != :OLD.L_NAME THEN

        base_email := LOWER(:NEW.F_NAME || '.' || :NEW.L_NAME) || :NEW.STAFF_ID ||  '@amtrak.com';
        unique_email := base_email;

        :NEW.EMAIL := unique_email;
    END IF;
END;
/

-- assigns a random confirmation code upperalphanumberic 10 digit code to confirmation_code from ticket
CREATE OR REPLACE TRIGGER TICKET_CONFIRMATION_CODE
BEFORE INSERT ON TICKET
FOR EACH ROW
BEGIN
    IF :NEW.CONFIRMATION_CODE IS NULL THEN
        :NEW.CONFIRMATION_CODE := DBMS_RANDOM.STRING('X', 10);
    END IF;
END;
/