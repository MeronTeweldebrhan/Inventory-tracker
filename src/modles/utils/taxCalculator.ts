import { Product } from "../Product";

export function calculateTax(product:Product):number{

    const taxRate = 0.1; // 10% tax

    // Check if it's a digital product by checking if it has the isDigitalProduct method
    if ('isDigitalProduct' in product && (product as any).isDigitalProduct()) {
        return product.price
    }
    return product.price +(product.price*taxRate)
}