var btnAbrirPopup = document.querySelector('#btn-abrir-popup'),
	overlay = document.querySelector('#overlay'),
	popup = document.querySelector('#popup-email'),
	btnCerrarPopup = document.querySelector('#btn-cerrar-popup'),
	popupOff = document.querySelector('.popup-confirm'),
	popupNo = document.querySelector('#btn-no_abrir-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
	popupOff.classList.add('popup-confirm-off');
});

popupOff.addEventListener('click', function(){
	popupOff.classList.add('popup-confirm-off');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
}); 


