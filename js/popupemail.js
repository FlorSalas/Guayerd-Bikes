var btnAbrirPopup = document.querySelector('#btn-abrir-popup'),
    overlay = document.querySelector('#overlay'),
    popup = document.querySelector('#popup-email'),
    btnCerrarPopup = document.querySelector('#btn-cerrar-popup'),
    popupOff = document.querySelector('.popup-confirm'),
    popupNo = document.querySelector('#btn-no_abrir-popup');

// inputs
const enviarDatos = document.querySelector('#formulario');
const email_form = document.querySelector('#form_email');
const name_form = document.querySelector('#form_name');
const erEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//comprobar si ya esta suscripto
if (!(localStorage.getItem('valorNombre') === null && localStorage.getItem('valorEmail') === null)) {
    popupOff.classList.add('popup-confirm-off');
}


//valor email
let valorEmail;

//BOTON SI
btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
    popupOff.classList.add('popup-confirm-off');


});
//BOTON NO
popupNo.addEventListener('click', function() {
    popupOff.classList.add('popup-confirm-off');

});


//Obtener valores de los imputs
name_form.addEventListener('blur', guardar);
email_form.addEventListener('blur', guardar);

function guardar(e) {
    if (e.target.type === 'email') {
        if (erEmail.test(e.target.value)) {
            localStorage.setItem('valorEmail', e.target.value)
            valorEmail = true;
        } else {
            valorEmail = false;
        }
    }
    if (e.target.type === 'text') {
        localStorage.setItem('valorNombre', e.target.value)
    }
}

//evento suscribir

enviarDatos.addEventListener('submit', enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
    enviarDatosServidor();

}

//enviar los datos el servidior

function enviarDatosServidor() {
    //funcion id
    function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    //enviar datos al servidor
    fetch('https://demo2420474.mockable.io/submitForm', {
        method: 'POST',
        body: JSON.stringify({
            token: `${generateUUID()}`,
            name: `${name_form.value}`,
            email: `${email_form.value}`,
            sendEmail: `${valorEmail}`
        })
    })

}