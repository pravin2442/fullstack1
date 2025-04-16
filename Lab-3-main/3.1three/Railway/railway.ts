import * as readline from "readline";

class RailwayReservation {
    private waitlist: string[] = [];
    private assignedPassengers: string[] = [];

    addToWaitlist(passengerName: string): void {
        this.waitlist.push(passengerName);
        console.log(`${passengerName} has been added to the waitlist.`);
    }

    assignSeat(): void {
        if (this.waitlist.length === 0) {
            console.log("No passengers on the waitlist.");
            return;
        }
        const assignedPassenger = this.waitlist.pop()!;
        this.assignedPassengers.push(assignedPassenger);
        console.log(`Seat assigned to ${assignedPassenger}.`);
    }

    showWaitlist(): void {
        if (this.waitlist.length === 0) {
            console.log("Waitlist is empty.");
        } else {
            console.log("Current waitlist:");
            for (let i = this.waitlist.length - 1; i >= 0; i--) {
                console.log(`${this.waitlist.length - i}. ${this.waitlist[i]}`);
            }
        }
    }

    showAssignedPassengers(): void {
        if (this.assignedPassengers.length === 0) {
            console.log("No seats have been assigned yet.");
        } else {
            console.log("List of seat-assigned passengers:");
            this.assignedPassengers.forEach((name, index) => {
                console.log(`${index + 1}. ${name}`);
            });
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reservationSystem = new RailwayReservation();

function showMenu() {
    console.log("\n--- Railway Reservation Menu ---");
    console.log("1. Add Passenger to Waitlist");
    console.log("2. Assign Seat");
    console.log("3. Show Waitlist");
    console.log("4. Show Assigned Passengers");
    console.log("5. Exit");

    rl.question("Choose an option: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                rl.question("Enter passenger name: ", (name) => {
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
