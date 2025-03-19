const FORM_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea[name="message"]');
const emailInput = form.querySelector('input[name="email"]');

const formData = { email: '', message: '' };

getStorage();

form.addEventListener('submit', submitHandler);
form.addEventListener('input', inputHandler);

function getStorage() {
  const storedMsg = localStorage.getItem(FORM_KEY);

  if (storedMsg) {
    const parsedForm = JSON.parse(storedMsg);

    formData.email = parsedForm.email || '';
    formData.message = parsedForm.message || '';

    emailInput.value = formData.email;
    textarea.value = formData.message;
  }
}

function inputHandler(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function submitHandler(event) {
  event.preventDefault();

  if (!emailInput.value || !textarea.value) {
    return alert('Fill please all fields');
  }

  console.log(formData);
  localStorage.removeItem(FORM_KEY);

  form.reset();

  formData.email = '';
  formData.message = '';
}
