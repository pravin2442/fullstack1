"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
        this.salary = 0;
    }
    Employee.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("ID: ".concat(this.id));
        console.log("Salary: \u20B9".concat(this.salary.toFixed(2)));
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, id, monthlySalary) {
        var _this = _super.call(this, name, id) || this;
        _this.monthlySalary = monthlySalary;
        _this.salary = monthlySalary;
        return _this;
    }
    FullTimeEmployee.prototype.displayDetails = function () {
        console.log("Full-Time Employee:");
        _super.prototype.displayDetails.call(this);
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(name, id, hoursWorked, hourlyRate) {
        var _this = _super.call(this, name, id) || this;
        _this.hoursWorked = hoursWorked;
        _this.hourlyRate = hourlyRate;
        _this.salary = _this.calculateSalary();
        return _this;
    }
    PartTimeEmployee.prototype.calculateSalary = function () {
        return this.hoursWorked * this.hourlyRate;
    };
    PartTimeEmployee.prototype.displayDetails = function () {
        console.log("Part-Time Employee:");
        _super.prototype.displayDetails.call(this);
        console.log("Hours Worked: ".concat(this.hoursWorked));
        console.log("Hourly Rate: \u20B9".concat(this.hourlyRate));
    };
    return PartTimeEmployee;
}(Employee));
// Employee Storage
var fullTimeEmployees = [];
var partTimeEmployees = [];
// Setup readline
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function menu() {
    console.log("\n--- Employee Management Menu ---");
    console.log("1. Add Full-Time Employee");
    console.log("2. Add Part-Time Employee");
    console.log("3. Show Full-Time Employees");
    console.log("4. Show Part-Time Employees");
    console.log("5. Exit");
    rl.question("Choose an option: ", function (choice) {
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
    rl.question("Enter Name: ", function (name) {
        rl.question("Enter ID: ", function (id) {
            rl.question("Enter Monthly Salary: ", function (salary) {
                var emp = new FullTimeEmployee(name.trim(), parseInt(id), parseFloat(salary));
                fullTimeEmployees.push(emp);
                console.log("Full-time employee added.");
                menu();
            });
        });
    });
}
function addPartTimeEmployee() {
    rl.question("Enter Name: ", function (name) {
        rl.question("Enter ID: ", function (id) {
            rl.question("Enter Hours Worked: ", function (hours) {
                rl.question("Enter Hourly Rate: ", function (rate) {
                    var emp = new PartTimeEmployee(name.trim(), parseInt(id), parseFloat(hours), parseFloat(rate));
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
    }
    else {
        console.log("\n--- Full-Time Employees ---");
        fullTimeEmployees.forEach(function (emp, index) {
            console.log("\nEmployee #".concat(index + 1));
            emp.displayDetails();
        });
    }
    menu();
}
function showPartTimeEmployees() {
    if (partTimeEmployees.length === 0) {
        console.log("No part-time employees available.");
    }
    else {
        console.log("\n--- Part-Time Employees ---");
        partTimeEmployees.forEach(function (emp, index) {
            console.log("\nEmployee #".concat(index + 1));
            emp.displayDetails();
        });
    }
    menu();
}
// Start the program
menu();
