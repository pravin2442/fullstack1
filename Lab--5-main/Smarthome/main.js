"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
var lighting_1 = require("./lighting");
var climateControl_1 = require("./climateControl");
var security_1 = require("./security");
var choice;
do {
    console.log("\nSmart Home Control System");
    console.log("1. Turn ON Light");
    console.log("2. Turn OFF Light");
    console.log("3. Set Temperature");
    console.log("4. Enable Alarm");
    console.log("5. Disable Alarm");
    console.log("6. Show Light Status");
    console.log("7. Show Temperature");
    console.log("8. Show Alarm Status");
    console.log("9. Exit");
    choice = parseInt(readlineSync.question("Enter your choice: "));
    switch (choice) {
        case 1:
            var onLight = readlineSync.question("Enter light name to turn ON: ");
            lighting_1.SmartHome.Lighting.turnOn(onLight);
            break;
        case 2:
            var offLight = readlineSync.question("Enter light name to turn OFF: ");
            lighting_1.SmartHome.Lighting.turnOff(offLight);
            break;
        case 3:
            var temp = parseInt(readlineSync.question("Enter temperature: "));
            climateControl_1.SmartHome.ClimateControl.setTemperature(temp);
            break;
        case 4:
            security_1.SmartHome.Security.enableAlarm();
            break;
        case 5:
            security_1.SmartHome.Security.disableAlarm();
            break;
        case 6:
            lighting_1.SmartHome.Lighting.showLights();
            break;
        case 7:
            climateControl_1.SmartHome.ClimateControl.showTemperature();
            break;
        case 8:
            security_1.SmartHome.Security.showAlarmStatus();
            break;
        case 9:
            console.log("Exiting Smart Home System...");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
} while (choice !== 9);
