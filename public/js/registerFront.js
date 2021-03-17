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

    
const expresiones = {
            name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^.{6,12}$/, // 6 a 12 digitos.
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            }
    let errores = {};

    //VALIDACION NOMBRE

    if(inputName.value.length == 0){
        errores.name = 'este campo es obligatorio'
        errorName.innerText = errores.name
    } else if(inputName.value.length < 2){
        errores.name = 'El nombre debe tener más de 2 caracteres'
        errorName.innerText = errores.name
    } else if(!inputName.value.match(expresiones.name)){
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
    } else if(!inputSurname.value.match(expresiones.name)){
        errores.surname = 'El nombre debe tener solo letras'
        errorSurname.innerText = errores.surname
    } else {
        errorSurname.innerText = ""
    }

    //VALIDACION EMAIL

    if(!inputEmail.value.match(expresiones.email)){
        errores.email = 'Ingresar email valido'
        errorEmail.innerText = errores.email
    } else {
        errorEmail.innerText = ""
    }

    //VALIDACION CONTRASEÑA

    if(!inputPassword.value.match(expresiones.password)){
        errores.password = 'Su contraseña debe tener más de 6 caracteres'
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
