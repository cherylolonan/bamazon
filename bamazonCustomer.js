var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});



function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Enter a non-zero, whole number.';
	}
}

function promptUserToBuy() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Enter Item ID that you would like to buy.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'Enter quantity you would like to buy.',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {
		var item = input.item_id;
		var quantity = input.quantity;
		var queryString = 'SELECT * FROM products WHERE ?';

		connection.query(queryString, {item_id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('Invalid Item ID. Please choose Item ID from list.');
				displayInventory();

			} else {
				var productData = data[0];

				if (quantity <= productData.stock_quantity) {
					console.log('Your selection is in stock and we are processing your order.');

					var updateQueryString = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					connection.query(updateQueryString, function(err, data) {
						if (err) throw err;

						console.log('Your total is $' + productData.price * quantity);
						console.log('Thank you for your business. Visit us again soon!');
                        console.log('...................\n');
                        
						connection.end();
					})
				} else {
					console.log('We do not have enough stock to fill your order. Modify the quantity ordered please.');
					console.log('...................\n');

					displayInventory();
				}
			}
		})
	})
}


function displayInventory() {
	queryString = 'SELECT * FROM products';

	connection.query(queryString, function(err, data) {
		if (err) throw err;

		console.log('Current Inventory: ');
		console.log('...................\n');

		var inventory = '';
		for (var i = 0; i < data.length; i++) {
			inventory = '';
			inventory += 'Item ID: ' + data[i].item_id + '  /  ';
			inventory += 'Product Name: ' + data[i].product_name + '  /  ';
			inventory += 'Department: ' + data[i].department_name + '  /  ';
            inventory += 'Price: $' + data[i].price + '  /  ';
            inventory += 'Stock Quantity:' + data[i].stock_quantity;

			console.log(inventory);
		}

	  	console.log('...................\n');

	  	promptUserToBuy();
	})
}

function runBamazonApp() {

	displayInventory();
}

runBamazonApp();