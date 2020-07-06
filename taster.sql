DROP DATABASE IF EXISTS  taster;
DROP USER IF EXISTS  taster@localhost;
create user taster@localhost identified WITH mysql_native_password  by 'taster';
create database taster;
grant all privileges on taster.* to taster@localhost with grant option;
flush privileges;
commit;
USE taster;

CREATE TABLE tastetag(
	tname	varchar(20),
    tcode	INTEGER PRIMARY KEY
);
CREATE TABLE food (
  foodname    varchar(20) PRIMARY KEY,
  taste1    INTEGER not null,
  taste2   INTEGER,
  taste3    INTEGER,
  taste4   INTEGER,
  taste5    INTEGER,
  imageadd	varchar(40),
  FOREIGN KEY (taste1) REFERENCES tastetag(tcode),
  FOREIGN KEY (taste2) REFERENCES tastetag(tcode),
  FOREIGN KEY (taste3) REFERENCES tastetag(tcode),
  FOREIGN KEY (taste4) REFERENCES tastetag(tcode),
  FOREIGN KEY (taste5) REFERENCES tastetag(tcode)
);

INSERT INTO tastetag VALUES('한식', 001);
INSERT INTO tastetag VALUES('일식', 002);
INSERT INTO tastetag VALUES('중식', 003);
INSERT INTO tastetag VALUES('양식', 004);
INSERT INTO tastetag VALUES('그외', 005);
INSERT INTO tastetag VALUES('육류', 011);
INSERT INTO tastetag VALUES('면류', 012);
INSERT INTO tastetag VALUES('밥류', 013);
INSERT INTO tastetag VALUES('떡', 014);
INSERT INTO tastetag VALUES('빵', 015);
INSERT INTO tastetag VALUES('해산물', 016);
INSERT INTO tastetag VALUES('국물', 021);
INSERT INTO tastetag VALUES('구이', 022);
INSERT INTO tastetag VALUES('튀김', 023);
INSERT INTO tastetag VALUES('매운', 031);
INSERT INTO tastetag VALUES('향신료', 032);


INSERT INTO food VALUES ('곱창', 001, 011, 022, null, null, './images/gopchang.jpg');
 INSERT INTO food VALUES ('닭발', 001, 011, 031, null, null, './images/dakbal.jpg');
 INSERT INTO food VALUES ('파스타', 004, 012, null, null, null, null);
 INSERT INTO food VALUES ('떡볶이', 001, 014, 031, null, null, null);
 INSERT INTO food VALUES('초밥', 002, 016, 013, null, null, null);
 INSERT INTO food VALUES('마라탕', 003, 021, 012, 031, 016, null);
 INSERT INTO food VALUES('파전', 001, 016, null, null, null, null);
 INSERT INTO food VALUES('전골', 001, 021, null, null, null, null);
 INSERT INTO food VALUES('치킨', 001, 011, 023, null, null, null);
 INSERT INTO food VALUES('커리', 005, 032, null, null, null, null);
 INSERT INTO food VALUES('브런치', 004, 015, null, null, null, null);
