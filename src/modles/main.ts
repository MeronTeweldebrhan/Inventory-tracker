import {Physicalproduct} from "./PhysicalProduct"
import {digitalProduct} from "./DigitalProduct"
import { Product } from "./Product";
import { calculateTax } from "./utils/taxCalculator";


const tv =new Physicalproduct("sku000","tv", 19.99, 20,20);
   const ebook= new digitalProduct("sku001","ebook", 9.99, 20,1000);

//intialize the products
  const products:Product[]=[tv, ebook];
// claculate tax for each product except digital product
  for (const product of products){
    console.log(product.displayDetails());

    
    if (product instanceof digitalProduct){
        console.log(`price (no Tax ):$${calculateTax(product)}`)
    } else{
    console.log(`Price with tax: $${calculateTax(product).toFixed(2)}\n`)
  }
}
products.forEach(product => {
  if (product instanceof Physicalproduct) {
    product.applyDiscount(); // Apply bulk discount if applicable
  } else {
    product.applyDiscount(10); // 10% discount for digital products
  }
});
