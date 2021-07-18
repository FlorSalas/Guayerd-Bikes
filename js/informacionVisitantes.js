// Validacion email y nombre, con un flag para que no vuelva a repetir la pregunta.
if (!localStorage.getItem("validacionUsuario")) {
    let validacionUsuario = confirm("Desea ingresar su email y nombre?");
    localStorage.setItem("validacionUsuario", validacionUsuario);
    if (validacionUsuario) {
        let name = "";
        let seguir = true;
        while (seguir) {
            name = prompt("Ingrese su nombre: ");
            if (name === "" || (/\s/.test(name))) {
                alert("Ingrese un nombre válido. Recuerde que no puede estar en blanco o tener espacios.")
            } else {
                break;
            }
        }
        localStorage.setItem('name', name);
        let email = "";
        while (seguir) {
            email = prompt("Ingrese su email: ");
            if (email === "" || !email.includes('@') || !email.includes('.')) {
                alert("Por favor, ingrese una direccion de email válida.");
            } else {
                break;
            }
        }
        localStorage.setItem('email', email);
    }
}
/// Saludo con el nombre del usuario, segun la hora del día
function momentoDelDia() {
    if (localStorage.getItem('name')) {
        let fecha = new Date();
        let hora = fecha.getHours();
        if (hora >= 0 && hora < 6) {
            alert("Buenas madrugadas, " + localStorage.getItem('name'));
        } else if (hora >= 6 && hora < 12) {
            alert("Buen día, " + localStorage.getItem('name'));
        } else if (hora >= 12 && hora < 19) {
            alert("Buenas tardes, " + localStorage.getItem('name'));
        } else if (hora >= 19 && hora <= 23) {
            alert("Buenas noches, " + localStorage.getItem('name'));
        }
    }
  }
momentoDelDia();