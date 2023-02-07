const form = document.getElementById('form');
form.addEventListener('submit', handleForm);
function handleForm(event) { event.preventDefault(); }

let validData = false;

let emails = [];

console.log(localStorage.getItem('email'));

const localStorage = JSON.parse(localStorage.getItem('email')) || [];

today = Date.now();
todaysYear = new Date(Date.now()).getFullYear();
function submitMethod() {
    const userBirthdayDate = document.getElementById('birthdayDate').value;
    const age = new Date(Date.now()).getFullYear()-(new Date(userBirthdayDate)).getFullYear();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('emailAddress').value;
    if (age<18) {
        alert('You are too young');
    }  else if (!validPassword()){
        let confirmPassword = document.getElementById('confirmPassword');
        confirmPassword.setCustomValidity("Passwords Don't Match");
    } else if (!strongPassword(password)) {
        let password = document.getElementById('password');
        password.setCustomValidity("Write a better password");        
    }
    else {
        console.log('asdfdas');
        validData = true;
        success();
    }
    if (validData) {
        const email = document.getElementById('emailAddress').value;
        console.log('mahaveer')
        localStorage.setItem('email', email);
    }
}


function validPassword(){
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    return password.value === confirmPassword.value;
}

function strongPassword(password){ 
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSymbol = false;

    for (let i =0; i<password.length; i++) {
        let character = password.charAt(i);
        if (character >= "A" && character <= 'Z') {
            hasUppercase = true;
        } else if (character >= 'a' && character <= 'z') { 
            hasLowercase = true;
        } else if (character >= '0' && character <= '9') { 
            hasNumber = true;
        } else {
            hasSymbol = true;
        }
    }
    return hasUppercase && hasLowercase && hasNumber && hasSymbol;
}

function success() {
    const popup = document.getElementById("popup-parent");
    console.log('here');
    console.log(popup)
    popup.classList.toggle('blur-bg-hidden');
    popup.classList.toggle('blur-bg-visible');
}
