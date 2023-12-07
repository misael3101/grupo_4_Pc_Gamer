window.addEventListener("load", () => {

    console.log('aa')
    let form = document.querySelector('.formulario');
    console.log(form)
    form.nombre.focus();

    form.addEventListener("submit", (e) => {
        e.preventDefault();


        /*creamos un array con errores vacios, en caso de ir detectadno se agregaran aqui*/

        let errors = [];

        let nombre = document.querySelector('input#nombre');
        let apellido = document.querySelector('input#apellido');
        let correo = document.querySelector('input#correo');
        let contrasena = document.querySelector('input#contrasena');

        //----------- nombre------------

        if(nombre.value == ""){
            errors.push("Debes agregar un nombre");

        }else if(nombre.value.length < 2){
            errors.push("El nombre debe contener mínimo 2 caracteres")
        }

        //--------------apellido--------------

        if(apellido.value ==""){
            errors.push("El apellido tiene que estar completo")

        }else if(apellido.value.length < 2){
            errors.push("El apellido debe contener mínimo 2 caracteres")
        }

        //------------contraseña----------------

        let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/;
        let passwordPath = contrasena.value;
        if(contrasena.value ==""){
            errors.push("La contraseña tiene que estar completo")

        }else if(contrasena.value.length < 8){
            errors.push("La contraseña debe contener mínimo 8 caracteres")
        }else if(!passwordValid.exec(passwordPath)){
            errors.push("La contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial")
        }

        //-----------------------correo----------------

        let emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailPath = correo.value;
    
        if(correo.value ==""){
            errors.push("El email tiene que estar completo")
        }else if(correo.value.length < 2){
            errors.push("El email debe contener mínimo 2 caracteres")
        }else if(!emailValid.exec(emailPath)){
            errors.push("Por favor ingresar un email válido")
        }

       console.log(errors)


        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores'); // Corrección aquí
            ulErrors.classList.add("mensaje-error"); // Corrección aquí
            ulErrors.innerHTML = "Error:";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>• " + errors[i] + "</li>";
            }
        } else {

            form.submit();
        }
    })





})