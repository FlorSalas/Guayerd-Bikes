document.addEventListener('DOMContentLoaded', () => {

    //variables
    const btnEnviar = document.querySelector('.boton');
    const formulario = document.querySelector('.formulario');

    //variables para campos
    const nombre = document.querySelector('#nombre');
    const email = document.querySelector('#email');
    const opcion = document.querySelector('#opcion');
    const mensaje = document.querySelector('#mensaje');

    //variables Expresiones regulares
    const erNombre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //boton enviar
    btnEnviar.disabled = true;
    btnEnviar.classList.add('btn-enviar');


    //campos formulario
    nombre.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    opcion.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);


    //enviar formulario
    formulario.addEventListener('submit', enviarFormulario);


    //**********funciones**********

    //valida campos
    function validarFormulario(e) {
        //valida select
        if (opcion.value !== "--Seleccione--") {
            e.target.classList.remove('error');
            e.target.classList.add('correcto');
        } else {
            e.target.classList.remove('correcto');
            e.target.classList.add('error');
        }


        //valida nombre && textarea
        if (e.target.type === "text" || e.target.type === "textarea") {

            if (e.target.value.length > 0) {
                e.target.classList.remove('error');
                e.target.classList.add('correcto');
            } else {
                e.target.classList.remove('correcto');
                e.target.classList.add('error');
            }
        }

        //valida el email
        if (e.target.type === "email") {
            if (erNombre.test(e.target.value)) {
                e.target.classList.remove('error');
                e.target.classList.add('correcto');
            } else {
                e.target.classList.remove('correcto');
                e.target.classList.add('error');
            }
        }
        //cuando todos los campos sean valido
        if (erNombre.test(email.value) && nombre.value.length > 0 && mensaje.value.length > 0 && opcion.value !== "--Seleccione--") {
            btnEnviar.disabled = false;
            btnEnviar.classList.remove('btn-enviar');
        }
    }

    //envia el email
    function enviarFormulario(e) {
        e.preventDefault();
        const spinner = document.querySelector('.sk-circle');
        spinner.style.display = "flex";
        setTimeout(() => {
            spinner.style.display = "none";
        }, 3000);

    }



});