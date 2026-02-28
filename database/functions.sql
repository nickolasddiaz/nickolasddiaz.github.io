-- Passenger Email
CREATE OR REPLACE FUNCTION IS_VALID_EMAIL (
    P_EMAIL VARCHAR2
) RETURN BOOLEAN IS
BEGIN
    RETURN REGEXP_LIKE(P_EMAIL, '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
END;
/

-- Passenger Phone only 10-digit numbers
CREATE OR REPLACE FUNCTION IS_VALID_PHONE (
    P_PHONE VARCHAR2
) RETURN BOOLEAN IS
BEGIN
    RETURN REGEXP_LIKE(P_PHONE, '^\d{10}$');
END;
/

-- State (2-letter code uppercase)
-- from https://en.wikipedia.org/wiki/List_of_U.S._state_and_territory_abbreviations
CREATE OR REPLACE FUNCTION IS_VALID_STATE (
    P_STATE VARCHAR2
) RETURN BOOLEAN IS
BEGIN
    RETURN REGEXP_LIKE(P_STATE, '^[A-Z]{2}$')
    OR P_STATE IN ( 'AL', 'AK', 'AZ', 'AR', 'CA',
                    'CO', 'CT', 'DE', 'DC', 'FL',
                    'GA', 'HI', 'ID', 'IL', 'IN',
                    'IA', 'KS', 'KY', 'LA', 'ME',
                    'MD', 'MA', 'MI', 'MN', 'MS',
                    'MO', 'MT', 'NE', 'NV', 'NH',
                    'NJ', 'NM', 'NY', 'NC', 'ND',
                    'OH', 'OK', 'OR', 'PA', 'RI',
                    'SC', 'SD', 'TN', 'TX', 'UT',
                    'VT', 'VA', 'WA', 'WV', 'WI',
                    'WY', 'AS', 'GU', 'MP', 'PR',
                    'VI', 'MH', 'FM', 'PW', 'AA',
                    'AE', 'AP', 'NB', 'CM', 'CZ',
                    'PI', 'TT' );
END;
/

-- ZIP Code (either 5 or 5+4 format)
CREATE OR REPLACE FUNCTION IS_VALID_ZIP (
    P_ZIP VARCHAR2
) RETURN BOOLEAN IS
BEGIN
    RETURN REGEXP_LIKE(P_ZIP, '^\d{5}(-\d{4})?$');
END;
/

-- Latitude: Valid range -90.0000000 to 90.0000000
CREATE OR REPLACE FUNCTION IS_VALID_LATITUDE (
    P_LAT NUMBER
) RETURN BOOLEAN IS
BEGIN
    RETURN P_LAT BETWEEN - 90 AND 90;
END;
/

-- Longitude: Valid range -180.0000000 to 180.0000000
CREATE OR REPLACE FUNCTION IS_VALID_LONGITUDE (
    P_LONG NUMBER
) RETURN BOOLEAN IS
BEGIN
    RETURN P_LONG BETWEEN - 180 AND 180;
END;
/

-- Vehicle Type: Must be 0 or 1
CREATE OR REPLACE FUNCTION IS_VALID_VEHICLE_TYPE (
    P_TYPE NUMBER
) RETURN BOOLEAN IS
BEGIN
    RETURN P_TYPE IN ( 0, 1 );
END;
/

-- Staff Role
CREATE OR REPLACE FUNCTION IS_VALID_STAFF_ROLE (
    P_ROLE VARCHAR2
) RETURN BOOLEAN IS
BEGIN
    RETURN UPPER(P_ROLE) IN ( 'CONDUCTOR', 'DRIVER', 'CLERK' );
END;
/

--Into 7 numbers 0 for false to the the masked schedual of the days of the week
CREATE OR REPLACE FUNCTION GET_DAY_MASK (
    SUN IN NUMBER,
    MON IN NUMBER,
    TUE IN NUMBER,
    WED IN NUMBER,
    THU IN NUMBER,
    FRI IN NUMBER,
    SAT IN NUMBER
) RETURN NUMBER IS
    RESULT NUMBER := 0;
BEGIN
    IF SUN = 1 THEN
        RESULT := RESULT + POWER(2, 0);
    END IF;

    IF MON = 1 THEN
        RESULT := RESULT + POWER(2, 1);
    END IF;

    IF TUE = 1 THEN
        RESULT := RESULT + POWER(2, 2);
    END IF;

    IF WED = 1 THEN
        RESULT := RESULT + POWER(2, 3);
    END IF;

    IF THU = 1 THEN
        RESULT := RESULT + POWER(2, 4);
    END IF;

    IF FRI = 1 THEN
        RESULT := RESULT + POWER(2, 5);
    END IF;

    IF SAT = 1 THEN
        RESULT := RESULT + POWER(2, 6);
    END IF;

    RETURN RESULT;
END;
/

CREATE OR REPLACE FUNCTION GET_DAY_STRING (
    DAY_MASK IN NUMBER
) RETURN VARCHAR2 IS
    RESULT VARCHAR2(100) := '';
BEGIN
    IF DAY_MASK = 0
    OR DAY_MASK > 127 THEN
        RETURN 'None';
    ELSE
        RESULT := 'Every ';
    END IF;

    IF DAY_MASK = 127 THEN
        RETURN RESULT || 'Day';
    ELSIF DAY_MASK = 65 THEN
        RETURN RESULT || 'Weekend';
    ELSIF DAY_MASK = 62 THEN
        RETURN RESULT || 'Weekday';
    END IF;

    IF BITAND(DAY_MASK,
              POWER(2, 0)) > 0 THEN
        RESULT := RESULT || 'Sun, ';
    END IF;

    IF BITAND(DAY_MASK,
              POWER(2, 1)) > 0 THEN
        RESULT := RESULT || 'Mon, ';
    END IF;

    IF BITAND(DAY_MASK,
              POWER(2, 2)) > 0 THEN
        RESULT := RESULT || 'Tue, ';
    END IF;

    IF BITAND(DAY_MASK,
              POWER(2, 3)) > 0 THEN
        RESULT := RESULT || 'Wed, ';
    END IF;

    IF BITAND(DAY_MASK,
              POWER(2, 4)) > 0 THEN
        RESULT := RESULT || 'Thu, ';
    END IF;

    IF BITAND(DAY_MASK,
              POWER(2, 5)) > 0 THEN
        RESULT := RESULT || 'Fri, ';
    END IF;

    IF BITAND(DAY_MASK,
              POWER(2, 6)) > 0 THEN
        RESULT := RESULT || 'Sat, ';
    END IF;

    -- Remove trailing comma if needed
    IF RESULT IS NOT NULL THEN
        RESULT := RTRIM(RESULT, ', ');
    END IF;

    RETURN RESULT;
END;
/

CREATE OR REPLACE FUNCTION PHONE_TO_STAFF (
    PHONE_NUMBER IN VARCHAR2
) RETURN NUMBER IS
    RESULT NUMBER;
BEGIN
    SELECT
        STAFF_ID
    INTO RESULT
    FROM
        STAFF
    WHERE
        PHONE = PHONE_NUMBER;

    RETURN RESULT;
END;
/

CREATE OR REPLACE FUNCTION EMAIL_TO_STAFF (
    EMAIL_STAFF IN VARCHAR2
) RETURN NUMBER IS
    RESULT NUMBER;
BEGIN
    SELECT
        STAFF_ID
    INTO RESULT
    FROM
        STAFF
    WHERE
        EMAIL = EMAIL_STAFF;

    RETURN RESULT;
END;
/

CREATE OR REPLACE FUNCTION PHONE_TO_CUST (
    PHONE_NUMBER IN VARCHAR2
) RETURN NUMBER IS
    RESULT NUMBER;
BEGIN
    SELECT
        PASSENGER_ID
    INTO RESULT
    FROM
        PASSENGER
    WHERE
        PHONE = PHONE_NUMBER;

    RETURN RESULT;
END;
/

CREATE OR REPLACE FUNCTION EMAIL_TO_CUST (
    EMAIL_CUST IN VARCHAR2
) RETURN NUMBER IS
    RESULT NUMBER;
BEGIN
    SELECT
        PASSENGER_ID
    INTO RESULT
    FROM
        PASSENGER
    WHERE
        EMAIL = EMAIL_CUST;

    RETURN RESULT;
END;
/

-- returns Train for int 1 else Bus for 0
CREATE OR REPLACE FUNCTION VEHICLE_TYPE_CHAR (
    VEHICLE IN INTEGER
) RETURN VARCHAR2 IS
BEGIN
    IF VEHICLE = 1 THEN
        RETURN 'TRAIN';
    ELSE
        RETURN 'BUS';
    END IF;
END;

--Input a timestamp and returns something like April 2025, 02:30 PM
CREATE OR REPLACE FUNCTION FORMAT_TIMESTAMP (
    TS IN TIMESTAMP
) RETURN VARCHAR2 IS
BEGIN
    RETURN TO_CHAR(TS, 'Month YYYY, HH:MI PM ');
END;
/

--Input a timestamp and returns something like April 20 2025, 02:30 PM
CREATE OR REPLACE FUNCTION FORMAT_TIMESTAMP_DAY (
    TS IN TIMESTAMP
) RETURN VARCHAR2 IS
BEGIN
    RETURN TO_CHAR(TS, 'Month DD YYYY, HH:MI PM ');
END;
/

CREATE OR REPLACE FUNCTION GET_MINUTES_BETWEEN (
    START_TIME IN TIMESTAMP,
    END_TIME   IN TIMESTAMP
) RETURN INTEGER IS
    DIFF          INTERVAL DAY TO SECOND;
    TOTAL_MINUTES INTEGER;
BEGIN
    DIFF := END_TIME - START_TIME;
    TOTAL_MINUTES := EXTRACT(DAY FROM DIFF) * 720 + EXTRACT(HOUR FROM DIFF) * 60 + EXTRACT(MINUTE FROM DIFF);

    RETURN TOTAL_MINUTES;
END;
/