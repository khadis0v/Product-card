// 2 Создаем файл js, где будет хранится массив объектов,
// после импортировать в homework-8 для дальнейшей работы с ним.
import { products } from "./products.js";


// 3 Cоздать и реализовать шаблон для продуктовых карточек.
const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');


// 5.1 Реализовать функцию, которая будет создавать карточки продуктов
// на основе шаблона и данных из массива объектов.
function getCardsCount() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInput);

  if (count >= 1 && count <= 5) {
    return count;
  }

  alert("Ошибка! Пожалуйста, введите число от 1 до 5");
  return getCardsCount(); 
}

// 5.2 Вызвать эту функцию и отобразить карточки на странице.
function renderProducts(arrayOfProducts) {
  arrayOfProducts.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    const img = productClone.querySelector('.product-card__image');
    img.src = `images/${product.image}.png`;
    img.alt = product.title;

    productClone.querySelector('.product-card__subtitle').textContent = product.skinType;
    productClone.querySelector('.product-card__title').textContent = product.title;
    productClone.querySelector('.product-card__description').textContent = product.description;

    const compositionList = productClone.querySelector('.product-card__composition-list');
    
    product.composition.forEach(item => {
      const li = document.createElement('li');
      li.className = 'product-card__item'; 
      li.textContent = item;
      compositionList.appendChild(li);
    });

    productClone.querySelector('.product-card__price-value').textContent = `${product.price.toLocaleString()} ₽`;

    productList.appendChild(productClone);
  });
}

// Вызов этой функции
const count = getCardsCount();
const visibleProducts = products.slice(0, count);
renderProducts(visibleProducts);


// 4 Используя метод .reduce(), получить массив объектов,
// где ключем является название продукта, а значением - его описание.
const productsDescriptionsArray = products.reduce((acc, product) => {
  acc.push({ 
    [product.title]: product.description 
  });
  return acc;
}, []);

console.log(productsDescriptionsArray);