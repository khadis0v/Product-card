// 13.3.2 Создание классов-наследников.
import Drink from './Drink.js';

export class Lemonade extends Drink {
  constructor(name, size, price, mainIngredient) {
    super(name, size, price);
    this.mainIngredient = mainIngredient;
    this.setTemp(10);

  }

  getInfo() {
    const baseInfo = super.getInfo();
    return `${baseInfo}, Главный ингредиент: ${this.mainIngredient}`;
  }

  crushIngredient() {
    setTimeout(() => {
      console.log(`Измельчаем ${this.mainIngredient}`);
    }, 3000);
  }

  addIce() {
    this.setTemp(10);

    setTimeout(() => {
      console.log('Добавляем лед');
    }, 5000);
  }

  prepare() {
    this.crushIngredient();
    this.addIce();
  }
}