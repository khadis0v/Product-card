// 5.3 Создание функции с двумя параметрами и выводом сообщения в консоль
function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
};

showWeather('Махачкала', 35);


// 5.4 Создание функции с одной переменной и выводом в консоль сообщения при значении больше, меньше или равно
const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log ("Субсветовая скорость");
  } else {
    console.log ("Скорость света");
  }
};

checkSpeed(299999999);


// 5.5 Создание функции по расчету стоимости для приобретения товара
const productName = 'Абонемент';
const productPrice = 370;
function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
};

buyProduct(200);