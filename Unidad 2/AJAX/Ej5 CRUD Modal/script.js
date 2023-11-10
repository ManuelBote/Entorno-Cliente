window.onload=inicio;

var tabla = document.querySelector("#cajaTabla");

function inicio(){

    let btnI = document.querySelector("#botonAdd").addEventListener("click", function(){
        document.querySelector("#btnInsertar").disabled = false;
        document.querySelector("#btnModificar").disabled = true;
        var dni = document.querySelector("#Dni");
        dni.setAttribute("value", "");
        dni.disabled = false;
        var nombre = document.querySelector("#Nombre").setAttribute("value", "");
        var apellido = document.querySelector("#Apellidos").setAttribute("value", "");
        var telefono = document.querySelector("#Telefono").setAttribute("value", "");
    });
    document.querySelector("#btnInsertar").addEventListener("click", insertarCLientes);


    cargarT();

}

function cargarT(){

    tabla.innerHTML="";

    var filaH=document.createElement("tr");
    filaH.innerHTML= "<th scope='col'>DNI</th>"+
                    "<th scope='col'>Nombre</th>"+
                    "<th scope='col'>Apellido</th>"+
                    "<th scope='col'>Telefono</th>"+
                    "<th scope='col'>Modificar</th>"+
                    "<th scope='col'>Eliminar</th>";
    tabla.appendChild(filaH);


    var xhr=new XMLHttpRequest;
    xhr.onreadystatechange=cargar;

    function cargar(){
        if(this.readyState==4 && this.status==200){
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(dato, indice) {
                var fila = document.createElement("tr");
                fila.innerHTML =
                    "<th scope='row'>" + dato.dni + "</th>" +
                    "<td>" + dato.nombre + "</td>" +
                    "<td>" + dato.apellido + "</td>" +
                    "<td>" + dato.telefono + "</td>" +
                    "<td> <button type='button' class='btn btn-primary btnMod' data-toggle='modal' data-target='#clienteModal'>Modificar</button></td>" +
                    "<td> <button type='button' class='btn btn-danger btnBorrar'>Borrar</button></td>";
            
                tabla.appendChild(fila);
            
                let mod = fila.querySelector(".btnMod").addEventListener("click", function () {
                    document.querySelector("#btnInsertar").disabled = true;
                    document.querySelector("#btnModificar").disabled = false;
                    var dni = document.querySelector("#Dni");
                    dni.setAttribute("value", dato.dni);
                    dni.disabled = true;
                    var nombre = document.querySelector("#Nombre").setAttribute("value", dato.nombre);
                    var apellido = document.querySelector("#Apellidos").setAttribute("value", dato.apellido);
                    var telefono = document.querySelector("#Telefono").setAttribute("value", dato.telefono);

                });
            }
            
        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();
}

function insertarCLientes(){
    console.log("Entro en insertar clientes");

    var dni= document.querySelector("#Dni").value;
    var nombre= document.querySelector("#Nombre").value;
    var apellido= document.querySelector("#Apellidos").value;
    var telefono= document.querySelector("#Telefono").value;

    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/clientes/insertarClientes.php",
        type: "POST",
        data:{
            dni:dni,
            nombre:nombre,
            apellido:apellido,
            telefono:telefono
        }
    });

    cargarT();
}