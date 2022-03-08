var cantEquipos = 1;

function AgregarFila () {
    cantEquipos++;

    var elDiv = document.getElementById("divContenedor");
    var botonAgregar = document.getElementById("btnAgregar");

    var nuevaLabel = document.createElement("label");
    nuevaLabel.innerHTML = "Grupo " + cantEquipos;
    nuevaLabel.setAttribute("for", "txtGrupo" + cantEquipos);

    elDiv.append(nuevaLabel);

    var nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("flex", "items-center");

    var nuevoInput = document.createElement("input");
    nuevoInput.classList.add("rounded-full", "h-8", "w-full", "px-2", "txtEquipo");
    nuevoInput.id = "txtGrupo" + cantEquipos;

    nuevoDiv.append(nuevoInput);
    nuevoDiv.appendChild(botonAgregar);
    elDiv.append(nuevoDiv);
}

function Alumnos() {
    var divResultados = document.getElementById("divResultados");
    divResultados.innerHTML = "";
    var arrayAlumnos = [
        "Juan Abal",
        "Emmanuel Acosta",
        "Andrés Aicardi",
        "Aparicio Baptista",
        "Federico Becoña",
        "Ana Laura Bergallo",
        "Francisco Bongiovanni",
        "Diego Capelli",
        "Andrés Carriquiry",
        "Bettina Carrizo",
        "Bruno Cattáneo",
        "Ignacio Dibarrart",
        "Germán Dotta",
        "Alejandra Etchevers",
        "Franco Gai",
        "Armando Hernández",
        "Rodrigo López",
        "Álvaro Lupacchino",
        "Felipe Mestre",
        "José Paz",
        "Rafael Pelacchi",
        "Gianluca Positano",
        "Facundo Ramírez",
        "Pablo Quagliata"
    ];

    arrayAlumnos = arrayAlumnos.filter(x => x != "");
    let cant = arrayAlumnos.length;
    
    let i = 0;

    while (cant > 0) {
        i++
        let pos = Math.floor(Math.random() * cant);

        crearNuevoResultado(i, arrayAlumnos[pos]);

        cant--;
        arrayAlumnos.splice(pos, 1);
    }

    document.getElementById("divContenedor").hidden = true;
    document.getElementById("divResultados").hidden = false;

    document.getElementById("pTitulo").innerHTML = "Sorteo Alumnos";

    document.getElementById("btnSubmit").hidden = true;
    document.getElementById("btnSortearAlumnos").hidden = true;
    document.getElementById("btnVolver").hidden = false;
}

function Submit() {
    var divResultados = document.getElementById("divResultados");
    divResultados.innerHTML = "";

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
    var listaTextBoxesGrupos = document.getElementsByClassName("txtEquipo");

    // El objeto retornado no es un array exactamente. Por eso, para usar las funciones de "Array.prototype", vamos a necesitar llamarlo así
    var listaGrupos = Array.prototype.map.call(listaTextBoxesGrupos, (x => x.value));
    listaGrupos = listaGrupos.filter(x => x != "");
    
    let cant = listaGrupos.length;

    if(cant == 0) {
        alert("Habilitame algún grupo ñeri");
        return;
    }
    
    let i = 0;

    while (cant > 0) {
        i++
        let pos = Math.floor(Math.random() * cant);

        crearNuevoResultado(i, listaGrupos[pos]);

        cant--;
        listaGrupos.splice(pos, 1);
    }

    document.getElementById("divContenedor").hidden = true;
    document.getElementById("divResultados").hidden = false;

    document.getElementById("btnSubmit").hidden = true;
    document.getElementById("btnVolver").hidden = false;
}

function Volver() {
    document.getElementById("pTitulo").innerHTML = "Datos de los equipos";
    document.getElementById("divContenedor").hidden = false;
    document.getElementById("divResultados").hidden = true;

    document.getElementById("btnSubmit").hidden = false;
    document.getElementById("btnSortearAlumnos").hidden = false;
    document.getElementById("btnVolver").hidden = true;
}

function crearNuevoResultado (posicion, grupo) {
    var divResultados = document.getElementById("divResultados");
    
    var nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("flex", "items-center");

    var nuevoBoton = document.createElement("button");
    nuevoBoton.classList.add("rounded-full", "h-8", "w-8", "px-2", "bg-blue-400", "text-gray-100", "text-bold");
    nuevoBoton.innerHTML = posicion;
    nuevoBoton.disabled = true;

    var nuevoInput = document.createElement("input");
    nuevoInput.classList.add("rounded-full", "h-8", "w-full", "px-2", "txtEquipo");
    nuevoInput.value = grupo;
    nuevoInput.disabled = true;

    nuevoDiv.append(nuevoBoton);
    nuevoDiv.append(nuevoInput);

    divResultados.append(nuevoDiv);
}
