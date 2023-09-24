window.onload=inicio;

let btnJugar=document.getElementById("jugar");
let caja=document.getElementById("cajaPadre");
let puntos=document.getElementById("sppuntos");


function inicio(){

    let foto=document.createElement("img");

    for(let i = 0; i<5; i++){
        let divs=document.createElement("img");
        divs.className="cajas";
        divs.setAttribute("Name","imagen");
        caja.appendChild("divs");
    }

    btnJugar.onclick=jugar

    function jugar(){

        cargarImagenes();

    }


    function cargarImagenes(){

        let totalCajas = document.getElementsByName("cajas");
        //const = [];

        for(let i = 0;i<5;i++){
            let num = Math.round(Math.random()*19);

        }

    }
}