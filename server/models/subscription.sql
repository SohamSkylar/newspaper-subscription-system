CREATE TABLE `subscription`(
 `sub_id`   INT NOT NULL ,
 `paper_id` INT NOT NULL ,
 `price`    numeric NOT NULL ,
PRIMARY KEY (`sub_id`,`paper_id`),
CONSTRAINT `FK_subscription_type_paper_id` FOREIGN KEY (`paper_id`) REFERENCES `newspaper` (`paper_id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `FK_subscription_type_sub_id` FOREIGN KEY (`sub_id`) REFERENCES `subscription_type` (`sub_id`) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;