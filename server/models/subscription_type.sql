CREATE TABLE `subscription_type`(
 `sub_id`   INT NOT NULL AUTO_INCREMENT ,
 `sub_name` varchar(45) NOT NULL,
 `duration` numeric NOT NULL ,
PRIMARY KEY (`sub_id`)
)
ENGINE = InnoDB;