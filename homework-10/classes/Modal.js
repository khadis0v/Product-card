// 10.4 Создать файл Modal.js и в нем создать класс для модального окна.
export default class Modal {
  constructor(modalId, overlayId) {
    this.modal = document.querySelector(modalId);
    this.overlay = document.querySelector(overlayId);
    this.initCloseListener();
  }

  // Метод I: Открытие модального окна.
  open() {
    this.modal.classList.add('visible-popup');
    if (this.overlay) {
      this.overlay.style.display = 'block';
    }
  }

  // Метод II: Закрытие модального окна.
  close() {
    this.modal.classList.remove('visible-popup');
    if (this.overlay) {
      this.overlay.style.display = 'none';
    }
  }

  // Метод III: Проверка, открыто ли сейчас окно.
  isOpen() {
    return this.modal.classList.contains('visible-popup');
  }

  // Метод IV: Слушает кнопку (крестик).
  initCloseListener() {
    const closeButton = this.modal.querySelector('#closemodal-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', () => {
        this.close();
      });
    }
  }
}