window.onload=inicio;

let tabla = document.querySelector("#tablaStock");

function inicio(){

    comprobarStock();

    let btn = document.querySelector("#btnPDF");
    btn.onclick=imprimirPDF;

}

function imprimirPDF(){
    var estilo = "<style>"+
                    "table {width: 100%;font: 17px Calibri;}"+
                    "table, th, td {border: solid 1px #DDD; border-collapse: collapse;"+
                    "padding: 2px 3px;text-align: center;}"+
                    "</style>";

    let bajoStock= tabla.innerHTML;
    console.log(bajoStock);

    let win = window.open("Fruteria.pdf", "Stock Fruteria", "height=700,width=700");
    win.document.write('<html><head>');
    win.document.write('<title>Falta de Stock</title>'); //cabecera del pdf
    win.document.write(estilo); // estilo cabecera
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write('<h1>Frutas con falta de stock</h1>');
    win.document.write('<table>');
    win.document.write(bajoStock);
    win.document.write('</table>');
    //win.document.write("<br/>Total: "+precio.textContent); // contenidos dentro del body
    win.document.write('</body></html>');
    
    win.document.close(); //cerrar ventana 
    win.print();
}

function comprobarStock(){
    let tablaH = document.createElement("tr");
    tabla.innerHTML= 
        "<th scope='col'>Nombre</th>"+
        "<th scope='col'>Precio</th>"+
        "<th scope='col'>Cantidad necesaria</th>";

    tabla.appendChild(tablaH);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        objeto = JSON.parse(this.responseText);
        objeto.forEach(function(dato, posicion){
            if(parseInt(dato.stockActual)<parseInt(dato.stockMinimo)){
                let fila = document.createElement("tr");
                let cantidad = dato.stockMinimo-dato.stockActual;

                fila.innerHTML=
                    "<td>"+dato.name+"</td>"+
                    "<td>"+dato.price+"€</td>"+
                    "<td>"+cantidad+"Kg</td>";


                tabla.appendChild(fila);
            }
        });
        }
    };

  xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php", true);
  xhr.send();

}