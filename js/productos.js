document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelectorAll('.imgProducto');
    const titulo = document.querySelectorAll('.titulo');
    const stock = document.querySelectorAll('.stock');
    const precio = document.querySelectorAll('.precio');
    const descuento = document.querySelectorAll('.descuento');

    fetch("https://demo2420474.mockable.io/productList")
        .then(respuesta => respuesta.json())
        .then(dato => mostraProductos(dato))



    function mostraProductos(productoss) {
        let i = 0;
        console.log(productoss);
        productoss.forEach(productos => {
            img[i].setAttribute('src', `${productos.imgUrl}`);
            img[i].setAttribute('alt', `${productos.title}`)
            titulo[i].textContent = `${productos.title}`;
            stock[i].textContent = `stock: ${productos.inStock}`;
            precio[i].textContent = `Precio: $${productos.price}`;
            if (productos.discountPrice !== undefined) {
                descuento[i].textContent = `Descuento: $${productos.discountPrice}`
                precio[i].classList.add('text-none')
            }
            i++;
        });
    }

});