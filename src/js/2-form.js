const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = form.elements.email;
const textarea = form.elements.message;

document.addEventListener('DOMContentLoaded', () => {
  const savedValue = localStorage.getItem(localStorageKey);
  if (savedValue) {
    const parsedValue = JSON.parse(savedValue);
    email.value = parsedValue.email;
    textarea.value = parsedValue.message;
  }
});

form.addEventListener('input', handleInputEvent);
form.addEventListener('submit', handleSubmitEvent);
let inputValue = {};

function handleInputEvent(event) {
  const target = event.currentTarget;
  (inputValue.email = target.elements.email.value.trim()),
    (inputValue.message = target.elements.message.value.trim());

  localStorage.setItem(localStorageKey, JSON.stringify(inputValue));
}

function handleSubmitEvent(event) {
  event.preventDefault();

  const formValue = {
    email: email.value.trim(),
    message: textarea.value.trim(),
  };

  if (email.value.trim() === '' || textarea.value.trim() === '') {
    alert('Please enter your email and message');
    return;
  }
  console.log(formValue);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
