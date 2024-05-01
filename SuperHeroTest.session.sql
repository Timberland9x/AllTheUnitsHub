-- show DATABASES;
use hero;
show tables;
create table heros(
    id int,
    name varchar(255),
    region varchar(255),
    roast varchar(255)
);
INSERT into heros
values (1, "Superman", "USA", "dark");

SELECT * from heros;