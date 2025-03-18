// 1. Оголоси поза будь - якими функціями об’єкт formData з полями email та message, які спочатку мають порожні рядки як значення: { email: "", message: "" }.

// 2. Використовуй метод делегування для відстеження змін у формі через подію input.Зберігай актуальні дані з полів email
// та message у formData та записуй цей об’єкт у локальне сховище.Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.

// 3. При завантаженні сторінки перевір, чи є дані у локальному сховищі.Якщо так, використовуй їх для заповнення форми
// та об'єкта formData. Якщо ні, залиш поля форми порожніми.

// 4. Перед відправленням форми переконайся, що обидва поля форми заповнені.
// 5. Якщо будь - яке з полів(властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields».

// 6. Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.

// вибрати на сайті форму і на текстереа
// поставити прослушку на сабміт
// передати функцію5
const FORM_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea[name="message"]');
const emailInput = form.querySelector('input[name="email"]');

getStorage();

form.addEventListener('submit', submitHandler);
form.addEventListener('input', inputHandler);

function getStorage() {
  const storedMsg = localStorage.getItem(FORM_KEY);

  if (!storedMsg) {
    return;
  }

  const parsedForm = JSON.parse(storedMsg);
  emailInput.value = parsedForm.email || '';
  textarea.value = parsedForm.message || '';
}

const formData = { email: '', message: '' };

function inputHandler(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function submitHandler(event) {
  event.preventDefault();
  if (!emailInput.value || !textarea.value) {
    return alert('Fill please all fields');
  }

  formData.email = emailInput.value.trim();
  formData.message = textarea.value.trim();

  console.log(formData);
  localStorage.removeItem(FORM_KEY);

  form.reset();
}
