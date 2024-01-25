const Form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = Form.elements.email;
const textarea = Form.elements.message;

// function saveInputValue() {
//   const savedValue = localStorage.getItem(localStorageKey);
//   if (savedValue) {
//     const parsedValue = JSON.parse(savedValue);
//     email.value = parsedValue.Email;
//     textarea.value = parsedValue.Message;
//   }
// }
// saveInputValue();

document.addEventListener('DOMContentLoaded', () => {
  const savedValue = localStorage.getItem(localStorageKey);
  if (savedValue) {
    const parsedValue = JSON.parse(savedValue);
    email.value = parsedValue.Email;
    textarea.value = parsedValue.Message;
  }
});

Form.addEventListener('input', setOnLocalStor);
Form.addEventListener('submit', submitForm);
let inputValue = {};

function setOnLocalStor(event) {
  event.preventDefault();

  const target = event.currentTarget;
  (inputValue.Email = target.elements.email.value.trim()),
    (inputValue.Message = target.elements.message.value.trim());

  localStorage.setItem(localStorageKey, JSON.stringify(inputValue));
}

function submitForm(event) {
  event.preventDefault();

  const formValue = {
    Email: email.value.trim(),
    Message: textarea.value.trim(),
  };

  if (email.value.trim() === '' || textarea.value.trim() === '') {
    alert('Please enter your email and message');
  }
  console.log(formValue);
  localStorage.removeItem(localStorageKey);
  Form.reset();
}
