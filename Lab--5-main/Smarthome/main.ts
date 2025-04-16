const readlineSync = require('readline-sync');
import { SmartHome as LightNS } from "./lighting";
import { SmartHome as ClimateNS } from "./climateControl";
import { SmartHome as SecurityNS } from "./security";

let choice: number;

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
      const onLight = readlineSync.question("Enter light name to turn ON: ");
      LightNS.Lighting.turnOn(onLight);
      break;

    case 2:
      const offLight = readlineSync.question("Enter light name to turn OFF: ");
      LightNS.Lighting.turnOff(offLight);
      break;

    case 3:
      const temp = parseInt(readlineSync.question("Enter temperature: "));
      ClimateNS.ClimateControl.setTemperature(temp);
      break;

    case 4:
      SecurityNS.Security.enableAlarm();
      break;

    case 5:
      SecurityNS.Security.disableAlarm();
      break;

    case 6:
      LightNS.Lighting.showLights();
      break;

    case 7:
      ClimateNS.ClimateControl.showTemperature();
      break;

    case 8:
      SecurityNS.Security.showAlarmStatus();
      break;

    case 9:
      console.log("Exiting Smart Home System...");
      break;

    default:
      console.log("Invalid choice. Please try again.");
  }
} while (choice !== 9);
