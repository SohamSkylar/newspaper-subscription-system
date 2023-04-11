CREATE TABLE IF NOT EXISTS `company`(
 `company_id` INT NOT NULL AUTO_INCREMENT ,
 `name`       varchar(45) NOT NULL ,
 `img1`       varchar(300) NOT NULL ,
 `img2`       varchar(300),
PRIMARY KEY (`company_id`)
)
ENGINE = InnoDB;