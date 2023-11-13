window.onload=inicio;

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
                    let caja = document.getElementById("contenedorTr");
                    let cuidad = document.createElement("tr");

                    cuidad.innerHTML=
                          "<th scope='col'>"+item.ciudad_nombre+"</th>"+
                          "<th scope='col'>"+item.ciudad_poblacion+"</th>"+
                          "<th scope='col'>"+item.video+"</th>"+
                          "<th scope='col'><img src='"+item.imagen+"' width='300'></th>"+
                          "<th scope='col'>"+item.mapa+"</th>"+
                          "<th scope='col'>"+item.ciudad_ID+"</th>";
                
                    caja.appendChild(cuidad);
                } 
            }
        }
        xhr.open("GET", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
        xhr.send();
}