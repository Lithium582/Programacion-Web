function Submit() {
    alert("HOLA JUAN CARLOS CÓMO ESTÁS");

    window.location.href = "https://webasignatura.ucu.edu.uy/login/index.php";
}

function Jakiar() {
    document.getElementById("txtPass").value = "ké mirá";
    document.querySelector("#txtUsuario").value = "OLA XD";

    document.querySelector("div.bg-gray-300").classList.add("bg-green-900");
    document.querySelector("p.text-xl").textContent = "HOLA JUANCARLOS";
}

function CargarEventos() {
    if (navigator.userAgent.indexOf("Firefox") > -1) {
        document.getElementById("txtPass").value = "Holajuancarlos";
        document.querySelector("#txtUsuario").value = "angel.mamberto";
    }

    document.querySelector("#aScope").addEventListener("click", () => {
        var a = 2;
        let d = 1;
        if(3 < 9) {
            var b = 14;
            let c = 16;

            alert(d);
            alert(c);
        }

        alert(b);
        alert(c);
    });
    
    document.getElementById("aObjetos").addEventListener("click", function () {
        class auto {
            constructor(marca, modelo, ano) {
                this.marca = marca;
                this.modelo = modelo;
                this.ano = ano;
            }

            queMarcaSoy() {
                return (this.marca == "VW" ? "Soy un Volkswagen" : "Debo ser chino");
            }
        }

        var unAutito = new auto("VW", "UP!", 2021);

        console.log(unAutito.marca);
        console.log(unAutito.queMarcaSoy());
    });
}
