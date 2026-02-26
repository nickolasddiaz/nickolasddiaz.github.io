INSERT INTO PASSENGER (PASSENGER_ID, NAME,EMAIL, PHONE, ADDRESS) VALUES 
(1,'Robert Waters','robertwalter91@gmail.com',4342101933,'2002 Magdalena Pass, Pacochahaven, Tennessee 98096'),
(2,'Alan Benson','alanbenson21@outlook.com',2729860902,'32885 Winona Isle, New Maureen, Arizona - 91241, Saint Martin'),
(3,'Janet Friedman','janetfriedman63@yahoo.com',6626732300,'2834 Laurianne Loaf, Ortizberg, New Mexico - 42339, Eritrea'),
(4,'Eunice Griffith','eunicegriffith78@hotmail.com',8058295046,'79241 Doug Center, Lake Mafaldaworth, Arkansas - 83793, Papua New Guinea'),
(5,'Matt Oneal','mattoneal46@protonmail.com',8402774545,'463 Mervin Junctions, Port Keon, Colorado - 73593, Australia');

INSERT INTO STATION (STATION_CODE, NAME, CITY, STATE, ZIP, STREET, LATITUDE, LONGITUDE) VALUES
('TPA', 'Tampa Union Station', 'Tampa', 'FL', '33602', '601 N Nebraska Ave', 27.9515, -82.4552),
('ORL', 'Orlando Amtrak Station', 'Orlando', 'FL', '32806', '1400 Sligh Blvd', 28.5199, -81.3820),
('MIA', 'Miami Amtrak Station', 'Miami', 'FL', '33147', '8303 NW 37th Ave', 25.8115, -80.2227),
('WPB', 'West Palm Beach Amtrak Station', 'West Palm Beach', 'FL', '33401', '203 S Tamarind Ave',26.7118, -80.0526),
('JAX', 'Jacksonville Amtrak Station', 'Jacksonville', 'FL', '32209', '3570 Clifford Ln', 30.3392, -81.6543);

