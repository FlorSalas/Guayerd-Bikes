let email = "";     let seguir=true;

if(!localStorage.getItem('email')){
    let novedadesEmail = confirm("¿Desea irecibir un email con novedades?");
    localStorage.setItem("novedadesEmail", novedadesEmail);
    
        if(novedadesEmail){
        
            while(seguir){
                email = prompt("Ingrese su email: ");
                if (email === "" || !email.includes('@') || !email.includes('.')) {
                    seguir= confirm("Por favor, ingrese una direccion de email válida.");
                }else{
                    break
                }
            } 
        }

        localStorage.setItem('email', email);

        if(novedadesEmail){
            let pregunta= confirm("¿Desea ver las ofertas disponibles para usted?");
             if(pregunta){
                 window.location.replace("ofertasPersonalizadas.html");
             }
         }
     }
     

if(localStorage.getItem('email')){
    let pregunta= confirm("¿Desea ver las ofertas disponibles para usted?");
             if(pregunta){
                 window.location.replace("ofertasPersonalizadas.html");
             }
}