var btnAbrirPopup = document.querySelector('#btn-abrir-popup'),
	overlay = document.querySelector('#overlay'),
	popup = document.querySelector('#popup-email'),
	btnCerrarPopup = document.querySelector('#btn-cerrar-popup'),
	popupOff = document.querySelector('.popup-confirm'),
	popupNo = document.querySelector('#btn-no_abrir-popup');


const email_form = document.querySelector('#form_email');
const name_form = document.querySelector('#form_name');
const erEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//BOTON SI
btnAbrirPopup.addEventListener('click', function () {
	overlay.classList.add('active');
	popup.classList.add('active');
	popupOff.classList.add('popup-confirm-off');
	
});
//BOTON NO
popupNo.addEventListener('click', function () {
	popupOff.classList.add('popup-confirm-off');
});


btnCerrarPopup.addEventListener('click', function (e) {
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

//Obtener valores de los imputs
name_form.addEventListener('blur', guardar);
email_form.addEventListener('blur', guardar);

function guardar(e) {
	if (e.target.type === 'email') {
		if (erEmail.test(e.target.value)) {
			localStorage.setItem('valorEmail', e.target.value)
		}
	}
	if(e.target.type === 'text'){
		localStorage.setItem('valorNombre', e.target.value)
	}
}
