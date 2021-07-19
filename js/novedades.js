let seguir=true;
if(!localStorage.getItem("novedades") && localStorage.getItem("email")){ 
    let novedades = confirm("Desea recibir novedades por email?");
    localStorage.setItem("novedades", novedades);
    if(novedades){
        let mostrarOfertas = confirm("¿Desea ver las ofertas disponibles para usted?");
        if(mostrarOfertas){
            window.location.replace("ofertasPersonalizadas.html");
        }    
    }
}else if(!localStorage.getItem("novedades") && !localStorage.getItem("email") ){
    let novedades = confirm("Desea recibir novedades por email?");
    localStorage.setItem("novedades", novedades);
    if(novedades){
        while (seguir) {
            email = prompt("Ingrese su email: ");
            if (email === "" || !email.includes('@') || !email.includes('.')) {
            seguir = confirm("Por favor, ingrese una direccion de email válida.");
            } else {
                  break
            }
            }
        let mostrarOfertas = confirm("¿Desea ver las ofertas disponibles para usted?");
        if(mostrarOfertas){
            window.location.replace("ofertasPersonalizadas.html");
        }    
    }
}
