
import throttle from 'lodash.throttle';

const inputFormUrl = document.querySelector('.feedback-form');
const emailInputUrl = document.querySelector('input');
const messageInputUrl = document.querySelector('textarea');
const LOCAL_KEY = 'feedback-form-state';

if (localStorage.getItem(LOCAL_KEY)) {
  const { email, message } = JSON.parse(localStorage.getItem(LOCAL_KEY));
  emailInputUrl.value = email;
  messageInputUrl.value = message;
}

const settingsArray = {
  email: emailInputUrl.value || "",
  message: messageInputUrl.value || "",
};
inputFormUrl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  if (event.target.name === 'email' || event.target.name === 'message') {
    settingsArray.email = emailInputUrl.value.trim();
    settingsArray.message = messageInputUrl.value.trim();
    localStorage.setItem(LOCAL_KEY, JSON.stringify(settingsArray));
  }
}

inputFormUrl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (
    emailInputUrl.value.trim() === '' ||
    messageInputUrl.value.trim() === ''
  ) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  console.log(settingsArray);

  localStorage.removeItem(LOCAL_KEY);
  inputFormUrl.reset();
  
  settingsArray.email = '';
  settingsArray.message = '';
}