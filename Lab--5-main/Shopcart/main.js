"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var product_1 = require("./product");
var customer_1 = require("./customer");
var cart_1 = require("./cart");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var productList = [];
var customer = null;
var cart = null;
function menu() {
    console.log("\nChoose an option:\n1. Enter Product Details\n2. Enter Customer Details\n3. Add Product to Cart\n4. Checkout\n5. Exit\n");
    rl.question("Enter your choice: ", function (choice) {
        switch (choice.trim()) {
            case "1":
                enterProductDetails();
                break;
            case "2":
                enterCustomerDetails();
                break;
            case "3":
                if (!customer) {
                    console.log("Please enter customer details first.");
                    return menu();
                }
                if (productList.length === 0) {
                    console.log("No products available. Add products first.");
                    return menu();
                }
                addProductToCart();
                break;
            case "4":
                if (cart) {
                    cart.checkout();
                }
                else {
                    console.log("Cart is empty.");
                }
                return menu();
            case "5":
                rl.close();
                break;
            default:
                console.log("Invalid choice.");
                return menu();
        }
    });
}
function enterProductDetails() {
    rl.question("Enter Product ID: ", function (idStr) {
        var id = parseInt(idStr);
        rl.question("Enter Product Name: ", function (name) {
            rl.question("Enter Product Price: ", function (priceStr) {
                var price = parseFloat(priceStr);
                var product = new product_1.ECommerceSystem.Product(id, name, price);
                productList.push(product);
                console.log("Product added successfully.");
                menu();
            });
        });
    });
}
function enterCustomerDetails() {
    rl.question("Enter Customer ID: ", function (idStr) {
        var id = parseInt(idStr);
        rl.question("Enter Customer Name: ", function (name) {
            rl.question("Enter Customer Email: ", function (email) {
                customer = new customer_1.ECommerceSystem.Customer(id, name, email);
                cart = new cart_1.ECommerceSystem.ShoppingCart(customer);
                console.log("Customer added successfully.");
                menu();
            });
        });
    });
}
function addProductToCart() {
    console.log("Available Products:");
    productList.forEach(function (p, index) {
        console.log("".concat(index + 1, ". ").concat(p.name, " - \u20B9").concat(p.price));
    });
    rl.question("Enter product number to add to cart: ", function (indexStr) {
        var index = parseInt(indexStr) - 1;
        if (index < 0 || index >= productList.length) {
            console.log("Invalid product selection.");
            return menu();
        }
        rl.question("Enter quantity: ", function (qtyStr) {
            var quantity = parseInt(qtyStr);
            cart.addProduct(productList[index], quantity);
            console.log("Product added to cart.");
            menu();
        });
    });
}
menu();
