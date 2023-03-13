import throttle from 'lodash.throttle';

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   email: document.querySelector('.feedback-form input'),
};

const formData = {};
const STORAGE_KEY = 'feedback-form-state';
const savedData = localStorage.getItem(STORAGE_KEY, JSON.stringify(formData));
const parsedData = JSON.parse(savedData);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateTextarea();

function onInput(evt) {
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 
    formData[evt.target.name] = evt.target.value;
}

function onFormSubmit(evt) {
    evt.preventDefault();
    
    if (refs.email.value === '' || refs.textarea.value === '') {
        alert('Please fill in all the fields!');
    }
    console.log(formData);

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea(evt) {
    const savedLocalStorage = localStorage.getItem(STORAGE_KEY);

    if (savedLocalStorage) {
        refs.form.email.value = parsedData.email;
        refs.form.message.value = parsedData.message;
    }

    function populateTextarea() {

    }
   
 };
