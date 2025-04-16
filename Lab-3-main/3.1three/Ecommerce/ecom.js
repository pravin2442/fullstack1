"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var OrderNode = /** @class */ (function () {
    function OrderNode(orderID, customerName) {
        this.next = null;
        this.orderID = orderID;
        this.customerName = customerName;
    }
    return OrderNode;
}());
var OrderQueue = /** @class */ (function () {
    function OrderQueue() {
        this.head = null;
        this.tail = null;
    }
    OrderQueue.prototype.addOrder = function (orderID, customerName) {
        var newOrder = new OrderNode(orderID, customerName);
        if (!this.tail) {
            this.head = this.tail = newOrder;
        }
        else {
            this.tail.next = newOrder;
            this.tail = newOrder;
        }
        console.log("Order ".concat(orderID, " added for ").concat(customerName, "."));
    };
    OrderQueue.prototype.processOrder = function () {
        if (!this.head) {
            console.log("No orders to process.");
            return;
        }
        console.log("Processing Order ".concat(this.head.orderID, " for ").concat(this.head.customerName, "."));
        this.head = this.head.next;
        if (!this.head)
            this.tail = null;
    };
    OrderQueue.prototype.showOrders = function () {
        if (!this.head) {
            console.log("No pending orders.");
            return;
        }
        var current = this.head;
        console.log("Pending Orders:");
        while (current) {
            console.log("Order ID: ".concat(current.orderID, ", Customer: ").concat(current.customerName));
            current = current.next;
        }
    };
    return OrderQueue;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var orderQueue = new OrderQueue();
function mainMenu() {
    console.log("\n--- Order Queue Menu ---");
    console.log("1. Add Order");
    console.log("2. Process Order");
    console.log("3. Show Orders");
    console.log("4. Exit");
    rl.question("Choose an option: ", function (choice) {
        switch (choice.trim()) {
            case "1":
                rl.question("Enter Order ID: ", function (id) {
                    rl.question("Enter Customer Name: ", function (name) {
                        orderQueue.addOrder(parseInt(id), name.trim());
                        mainMenu();
                    });
                });
                break;
            case "2":
                orderQueue.processOrder();
                mainMenu();
                break;
            case "3":
                orderQueue.showOrders();
                mainMenu();
                break;
            case "4":
                console.log("Exiting...");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Try again.");
                mainMenu();
                break;
        }
    });
}
mainMenu();
