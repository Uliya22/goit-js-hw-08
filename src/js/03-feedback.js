import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea')
    
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);


populateEmail ();
populateMessage ();

form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    });

function onTextareaInput () {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(formData);
};

function populateEmail () {
    try {
    const saveEmail = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveEmail) {
        email.value = saveEmail.email;
    }
    }
    catch(error) {
    console.log(error.message);
    }
}
function populateMessage () {
    try {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveMessage) {
        message.value = saveMessage.message;
    }
    }
    catch(error) {
        console.log(error.message);
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    try {
        const parsObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
        console.log('Object submit:', parsObject);
    }
    catch(error) {
        console.log(error.message);
    }
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY); 
};
