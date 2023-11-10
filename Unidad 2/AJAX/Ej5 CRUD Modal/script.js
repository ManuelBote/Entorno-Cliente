window.onload=inicio;

var tabla = document.querySelector("#cajaTabla");

function inicio(){

    //Boton añadir
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

    //Boton insertar (Modal)
    document.querySelector("#btnInsertar").addEventListener("click", insertarCLientes);

    //Boton mostrar(A veces recarga tan rapido que no se guarda la modificacion realizada)
    let btnMostrar = document.querySelector("#btnMostrar").addEventListener("click", cargarT);


    cargarT();

}

//Funcion cargar de la tabla
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
                //Añadida de objetos
                fila.innerHTML =
                    "<th scope='row'>" + dato.dni + "</th>" +
                    "<td>" + dato.nombre + "</td>" +
                    "<td>" + dato.apellido + "</td>" +
                    "<td>" + dato.telefono + "</td>" +
                    "<td> <button type='button' class='btn btn-primary btnMod' data-toggle='modal' data-target='#clienteModal'>&#x270e Modificar</button></td>" +
                    "<td> <button type='button' class='btn btn-danger btnBorrar' data-toggle='modal' data-target='#modalBorrar'>"+
                    "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>"+
                    "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z'/>"+
                    "<path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z'/>"+
                    "</svg>"+
                    " Borrar</button></td>";
            
                tabla.appendChild(fila);
            
                //Boton modificar
                let mod = fila.querySelector(".btnMod").addEventListener("click", function () {
                    document.querySelector("#btnInsertar").disabled = true;
                    document.querySelector("#btnModificar").disabled = false;
                    var dni = document.querySelector("#Dni");
                    dni.setAttribute("value", dato.dni);
                    dni.disabled = true;
                    var nombre = document.querySelector("#Nombre").setAttribute("value", dato.nombre);
                    var apellido = document.querySelector("#Apellidos").setAttribute("value", dato.apellido);
                    var telefono = document.querySelector("#Telefono").setAttribute("value", dato.telefono);

                    //Funcion de modificar
                    document.querySelector("#btnModificar").addEventListener("click", function(){

                        var dni= document.querySelector("#Dni").value;
                        var nombre= document.querySelector("#Nombre").value;
                        var apellido= document.querySelector("#Apellidos").value;
                        var telefono= document.querySelector("#Telefono").value;

                        $.ajax({
                            url: "http://moralo.atwebpages.com/menuAjax/clientes/modificarClientes.php",
                            type: "POST",
                            data:{
                                dni:dni,
                                nombre:nombre,
                                apellido:apellido,
                                telefono:telefono
                            }
                        });

                        cargarT();
                    })
                });

                //Boton de borrar
                let borrar = fila.querySelector(".btnBorrar").addEventListener("click", function(){
                    let mBody = document.querySelector("#borrarBody").innerHTML= "¿Estás seguro de que desea borrar el cliente <b>"+dato.nombre+"</b> con dni: <b>" + dato.dni+"</b>?";
                    //Funcion de borrar
                    document.querySelector("#borrarCliente").addEventListener("click", function(){

                        var dni= dato.dni;
                        //console.log(dni);

                        $.ajax({
                            url: "http://moralo.atwebpages.com/menuAjax/clientes/eliminarClientes.php",
                            type: "POST",
                            data:{
                                id:dni
                            }
                        });
                        
                    
                        cargarT();
                    })
                })

            }
            
        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();
}

//Funcion de insertar datos
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