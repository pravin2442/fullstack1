"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var BookQueue = /** @class */ (function () {
    function BookQueue() {
        this.queue = [];
    }
    BookQueue.prototype.enqueue = function (student) {
        this.queue.push(student);
    };
    BookQueue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    BookQueue.prototype.display = function () {
        return this.queue.length > 0 ? this.queue.join(" ➡️ ") : "No pending requests.";
    };
    return BookQueue;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var bookQueue = new BookQueue();
function showMenu() {
    console.log("\n📚 Library Book Queue System");
    console.log("1. Request Book (Enqueue)");
    console.log("2. Assign Book (Dequeue)");
    console.log("3. Show Queue");
    console.log("4. Exit");
    rl.question("Choose an option (1-4): ", handleInput);
}
function handleInput(choice) {
    switch (choice.trim()) {
        case "1":
            rl.question("Enter student name: ", function (name) {
                if (name.trim()) {
                    bookQueue.enqueue(name.trim());
                    console.log("\u2705 ".concat(name, " added to the queue."));
                }
                showMenu();
            });
            break;
        case "2":
            var student = bookQueue.dequeue();
            console.log(student ? "\uD83D\uDCD8 Book assigned to: ".concat(student) : "❌ No students in the queue.");
            showMenu();
            break;
        case "3":
            console.log("📋 Current Queue:", bookQueue.display());
            showMenu();
            break;
        case "4":
            console.log("👋 Exiting. Goodbye!");
            rl.close();
            break;
        default:
            console.log("⚠️ Invalid choice. Try again.");
            showMenu();
    }
}
// Start the program
showMenu();
