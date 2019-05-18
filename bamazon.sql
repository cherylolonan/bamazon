DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(100) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Automatic Dog Ball Launcher", "Pet Supplies", 154.99, 48);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Thor: Ragnarok Blu-ray", "Movies and TV", 14.99, 23);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Corgi-Themed Plush Blanket", "Home and Kitchen", 29.99, 17);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Waterproof Mascara", "Beauty", 6.99, 48);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Android Charger Cable 6ft", "Electronics", 9.99, 67);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Messenger Bag", "Luggage", 27.99, 22);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Succulent Plants", "Garden", 16.95, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Women's Ballet Flat", "Shoes", 29.95, 34);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Desk Accessories", "Office Supplies", 19.99, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Maxi Dress", "Clothing", 20.99, 15);