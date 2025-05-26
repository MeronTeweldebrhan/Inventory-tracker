import { DiscountableProduct } from "./utils/discountableProduct";
import { calculateTax } from "./utils/taxCalculator";

export class Product implements DiscountableProduct {
    static taxRate:number=0.1;
sku: string;
name: string;
price: number;
quantity: number=1;

  constructor(
     sku: string,
     name: string,
     price: number,
     quantity: number,

  ) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

getpriceWithTax():number{
    return calculateTax(this);
}

displayDetails(): string {
return `(SKU :${this.sku}) (NAME: ${this.name}) (QTY :${this.quantity}) price $${this.price}.`;
}
// Apply a discount to the product price
applyDiscount(discount: number): void {
    if (discount < 0 || discount > 100) {
      throw new Error("Discount percentage must be between 0 and 100");
    }
    this.price = this.price * (1 - discount / 100);
  }

  // Method to identify if this is a digital product (default: false)
  isDigitalProduct(): boolean {
    return false;
  }
}

