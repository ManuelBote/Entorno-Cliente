window.onload=inicio;

function inicio(){

    document.getElementById("btnInsertar").addEventListener("click", insertarCiudades);
    document.getElementById("btnMostrar").addEventListener("click", mostrar);
    document.getElementById("btnBorrar").addEventListener("click", borrar);

}

function insertarCiudades(){
    console.log("Entro en insertar ciudades");

    var id= document.querySelector("#_id").value;
    var nombre= document.querySelector("#_nombre").value;
    var poblacion= document.querySelector("#_poblacion").value;
    var densidad= document.querySelector("#_densidad").value;
    var extension= document.querySelector("#_superficie").value;

    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/insertarCiudades.php",
        type: "POST",
        data:{
            id:id,
            nombre:nombre,
            poblacion:poblacion,
            densidad:densidad,
            extension:extension
        }
    });

    mostrar();
}

function mostrar(){
    var cajaMostrar = document.getElementById("CajaX");
    cajaMostrar.innerHTML="";
    var BloqueHtml=document.createElement("div");
    BloqueHtml.innerHTML="";
    var xhr=new XMLHttpRequest;
    xhr.onreadystatechange=cargar;

    function cargar(){
        if(this.readyState==4 && this.status==200){
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            
            function recorrer(dato, indice){
                BloqueHtml.innerHTML+="<div class='row d-flex justify-content-center border'>"+
                "<div class='col-lg-2'>"+ dato.id+"</div>"+
                "<div class='col-lg-2'>"+ dato.nombre+"</div>"+
                "<div class='col-lg-2'>"+ dato.poblacion+"</div>"+
                "<div class='col-lg-2'>"+ dato.densidad+"</div>"+
                "<div class='col-lg-2'>"+ dato.extension+"</div>"+
                "</div>";

            }
            cajaMostrar.appendChild(BloqueHtml);
        }
    }

    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php", true);
    xhr.send();
}

function borrar(){
    var id= prompt("Selecciona el id de la ciudad a borrar:");

    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/EliminarCiudades.php",
        type: "GET",
        data:{
            id:id
        }
    });

    mostrar();
}