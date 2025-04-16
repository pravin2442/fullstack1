export namespace SmartHome {
  export namespace Lighting {
    const lightStatus: string[] = [];

    export function turnOn(lightId: string): void {
      lightStatus.push(lightId);
      console.log(`${lightId} light is ON.`);
    }

    export function turnOff(lightId: string): void {
      const index = lightStatus.indexOf(lightId);
      if (index !== -1) {
        lightStatus.splice(index, 1);
        console.log(`${lightId} light is OFF.`);
      } else {
        console.log(`${lightId} light was not ON.`);
      }
    }

    export function showLights(): void {
      console.log("Lights currently ON:", lightStatus.length ? lightStatus.join(", ") : "None");
    }
  }
}
