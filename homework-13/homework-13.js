// 13.4.2 Создать переменные с напитками и кафе. Затем сделать заказ.
import { Cafe } from './classes/Cafe.js';
import { Tea } from './classes/Tea.js';
import { Coffee } from './classes/Coffee.js';
import { Lemonade } from './classes/Lemonade.js';

const favoriteCafe = new Cafe('Papaha', 'ул. Акушинская 27');
const greenTea = new Tea('Липтон', 150, 300, 'Зеленый');
const americano = new Coffee('Американо', 100, 350, 'Робуста', 'средний', 'кокосовое');
const mojito = new Lemonade('Мохито', 400, 250, 'Лайм', 'Да');


// 13.4.3 Вызов трех готовых методов.
// console.log(mojito.getInfo());
favoriteCafe.showCafeInfo();
favoriteCafe.orderDrink(mojito);