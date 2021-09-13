document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelectorAll('.imgProducto');
    const titulo = document.querySelectorAll('.titulo');
    const stock = document.querySelectorAll('.stock');
    const precio = document.querySelectorAll('.precio');
    const descuento = document.querySelectorAll('.descuento');
    const descripcion = document.querySelectorAll('.descripcion');
    const moneda = document.querySelectorAll('.moneda')
    const monedaDescuento = document.querySelectorAll('.moneda-descuento')


    fetch("https://demo2420474.mockable.io/productList")
        .then(respuesta => respuesta.json())
        .then(dato => mostraProductos(dato))



    function mostraProductos(productoss) {
    
        console.log(productoss);
        productoss.forEach((listaProducto, i) => {
            img[i].setAttribute('src', `${listaProducto.imgUrl}`);
            img[i].setAttribute('alt', `${listaProducto.title}`)
            titulo[i].textContent = `${listaProducto.title}`;
            stock[i].textContent = `Stock: ${listaProducto.inStock}`;
            precio[i].textContent = `$${listaProducto.price}`;
            descripcion[i].textContent = `${listaProducto.description}`;
            moneda[i].textContent = `${listaProducto.currency}`

            if (listaProducto.discountPrice !== undefined) {
                descuento[i].textContent = `$${listaProducto.discountPrice}`
                monedaDescuento[i].textContent = `${listaProducto.currency}`
                precio[i].classList.add('text-none')
            }
        });
    }

});