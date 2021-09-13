const popupProductos = document.querySelector('.popup-productos');
const close = document.querySelector('.close');
const descuentoPopup = document.querySelector('.descuento-popup');
const codigo = document.querySelector('.codigoDesc');


window.onload = function() {
    setTimeout(function() {
        // Cuando la cookie existe, no mostrar el popup
        //  if (getCookie('mostrarPopup')) {
        //      return;
        //  }

        // muestra el popup
        popupProductos.style.display = "block"

        // muestra el overlay cuando aparece el popup
        document.getElementById('overlay-productos').style.display = 'block';

        // El popup fue mostrado. Cookie seteada para que dure un dia
        setCookie('mostrarPopup', 'yes', 1);

        // Seteo 2 segundos de delay a la funcion
    }, 2000)
}

// funcion para cerrar el popup
close.addEventListener('click', () => {
    popupProductos.style.display = "none"
        // se saca el overlay despues de cerrar la ventana
    document.getElementById('overlay-productos').style.display = 'none';
})


fetch('https://demo2420474.mockable.io/getCoupon')
    .then(response => response.json())
    .then(dato => mostrarDato(dato))

function mostrarDato(dato) {
    descuentoPopup.innerHTML = `${dato.discountPercentage}<sup>%</sup><span>Off</span>`
    codigo.textContent = `${dato.text}`
}