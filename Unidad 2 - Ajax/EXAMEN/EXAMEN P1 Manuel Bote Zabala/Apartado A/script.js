window.onload=inicio;

let tabla = document.querySelector("#cajaTabla");

//const partidos = ["Partido A", "Partido B", "Partido C", "Partido D"];

let partidoA = 0;
let partidoB = 0;
let partidoC = 0;
let partidoD = 0;

function inicio(){
    mostrarTotalRepresentante();
}

function mostrarTotalRepresentante(){
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
                //console.log("Calculo" + votos)
                
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
                    partidoA= partidoA + parseInt(valor.Representantes);
                    //console.log("partidoA" +partidoA);
                } else if(partido == 1){
                    partidoB= partidoB + parseInt(valor.Representantes);
                    //console.log("partidoB" +partidoB);
                } else if(partido == 2){
                    partidoC= partidoC + parseInt(valor.Representantes);
                    //console.log("partidoC"+partidoC);
                } else if(partido == 3){
                    partidoD= partidoD + parseInt(valor.Representantes);
                    //console.log("partidoD"+partidoD);
                }
            })

            tabla.innerHTML = 
                "<tr><th scope='col'>Partido</th><th scope='col'>Nº de representantes</th></tr>"+
                "<tr><td>Partido A</td><td>"+partidoA+" Representantes</td></tr>"+
                "<tr><td>Partido B</td><td>"+partidoB+" Representantes</td></tr>"+
                "<tr><td>Partido C</td><td>"+partidoC+" Representantes</td></tr>"+
                "<tr><td>Partido D</td><td>"+partidoD+" Representantes</td></tr>";

        }
    }

    xhr.open("POST","http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php",true);
    xhr.send();
}
