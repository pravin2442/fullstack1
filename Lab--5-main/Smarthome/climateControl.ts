export namespace SmartHome {
  export namespace ClimateControl {
    let temperature = 24;

    export function setTemperature(temp: number): void {
      temperature = temp;
      console.log(`Temperature set to ${temperature}°C.`);
    }

    export function showTemperature(): void {
      console.log(`Current Temperature: ${temperature}°C`);
    }
  }
}
