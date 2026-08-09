//10.3 Создать структуру на ваш выбор, как было показано в лекции.
export class Clothing {
  constructor(size, price) {
    this.size = size;
    this.price = price;
  };

  getInfo() {
    console.log(`Size: ${this.size}, Price: $${this.price}`);
  }
};