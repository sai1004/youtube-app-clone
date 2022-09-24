create database youtube_db;

use youtube_db;

create table profile (

    id varchar(245) not null primary key,
    name varchar(99) not null,
    email varchar(99) not null,
    password varchar(99) not null,
    mobile varchar(99),
    token varchar(199) not null,
    role varchar(32) not null default 'USER',
    status varchar(32) not null default 'NA',
    active boolean not null default true,
    created_by varchar(128) not null default 'system',
    created_on timestamp not null default now(),
    updated_by varchar(128) not null default 'system',
    updated_on timestamp not null default now()     

);

create table video (

    id varchar(245) not null primary key,
    uri varchar(245) not null,
    views varchar(199),
    likes varchar(199),
    dis_likes varchar(199),
    summary text,
    created_by varchar(128) not null default 'system',
    created_on timestamp not null default now(),
    updated_by varchar(128) not null default 'system',
    updated_on timestamp not null default now()   

);

create table comments (

    id varchar(245) primary key,
    parent_id varchar(128) not null default 'WEB',
    profile_id
    video_id 
    likes varchar(199),
    dis_likes varchar(199),
    summary text,
    created_by varchar(128) not null default 'system',
    created_on timestamp not null default now(),
    updated_by varchar(128) not null default 'system',
    updated_on timestamp not null default now()   

);

create table video_playlist (

    id varchar(245) not null primary key,
    name 


);

create table channel (

    id varchar(245) not null primary key,
    name varchar(199) not null,
    subscribers varchar(199),
    total_views varchar(199),
    uri varchar(245) not null,
    profile_id
    created_by varchar(128) not null default 'system',
    created_on timestamp not null default now(),
    updated_by varchar(128) not null default 'system',
    updated_on timestamp not null default now()   

);