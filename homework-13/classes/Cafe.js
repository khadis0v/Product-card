// 13.4 Создать класс Cafe, который принимает в себя 2 параметра:
// Получить информацию про кафе и заказать напиток.
export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  showCafeInfo() {
    console.log(`Название кафе: ${this.name}, Локация: ${this.location}`);
  }

  orderDrink(drink) {
    drink.prepare();
    drink.serve();
  }
}