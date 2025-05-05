let formData = {
  email: '',
  message: '',
};
console.log('formData', formData);

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

const STORAGE_KEY = 'feedback-form-state';

const stored = localStorage.getItem(STORAGE_KEY);
if (stored) {
  try {
    const parsed = JSON.parse(stored);
    formData = parsed;
    email.value = parsed.email ?? '';
    message.value = parsed.message ?? '';
    // console.log('stored', stored);
    // console.log('parsed', parsed);
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  //   console.log('==========================');
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('formData:', formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
