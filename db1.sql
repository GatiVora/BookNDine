-- Database: BookNDine

-- DROP DATABASE IF EXISTS "BookNDine";

CREATE DATABASE "BookNDine"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_India.1252'
    LC_CTYPE = 'English_India.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	
	
create table users (
	user_id serial primary key,
	username VARCHAR ( 30 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	name VARCHAR ( 30 ) NOT NULL,
	mobile_number bigint not null,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	dob date not null,
	role smallint default 0
);

ALTER TABLE users
ADD COLUMN address varchar(50) not null;

ALTER TABLE users
ADD COLUMN city varchar(50);

INSERT INTO users (username, password, name, mobile_number, email, dob, role, address, city)
VALUES ('john_doe', 'password123', 'John Doe', 1234567890, 'john.doe@example.com', '1990-01-01', 1, '123 Main St', 'New York');

INSERT INTO users (username, password, name, mobile_number, email, dob, address, city)
VALUES ('john_doe1', 'password123', 'John Doe', 1234567890, 'john1.doe@example.com', '1990-01-01', '123 Main St', 'New York');

select * from users;


-- add column for images
create table restaurants (
	restaurant_id serial primary key,
	restaurant_name VARCHAR ( 30 ) UNIQUE NOT NULL,
	mobile_number bigint not null,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	address varchar (50) not null,
	city varchar (20) not null,
	no_of_tables smallint not null
);

INSERT INTO restaurants (restaurant_name, mobile_number, email, address, city, no_of_tables)
VALUES ('Example Restaurant', 1234567890, 'example@example.com', '123 Main St', 'Cityville', 10);

INSERT INTO restaurants (restaurant_name, mobile_number, email, address, city, no_of_tables)
VALUES ('Example Restaurant1', 1234567890, 'example1@example.com', '123 Main St', 'Cityville', 10);

select * from restaurants;

create table tables (
	table_id serial primary key,
	restaurant_id int,
	capacity int not null,
	current_status varchar(20) default 'Not booked',
	CONSTRAINT table_restaurant
      FOREIGN KEY(restaurant_id) 
	  REFERENCES restaurants(restaurant_id)
);

INSERT INTO tables (restaurant_id, capacity, current_status)
VALUES (1, 4, 'Not booked');

INSERT INTO tables (restaurant_id, capacity, current_status)
VALUES (1, 4, 'Booked');

INSERT INTO tables (restaurant_id, capacity)
VALUES (3, 4);

select * from tables;


create table reservations (
	reservation_id serial primary key,
	user_id int,
	restaurant_id int,
	reservation_date date not null,
	reservation_time time not null default current_time,
	reservation_status varchar(30) default 'not booked',
	CONSTRAINT reservation_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id),
	CONSTRAINT reservation_restaurant
      FOREIGN KEY(restaurant_id) 
	  REFERENCES restaurants(restaurant_id)
);

INSERT INTO reservations (user_id, restaurant_id, reservation_date, reservation_time, reservation_status)
VALUES (1, 1, '2024-01-11', '18:30', 'Booked');

INSERT INTO reservations (user_id, restaurant_id, reservation_date, reservation_time, reservation_status)
VALUES (5, 3, '2024-01-11', '18:30', 'Booked');

select * from reservations;

create table items (
	item_id serial primary key,
	restaurant_id int,
	item_name varchar(20) not null,
	item_price int not null,
	item_description varchar(30) not null,
	item_category varchar(20) not null,
	CONSTRAINT item_restaurant
      FOREIGN KEY(restaurant_id) 
	  REFERENCES restaurants(restaurant_id)
);

INSERT INTO items (restaurant_id, item_name, item_price, item_description, item_category)
VALUES (10, 'Burger', 10, 'Delicious burger with cheese', 'Main Course');

select * from items;


create table ratings (
	rating_id serial primary key,
	user_id int,
	restaurant_id int,
	rating smallint default 0,
	CONSTRAINT rating_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id),
	CONSTRAINT rating_restaurant
      FOREIGN KEY(restaurant_id) 
	  REFERENCES restaurants(restaurant_id)
);

INSERT INTO ratings (user_id, restaurant_id, rating)
VALUES (1, 1, 4);

select * from ratings;

ALTER TABLE public.users
ALTER COLUMN address DROP NOT NULL;
