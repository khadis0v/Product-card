
// 10.3 Импортируем классы-наследники
import { Shirt } from './classes/Shirt.js';
import { Trousers } from './classes/Trousers.js';

const armani = new Trousers('L', 350, 'High Waist');
const hermes = new Shirt('M', 200, 'Spread Collar');

armani.getInfo();
hermes.getInfo();


// 10.4 Создать файл Modal.js и в нем создать класс для модального окна.
import Modal from './classes/Modal.js';
const registrationModal = new Modal('#modal', '#overlay');
const openSignUpBtn = document.querySelector('.registration-button');

if (openSignUpBtn) {
  openSignUpBtn.addEventListener('click', () => {
    registrationModal.open();
  });
}

// 10.5 Создать файл Form.js и реализовать класс для формы под названием Form.
import Form from './classes/Form.js';
const registrationForm = new Form('registration-form');
const signUpFormElement = document.getElementById('registration-form');

if (signUpFormElement) {
  signUpFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    if (registrationForm.isValid()) {
      const accountInfo = registrationForm.getValues();

      if (accountInfo.password !== accountInfo.confirmPassword) {
        console.log('Ошибка: Пароли не совпадают!');
        return;
      }

      const registeredUserObj = {
        ...accountInfo,
        createdOn: new Date(),
      };

      console.log('Регистрация успешно завершена:', registeredUserObj);

      registrationForm.reset();
      registrationModal.close();
    } else {
      console.log('Ошибка: Форма заполнена некорректно.');
    }
  });
}