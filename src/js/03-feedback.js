import throttle from 'lodash.throttle'
import '../css/common.css'
import '../css/03-feedback.css'

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};


refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


localData();


function onFormInput(e) {
 formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
};

function localData() {
    const formValues = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (formValues) {
        refs.textarea.value = formValues.message;
        refs.input.value = formValues.email;
    };
};

console.log(formData);
