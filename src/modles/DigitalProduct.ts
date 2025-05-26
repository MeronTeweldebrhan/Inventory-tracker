import { Product } from "./Product";

export class digitalProduct extends Product{
    fileSize:number;
 constructor (
    sku: string,
    name: string,
    price: number,
    quantity: number,
     fileSize:number,
)
{
    super(sku, name, price, quantity);
    this.fileSize = fileSize;

  }
 getpriceWithTax():number{
    return this.price            // No tax for digital products

 }
getfileSize(): String {
    return `(W: ${this.fileSize}:megabytes)`;
  }


   displayDetails(): string {
      return super.displayDetails() + ` It has a file size of ${this.fileSize} MB.`;
   }

   // Override to identify this as a digital product
   isDigitalProduct(): boolean {
     return true;
   }
   }