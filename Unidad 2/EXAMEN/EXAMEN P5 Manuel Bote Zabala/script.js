console.log("entro al js");

window.addEventListener("load",inicio);

function inicio(){

    console.log("entro al inicio");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let contenedor = document.getElementById("contenedor");
            let lista = document.getElementById("lista");

            var objeto = JSON.parse(this.responseText);        
            objeto.forEach(function(dato, indice){
            
            //Indicador del carrusel
            let indicador = document.createElement("li");

            indicador.setAttribute("data-target", "#myCarousel");
            indicador.setAttribute("data-slide-to", indice);

            if(indice == 0){
                indicador.className = "active";
            }

            lista.appendChild(indicador);

            //Contenido del carrusel
            let elemento = document.createElement("div");

                if(indice == 0){
                    elemento.className = "item active";
                }else{
                    elemento.className = "item";
                }

            elemento.innerHTML=
                "<h2>"+dato.ciudad_nombre+"</h2>"+
                "<div>"+
                    dato.video+
                    "<img src='"+dato.imagen+"' width='50%'/>"+
                "</div>";
                    

                contenedor.appendChild(elemento);
        })

        }
    };

    xhr.open("POST", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
    xhr.send();

}