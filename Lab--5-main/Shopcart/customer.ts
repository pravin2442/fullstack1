// customer.ts
export namespace ECommerceSystem {
  export class Customer {
    constructor(
      public id: number,
      public name: string,
      public email: string
    ) {}

    display() {
      console.log(`Customer ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
  }
}
