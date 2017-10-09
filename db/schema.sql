CREATE DATABASE adventure_awaits_db;
USE adventure_awaits_db;

CREATE TABLE story_table (
  story_id INT NOT NULL AUTO_INCREMENT,
  story_title VARCHAR(45) NOT NULL,
  story_description VARCHAR(140) NOT NULL,
  story_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  story_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (story_id));
  
CREATE TABLE page_tables (
  page_id INT NOT NULL AUTO_INCREMENT,
/*  page_title VARCHAR(45) NOT NULL,*/
  page_text VARCHAR(4000) NOT NULL,
  page_choice1 INT NOT NULL DEFAULT 0,
  page_choice_text1 VARCHAR(45) NOT NULL,
  page_choice2 INT NULL DEFAULT 0,
  page_choice_text2 VARCHAR(45) NULL,
  page_choice3 INT NULL DEFAULT 0,
  page_choice_text3 VARCHAR(45) NULL,
  page_status TINYINT NOT NULL DEFAULT 1,
  page_parent_id INT NULL,
  id_story INT NOT NULL,
  id_user INT NULL DEFAULT 0,
  PRIMARY KEY (page_id));
  
CREATE TABLE user_tables (
  user_id INT NOT NULL AUTO_INCREMENT,
  user_password VARCHAR(45) NOT NULL,
  user_email VARCHAR(45) NOT NULL,
  user_email_confirmed TINYINT NOT NULL DEFAULT 0,
  user_roll VARCHAR(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (user_id));