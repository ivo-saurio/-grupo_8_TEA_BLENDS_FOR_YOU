let qs = function(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function(){

    let register = qs('#formRegister')

register.addEventListener('submit', function(e){
    e.preventDefault()
        let inputName = qs('#name');
            inputSurname = qs('#surname');
            inputAvatar = qs('#avatar');
            inputEmail = qs('#email');
            inputPassword = qs('#password');
            inputRepassword = qs('#repassword');


        let errorName = qs('#errorName');
            errorSurname = qs('#errorSurname');
            errorAvatar = qs('#errorAvatar');
            errorEmail = qs('#errorEmail');
            errorPassword = qs('#errorPassword');
            errorRepassword = qs('#errorRepassword');

    
    let regexOnlyLetters = /^[A-Za-z]+$/;
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

    let errores = {};

    //VALIDACION NOMBRE

    if(inputName.value.length == 0){
        errores.name = 'este campo es obligatorio'
        errorName.innerText = errores.name
    } else if(inputName.value.length < 2){
        errores.name = 'El nombre debe tener más de 2 caracteres'
        errorName.innerText = errores.name
    } else if(!inputName.value.match(regexOnlyLetters)){
        errores.name = 'El nombre debe tener solo letras'
        errorName.innerText = errores.name
    } else {
        errorName.innerText = ""
    }

    //VALIDACION APELLIDO

    if(inputSurname.value.length == 0){
        errores.surname = 'este campo es obligatorio'
        errorSurname.innerText = errores.surname
    } else if(inputSurname.value.length < 2){
        errores.surname = 'El nombre debe tener más de 2 caracteres'
        errorSurname.innerText = errores.surname
    } else if(!inputSurname.value.match(regexOnlyLetters)){
        errores.surname = 'El nombre debe tener solo letras'
        errorSurname.innerText = errores.surname
    } else {
        errorSurname.innerText = ""
    }

    //VALIDACION EMAIL

    if(!inputEmail.value.match(regexEmail)){
        errores.email = 'Ingresar email valido'
        errorEmail.innerText = errores.email
    } else {
        errorEmail.innerText = ""
    }

    //VALIDACION CONTRASEÑA

    if(!inputPassword.value.match(regexPassword)){
        errores.password = 'Su contraseña debe tener más de 6 caracteres y por lo menos una mayuscula, un caracter especial y un numero'
        errorPassword.innerText = errores.password
    } else {
        errorPassword.innerText = ""
    }


    if(Object.keys(errores).length === 0) {
        register.submit()
    }

    console.log(errores);
    })
})







// if ( (input_name.value=="") || (input_email.value=="") || (!input_email.value.includes("@")) ) {
//    alert("Complete los campos con el formato correspondiente");
// }

// if ((inputName.value!='') && (inputName.value.match(/^[A-Za-z]+$/)) ){
// }