import * as readline from "readline";

class Employee {
    name: string;
    id: number;
    salary: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.salary = 0;
    }

    displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Salary: ₹${this.salary.toFixed(2)}`);
    }
}

class FullTimeEmployee extends Employee {
    monthlySalary: number;

    constructor(name: string, id: number, monthlySalary: number) {
        super(name, id);
        this.monthlySalary = monthlySalary;
        this.salary = monthlySalary;
    }

    displayDetails(): void {
        console.log("Full-Time Employee:");
        super.displayDetails();
    }
}

class PartTimeEmployee extends Employee {
    hoursWorked: number;
    hourlyRate: number;

    constructor(name: string, id: number, hoursWorked: number, hourlyRate: number) {
        super(name, id);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
        this.salary = this.calculateSalary();
    }

    private calculateSalary(): number {
        return this.hoursWorked * this.hourlyRate;
    }

    displayDetails(): void {
        console.log("Part-Time Employee:");
        super.displayDetails();
        console.log(`Hours Worked: ${this.hoursWorked}`);
        console.log(`Hourly Rate: ₹${this.hourlyRate}`);
    }
}


const fullTimeEmployees: FullTimeEmployee[] = [];
const partTimeEmployees: PartTimeEmployee[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log(`\n--- Employee Management Menu ---`);
    console.log("1. Add Full-Time Employee");
    console.log("2. Add Part-Time Employee");
    console.log("3. Show Full-Time Employees");
    console.log("4. Show Part-Time Employees");
    console.log("5. Exit");

    rl.question("Choose an option: ", (choice) => {
        switch (choice.trim()) {
            case "1":
                addFullTimeEmployee();
                break;
            case "2":
                addPartTimeEmployee();
                break;
            case "3":
                showFullTimeEmployees();
                break;
            case "4":
                showPartTimeEmployees();
                break;
            case "5":
                console.log("Exiting program...");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Try again.");
                menu();
                break;
        }
    });
}

function addFullTimeEmployee() {
    rl.question("Enter Name: ", (name) => {
        rl.question("Enter ID: ", (id) => {
            rl.question("Enter Monthly Salary: ", (salary) => {
                const emp = new FullTimeEmployee(name.trim(), parseInt(id), parseFloat(salary));
                fullTimeEmployees.push(emp);
                console.log("Full-time employee added.");
                menu();
            });
        });
    });
}

function addPartTimeEmployee() {
    rl.question("Enter Name: ", (name) => {
        rl.question("Enter ID: ", (id) => {
            rl.question("Enter Hours Worked: ", (hours) => {
                rl.question("Enter Hourly Rate: ", (rate) => {
                    const emp = new PartTimeEmployee(name.trim(), parseInt(id), parseFloat(hours), parseFloat(rate));
                    partTimeEmployees.push(emp);
                    console.log("Part-time employee added.");
                    menu();
                });
            });
        });
    });
}

function showFullTimeEmployees() {
    if (fullTimeEmployees.length === 0) {
        console.log("No full-time employees available.");
    } else {
        console.log("\n--- Full-Time Employees ---");
        fullTimeEmployees.forEach((emp, index) => {
            console.log(`\nEmployee #${index + 1}`);
            emp.displayDetails();
        });
    }
    menu();
}

function showPartTimeEmployees() {
    if (partTimeEmployees.length === 0) {
        console.log("No part-time employees available.");
    } else {
        console.log("\n--- Part-Time Employees ---");
        partTimeEmployees.forEach((emp, index) => {
            console.log(`\nEmployee #${index + 1}`);
            emp.displayDetails();
        });
    }
    menu();
}

menu();
