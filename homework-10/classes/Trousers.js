import { Clothing } from './Clothing.js';

export class Trousers extends Clothing {
  constructor(size, price, waistType) {
    super(size, price);
    this.waistType = waistType;
  }

  getInfo() {
    console.log(`Size: ${this.size}, Price: $${this.price}, Waist Type: ${this.waistType}`);
  }
};