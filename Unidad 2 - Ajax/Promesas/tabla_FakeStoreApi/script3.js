window.onload=inicio;

let tabla = document.getElementById("tabla1");

function inicio(){
 let btn=document.getElementById("listar1");
 btn.onclick=function(){
   fetch('https://fakestoreapi.com/products')
   //http://moralo.atwebpages.com/menuAjax/productos/index.php
   //https://fakestoreapi.com/products
   //http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php
   .then(response => response.json())
  .then(datos =>{
    //console.table(datos);
    
    cargarTabla(datos);
  } );
 }
}

function cargarTabla(datos){
   console.table(Object.keys(datos[0]));

   let head = document.createElement("thead");
   let filaH = document.createElement("tr");
   filaH.innerHTML = "";

   for(let i = 0; i<Object.keys(datos[0]).length; i++){
    filaH.innerHTML+= `<th>${Object.keys(datos[0])[i].toUpperCase()}</th>`;
   }
   head.appendChild(filaH);
   tabla.appendChild(head);

   let body = document.createElement("tbody");
   datos.forEach(function(dato, posicion){
    let tr = document.createElement("tr");
    
    for(let i = 0; i<Object.keys(dato).length; i++){
      let valor = Object.keys(dato)[i];
      if(String(dato[valor]).endsWith(".png") || String(dato[valor]).endsWith(".jpg") || String(dato[valor]).endsWith(".webp")){
        tr.innerHTML+= `<td><img src="${dato[valor]}" width="100px"></td>`;
      } else{
        tr.innerHTML+= `<td>${dato[valor]}</td>`;
      }
     }
    
    body.appendChild(tr);

   })

   tabla.appendChild(body);

}