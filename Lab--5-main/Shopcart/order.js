"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceSystem = void 0;
var ECommerceSystem;
(function (ECommerceSystem) {
    var Order = /** @class */ (function () {
        function Order(customer) {
            this.customer = customer;
            this.items = [];
        }
        Order.prototype.addItem = function (product, quantity) {
            this.items.push({ product: product, quantity: quantity });
        };
        Order.prototype.checkout = function () {
            var total = 0;
            console.log("Order Summary for ".concat(this.customer.name, ":"));
            this.items.forEach(function (item) {
                var itemTotal = item.product.price * item.quantity;
                total += itemTotal;
                console.log("- ".concat(item.product.name, ": \u20B9").concat(item.product.price, " x ").concat(item.quantity, " = \u20B9").concat(itemTotal));
            });
            console.log("Total: \u20B9".concat(total));
        };
        return Order;
    }());
    ECommerceSystem.Order = Order;
})(ECommerceSystem || (exports.ECommerceSystem = ECommerceSystem = {}));
