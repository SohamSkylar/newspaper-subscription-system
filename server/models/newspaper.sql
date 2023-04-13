CREATE TABLE IF NOT EXISTS `newspaper`(
 `paper_id`   INT NOT NULL AUTO_INCREMENT ,
 `company_id` varchar(45) NOT NULL ,
 `name`       varchar(45) NOT NULL ,
 `location`   varchar(45) NOT NULL ,
PRIMARY KEY (`paper_id`),
CONSTRAINT `FK_newspaper` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;