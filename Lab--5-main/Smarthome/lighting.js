"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHome = void 0;
var SmartHome;
(function (SmartHome) {
    var Lighting;
    (function (Lighting) {
        var lightStatus = [];
        function turnOn(lightId) {
            lightStatus.push(lightId);
            console.log("".concat(lightId, " light is ON."));
        }
        Lighting.turnOn = turnOn;
        function turnOff(lightId) {
            var index = lightStatus.indexOf(lightId);
            if (index !== -1) {
                lightStatus.splice(index, 1);
                console.log("".concat(lightId, " light is OFF."));
            }
            else {
                console.log("".concat(lightId, " light was not ON."));
            }
        }
        Lighting.turnOff = turnOff;
        function showLights() {
            console.log("Lights currently ON:", lightStatus.length ? lightStatus.join(", ") : "None");
        }
        Lighting.showLights = showLights;
    })(Lighting = SmartHome.Lighting || (SmartHome.Lighting = {}));
})(SmartHome || (exports.SmartHome = SmartHome = {}));
