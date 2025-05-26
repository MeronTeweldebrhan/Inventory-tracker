import { Product } from "./Product";
import {calculateTax} from "./utils/taxCalculator"
import { DiscountableProduct } from "./utils/discountableProduct";

//
export class Physicalproduct extends Product implements DiscountableProduct{
  weight: number;
  private static readonly BULK_QUANTITY_THRESHOLD = 10;
  private static readonly BULK_WEIGHT_THRESHOLD = 5; // in kg
  private static readonly BULK_DISCOUNT_PERCENTAGE = 10; // 10% discount


  constructor(
    sku: string,
    name: string,
    price: number,
    quantity: number,
    weight: number,
    
  ) {
    super(sku, name, price, quantity);
    this.weight = weight;
   
  }
 getpriceWithTax():number{ 
    return calculateTax(this)
 }

  getWeight(): string {
    return `${this.weight} kg`;
  }

displayDetails(): string {
return super.displayDetails() + ` It weighs ${this.weight} kg.`;
}
// Apply a discount based on quantity or weight
applyDiscount(discount: number = 0): void {
    if (discount < 0 || discount > 100) {
      throw new Error("Discount percentage must be between 0 and 100");
    }
    // Apply bulk discount if quantity or weight exceeds thresholds
    let effectiveDiscount = discount;
    if (
      this.quantity > Physicalproduct.BULK_QUANTITY_THRESHOLD ||
      this.weight > Physicalproduct.BULK_WEIGHT_THRESHOLD
    ) {
      effectiveDiscount = Math.max(discount, Physicalproduct.BULK_DISCOUNT_PERCENTAGE);
    }
    this.price = this.price * (1 - effectiveDiscount / 100);
  }
}
