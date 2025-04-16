// Base class
class Vehicle {
  brand: string;
  model: string;
  ratePerDay: number;

  constructor(brand: string, model: string, ratePerDay: number) {
    this.brand = brand;
    this.model = model;
    this.ratePerDay = ratePerDay;
  }

  display(): void {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
    console.log(`Rate per Day: ₹${this.ratePerDay}`);
  }
}

class Car extends Vehicle {
  seatCount: number;

  constructor(brand: string, model: string, ratePerDay: number, seatCount: number) {
    super(brand, model, ratePerDay);
    this.seatCount = seatCount;
  }

  calculateCost(days: number): number {
    return days * this.ratePerDay;
  }

  display(): void {
    console.log("Car Details:");
    super.display();
    console.log(`Seats: ${this.seatCount}`);
  }
}

class Bike extends Vehicle {
  engineCC: number;

  constructor(brand: string, model: string, ratePerDay: number, engineCC: number) {
    super(brand, model, ratePerDay);
    this.engineCC = engineCC;
  }

  calculateCost(days: number): number {
    return days * this.ratePerDay;
  }

  display(): void {
    console.log("Bike Details:");
    super.display();
    console.log(`Engine: ${this.engineCC}cc`);
  }
}

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rentedCars: Car[] = [];
const rentedBikes: Bike[] = [];

function promptMenu(): void {
  console.log("\nVehicle Rental System");
  console.log("1. Rent a Car");
  console.log("2. Rent a Bike");
  console.log("3. View Rented Cars");
  console.log("4. View Rented Bikes");
  console.log("5. Delete a Rented Car");
  console.log("6. Delete a Rented Bike");
  console.log("7. Exit");

  rl.question("Select an option: ", (choice) => {
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

function rentCar(): void {
  rl.question("Enter Car Brand: ", (brand) => {
    rl.question("Enter Car Model: ", (model) => {
      rl.question("Enter Rate Per Day: ", (rate) => {
        rl.question("Enter Seat Count: ", (seats) => {
          rl.question("Enter Number of Rental Days: ", (days) => {
            const car = new Car(brand, model, parseFloat(rate), parseInt(seats));
            rentedCars.push(car);
            console.log(`Car rental added for ${days} days. Total cost: ₹${car.calculateCost(parseInt(days))}`);
            promptMenu();
          });
        });
      });
    });
  });
}

function rentBike(): void {
  rl.question("Enter Bike Brand: ", (brand) => {
    rl.question("Enter Bike Model: ", (model) => {
      rl.question("Enter Rate Per Day: ", (rate) => {
        rl.question("Enter Engine CC: ", (cc) => {
          rl.question("Enter Number of Rental Days: ", (days) => {
            const bike = new Bike(brand, model, parseFloat(rate), parseInt(cc));
            rentedBikes.push(bike);
            console.log(`Bike rental added for ${days} days. Total cost: ₹${bike.calculateCost(parseInt(days))}`);
            promptMenu();
          });
        });
      });
    });
  });
}

function viewRentedCars(): void {
  if (rentedCars.length === 0) {
    console.log("No cars rented yet.");
  } else {
    console.log("\nRented Cars:");
    rentedCars.forEach((car, index) => {
      console.log(`\nCar ${index + 1}:`);
      car.display();
    });
  }
  promptMenu();
}

function viewRentedBikes(): void {
  if (rentedBikes.length === 0) {
    console.log("No bikes rented yet.");
  } else {
    console.log("\nRented Bikes:");
    rentedBikes.forEach((bike, index) => {
      console.log(`\nBike ${index + 1}:`);
      bike.display();
    });
  }
  promptMenu();
}

function deleteRentedCar(): void {
  if (rentedCars.length === 0) {
    console.log("No cars to delete.");
    promptMenu();
    return;
  }
  console.log("\nAvailable Rented Cars:");
  rentedCars.forEach((car, index) => {
    console.log(`Car ${index + 1}:`);
    car.display();
  });
  rl.question("Enter the number of the car you want to delete: ", (carIndex) => {
    const index = parseInt(carIndex) - 1;
    if (index >= 0 && index < rentedCars.length) {
      rentedCars.splice(index, 1);
      console.log("Car has been deleted.");
    } else {
      console.log("Invalid car number.");
    }
    promptMenu();
  });
}

function deleteRentedBike(): void {
  if (rentedBikes.length === 0) {
    console.log("No bikes to delete.");
    promptMenu();
    return;
  }
  console.log("\nAvailable Rented Bikes:");
  rentedBikes.forEach((bike, index) => {
    console.log(`Bike ${index + 1}:`);
    bike.display();
  });
  rl.question("Enter the number of the bike you want to delete: ", (bikeIndex) => {
    const index = parseInt(bikeIndex) - 1;
    if (index >= 0 && index < rentedBikes.length) {
      rentedBikes.splice(index, 1);
      console.log("Bike has been deleted.");
    } else {
      console.log("Invalid bike number.");
    }
    promptMenu();
  });
}

promptMenu();
