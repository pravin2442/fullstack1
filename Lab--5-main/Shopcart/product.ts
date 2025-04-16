// product.ts
export namespace ECommerceSystem {
  export class Product {
    constructor(
      public id: number,
      public name: string,
      public price: number
    ) {}

    display() {
      console.log(`Product ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}`);
    }
  }
}
