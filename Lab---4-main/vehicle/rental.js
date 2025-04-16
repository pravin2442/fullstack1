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
// Base class
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, model, ratePerDay) {
        this.brand = brand;
        this.model = model;
        this.ratePerDay = ratePerDay;
    }
    Vehicle.prototype.display = function () {
        console.log("Brand: ".concat(this.brand));
        console.log("Model: ".concat(this.model));
        console.log("Rate per Day: \u20B9".concat(this.ratePerDay));
    };
    return Vehicle;
}());
// Car subclass
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, model, ratePerDay, seatCount) {
        var _this = _super.call(this, brand, model, ratePerDay) || this;
        _this.seatCount = seatCount;
        return _this;
    }
    Car.prototype.calculateCost = function (days) {
        return days * this.ratePerDay;
    };
    Car.prototype.display = function () {
        console.log("Car Details:");
        _super.prototype.display.call(this);
        console.log("Seats: ".concat(this.seatCount));
    };
    return Car;
}(Vehicle));
// Bike subclass
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, model, ratePerDay, engineCC) {
        var _this = _super.call(this, brand, model, ratePerDay) || this;
        _this.engineCC = engineCC;
        return _this;
    }
    Bike.prototype.calculateCost = function (days) {
        return days * this.ratePerDay;
    };
    Bike.prototype.display = function () {
        console.log("Bike Details:");
        _super.prototype.display.call(this);
        console.log("Engine: ".concat(this.engineCC, "cc"));
    };
    return Bike;
}(Vehicle));
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var rentedCars = [];
var rentedBikes = [];
function promptMenu() {
    console.log("\nVehicle Rental System");
    console.log("1. Rent a Car");
    console.log("2. Rent a Bike");
    console.log("3. View Rented Cars");
    console.log("4. View Rented Bikes");
    console.log("5. Delete a Rented Car");
    console.log("6. Delete a Rented Bike");
    console.log("7. Exit");
    rl.question("Select an option: ", function (choice) {
        switch (choice) {
            case "1":
                rentCar();
                break;
            case "2":
                rentBike();
                break;
            case "3":
                viewRentedCars();
                break;
            case "4":
                viewRentedBikes();
                break;
            case "5":
                deleteRentedCar();
                break;
            case "6":
                deleteRentedBike();
                break;
            case "7":
                rl.close();
                break;
            default:
                console.log("Invalid option. Try again.");
                promptMenu();
        }
    });
}
function rentCar() {
    rl.question("Enter Car Brand: ", function (brand) {
        rl.question("Enter Car Model: ", function (model) {
            rl.question("Enter Rate Per Day: ", function (rate) {
                rl.question("Enter Seat Count: ", function (seats) {
                    rl.question("Enter Number of Rental Days: ", function (days) {
                        var car = new Car(brand, model, parseFloat(rate), parseInt(seats));
                        rentedCars.push(car);
                        console.log("Car rental added for ".concat(days, " days. Total cost: \u20B9").concat(car.calculateCost(parseInt(days))));
                        promptMenu();
                    });
                });
            });
        });
    });
}
function rentBike() {
    rl.question("Enter Bike Brand: ", function (brand) {
        rl.question("Enter Bike Model: ", function (model) {
            rl.question("Enter Rate Per Day: ", function (rate) {
                rl.question("Enter Engine CC: ", function (cc) {
                    rl.question("Enter Number of Rental Days: ", function (days) {
                        var bike = new Bike(brand, model, parseFloat(rate), parseInt(cc));
                        rentedBikes.push(bike);
                        console.log("Bike rental added for ".concat(days, " days. Total cost: \u20B9").concat(bike.calculateCost(parseInt(days))));
                        promptMenu();
                    });
                });
            });
        });
    });
}
function viewRentedCars() {
    if (rentedCars.length === 0) {
        console.log("No cars rented yet.");
    }
    else {
        console.log("\nRented Cars:");
        rentedCars.forEach(function (car, index) {
            console.log("\nCar ".concat(index + 1, ":"));
            car.display();
        });
    }
    promptMenu();
}
function viewRentedBikes() {
    if (rentedBikes.length === 0) {
        console.log("No bikes rented yet.");
    }
    else {
        console.log("\nRented Bikes:");
        rentedBikes.forEach(function (bike, index) {
            console.log("\nBike ".concat(index + 1, ":"));
            bike.display();
        });
    }
    promptMenu();
}
function deleteRentedCar() {
    if (rentedCars.length === 0) {
        console.log("No cars to delete.");
        promptMenu();
        return;
    }
    console.log("\nAvailable Rented Cars:");
    rentedCars.forEach(function (car, index) {
        console.log("Car ".concat(index + 1, ":"));
        car.display();
    });
    rl.question("Enter the number of the car you want to delete: ", function (carIndex) {
        var index = parseInt(carIndex) - 1;
        if (index >= 0 && index < rentedCars.length) {
            rentedCars.splice(index, 1);
            console.log("Car has been deleted.");
        }
        else {
            console.log("Invalid car number.");
        }
        promptMenu();
    });
}
function deleteRentedBike() {
    if (rentedBikes.length === 0) {
        console.log("No bikes to delete.");
        promptMenu();
        return;
    }
    console.log("\nAvailable Rented Bikes:");
    rentedBikes.forEach(function (bike, index) {
        console.log("Bike ".concat(index + 1, ":"));
        bike.display();
    });
    rl.question("Enter the number of the bike you want to delete: ", function (bikeIndex) {
        var index = parseInt(bikeIndex) - 1;
        if (index >= 0 && index < rentedBikes.length) {
            rentedBikes.splice(index, 1);
            console.log("Bike has been deleted.");
        }
        else {
            console.log("Invalid bike number.");
        }
        promptMenu();
    });
}
promptMenu();
