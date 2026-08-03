// 13.3 Реализовать абстрактный класс Drink.
export default class Drink {
  #temp;

  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temp = 25;
  }

  // Метод 1. Получить информацию про напиток
  getInfo() {
    return `Название: ${this.name}, Размер: ${this.size} мл, Цена: ${this.price}₽, Температура: ${this.#temp}°C`;
  }

  // Метод 2. Получить температуру напитка
  getTemp() {
    return this.#temp;
  }

  // Метод 3. Установить температуру напитка
  setTemp(newTemp) {
    this.#temp = newTemp;
  }

  // Метод 4. Приготовить напиток (приватный)
  #prepare() {
    console.log(`Проверка заказа`);

    setTimeout(() => {
      console.log(`Напиток готовится`);
    }, 1500);

  }

  // Метод 5. Подать напиток
  serve() {
    this.#prepare();

    setTimeout(() => {
      console.log(`Ваш ${this.name} готов! Можете забирать заказ.`);
    }, 7500);
  }
}