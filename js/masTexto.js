const contenedorPadre = document.querySelector('.leer-mas-contenedor');

contenedorPadre.addEventListener('click', event => {
    const actual = event.target;

    const leerMasBtn = actual.className.includes('leer-mas-btn');

    if(!leerMasBtn) return;

    const textoActual = event.target.parentNode.querySelector('.leer-mas-texto');

    textoActual.classList.toggle('leer-mas-texto--show');

    actual.textContent = actual.textContent.includes('Leer mas') ? "Leer menos..." : "Leer mas...";
})