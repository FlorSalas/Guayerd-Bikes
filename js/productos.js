document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelectorAll('.imgProducto');
    const titulo = document.querySelectorAll('.titulo');
    const stock = document.querySelectorAll('.stock');
    const precio = document.querySelectorAll('.precio');
    const descuento = document.querySelectorAll('.descuento');
    const descripcion = document.querySelectorAll('.descripcion');


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
            stock[i].textContent = `Stock: ${productos.inStock}`;
            precio[i].textContent = `$${productos.price}`;
            descripcion[i].textContent = `${productos.description}`;

            if (productos.discountPrice !== undefined) {
                descuento[i].textContent = `$${productos.discountPrice}`
                precio[i].classList.add('text-none')
            }
            i++;
        });
    }

});