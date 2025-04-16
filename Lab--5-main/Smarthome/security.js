"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHome = void 0;
var SmartHome;
(function (SmartHome) {
    var Security;
    (function (Security) {
        var alarmEnabled = false;
        function enableAlarm() {
            alarmEnabled = true;
            console.log("Security alarm ENABLED.");
        }
        Security.enableAlarm = enableAlarm;
        function disableAlarm() {
            alarmEnabled = false;
            console.log("Security alarm DISABLED.");
        }
        Security.disableAlarm = disableAlarm;
        function showAlarmStatus() {
            console.log("Alarm Status: ".concat(alarmEnabled ? "ENABLED" : "DISABLED"));
        }
        Security.showAlarmStatus = showAlarmStatus;
    })(Security = SmartHome.Security || (SmartHome.Security = {}));
})(SmartHome || (exports.SmartHome = SmartHome = {}));