INSERT INTO TICKET (TICKET_ID, PASSENGER_ID, DEPARTURE_TIME, ARRIVAL_TIME, CONFIRMATION_CODE) VALUES
(101, 1, TO_TIMESTAMP('2025-04-15 08:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-15 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), null),
(102, 2, TO_TIMESTAMP('2025-04-16 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-16 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), null),
(103, 3, TO_TIMESTAMP('2025-04-17 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-17 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), null),
(104, 4, TO_TIMESTAMP('2025-04-18 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-18 18:00:00', 'YYYY-MM-DD HH24:MI:SS'), null),
(105, 5, TO_TIMESTAMP('2025-04-19 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-19 20:00:00', 'YYYY-MM-DD HH24:MI:SS'), null);

INSERT INTO VEHICLE (VEHICLE_ID, VEHICLE_TYPE, MODEL, NAME, AGE, VIN) VALUES
(301, 1, 'Siemens Charger', 'Silver Meteor 1', TO_TIMESTAMP('2000-05-08 00:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'JNRAS08U06X162975'),
(302, 1, 'Siemens Charger', 'Silver Meteor 2', TO_TIMESTAMP('2018-05-19 00:00:00', 'YYYY-MM-DD HH24:MI:SS'), '1HSSDAAN8XH640604'),
(303, 1, 'Siemens Charger', 'Silver Meteor 3', TO_TIMESTAMP('2012-02-12 00:00:00', 'YYYY-MM-DD HH24:MI:SS'), '3GSCL33P48S670688'),
(304, 1, 'Siemens Charger', 'Silver Meteor 4', TO_TIMESTAMP('2020-04-05 00:00:00', 'YYYY-MM-DD HH24:MI:SS'), 'JTEDS42A492009385'),
(305, 0, 'Motor Coach', 'Sunshine Express', TO_TIMESTAMP('2015-04-13 00:00:00', 'YYYY-MM-DD HH24:MI:SS'), '2HGES26742H527362');

INSERT INTO STAFF (STAFF_ID, L_NAME, F_NAME, EMAIL, PHONE, ROLE, VEHICLE_ID, ASSIGNED_STATION_CODE) VALUES
(1, 'Tommie', 'Tran', NULL, 7306216796, 'Conductor', 301, 'TPA'),
(2, 'Dean', 'Lozano', NULL, 7302106471, 'Conductor', 302, 'ORL'),
(3, 'Buster', 'Lloyd', NULL, 9842228662, 'Clerk', null, 'MIA'),
(4, 'Michel', 'Schwartz', NULL, 7302247792, 'Conductor', 303, 'WPB'),
(5, 'Johnnie', 'Lutz', NULL, 7302444046, 'Conductor', 304, 'JAX'),
(6, 'Hans', 'Garrison', NULL, 6620353384, 'Driver', 305, 'MIA');

INSERT INTO ROUTE (ROUTE_ID, NAME, ORIGIN_ID, DEST_ID, VEHICLE_ID, VEHICLE_TYPE, DURATION_MINUTES, DISTANCE_MILES) VALUES
(401, 'Tampa-Orlando', 'TPA', 'ORL', 301, 1, 240, 84),
(402, 'Orlando-Miami', 'ORL', 'MIA', 302, 1, 210, 235),
(403, 'Miami-West Palm Beach', 'MIA', 'WPB', 303, 1, 90, 70),
(404, 'West Palm Beach-Jacksonville', 'WPB', 'JAX', 304, 1, 300, 271),
(405, 'Tampa-Jacksonville', 'TPA', 'JAX', 305, 0, 360, 200);

INSERT INTO SCHEDULE (SCHEDULE_ID, ROUTE_ID, DEPARTURE_TIME, ARRIVAL_TIME, DAYS_OF_WEEK) VALUES
(501, 401, TO_TIMESTAMP('2025-04-01 08:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(1,1,1,1,1,1,1)), -- Tampa to Orlando, every day
(502, 402, TO_TIMESTAMP('2025-04-01 12:30:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(1,1,1,1,1,1,1)), -- Orlando to Miami, every day
(503, 402, TO_TIMESTAMP('2025-04-01 10:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 13:30:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,1,1,1,1,1,0)), -- Orlando to Miami, every weekday
(504, 403, TO_TIMESTAMP('2025-04-01 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 15:30:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,1,1,1,1,1,0)), -- Miami to West Palm Beach, every weekday
(505, 404, TO_TIMESTAMP('2025-04-01 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 18:30:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,1,1,1,1,1,0)), -- West Palm Beach to Jacksonville, every weekday
(506, 403, TO_TIMESTAMP('2025-04-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 13:30:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(1,0,0,0,0,0,1)), -- Miami to West Palm Beach, every weekend
(507, 404, TO_TIMESTAMP('2025-04-01 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(1,0,0,0,0,0,1)), -- West Palm Beach to Jacksonville, every weekend
(508, 404, TO_TIMESTAMP('2025-04-01 14:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 19:30:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,1,1,1,0,0,0)), -- West Palm Beach to Jacksonville, every mon,tue,wen
(509, 405, TO_TIMESTAMP('2025-04-01 06:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 08:00:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,1,1,1,0,0,0)), -- Tampa to Jacksonville, every mon,tue,wen
(510, 405, TO_TIMESTAMP('2025-04-01 16:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 22:00:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,0,0,0,1,1,0)), -- Tampa to Jacksonville, every thur,fri
(511, 401, TO_TIMESTAMP('2025-04-01 08:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,0,0,0,1,1,0)), -- Tampa to Orlando, every thur,fri
(512, 402, TO_TIMESTAMP('2025-04-01 08:00:00', 'YYYY-MM-DD HH24:MI:SS'), TO_TIMESTAMP('2025-04-01 12:00:00', 'YYYY-MM-DD HH24:MI:SS'), GET_DAY_MASK(0,0,0,0,1,1,0)); -- Orlando to Miami, every thur,fri

INSERT INTO ROUTE_TICKET (ROUTE_TICKET_ID, ORDER_ID, TICKET_ID, SCHEDULE_ID) VALUES
-- Robert Waters trip: Tampa -> Orlando -> Miami
(601, 1, 101, 501), -- Tampa to Orlando
(602, 2, 101, 502), -- Orlando to Miami

-- Alan Benson trip: Orlando -> Miami -> West Palm Beach -> Jacksonville
(603, 1, 102, 503), -- Orlando to Miami 
(604, 2, 102, 504), -- Miami to West Palm Beach
(605, 3, 102, 505), -- West Palm Beach to Jacksonville

-- Janet Friedman trip: Miami -> West Palm Beach -> Jacksonville
(606, 1, 103, 506), -- Miami to West Palm Beach
(607, 2, 103, 507), -- West Palm Beach to Jacksonville

-- Eunice Griffith trip: West Palm Beach -> Jacksonville -> Tampa
(608, 1, 104, 508), -- West Palm Beach to Jacksonville
(609, 2, 104, 509), -- Tampa to Jacksonville (return trip next day)

-- Matt Oneal trip: Tampa -> Jacksonville -> Tampa -> Orlando -> Miami
(610, 1, 105, 510), -- Tampa to Jacksonville
(611, 2, 105, 511), -- Tampa to Orlando (next day)
(612, 3, 105, 512); -- Orlando to Miami