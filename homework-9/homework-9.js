// 4 К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию).
const userSubscribeForm = document.querySelector('.newsletter-form');
userSubscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const currentForm = event.target;
  const collectedFields = new FormData(currentForm);
  const textFieldsData = Object.fromEntries(collectedFields.entries());
  // console.log(textFieldsData);
});


/* Перезаписал эту логику. Смотреть в 10-м задании.

// 5 Создать кнопку "Регистрация". Создать модальное окно,
// используя классы "modal, modal-showed".
const openSignUpBtn = document.querySelector('.registration-button');
const backDropOverlay = document.querySelector('#overlay');
const popupContainer = document.querySelector('#modal');
const hideModalBtn = document.querySelector('#closemodal-button');

openSignUpBtn.addEventListener('click', () => {
  popupContainer.classList.add('visible-popup');
  backDropOverlay.style.display = 'block';
});

hideModalBtn.addEventListener('click', disablePopup);
backDropOverlay.addEventListener('click', disablePopup);

function disablePopup() {
  popupContainer.classList.remove('visible-popup');
  backDropOverlay.style.display = 'none';
}


// 6 Создать форму для регистрации внутри модального окна.
const signUpFormElement = document.querySelector('#registration-form');
signUpFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const targetForm = event.target;
  const formPayload = new FormData(targetForm);
  const accountInfo = Object.fromEntries(formPayload.entries());

  if (accountInfo.password != accountInfo.confirmPassword) {
    console.log('Пароли не совпадают');
    return;
  }

  const registeredUserObj = {
    ...accountInfo,
    password: btoa(accountInfo.password),
    confirmPassword: btoa(accountInfo.confirmPassword),
    createdOn: new Date(),
  };

  console.log('Регистрация успешна', registeredUserObj);
  disablePopup();
}); */