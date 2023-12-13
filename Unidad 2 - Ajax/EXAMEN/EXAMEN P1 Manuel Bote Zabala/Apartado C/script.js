window.onload=inicio;

let tabla = document.querySelector("#cajaTabla");

//const partidos = ["Partido A", "Partido B", "Partido C", "Partido D"];

let partidoA = 0;
let partidoB = 0;
let partidoC = 0;
let partidoD = 0;

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
                    partidoA+= votosMayor;
                    //console.log("partidoA" +partidoA);
                } else if(partido == 1){
                    partidoB+= votosMayor;
                    //console.log("partidoB" +partidoB);
                } else if(partido == 2){
                    partidoC+= votosMayor;
                    //console.log("partidoC"+partidoC);
                } else if(partido == 3){
                    partidoD+= votosMayor;
                    //console.log("partidoD"+partidoD);
                }
            })

            tabla.innerHTML = 
                "<tr><th scope='col'>Partido</th><th scope='col'>Votos</th></tr>"+
                "<tr><td>Partido A</td><td>"+partidoA+" Votos</td></tr>"+
                "<tr><td>Partido B</td><td>"+partidoB+" Votos</td></tr>"+
                "<tr><td>Partido C</td><td>"+partidoC+" Votos</td></tr>"+
                "<tr><td>Partido D</td><td>"+partidoD+" Votos</td></tr>";

        }
    }

    xhr.open("POST","http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php",true);
    xhr.send();
}
