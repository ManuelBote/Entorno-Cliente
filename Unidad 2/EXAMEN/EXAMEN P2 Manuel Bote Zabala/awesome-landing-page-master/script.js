window.onload=inicio;

function inicio(){

    let contenedorCarrusel=document.querySelector("#cajaCarrusel");
    let contenedorIndicador=document.querySelector("#indicadorCarrusel");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(this.responseText);

        objeto.forEach(function(dato, indice){
            
            //Indicador del carrusel
            let indicador = document.createElement("li");

            indicador.setAttribute("data-target", "#carousel-example-generic");
            indicador.setAttribute("data-slide-to", indice);

            if(indice == 0){
                indicador.className = "active";
            }

            contenedorIndicador.appendChild(indicador);

            //Contenido del carrusel
            let elemento = document.createElement("div");

                if(indice == 0){
                    elemento.className = "item active";
                }else{
                    elemento.className = "item";
                }

            elemento.innerHTML=
                '<div class="mask">'+
                    '<img src="'+dato.imagen+'">'+
                '</div>'+
                '<div class="carousel-testimonial-caption">'+
                    '<h3>'+dato.nombre+'</h3>'+
                    '<h3>Cargo: '+dato.cargo+'</h3>'+
                    '<p>" Edad: '+dato.edad+' - Direccion: '+dato.direccion+'"</p>'+
                '</div>';

            contenedorCarrusel.appendChild(elemento);
        })


        
        }
    };

    xhr.open("POST", "http://moralo.atwebpages.com/Empleados/getEmpleados.php", true);
    xhr.send();
}