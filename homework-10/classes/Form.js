// 10.5 Создать файл Form.js и реализовать класс для формы под названием Form.
export default class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  // Метод I: Получение всех значений формы.
  getValues() {
    if (!this.form) return {};
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  // Метод II: Проверка валидности формы.
  isValid() {
    if (!this.form) return false;
    return this.form.checkValidity();
  }

  // Метод III: Сброс значений формы.
  reset() {
    if (this.form) {
      this.form.reset();
    }
  }

}