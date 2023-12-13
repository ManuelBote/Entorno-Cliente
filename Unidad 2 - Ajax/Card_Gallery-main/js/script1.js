window.addEventListener("load",inicio);

function inicio(){

    console.log("entro al inicio");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //Cogemos la lista y el div contenedor del DOM
            let contenedorIndices = document.querySelector(".carousel-indicators");
            let contenedorImagenes=document.querySelector(".carousel-inner");
            let contenedorCar=document.querySelector("#cards")
            //Al hacer parse nos devuelve un objeto
            var arrayJson = JSON.parse(this.responseText);
            
            var vectorAux=arrayJson;
            var indice=0;
            var caja=document.createElement("row");
          
            let lista = document.getElementById("lista");
            arrayJson.forEach(function(fotoCamacho, posicion) {
            
                    //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada imagen
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#carouselId");
                elemento.setAttribute("data-slide-to", posicion);
                
                //Compruebo si es el primer li
                if(posicion == 0){
                    elemento.className = "active";
                }
                lista.appendChild(elemento);
                //Meto los li a la lista
                contenedorIndices.appendChild(elemento);

                    //PARTE 2: DIV DE LA IMAGEN
                //Creamos el div que  va a tener las clases y la imagen
                
                 caja = document.createElement("row");
               
                
                //Compruebo si la caja es el primer item del carousel
                if(posicion == 0){
                    caja.className = "carousel-item active";
                }else{
                    caja.className = "carousel-item";
                }
             //   contenedorImagenes.appendChild(caja);
                    //PARTE 3: IMAGEN
                //Creamos la imagen y le damos atributos
                let columna=document.createElement("div");
                columna.style.width="50vw";
                for (let i=0;i<4;i++) {
                    if ((i+indice)<vectorAux.length){
                        var datos=arrayJson[i+indice];
                        let imagenX=document.createElement("img");
                        imagenX.style.transform="translateX(60%)";
                        imagenX.style.margin="2vw";
                        imagenX.setAttribute("src",datos.imagen);
                        columna.appendChild(imagenX);
                    }
                    
                }   
                caja.appendChild(columna);
                contenedorImagenes.appendChild(caja);
               indice+=4;
               if (indice>vectorAux.length){
                indice=0;
               }               
                    
                       
                 
                        
                    } );       
            arrayJson.forEach(function(fotoCamacho, posicion) {    
                let columna4=document.createElement("div");
                 columna4.className="col-lg-4";
                let equipo=document.createElement("div");
                equipo.className="equipo";
                
                let equipo_foto=document.createElement("div");
                 equipo_foto.className="equipo_foto";
                columna4.appendChild(equipo);
                equipo.appendChild(equipo_foto);
                
                let imagen=document.createElement("img");
                imagen.setAttribute("src",fotoCamacho.imagen);
                equipo_foto.appendChild(imagen);

                let nombreEmpleado=document.createElement("h3");
                nombreEmpleado.textContent=fotoCamacho.nombre;
                equipo.appendChild(nombreEmpleado);

                let textoDireccion=document.createElement("div");
                textoDireccion.className="equipo_texto";
                let spanDireccion=document.createElement("span");
                spanDireccion.textContent=fotoCamacho.direccion;
                textoDireccion.appendChild(spanDireccion);
                equipo.appendChild(textoDireccion)
                columna4.appendChild(equipo);
                contenedorCar.appendChild(columna4);

        });
    }
    };

    xhr.open("GET", "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php", true);
    xhr.send();

}