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