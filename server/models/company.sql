CREATE TABLE IF NOT EXISTS `company`(
 `company_id` varchar(45) NOT NULL,
 `name`       varchar(45) NOT NULL,
 `email`      varchar(45) NOT NULL,
 `img1`       varchar(300) NOT NULL ,
 `img2`       varchar(300),
PRIMARY KEY (`company_id`)
)
ENGINE = InnoDB;