let nombre = prompt("ingresa tu nombre: ");
let edad = prompt("ingresa tu edad: ");

switch (edad) {
    case "18":
        alert("tienes acceso a la disco");
        break;
    case "17":
        alert(" te falta un año para ingresar a la disco");
        break;
    default:
        alert(" No pudimos validar tu edad")
        break;
            }