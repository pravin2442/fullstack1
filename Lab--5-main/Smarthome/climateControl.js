"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHome = void 0;
var SmartHome;
(function (SmartHome) {
    var ClimateControl;
    (function (ClimateControl) {
        var temperature = 24;
        function setTemperature(temp) {
            temperature = temp;
            console.log("Temperature set to ".concat(temperature, "\u00B0C."));
        }
        ClimateControl.setTemperature = setTemperature;
        function showTemperature() {
            console.log("Current Temperature: ".concat(temperature, "\u00B0C"));
        }
        ClimateControl.showTemperature = showTemperature;
    })(ClimateControl = SmartHome.ClimateControl || (SmartHome.ClimateControl = {}));
})(SmartHome || (exports.SmartHome = SmartHome = {}));
