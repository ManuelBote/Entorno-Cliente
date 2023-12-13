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
                    let caja = document.getElementById("lunch");
                    let plato = document.createElement("div");
                    plato.classList.add("col-lg-4", "menu-item");

                    plato.innerHTML=
                    "<a href='"+item.imagen+"' class='glightbox'><img src='"+item.imagen+"' class='menu-img img-fluid' alt=''></a>"+
                    "<h4>"+item.nombre+"</h4>"+
                    "<p class='ingredients'>"+item.ingredientes+"</p>"+
                    "<p class='price'>$"+item.precio+"</p>";
                    

                    caja.appendChild(plato);
                }

                
            }
        }
        xhr.open("GET", "http://moralo.atwebpages.com/restaurante/getPlatos.php", true);
        xhr.send();
    

}