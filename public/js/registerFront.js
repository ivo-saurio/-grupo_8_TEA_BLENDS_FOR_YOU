let qs = function(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function(){

    let form = qs('#formRegister')

form.addEventListener('submit', function(e){
    e.preventDefault()
        let inputName = qs('#name');
            inputSurname = qs('#surname');
            inputAvatar = qs('#avatar');
            inputEmail = qs('#email');
            inputPassword = qs('#password');
            inputRepassword = qs('#repassword');


        let errorName = qs('#errorName')
            errorSurname = qs('#errorSurname')
            errorAvatar = qs('#errorAvatar')
            errorEmail = qs('#errorEmail')
            errorPassword = qs('#errorPassword')
            errorRepassword = qs('#errorRepassword')

    let errores = {}

    if(inputName.value.length == 0){
        errores.name = 'este campo es obligatorio'
        errorName.innerText = errores.name
    } else if(inputName.value.length < 2){
        errores.name = 'El nombre debe tener más de 2 caracteres'
        errorName.innerText = errores.name

    } else if(inputName.value.match(/^[A-Za-z]+$/)){
        errores.name = 'Solo letras'
        errorName.innerText = errores.name

    } else {
        errorName.innerText = ""
    }

    console.log(errores);
    })
})







// if ( (input_name.value=="") || (input_email.value=="") || (!input_email.value.includes("@")) ) {
//    alert("Complete los campos con el formato correspondiente");
// }

// if ((inputName.value!='') && (inputName.value.match(/^[A-Za-z]+$/)) ){
// }