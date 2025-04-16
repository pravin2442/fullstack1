// order.ts
import { ECommerceSystem as ProdNS } from './product';
import { ECommerceSystem as CustNS } from './customer';

export namespace ECommerceSystem {
  export class Order {
    private items: { product: ProdNS.Product, quantity: number }[] = [];

    constructor(private customer: CustNS.Customer) {}

    addItem(product: ProdNS.Product, quantity: number) {
      this.items.push({ product, quantity });
    }

    checkout() {
      let total = 0;
      console.log(`Order Summary for ${this.customer.name}:`);
      this.items.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;
        console.log(`- ${item.product.name}: ₹${item.product.price} x ${item.quantity} = ₹${itemTotal}`);
      });
      console.log(`Total: ₹${total}`);
    }
  }
}
