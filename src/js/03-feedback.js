import throttle from 'lodash.throttle'

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]'); 
const message = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onFormInput, 500));


function onFormInput(e) {
    const formInput =
    {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    try {
       localStorage.setItem(STORAGE_KEY, JSON.stringify(formInput));
    } catch (error) {
        console.error('error: ', error.message);
    }
};
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const {
        elements: { email, message },
    } = e.currentTarget;
    if (email.value === '' || message.value === '') {
        return alert ('All fields must be filled')
    }
      console.log({ email: email.value, message: message.value });

     e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
};

function localData() {
    try {
        const formValues = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (formValues !== null) {
            email.value = formValues.email;
            message.value = formValues.message;
        }
    } catch (error) {
        console.error('error: ', error.message);
    }
  
};
localData();



