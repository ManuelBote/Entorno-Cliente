window.onload = inicio;

var tabla = document.querySelector("#cajaTabla");

function inicio() {
  //Boton añadir
  let btnI = document
    .querySelector("#botonAdd")
    .addEventListener("click", function () {
      document.querySelector("#btnInsertar").disabled = false;
      document.querySelector("#btnModificar").disabled = true;
      var id = document.querySelector("#Id");
      id.setAttribute("value", "");
      id.disabled = false;
      var name = document.querySelector("#Nombre").setAttribute("value", "");
      var price = document
        .querySelector("#Precio")
        .setAttribute("value", "");
      var photo = document
        .querySelector("#URL")
        .setAttribute("value", "");
    });

  //Boton insertar (Modal)
  document
    .querySelector("#btnInsertar")
    .addEventListener("click", insertarCLientes);

  //Boton mostrar(A veces recarga tan rapido que no se guarda la modificacion realizada)
  let btnMostrar = document
    .querySelector("#btnMostrar")
    .addEventListener("click", cargarT);

  cargarT();
}

//Funcion cargar de la tabla
function cargarT() {
  tabla.innerHTML = "";

  var filaH = document.createElement("tr");
  filaH.innerHTML =
    "<th scope='col'>ID</th>" +
    "<th scope='col'>Nombre</th>" +
    "<th scope='col'>Precio</th>" +
    "<th scope='col'>Imagen</th>" +
    "<th scope='col'>Modificar</th>" +
    "<th scope='col'>Eliminar</th>";
  tabla.appendChild(filaH);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;

  function cargar() {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);

      objeto.forEach(recorrer);

      function recorrer(dato, indice) {
        var fila = document.createElement("tr");
        //Añadida de objetos
        fila.innerHTML =
          "<th scope='row'>" +
          dato.id +
          "</th>" +
          "<td>" +
          dato.name +
          "</td>" +
          "<td>" +
          dato.price +
          "€</td>" +
          "<td><img src='" +
          dato.photo +
          "' width='40px'/></td>" +
          "<td> <button type='button' class='btn btn-primary btnMod' data-toggle='modal' data-target='#clienteModal'>&#x270e Modificar</button></td>" +
          "<td> <button type='button' class='btn btn-danger btnBorrar' data-toggle='modal' data-target='#modalBorrar'>" +
          "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>" +
          "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z'/>" +
          "<path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z'/>" +
          "</svg>" +
          " Borrar</button></td>";

        tabla.appendChild(fila);

        //Boton modificar
        let mod = fila
          .querySelector(".btnMod")
          .addEventListener("click", function () {
            document.querySelector("#btnInsertar").disabled = true;
            document.querySelector("#btnModificar").disabled = false;
            var id = document.querySelector("#Dni");
            id.setAttribute("value", dato.id);
            id.disabled = true;
            var name = document
              .querySelector("#Nombre")
              .setAttribute("value", dato.name);
            var price = document
              .querySelector("#Apellidos")
              .setAttribute("value", dato.price);
            var photo = document
              .querySelector("#Telefono")
              .setAttribute("value", dato.photo);

            //Funcion de modificar
            document
              .querySelector("#btnModificar")
              .addEventListener("click", function () {
                var id = document.querySelector("#Id").value;
                var name = document.querySelector("#Nombre").value;
                var price = document.querySelector("#Precio").value;
                var photo = document.querySelector("#URL").value;

                $.ajax({
                  url: "http://moralo.atwebpages.com/menuAjax/productos3/modificarProductos.php",
                  type: "POST",
                  data: {
                    id: id,
                    name: name,
                    price: price,
                    photo: photo,
                  },
                });

                cargarT();
              });
          });

        //Boton de borrar
        let borrar = fila
          .querySelector(".btnBorrar")
          .addEventListener("click", function () {
            let mBody = (document.querySelector("#borrarBody").innerHTML =
              "¿Estás seguro de que desea borrar el cliente <b>" +
              dato.name +
              "</b> con dni: <b>" +
              dato.id +
              "</b>?");
            //Funcion de borrar
            document
              .querySelector("#borrarCliente")
              .addEventListener("click", function () {
                var id = dato.id;
                //console.log(dni);

                $.ajax({
                  url: "http://moralo.atwebpages.com/menuAjax/productos3/eliminarProductos.php",
                  type: "POST",
                  data: {
                    id: id,
                  },
                });

                cargarT();
              });
          });
      }
    }
  }

  xhr.open(
    "POST",
    "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php",
    true
  );
  xhr.send();
}

//Funcion de insertar datos
function insertarCLientes() {
  console.log("Entro en insertar clientes");

  var id = document.querySelector("#Id").value;
  var name = document.querySelector("#Nombre").value;
  var price = document.querySelector("#Precio").value;
  var photo = document.querySelector("#URL").value;

  $.ajax({
    url: "http://moralo.atwebpages.com/menuAjax/productos3/insertarProductos.php",
    type: "POST",
    data: {
      id: id,
      name: name,
      price: price,
      photo: photo,
    },
  });

  cargarT();
}
