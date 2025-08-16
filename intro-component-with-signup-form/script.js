const form = document.getElementById("form-container");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const firstName = form.FirstName;
    const lastName = form.LastName;
    const email = form.email;
    const password = form.password;

    validateField(firstName,"FirstName cannot be empty");
    validateField(lastName,"LastName cannot be empty");
    validateEmail(email);
    validateField(password,"Password cannot be empty");
});

function validateField(input,message){
    const formControl = input.parentElement;

    if(input.value.trim() === ''){
        formControl.classList.add('error');
        formControl.classList.remove('success');
        formControl.querySelector('small').innerText = message;
    }
    else{
        formControl.classList.remove('error');
        formControl.classList.add('success');
        formControl.querySelector('small').innerText = '';
    }
}

function validateEmail(input){
    const formControl = input.parentElement;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(input.value.trim() === ''){
        formControl.classList.add('error');
        formControl.classList.remove('success');
        formControl.querySelector('small').innerText = "Email cannot be empty";
    }
    else if(!pattern.test(input.value.trim())){
        formControl.classList.add('error');
        formControl.classList.remove('success');
        formControl.querySelector('small').innerText = "Looks like this is not an email";
    }
    else{
        formControl.classList.remove('error');
        formControl.classList.add('success');
        formControl.querySelector('small').innerText = '';
    }
}