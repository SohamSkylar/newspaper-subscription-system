CREATE TABLE IF NOT EXISTS `admin`(
 `admin_id` INT NOT NULL AUTO_INCREMENT ,
 `name`     varchar(45) NOT NULL ,
 `username` varchar(45) NOT NULL ,
 `password` varchar(200) NOT NULL ,
PRIMARY KEY (`admin_id`)
)
ENGINE = InnoDB;