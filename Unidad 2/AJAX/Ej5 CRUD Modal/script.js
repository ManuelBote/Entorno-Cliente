window.onload=inicio;

var tabla = document.querySelector("#cajaTabla");

function inicio(){

    let btnI = document.querySelector("#botonAdd");
    let btnM = document.querySelector("#modif");
    let btnB = document.querySelector('#borrar')

    cargarT();

}

function cargarT(){

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
            function recorrer(dato, indice){
                var fila = document.createElement("tr");
                fila.innerHTML= 
                                "<th scope='row'>"+dato.dni+"</th>"+
                                "<td>"+dato.nombre+"</td>"+
                                "<td>"+dato.apellido+"</td>"+
                                "<td>"+dato.telefono+"</td>"+
                                "<td><button type='button' id='modif' name='modif' class='btn btn-primary' data-toggle='modal' data-target='#clienteModal'>Modificar</button></td>"+
                                "<td><button type='button' id='borrar' name='borrar' class='btn btn-danger'>Borrar</button></td>";
                
                tabla.appendChild(fila);

            }
            
        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();
}