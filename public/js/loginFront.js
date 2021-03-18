let qs = function(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function(){

    let login = qs('#formLogin')

login.addEventListener('submit', function(e){
    e.preventDefault()

        let inputEmail = qs('#email');
            inputPassword = qs('#password');
           

        let errorEmail = qs('#errorEmail');
            errorPassword = qs('#errorPassword');
           

    
const expresiones = {
            password: /^.{6,12}$/, // 6 a 12 digitos.
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            }
    let errores = {};

    

    
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
        login.submit()
    }

    console.log(errores);
    })
})
