import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
// console.log(refs.input);
// console.log(refs.textarea);
const STORAGE_KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
refs.form.addEventListener('input', onTextareaInput);


function onTextareaInput(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    
    formData[event.target.name] = event.target.value;
    console.log(formData);
    
    // const formElements = event.currentTarget.elements; 
    // console.log(formElements);  
    // const email = formElements.email.value;   
    // const message = formElements.message.value;
    // console.log(mail, password);
    // const dataToSave = { email, message };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
};

function onFormSubmit(event) {
    event.preventDefault();

    const { elements: { email, message } } = event.target;
    
    if (email.value === "" || message.value === "" ) {
        return alert ("Enter your email and password");
    };
   
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function getDataFromStorage() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData) {
        emailInput.value = savedData.email;
        textInput.value = savedData.message;
    }
}