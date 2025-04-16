import * as readline from "readline";

class OrderNode {
    orderID: number;
    customerName: string;
    next: OrderNode | null = null;

    constructor(orderID: number, customerName: string) {
        this.orderID = orderID;
        this.customerName = customerName;
    }
}

class OrderQueue {
    private head: OrderNode | null = null;
    private tail: OrderNode | null = null;

    addOrder(orderID: number, customerName: string): void {
        const newOrder = new OrderNode(orderID, customerName);
        if (!this.tail) {
            this.head = this.tail = newOrder;
        } else {
            this.tail.next = newOrder;
            this.tail = newOrder;
        }
        console.log(`Order ${orderID} added for ${customerName}.`);
    }

    processOrder(): void {
        if (!this.head) {
            console.log("No orders to process.");
            return;
        }
        console.log(`Processing Order ${this.head.orderID} for ${this.head.customerName}.`);
        this.head = this.head.next;
        if (!this.head) this.tail = null;
    }

    showOrders(): void {
        if (!this.head) {
            console.log("No pending orders.");
            return;
        }
        let current: OrderNode | null = this.head;
        console.log("Pending Orders:");
        while (current) {
            console.log(`Order ID: ${current.orderID}, Customer: ${current.customerName}`);
            current = current.next;
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const orderQueue = new OrderQueue();

function mainMenu() {
    console.log("\n--- Order Queue Menu ---");
    console.log("1. Add Order");
    console.log("2. Process Order");
    console.log("3. Show Orders");
    console.log("4. Exit");

    rl.question("Choose an option: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                rl.question("Enter Order ID: ", (id) => {
                    rl.question("Enter Customer Name: ", (name) => {
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
