const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpasswrod');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const sendData = (usernameVal, sRate, count) =>{
    if(sRate === count){
        alert('Registration successfull');
        swal('welcome! ' + usernameVal, 'Registration SuccessFull', 'Success');
        // swal("Good job!", "You clicked the button!", "success");
        location.href = `demo.html?username = ${usernameVal}`
    }
}

// for final data validation
const successMsg = (usernameVal) =>{
    let formCon = document.getElementsByClassName('form_control');

    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if (formCon[i].className === 'form_control success'){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);
        }else{
            return false;
        }
    }
}

// more email validate
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 5) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

// define the validate function
const validate = function(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

   // validate username
    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }
    
    // validate email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Not a valid Email!');
    }else{
        setSuccessMsg(email);
    }
    
    // validate phone
    if(phoneVal === ""){
        setErrorMsg(phone, 'phone cannot be blank');
    }else if(phoneVal.length != 11){
        setErrorMsg(phone, 'Minimam 11 Number!');
    }else{
        setSuccessMsg(phone);
    }
    
    // validate password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'Must be 6 Char!');
    }else{
        setSuccessMsg(password);
    }
    
    // validate confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm Password');
    }else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword, 'Do not match!');
    }else{
        setSuccessMsg(cpassword);
    }

    successMsg(usernameVal);
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form_control error';
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

