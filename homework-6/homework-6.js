// 6.3 Объект с информацией о пользователе
const userData = {
  firstName: "Расул",
  lastName: "Хадисов",
  age: 30,
  country: "Россия",
  city: "Кизляр",
  relationshipStatus:"Женат",
  drivingExperience: "10 лет",
  mail: "khadisov1796@yandex.ru",
  phoneNumber: "+7 938 874-77-07",
};


// 6.4 Объект с информацией о автомобиле
const carInfo = {
  brand: "Lada",
  model: "Vesta",
  yearProduction: 2016,
  color: "Серый",
  transmission: "Ручная",
};
carInfo.owner = userData;
// console.log(carInfo);


// 6.5 Функция проверки наличия свойства "Максимальная скорость"
function checkMaxSpeed(car) {
  if(!("maxSpeed" in car)) {
    carInfo.maxSpeed = 220;
  }
}

checkMaxSpeed(carInfo);
// console.log(carInfo.maxSpeed);


// 6.6 Универсальная функция для поиска определенного свойства внутри объекта 
function getInfoUser (allInfoUser, specificInformation) {
  const info = allInfoUser[specificInformation];
  // console.log(info);
}

getInfoUser(userData, 'lastName');


// 6.7 Массив со списком продуктов
const listProducts = ["майонез", "сыр", "рис", "мука", "сахар"];


// 6.8 Массив состоящий из нескольких объектов. Метод добавления объекта в массив.
const libraryCatalog = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    cover: "черный",
    genre: "антиутопия"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    cover: "бордовый",
    genre: "роман"
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    cover: "коричневый",
    genre: "классика"
  }
];
libraryCatalog.push({
  title: "Великий Гэтсби",
  author: "Фрэнсис Скотт Фицджеральд",
  year: 1925,
  cover: "зеленый",
  genre: "драма"
});

// console.log(libraryCatalog);


// 6.9 Создание второго массива "Вселенная Толкина" и объединение списков
const tolkiensUniverse = [
  {
    title: "Хоббит, или Туда и обратно",
    author: "Дж. Р. Р. Толкин",
    year: 1937,
    cover: "зеленый",
    genre: "фэнтези"
  },
  {
    title: "Братство Кольца",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    cover: "золотой",
    genre: "фэнтези"
  },
  {
    title: "Две крепости",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    cover: "красный",
    genre: "фэнтези"
  }
];

const generalLibrary = [...libraryCatalog, ...tolkiensUniverse];
// console.log(generalLibrary);


const rareBooks = generalLibrary.map(book => {
  return {
    ...book,
    isRare: book.year < 1900
  };
});

// console.log(rareBooks);