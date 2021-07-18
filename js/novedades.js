//Desea recibir email con novedades?
if (!localStorage.getItem("novedadesEmail")) {
    let novedadesEmail = confirm("¿Desea irecibir un email con novedades?");
    localStorage.setItem("novedadesEmail", novedadesEmail);
}