// 2 Создаем файл js, где будет хранится массив объектов,
// после импортировать в homework-8 для дальнейшей работы с ним.
import { products } from "./products.js";


// 3 Cоздать и реализовать шаблон для продуктовых карточек.
const productTemplate = document.getElementById('product-template');
const productList = document.getElementById('product-list');


// 4 Используя метод .reduce(), получить массив объектов,
// где ключем является название продукта, а значением - его описание.
const productsDescriptionsArray = products.reduce((acc, product) => {
  acc.push({ 
    [product.title]: product.description 
  });
  return acc;
}, []);

// console.log(productsDescriptionsArray);