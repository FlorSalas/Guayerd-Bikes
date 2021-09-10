//Obtener el banner del servidor.

const imgBanner = document.querySelector('#banner');
const link = document.querySelector('.link')



fetch('http://demo2420474.mockable.io/getHomeBanner')
.then(response => response.json())
.then(dato =>llamarBanner(dato))

function llamarBanner(dato){
    imgBanner.setAttribute('src', `${dato.imgUrl}`)
    imgBanner.setAttribute('alt', `${dato.title}`)
    link.setAttribute('href', `${dato.link}`)
}
    
  
       
    
