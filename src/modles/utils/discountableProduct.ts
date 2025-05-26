export interface DiscountableProduct {
  applyDiscount(discount: number): void;
}