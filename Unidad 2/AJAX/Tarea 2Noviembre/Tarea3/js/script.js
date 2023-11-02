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
                    let caja = document.getElementById("cajaX");
                    let foto = document.createElement("div");
                    foto.className = "card";

                    foto.innerHTML=
                    "<img src='"+item.imagen+"'>"+
                    "<p>"+item.texto+"</p>"+
                    "<p>"+item.subtexto+"</p>";
                    
                    

                    caja.appendChild(foto);
                }

                
            }
        }
        xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
        xhr.send();
    

}