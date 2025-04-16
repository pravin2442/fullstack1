// cart.ts
import { ECommerceSystem as ProdNS } from './product';
import { ECommerceSystem as CustNS } from './customer';
import { ECommerceSystem as OrderNS } from './order';

export namespace ECommerceSystem {
  export class ShoppingCart {
    private order: OrderNS.Order;

    constructor(customer: CustNS.Customer) {
      this.order = new OrderNS.Order(customer);
    }

    addProduct(product: ProdNS.Product, quantity: number) {
      this.order.addItem(product, quantity);
    }

    checkout() {
      this.order.checkout();
    }
  }
}
