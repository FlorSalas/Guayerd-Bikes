if(!localStorage.getItem('email')){
    let novedadesEmail = confirm("¿Desea irecibir un email con novedades?");
    localStorage.setItem("novedadesEmail", novedadesEmail);
    if(novedadesEmail){
        let pregunta= confirm("¿Desea ver las ofertas disponibles para usted?");
         if(pregunta){
             window.location.replace("ofertasPersonalizadas.html");
         }
     }
}

