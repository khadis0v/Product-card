import { Clothing } from './Clothing.js';

export class Shirt extends Clothing {
  constructor(size, price, collartype) {
    super(size, price);
    this.collartype = collartype;
  }

  getInfo() {
    console.log(`Size: ${this.size}, Price: $${this.price}, Collar Type: ${this.collartype}`);
  }
};