import { Product } from "../Product";
import {digitalProduct} from "../DigitalProduct"
export function calculateTax(product:Product):number{

    const taxRate = 0.1; // 10% tax

    if (product instanceof digitalProduct ){
    return product.price 
}
return product.price +(product.price*taxRate)
}