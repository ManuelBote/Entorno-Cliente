window.onload=inicio

function inicio(){

    var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            //Control de estado de la peticion y del servidor
            if(this.readyState==4 && this.status==200){
                //Aceso al fichero y servidor abierto
                //Averiguar formato de los datos para hacer el parseo
                var objeto=JSON.parse(this.responseText);

                objeto.forEach(crear);

                function crear(item, indice){

                    let cajaLi = document.getElementById("lista");
                    let cajaImg = document.getElementById("contenedor");
                    let indicador = document.createElement("li");
                    let foto = document.createElement("div");

                    indicador.setAttribute("data-target", "#mySlideshow");
                    indicador.setAttribute("data-slide-to", indice);

                    foto.innerHTML=
                        "<img class='d-block w-100' src='"+item.imagen+"' alt='Slide "+indice+"' height='500'>"+
                        "<div class='carousel-caption'>"+
                            "<h1>"+item.texto+"</h1>"+
                            "<p>"+item.subtexto+"</p>"+
                        "</div>";

            
                    cajaLi.appendChild(indicador);
                    cajaImg.appendChild(foto);


                    // let cont = 0;
                    // let temp = setInterval(carrusel, 3000);
                    // carrusel();
                    // function carrusel(){
                    //     if(indice == cont){
                    //         foto.classList.add("active");
                    //         indicador.classList.add("active");
                    //     }
                    //     if(indice == cont-1){
                    //         foto.classList.remove("active");
                    //         indicador.classList.add("active");
                    //     }
                    // }

                }

                
            }
        }
        xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
        xhr.send();
    

}