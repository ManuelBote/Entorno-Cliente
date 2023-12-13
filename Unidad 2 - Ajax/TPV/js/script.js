window.addEventListener("load", inicio);
//total de euros acumulados en la compra
var total=0;
//lista de precios, importante el orden en los 3 vectores: nombre-precio-imagen

const precios = [3, 4, 2, 3 ,5 , 6, 2, 3, 1, 1, 3, 5, 6, 1, 2, 1];
    
const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
                "melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña",
                "platanos", "pomelos", "prunus", "sandias" ];
  
const imagenes=["./imagenes/chirimoya.PNG",
                "./imagenes/ciruela.PNG",
                "./imagenes/fresa.PNG",
                "./imagenes/kiwi.PNG",
                "./imagenes/mandarina.PNG",
                "./imagenes/melocoton.PNG",
                "./imagenes/melon.PNG",
                "./imagenes/naranja.PNG",    
                "./imagenes/nectarina.PNG",    
                "./imagenes/papaya.PNG",   
                "./imagenes/peras.PNG",
                "./imagenes/piña.PNG",
                "./imagenes/platanos.PNG",
                "./imagenes/pomelos.PNG",
                "./imagenes/prunus.PNG",
                "./imagenes/sandias.PNG"];
    
function inicio(){
//identificar el bloque html de la izquierda donde va el contenido js

    rellenarFrutas();

}

function rellenarFrutas(){
    let frutas = document.querySelector("#cajaX");
    frutas.innerHTML="";

    let group = document.createElement("div");
    group.className="row gallery";

    nombres.forEach(function(valor, indice){

        let objeto = document.createElement("div") ;
        objeto.className="col-lg-3";
        objeto.setAttribute("style", "border:1px solid black; margin:15px; padding:10px");
        
        objeto.innerHTML= "<button id='cajaFruta' class='btn'>"+
        "<img src='"+imagenes[indice]+"' style='width:100%;'>"+
        "<h5>"+valor+"</h5>"+
        "<p>"+precios[indice]+"€</p>"+
        "</button>";

        group.appendChild(objeto);

        objeto.querySelector("#cajaFruta").onclick=function(){
            let kg = prompt("¿Cuántos kilos quieres?");

            let totalF = precios[indice]*kg;
            total+=totalF;

            let cajaTabla=document.querySelector("tbody");
            let fila=document.createElement("tr");

            fila.innerHTML= "<td>"+valor+"</td>"+
            "<td>"+precios[indice]+" €</td>"+
            "<td>"+kg+" Kg</td>"+
            "<td>"+totalF+" €</td>";

            cajaTabla.appendChild(fila);            
        };
    })

    frutas.appendChild(group);
}
