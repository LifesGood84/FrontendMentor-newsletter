const form = document.querySelector('.form');
const emailDiv = document.querySelector('.form__email-input-container');
const emailInputField = document.querySelector('.form__email-input');
const btn = document.querySelector('.form__button');

const thanks = document.querySelector('.thanks');
const thanksSpan = document.querySelector('.thanks__paragraph span')
const btnEnd = document.querySelector('.thanks__button')

let emailAddress;
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// /slashes to say it is not a string. It is a regex pattern /
// 1. ^ = start of the string
// 2. [^\s@]+ = one or more(+) character that are NOT(^) space \s or @
// 3. @ = @
// 4. [^\s@]+
// 5. \. = is . sign
// 6. [^\s@]+ 
// 7. $ = end of string

btn.addEventListener('click', function(){    
    emailAddress = emailInputField.value.trim();  
    // email validator
    const isEmail = pattern.test(emailAddress);

    // 1. VALIDATE EMAIL
    if (isEmail){
        form.classList.add('hidden');
        thanks.classList.remove('hidden');
        thanksSpan.textContent = emailAddress;
    // 2. ERROR HANDLING WITH VISUAL FEEDBACK
    } else {
        emailDiv.classList.add('error-message');
        emailInputField.classList.add('error-state');
    }    
})

// 3. RESET FIELDS
btnEnd.addEventListener('click', function(){
    emailAddress = '';
    emailInputField.value = '';

    thanks.classList.add('hidden');
    form.classList.remove('hidden');
    console.log('EmailAdress Should be blank -->', emailAddress);
})

// 4. CLEAR ERROR MESSAGES WHILE TYPING
// input - typing, pasting, deleting
emailInputField.addEventListener('input', function(){
    emailDiv.classList.remove('error-message');
    emailInputField.classList.remove('error-state');
})

// 5. ACTIVATE ENTER KEY ON KEYBOARD
emailInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        btn.click();
    }
})

document.addEventListener('keyup', function(event) {
    // this prevents thank you form to close if enter is pressed in emailinputField
    if (event.key === 'Enter' && form.classList.contains('hidden') && event.target != emailInputField){
        btnEnd.click();
    }
})