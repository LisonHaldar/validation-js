const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    if(usernameValue === ''){
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    }else if(usernameValue.length < 3){
        setErrorFor(username, 'Username Must be 3 Char');
    }else{
        // add success class
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }else if(passwordValue.length <= 5){
        setErrorFor(password, 'Password my be 6 char');
    }else{
        setSuccessFor(password);
    }
    
    if(cpasswordValue === ''){
        setErrorFor(cpassword, 'Confirm Password');
    }else if(passwordValue !== cpasswordValue){
        setErrorFor(cpassword, 'Password dose not match');
    }else{
        setSuccessFor(cpassword);
    }

    // show a success message
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form_control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form_control error';
}


function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

function isEmail(emailValue){
    var atSymbol = emailValue.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailValue.lastIndexOf('.');
    if(dot <= atSymbol + 3) return false;
    return true;
}
