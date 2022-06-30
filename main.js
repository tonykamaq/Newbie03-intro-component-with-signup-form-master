 const firstName = document.querySelector('#firstNameInput');
 const lastName = document.querySelector('#lastNameInput');
 const emailAddress = document.querySelector('#emailInput');
 const password = document.querySelector('#passInput');

 const fisrtNamError = document.querySelector('#firstNameError');
 const lastNamError = document.querySelector('#lastNamError');
 const emailAddressError = document.querySelector('#emailError');
 const passError = document.querySelector('#passError');

 const button = document.querySelector('#button');

 button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailAddressError, '');
    validatePassword(password.value, password, passError, '');
 });

 function validateEmail(valueInput, divInput, divError){
     let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        if (regExp.test(valueInput) == true){
            hideError(divInput, divError)
        }else{
            showError(divInput, divError, 'Looks like this is not an email. "email@example.com"')
        }
}

 function validatePassword(valueInput, divInput, divError){
    let regExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
       if (regExpPassword.test(valueInput) == true){
           hideError(divInput, divError)
       }else{
           showError(divInput, divError, 'Must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number')
       }

}

 function validateEmpty(valueInput, divInput, divError, nameInput){
    if (valueInput.length == 0){
        showError(divInput, divError, nameInput);        
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border="1px solid red"
    divError.innerHTML =`<img src="./images/icon-error.svg" alt="icono de error" class="icon-error">
    <p class="error">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border="1px solid var(--GrayishBlue)";
    divError.innerHTML = ``;
}