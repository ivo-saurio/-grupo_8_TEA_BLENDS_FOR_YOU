let qs = function(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function(){

    let form = qs('#formEdit')

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
        
        const expresiones = {
            letters:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/ // Letras y espacios
        }
        let errores = {};

        // VALIDACIÓN NAME
        
        if(inputName.value.length == 0){
            errores.name = 'Este campo es obligatorio'
            errorName.innerText = errores.name

        } else if(inputName.value.length < 2){
            errores.name = 'Este campo tiene que tener mínimo 3 caracteres'
            errorName.innerText = errores.name

        } else if (!inputName.value.match(expresiones.letters)){
            errores.name = 'Solo letras'
            errorName.innerText = errores.name

        } else {
            errorName.innerText = ""
        }

        // VALIDACIÓN SIZE

        if(inputSize.value.length == 0){
            errores.size = 'Este campo es obligatorio'
            errorSize.innerText = errores.size

        } else if(inputSize.value.length < 2){
            errores.size = 'Este campo tiene que tener mínimo 3 caracteres'
            errorSize.innerText = errores.size

        } else if (!inputName.value.match(expresiones.letters)){
            errores.size = 'Solo letras'
            errorSize.innerText = errores.size

        } else {
            errorSize.innerText = ""
        }

        //VALIDACION PRICE

        if(inputPrice.value.length == 0){
            errores.price = 'Este campo es obligatorio'
            errorPrice.innerText = errores.price

        } else {
            errorSize.innerText = ""
        }

        //VALIDACION CATEGORY

        

        //VALIDACION IMAGE

        if(inputImage.value.length == 0){
            errores.image = 'Debe seleccionar una imagen'
            errorImage.innerText = errores.image

        } else {
            errorImage.innerText = ""
        }
        

        //VALIDACION DESCRIPTION

<<<<<<< HEAD
        if(textareaDescription.value.length == 0){
            errores.description = 'Este campo es obligatorio'
            errorDescription.innerText = errores.description

        } else {
            errorDescription.innerText = ""
        }
=======
        
>>>>>>> 6a8983a6e3c815a4cd64a6e638c0c78dc9618a5e
        
        if(Object.keys(errores).length === 0) {
            form.submit()
          }
          console.log(errores);
    })
})
