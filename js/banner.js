//Obtener el banner del servidor.

const banner = document.querySelector('#banner');

const renderBanner = image => banner.setAttribute('src', image)


fetch('http://demo2420474.mockable.io/getHomeBanner')
.then(response => response.json())
.then(banner =>{
    renderBanner(banner.imgUrl)
});