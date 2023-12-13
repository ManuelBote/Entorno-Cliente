window.onload=inicio;

let tabla1 = document.querySelector("#cajaTabla1");
let tabla2 = document.querySelector("#cajaTabla2");
let tabla3 = document.querySelector("#cajaTabla3");


const PARTIDOS = ["Partido A", "Partido B", "Partido C", "Partido D"];
const totalRepresentantes = [0,0,0,0];
const totalVotos = [0,0,0,0];
const nombreProvincias = ["","","","",""];


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
                    totalVotos[i]+=parseInt(votos[i]);
                    i++;
                }

                console.log(partido)
                console.log(parseInt(valor.Representantes))

                totalRepresentantes[partido]+= parseInt(valor.representantes);
                nombreProvincias[partido]+= valor.nombreProvincia+" ";

            })

            tabla1.innerHTML = 
                "<tr><th scope='col'>Partido</th><th scope='col'>Nº de representantes</th></tr>";
            for (let i = 0; i<PARTIDOS.length; i++){
                    tabla1.innerHTML+= "<tr><td>"+PARTIDOS[i]+"</td><td>"+totalRepresentantes[i]+" Representantes</td></tr>";
            }

            tabla2.innerHTML = 
                "<tr><th scope='col'>Partido</th><th scope='col'>Provincias</th></tr>";
            for (let i = 0; i<PARTIDOS.length; i++){
                    tabla2.innerHTML+= "<tr><td>"+PARTIDOS[i]+"</td><td>"+nombreProvincias[i]+" Representantes</td></tr>";
            }

            tabla3.innerHTML = 
                "<tr><th scope='col'>Partido</th><th scope='col'>Votos</th></tr>";
            for (let i = 0; i<PARTIDOS.length; i++){
                    tabla3.innerHTML+= "<tr><td>"+PARTIDOS[i]+"</td><td>"+totalVotos[i]+" Votos</td></tr>";
            }

        }
    }

    xhr.open("POST","http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php",true);
    xhr.send();
}
