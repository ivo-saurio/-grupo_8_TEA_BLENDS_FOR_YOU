let qs = function(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function(){
    let form = qs('#formCreate')

    form.addEventListener('submit', function(e){
        e.preventDefault()

        let inputName = qs('#name');
        let inputSize = qs('#size');
        let inputPrice = qs('#price');
        let selectCategory = qs('#category');
        let inputImage = qs('#image');
        let textareaDescription = qs('#description');

        let errorName = qs('#errorName');
        let errorSize = qs('#errorSize');
        let errorPrice = qs('#errorPrice');
        let errorCategory = qs('#errorCategory');
        let errorImage = qs('#errorImage');
        let errorDescription = qs('#errorDescription');
        
        let letters = /^[A-Za-z]+$/;

        let errores = {};

        // VALIDACIÓN NAME
        
        if(inputName.value.length == 0){
            errores.name = 'Este campo es obligatorio'
            errorName.innerText = errores.name

        } else if(inputName.value.length < 2){
            errores.name = 'Este campo tiene que tener mínimo 3 caracteres'
            errorName.innerText = errores.name

        } else if (!letters.test(inputName.value)){
            errores.name = 'Solo letras'
            errorName.innerText = errores.name

        } else {
            delete errores.name
            errorName.innerText = ""
        }

        if(Object.keys(errores).length != 0) {
          errorName.innerText = (errores.name)  
        } else {

        }

        // VALIDACIÓN SIZE

        if(inputSize.value.length == 0){
            errores.size = 'Este campo es obligatorio'
            errorSize.innerText = errores.size

        } else if(inputSize.value.length < 2){
            errores.size = 'Este campo tiene que tener mínimo 3 caracteres'
            errorSize.innerText = errores.size

        } else if (!letters.test(inputSize.value)){
            errores.size = 'Solo letras'
            errorSize.innerText = errores.size

        } else {
            delete errores.size
            errorSize.innerText = ""
        }

        //VALIDACION PRICE

        if(inputPrice.value.length == 0){
            errores.price = 'Este campo es obligatorio'
            errorPrice.innerText = errores.price

        } else {
            delete errores.size
            errorSize.innerText = ""
        }

        //VALIDACION CATEGORY

        if(selectCategory.value.length == 0){
            errores.category = 'Debe seleccionar una categoria'
            errorCategory.innerText = errores.category

        }

        //VALIDACION IMAGE

        if(inputImage.value.length == 0){
            errores.image = 'Debe seleccionar una imagen'
            errorImage.innerText = errores.image

        } else {
            delete errores.image
            errorImage.innerText = ""
        }
        

        //VALIDACION DESCRIPTION

        if(textareaDescription.value.length == 0){
            errores.description = 'Este campo es obligatorio'
            errorDescription.innerText = errores.description

        } else {
            delete errores.description
            errorDescription.innerText = ""
        }
        
        if(Object.keys(errores).length == 0) {
            form.submit()
          }

    })
})







