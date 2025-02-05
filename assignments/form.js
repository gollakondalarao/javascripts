const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phonenumber = document.getElementById('phonenumber');
const aadharcard = document.getElementById('aadharcard');
const pancard = document.getElementById('pancard');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonenumbervalue = phonenumber.value.trim();
    const aadharcardvalue = aadharcard.value.trim();
    const pancardvalue = pancard.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue[0] !== usernameValue[0].toUpperCase()) {
        setError(username, 'The first letter of the username must be capitalized');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 10 ) {
        setError(password, 'Password must be at least 10 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if(phonenumbervalue === '') {
        setError(phonenumber, 'phonenumber is required');
    } else if (phonenumbervalue.length < 10 ) {
        setError(phonenumber, 'Phonenumber must be at least 10 character.')
    } else {
        setSuccess(phonenumber);
    }
      
    if (aadharcardvalue === '') {
        setError(aadharcard, 'Aadhar card is required');
    } else if (!/^\d{12}$/.test(aadharcardvalue)) {
        setError(aadharcard, 'Aadhar card must be exactly 12 digits with no spaces or letters');
    } else {
        setSuccess(aadharcard);
    }

    if (pancardvalue === '') {
        setError(pancard, 'PAN card is required');
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pancardvalue)) {
        setError(pancard, 'PAN card must be in the format: 5 capital letters, 4 digits, and 1 capital letter');
    } else {
        setSuccess(pancard);
    }
};
