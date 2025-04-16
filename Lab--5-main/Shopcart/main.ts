import * as readline from 'readline';
import { ECommerceSystem as ProdNS } from './product';
import { ECommerceSystem as CustNS } from './customer';
import { ECommerceSystem as CartNS } from './cart';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let productList: ProdNS.Product[] = [];
let customer: CustNS.Customer | null = null;
let cart: CartNS.ShoppingCart | null = null;

function menu() {
  console.log(`
Choose an option:
1. Enter Product Details
2. Enter Customer Details
3. Add Product to Cart
4. Checkout
5. Exit
`);
  rl.question("Enter your choice: ", (choice) => {
    switch (choice.trim()) {
      case "1":
        enterProductDetails();
        break;
      case "2":
        enterCustomerDetails();
        break;
      case "3":
        if (!customer) {
          console.log("Please enter customer details first.");
          return menu();
        }
        if (productList.length === 0) {
          console.log("No products available. Add products first.");
          return menu();
        }
        addProductToCart();
        break;
      case "4":
        if (cart) {
          cart.checkout();
        } else {
          console.log("Cart is empty.");
        }
        return menu();
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid choice.");
        return menu();
    }
  });
}

function enterProductDetails() {
  rl.question("Enter Product ID: ", (idStr) => {
    const id = parseInt(idStr);
    rl.question("Enter Product Name: ", (name) => {
      rl.question("Enter Product Price: ", (priceStr) => {
        const price = parseFloat(priceStr);
        const product = new ProdNS.Product(id, name, price);
        productList.push(product);
        console.log("Product added successfully.");
        menu();
      });
    });
  });
}

function enterCustomerDetails() {
  rl.question("Enter Customer ID: ", (idStr) => {
    const id = parseInt(idStr);
    rl.question("Enter Customer Name: ", (name) => {
      rl.question("Enter Customer Email: ", (email) => {
        customer = new CustNS.Customer(id, name, email);
        cart = new CartNS.ShoppingCart(customer);
        console.log("Customer added successfully.");
        menu();
      });
    });
  });
}

function addProductToCart() {
  console.log("Available Products:");
  productList.forEach((p, index) => {
    console.log(`${index + 1}. ${p.name} - ₹${p.price}`);
  });

  rl.question("Enter product number to add to cart: ", (indexStr) => {
    const index = parseInt(indexStr) - 1;
    if (index < 0 || index >= productList.length) {
      console.log("Invalid product selection.");
      return menu();
    }
    rl.question("Enter quantity: ", (qtyStr) => {
      const quantity = parseInt(qtyStr);
      cart!.addProduct(productList[index], quantity);
      console.log("Product added to cart.");
      menu();
    });
  });
}

menu();
