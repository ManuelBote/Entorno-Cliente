window.addEventListener("load",inicio);

function inicio(){

    console.log("entro al inicio");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //Cogemos la lista y el div contenedor del DOM
            let contenedor = document.getElementById("contenedor");
            let lista = document.getElementById("lista");

            //Al hacer parse nos devuelve un objeto
            var arrayJson = JSON.parse(this.responseText);

            arrayJson.forEach(function(fotoCamacho, posicion) {

                    //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada imagen
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#myCarousel");
                elemento.setAttribute("data-slide-to", posicion);
                
                //Compruebo si es el primer li
                if(posicion == 0){
                    elemento.className = "active";
                }

                //Meto los li a la lista
                lista.appendChild(elemento);

                    //PARTE 2: DIV DE LA IMAGEN
                //Creamos el div que  va a tener las clases y la imagen
                let caja = document.createElement("div");
                
                //Compruebo si la caja es el primer item del carousel
                if(posicion == 0){
                    caja.className = "item active";
                }else{
                    caja.className = "item";
                }

                    //PARTE 3: IMAGEN
                //Creamos la imagen y le damos atributos
                let imag = document.createElement("img");
                imag.setAttribute("src", fotoCamacho.imagen);
                imag.setAttribute("alt", fotoCamacho.texto);
                imag.style = "width:100%;height:50vh;";

                //Meto la imagen en la caja y la caja en el contenedor
                caja.appendChild(imag);
                contenedor.appendChild(caja);

            });

        }
    };

    xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
    xhr.send();

}

// window.onload=inicio

// function inicio(){

//     var xhr=new XMLHttpRequest();
//         xhr.onreadystatechange=function(){
//             if(this.readyState==4 && this.status==200){
//      
//                 var objeto=JSON.parse(this.responseText);

//                 objeto.forEach(crear);

//                 function crear(item, indice){

//                     let cajaLi = document.getElementById("lista");
//                     let cajaImg = document.getElementById("contenedor");
//                     let indicador = document.createElement("li");
//                     let foto = document.createElement("div");

//                     indicador.setAttribute("data-target", "#mySlideshow");
//                     indicador.setAttribute("data-slide-to", indice);

//                     if(indice==0){
//                         foto.className="carousel-item active";
//                         indicador.className="active";
//                     }else{
//                         foto.className="carousel-item"
//                     }

//                     foto.innerHTML=
//                         "<img class='d-block w-100' src='"+item.imagen+"' alt='Slide "+indice+"' height='500'>"+
//                         "<div class='carousel-caption'>"+
//                             "<h1>"+item.texto+"</h1>"+
//                             "<p>"+item.subtexto+"</p>"+
//                         "</div>";

            
//                     cajaLi.appendChild(indicador);
//                     cajaImg.appendChild(foto);


//                     // let cont = 0;
//                     // let temp = setInterval(carrusel, 3000);
//                     // carrusel();
//                     // function carrusel(){
//                     //     if(indice == cont){
//                     //         foto.classList.add("active");
//                     //         indicador.classList.add("active");
//                     //     }
//                     //     if(indice == cont-1){
//                     //         foto.classList.remove("active");
//                     //         indicador.classList.add("active");
//                     //     }
//                     // }

//                 }

                
//             }
//         }
//         xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
//         xhr.send();
    

// }