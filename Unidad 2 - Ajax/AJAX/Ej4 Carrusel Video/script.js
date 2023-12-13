console.log("entro al js");

window.addEventListener("load",inicio);

function inicio(){

    console.log("entro al inicio");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let contenedor = document.getElementById("contenedor");
            let lista = document.getElementById("lista");

            var arrayJson = JSON.parse(this.responseText);

            arrayJson.forEach(function(video, posicion) {

                let elemento = document.createElement("li");

                elemento.setAttribute("data-target", "#myCarousel");
                elemento.setAttribute("data-slide-to", posicion);

                if(posicion == 0){
                    elemento.className = "active";
                }

                lista.appendChild(elemento);

                let caja = document.createElement("div");

                if(posicion == 0){
                    caja.className = "item active";
                }else{
                    caja.className = "item";
                }

                let vid = document.createElement("video");
                vid.setAttribute("src", video.url);
                vid.setAttribute("alt", video.lugar);
                vid.setAttribute("autoplay", true);
                vid.setAttribute("loop", true);
                vid.style = "width:100%;height:50vh;";
                
                caja.appendChild(vid);
                contenedor.appendChild(caja);

            });

        }
    };

    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();

}