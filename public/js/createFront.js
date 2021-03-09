let qs = function(element) {
    return document.querySelector(element);
}

let errores = []

let botonCreate = document.getElementById('botonCreate');

botonCreate.addEventListener('click',function(e){
    
    let name = qs("#name");
    
        if(name.value.length == 0) {
            e.preventDefault();
            errores.push('Este campo es obligatorio')
        } else{
            alert('El formulario se está por enviar');
        }

        if(errores.length != 0){
            let ulErrores = document.querySelector('')
            for(let i = 0; i<errores.length; i++){
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        }
    
});



//if ((inputName.value!='') && (inputName.value.match(/^[A-Za-z]+$/)) ){
//}








