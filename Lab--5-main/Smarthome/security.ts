export namespace SmartHome {
  export namespace Security {
    let alarmEnabled = false;

    export function enableAlarm(): void {
      alarmEnabled = true;
      console.log("Security alarm ENABLED.");
    }

    export function disableAlarm(): void {
      alarmEnabled = false;
      console.log("Security alarm DISABLED.");
    }

    export function showAlarmStatus(): void {
      console.log(`Alarm Status: ${alarmEnabled ? "ENABLED" : "DISABLED"}`);
    }
  }
}
