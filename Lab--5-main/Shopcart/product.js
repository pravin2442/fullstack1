"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceSystem = void 0;
// product.ts
var ECommerceSystem;
(function (ECommerceSystem) {
    var Product = /** @class */ (function () {
        function Product(id, name, price) {
            this.id = id;
            this.name = name;
            this.price = price;
        }
        Product.prototype.display = function () {
            console.log("Product ID: ".concat(this.id, ", Name: ").concat(this.name, ", Price: \u20B9").concat(this.price));
        };
        return Product;
    }());
    ECommerceSystem.Product = Product;
})(ECommerceSystem || (exports.ECommerceSystem = ECommerceSystem = {}));
