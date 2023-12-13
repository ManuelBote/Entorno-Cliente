window.onload=inicio;

let tabla = document.querySelector("#cajaTabla");

//const partidos = ["Partido A", "Partido B", "Partido C", "Partido D"];

let partidoA = [];
let partidoB = [];
let partidoC = [];
let partidoD = [];

function inicio(){
    mostrarProvincias();
}

function mostrarProvincias(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(this.responseText);
            objeto.forEach(function(valor, indice){
                let votos = [valor.votosPA, valor.votosPB, valor.votosPC, valor.votosPD];
                let votosMayor = 0;
                let partido = 0
                let i = 0;

                while(i < votos.length){
                    if(parseInt(votos[i])>votosMayor){
                        votosMayor=parseInt(votos[i]);
                        partido = i;
                        //console.log(votosMayor);
                    }
                    i++;
                }

                console.log(partido);

                if(partido == 0){
                    partidoA.push(valor.nombreProvincia);
                    //console.log("partidoA" +partidoA);
                } else if(partido == 1){
                    partidoB.push(valor.nombreProvincia);
                    //console.log("partidoB" +partidoB);
                } else if(partido == 2){
                    partidoC.push(valor.nombreProvincia);
                    //console.log("partidoC"+partidoC);
                } else if(partido == 3){
                    partidoD.push(valor.nombreProvincia);
                    //console.log("partidoD"+partidoD);
                }
            })

            tabla.innerHTML = 
                "<tr><th scope='col'>Partido</th><th scope='col'>Provincias</th></tr>"+
                "<tr><td>Partido A</td><td>"+partidoA+" Representantes</td></tr>"+
                "<tr><td>Partido B</td><td>"+partidoB+" Representantes</td></tr>"+
                "<tr><td>Partido C</td><td>"+partidoC+" Representantes</td></tr>"+
                "<tr><td>Partido D</td><td>"+partidoD+" Representantes</td></tr>";

        }
    }

    xhr.open("POST","http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php",true);
    xhr.send();
}
