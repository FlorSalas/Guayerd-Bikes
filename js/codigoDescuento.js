//codigo descuento

if (localStorage.getItem('name')) {
    setTimeout(promo(), 5000);
}

function promo() {

    let descuento = ["5HOTSALE para obtener un 5% de descuento", "10HOTSALE para obtener un 10% de descuento", "15HOTSALE para obtener un 15% de descuento", "20HOTSALE para obtener un 20% de descuento", "25HOTSALE para obtener un 25% de descuento"];
    let indice = Math.floor(Math.random() * 4) + 1;
    alert(`${localStorage.getItem('name')}` + " " + "Gracias por elegirnos! Le obsequiamos el código **PROMO** con su compra." + "\n" + `${descuento[indice]}`);
}