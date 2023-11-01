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
                    let caja = document.getElementById("contenedor");
                    let usuario = document.createElement("div");
                    usuario.classList.add("col-xl-3", "col-sm-6", "mb-5");

                    usuario.innerHTML=
                    "<div class='bg-white rounded shadow-sm py-5 px-4'><img src='"+item.imagen+"' alt='' width='100' class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'>"+
                        "<h5 class='mb-0'>"+item.nombre+"</h5><span class='small text-uppercase text-muted'>"+item.cargo+"</span>"+
                        "<ul class='social mb-0 list-inline mt-3'>"+
                            "<li class='list-inline-item'><a href='#' class='social-link'><i class='bi bi-facebook'></i></a></li>"+
                            "<li class='list-inline-item'><a href='#' class='social-link'><i class='bi bi-twitter'></i></a></li>"+
                            "<li class='list-inline-item'><a href='#' class='social-link'><i class='bi bi-instagram'></i></a></li>"+
                            "<li class='list-inline-item'><a href='#' class='social-link'><i class='bi bi-linkedin'></i></a></li>"+
                        "</ul>"+
                    "</div>";
                    

                    caja.appendChild(usuario);
                }

                
            }
        }
        xhr.open("GET", "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php", true);
        xhr.send();
    

}