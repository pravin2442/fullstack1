"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceSystem = void 0;
var order_1 = require("./order");
var ECommerceSystem;
(function (ECommerceSystem) {
    var ShoppingCart = /** @class */ (function () {
        function ShoppingCart(customer) {
            this.order = new order_1.ECommerceSystem.Order(customer);
        }
        ShoppingCart.prototype.addProduct = function (product, quantity) {
            this.order.addItem(product, quantity);
        };
        ShoppingCart.prototype.checkout = function () {
            this.order.checkout();
        };
        return ShoppingCart;
    }());
    ECommerceSystem.ShoppingCart = ShoppingCart;
})(ECommerceSystem || (exports.ECommerceSystem = ECommerceSystem = {}));
