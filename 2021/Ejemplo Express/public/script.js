function hole () {
    console.log("Bienvenido");
}

function fobal() {
    fetch('http://localhost:1337/fobal')
        .then(async (response) => {
            if (response.status == 404) {
                alert("PAGINITA NOT FOUND");
                return;
            } else {
                console.log(response);
                var data = await response.json();
                var tabla = document.getElementById("SoyLaTablita");
                tabla.innerHTML = "";

                if (data != null && data.length > 0) {
                    let contenido = `<tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Mail</th>
                        </tr>`;
                        
                    var content = "";
                    data.forEach((x) => {
                        contenido += `<tr>
                            <td>${x.firstName} </td>
                            <td>${x.lastName}</td>
                            <td>${x.email}</td>
                        </tr>`;
                    });

                    tabla.innerHTML = contenido;
                } else {
                    document.getElementsByTagName("body")[0].append("hoy no hay fóbal");
                }
            }
        });
}

function teletubbies() {
    fetch('http://localhost:1337/teletubbies')
        .then(async (response) => {
            if (response.status == 404) {
                alert("PAGINITA NOT FOUND");
                return;
            } else {
                console.log(response);
                var data = await response.json();
                var tabla = document.getElementById("SoyLaTablita");
                tabla.innerHTML = "";

                if (data != null && data.length > 0) {
                    alert("Teletubbie ebeía ta umieno!");
                } else {
                    document.getElementById("lblError").innerHTML = "ON TA TINKI WINKI";
                }
            }
        });
}

function digimon() {
    fetch('http://localhost:1337/digimon')
        .then(async (response) => {
            if (response.status == 404) {
                alert("PAGINITA NOT FOUND");
                return;
            } else {
                alert("Jakiado lince");
                return;
            }
        });
}

