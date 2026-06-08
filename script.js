// Получаем элементы управления из DOM
const cardRecolorButton = document.querySelector(".product-section__action-all"); 
const catalogCard = document.querySelectorAll(".product-card__inner");
const cardActionButtons = document.querySelectorAll(".product-card__action");
const resetColorCard = document.querySelector('.product-section__reset');

// Генерирует случайный цвет для фона карточек
function changeRandomColor() {
    const colors = [
        "rgba(0, 31, 90, 0.3)",
        "rgba(242, 255, 0, 0.3)",
        "rgba(0, 234, 183, 0.3)",
        "rgba(0, 255, 38, 0.3)",
        "rgba(255, 91, 91, 0.3)",
        "rgba(168, 17, 255, 0.85)",
        "rgba(0, 255, 38, 0.3)",
        "rgba(207, 0, 214, 0.3)",
        "rgba(0, 29, 192, 0.3)",
        "rgba(222, 122, 0, 0.3)"
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Сбрасывает фон всех карточек к состоянию по умолчанию
resetColorCard.addEventListener("click", () => {
    catalogCard.forEach(body => {
        body.style.backgroundColor = "";
    });
});

//  Перекрашивает все карточки в случайный цвет
const catalogCards = document.querySelectorAll(".product-card__inner");
const sectionActionButton = document.querySelector(".product-section__action-all"); 

sectionActionButton.addEventListener("click", () => {
    catalogCards.forEach(body => {
        body.style.backgroundColor = changeRandomColor();
    });
});

// Обрабатывает кнопки внутри карточек и меняет цвет только своей карточки
cardActionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const parentBox = button.closest(".product-card__content");
        const body = parentBox.querySelector(".product-card__inner");

        body.style.backgroundColor = changeRandomColor();
    });
});

// Выводит текст заголовка страницы в консоль при наведении
const headerOutput = document.querySelector(".js-title");

headerOutput.addEventListener("mouseover", () => {
    console.log(headerOutput.innerText);
});

// Переключает состояние кнопки и отображает активный / неактивный статус
let toggleButton = document.querySelector(".product-section__toggle");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("is-active");

    if (toggleButton.classList.contains("is-active")) {
        toggleButton.innerText = "Не активно";
    } else {
        toggleButton.innerText = "Активно"
    };
});