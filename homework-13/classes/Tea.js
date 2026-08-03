// 13.3.2 Создание классов-наследников.
import Drink from './Drink.js';

export class Tea extends Drink {
  constructor(name, size, price, cultivar) {
    super(name, size, price);
    this.cultivar = cultivar;
    this.setTemp(90);
  }

  getInfo() {
    const baseInfo = super.getInfo();
    return `${baseInfo}, Сорт: ${this.cultivar}`;
  }

  heatWater() {
    this.setTemp(90);

    setTimeout(() => {
      console.log('Греем воду до 90°C');
    }, 3000);
  }

  brew() {
    setTimeout(() => {
      console.log(`Завариваем чай сорта: ${this.cultivar}`);
    }, 4500);
  }

  steep() {
    setTimeout(() => {
      console.log(`Даем ему немного настояться`);
    }, 6000);
  }

  prepare() {
    this.heatWater();
    this.brew();
    this.steep();
  }
}
