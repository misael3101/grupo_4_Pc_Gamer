window.addEventListener('load', function(){
    let formulario = document.querySelector(".formulario");
    console.log(formulario)

    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let errores =[];

        let correo = document.querySelector("input#correo");
        let emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailPath = correo.value;
        console.log(correo);
        if(correo.value ==""){
            errores.push("Debe ingresar su correo electronico")
            
            
        }else if(!emailValid.exec(emailPath)){
            errores.push("Favor ingresar un email válido")
        }


        let contrasena = document.querySelector("input#contraseña");
        console.log(contrasena);
        if(contrasena.value ==""){
            errores.push("Debe ingresar su contraseña")
           
        }



        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector(".errores");
            ulErrores.classList.add("mensaje-error");
            ulErrores.innerHTML = "";
            for(let i=0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>• " + errores[i] + "</li>"
            }

            /*let divErrores = document.querySelector("div.errores");
            divErrores.style.color = "red";*/

        } else{
            formulario.submit();
        }
    })
})