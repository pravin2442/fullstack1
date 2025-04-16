"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var RailwayReservation = /** @class */ (function () {
    function RailwayReservation() {
        this.waitlist = [];
        this.assignedPassengers = [];
    }
    RailwayReservation.prototype.addToWaitlist = function (passengerName) {
        this.waitlist.push(passengerName);
        console.log("".concat(passengerName, " has been added to the waitlist."));
    };
    RailwayReservation.prototype.assignSeat = function () {
        if (this.waitlist.length === 0) {
            console.log("No passengers on the waitlist.");
            return;
        }
        var assignedPassenger = this.waitlist.pop();
        this.assignedPassengers.push(assignedPassenger);
        console.log("Seat assigned to ".concat(assignedPassenger, "."));
    };
    RailwayReservation.prototype.showWaitlist = function () {
        if (this.waitlist.length === 0) {
            console.log("Waitlist is empty.");
        }
        else {
            console.log("Current waitlist:");
            for (var i = this.waitlist.length - 1; i >= 0; i--) {
                console.log("".concat(this.waitlist.length - i, ". ").concat(this.waitlist[i]));
            }
        }
    };
    RailwayReservation.prototype.showAssignedPassengers = function () {
        if (this.assignedPassengers.length === 0) {
            console.log("No seats have been assigned yet.");
        }
        else {
            console.log("List of seat-assigned passengers:");
            this.assignedPassengers.forEach(function (name, index) {
                console.log("".concat(index + 1, ". ").concat(name));
            });
        }
    };
    return RailwayReservation;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var reservationSystem = new RailwayReservation();
function showMenu() {
    console.log("\n--- Railway Reservation Menu ---");
    console.log("1. Add Passenger to Waitlist");
    console.log("2. Assign Seat");
    console.log("3. Show Waitlist");
    console.log("4. Show Assigned Passengers");
    console.log("5. Exit");
    rl.question("Choose an option: ", function (choice) {
        switch (choice.trim()) {
            case "1":
                rl.question("Enter passenger name: ", function (name) {
                    reservationSystem.addToWaitlist(name.trim());
                    showMenu();
                });
                break;
            case "2":
                reservationSystem.assignSeat();
                showMenu();
                break;
            case "3":
                reservationSystem.showWaitlist();
                showMenu();
                break;
            case "4":
                reservationSystem.showAssignedPassengers();
                showMenu();
                break;
            case "5":
                console.log("Exiting system...");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Try again.");
                showMenu();
                break;
        }
    });
}
showMenu();
