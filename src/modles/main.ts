import {Physicalproduct} from "./PhysicalProduct"
import {digitalProduct} from "./DigitalProduct"
import { Product } from "./Product";
import { calculateTax } from "./utils/taxCalculator";

// initialize the products
const tv =new Physicalproduct("sku000","tv", 19.99, 20,20);
   const ebook= new digitalProduct("sku001","ebook", 9.99, 20,1000);

//intialize the products
  const products:Product[]=[tv, ebook];
// claculate tax for each product except digital product
  for (const product of products){
    if (product instanceof Physicalproduct) {
      product.applyDiscount(10); // Apply a 10% discount for physical products
    }
console.log(product.displayDetails());// Display product details
    
    if (product instanceof digitalProduct){
      product.applyDiscount(10); // Apply a 10% discount for physical products
        console.log(`price (no Tax ):$${calculateTax(product)}`)
    } else{
    console.log(`Price with tax: $${calculateTax(product).toFixed(2)}\n`)
  }
}
