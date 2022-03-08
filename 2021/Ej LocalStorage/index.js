function Submit() {
    var nombre = document.getElementById("txtNombre").value;
    var edad = document.getElementById("txtEdad").value;
    var usuario = document.getElementById("txtUsuario").value;
    var pass = document.getElementById("txtPass").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("pass", pass);

    alert("Registro exitoso!!");
}

function CargarPagina() {
    var nomUsuario = sessionStorage.getItem("usuarioLogueado");
    document.getElementById("lblUsuario").innerHTML = "Usuario: " + nomUsuario;

    var cant = parseInt(sessionStorage.getItem("CantAccesos"));

    if (isNaN(cant)) {
        cant = 1;

        alert("Es la primera vez que visitas nuestro sitio! Bienvenido!");
    } else {
        alert("Es la vez número " + cant + " que andás por acá. ¿Se te perdió algo?");
        cant++;
    }
    sessionStorage.setItem("CantAccesos", cant);
    
    var fechaActual = new Date().toDateString();
    document.cookie = "ultimoacceso=" + fechaActual;

    console.log("I WANNA BE LÁIK THE CÚKIS", document.cookie);

    var nombre = localStorage.getItem("nombre");
    var edad = localStorage.getItem("edad");
    var usuario = localStorage.getItem("usuario");
    var pass = localStorage.getItem("pass");

    document.getElementById("txtNombre").value = nombre
    document.getElementById("txtEdad").value = edad;
    document.getElementById("txtUsuario").value = usuario;
    document.getElementById("txtPass").value = pass;
}

function SubmitRegistro() {
    var nomUsuario = document.getElementById("txtUsuario").value;
    var pass = document.getElementById("txtPass").value;

    sessionStorage.setItem("usuarioLogueado", nomUsuario);
    document.getElementById("lblUsuario").innerHTML = "Usuario: " + nomUsuario;

    alert("Bienvenide " + nomUsuario);
}

function Salir() {
    sessionStorage.setItem("usuarioLogueado", "");
    document.getElementById("lblUsuario").innerHTML = "Usuario: ";
}
