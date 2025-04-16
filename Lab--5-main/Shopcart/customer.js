"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceSystem = void 0;
// customer.ts
var ECommerceSystem;
(function (ECommerceSystem) {
    var Customer = /** @class */ (function () {
        function Customer(id, name, email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }
        Customer.prototype.display = function () {
            console.log("Customer ID: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email));
        };
        return Customer;
    }());
    ECommerceSystem.Customer = Customer;
})(ECommerceSystem || (exports.ECommerceSystem = ECommerceSystem = {}));
