CREATE TABLE `subscription_type`(
 `sub_id`   INT NOT NULL AUTO_INCREMENT ,
 `paper_id` INT NOT NULL ,
 `duration` numeric NOT NULL ,
 `price`    numeric NOT NULL ,
PRIMARY KEY (`sub_id`),
CONSTRAINT `FK_subscription_type` FOREIGN KEY (`paper_id`) REFERENCES `newspaper` (`paper_id`) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;