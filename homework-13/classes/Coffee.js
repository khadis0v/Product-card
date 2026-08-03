// 13.3.2 Создание классов-наследников.
import Drink from './Drink.js';

export class Coffee extends Drink {
  constructor(name, size, price, grainType, roastLevel, milkType) {
    super(name, size, price);
    this.grainType = grainType;
    this.roastLevel = roastLevel;
    this.milkType = milkType;
    this.setTemp(75);
  }

  getInfo() {
    const baseInfo = super.getInfo();
    return `${baseInfo}, Тип зерен: ${this.grainType}, Уровень прожарки: ${this.roastLevel}, Тип молока: ${this.milkType}`;
  }

  heatWater() {
    this.setTemp(75);

    setTimeout(() => {
      console.log('Греем воду до 75°C');
    }, 3000);
  }

  grindBeans() {
    setTimeout(() => {
      console.log(`Производим помол зерен ${this.grainType}`);
    }, 4000);
  }

  setRoast() {
    setTimeout(() => {
      console.log(`Устанавливаем ${this.roastLevel} уровень их прожарки `);
    }, 5000);
  }

  addMilk() {
    setTimeout(() => {
      console.log(`Добавляем ${this.milkType} молоко`);
    }, 6000);
  }

  prepare() {
    this.heatWater();
    this.grindBeans();
    this.setRoast();
    this.addMilk();
  }
}