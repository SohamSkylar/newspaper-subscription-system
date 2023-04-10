CREATE TABLE IF NOT EXISTS `customer`(
 `cust_id`  INT NOT NULL AUTO_INCREMENT ,
 `name`     varchar(45) NOT NULL ,
 `email`    varchar(45) NOT NULL ,
 `mobile`   numeric ,
 `address`  varchar(200) ,
 `password` varchar(200) NOT NULL ,
PRIMARY KEY (`cust_id`)
)
ENGINE = InnoDB;