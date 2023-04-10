CREATE TABLE IF NOT EXISTS `news_subbed`(
 `cust_id`    INT NOT NULL ,
 `sub_id`     INT NOT NULL ,
 `created_at` datetime NOT NULL ,
PRIMARY KEY (`cust_id`, `sub_id`),
CONSTRAINT `FK_news_subbed_1` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `FK_news_subbed_2` FOREIGN KEY (`sub_id`) REFERENCES `subscription_type` (`sub_id`) ON DELETE CASCADE ON UPDATE CASCADE
)
ENGINE = InnoDB;