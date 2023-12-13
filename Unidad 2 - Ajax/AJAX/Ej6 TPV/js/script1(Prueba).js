window.addEventListener("load", inicio);
//total de euros acumulados en la compra
var total = 0;

function inicio() {
  rellenarFrutas();

  let admin = document.querySelector("#idCambiar");
  admin.addEventListener("click", comprobarAdmin);

}

function rellenarFrutas() {
  var xhr = new XMLHttpRequest;
  xhr.onreadystatechange=cargar;

  function cargar(){
    if(this.readyState==4 && this.status==200){
        var objeto=JSON.parse(this.responseText);

        let frutas = document.querySelector("#cajaX");
        frutas.innerHTML="";
    
        let group = document.createElement("div");
        group.className="row gallery";

        objeto.forEach(crear);

        function crear(valor,indice){
            let cajaFruta = document.createElement("div") ;
            cajaFruta.className="col-lg-3";
            cajaFruta.setAttribute("style", "padding:0; margin:15px; border:1px solid black;");
            
            cajaFruta.innerHTML= "<div id='cajaFruta' class='btn' style=' width:100%; padding:5px'>"+
            "<img src='"+valor.photo+"' style='width:100%;'>"+
            "<h5>"+valor.name+"</h5>"+
            "<p>"+valor.price+"€</p>"+
            "</div>";
    
            group.appendChild(cajaFruta);

            //--- Funcion click en fruta / Rellenar tabla --------------------------------------------------------------
            cajaFruta.onclick=function(){
              let cajaTabla=document.querySelector("tbody");
              let fila=document.createElement("tr");
 
              let kg = window.prompt("¿Cuántos kilos quieres?");

              let totalF = valor.price*kg;                
              total+=totalF;
              cargarPrecio();

              fila.innerHTML= "<td>"+valor.name+"</td>"+
              "<td>"+valor.price+" €</td>"+
              "<td>"+kg+" Kg</td>"+
              "<td>"+totalF+" €</td>"+
              "<td><button class='btn btn-danger' id=eliminar><i class='bi bi-trash'></i> Eliminar</button></td>";
    
              cajaTabla.appendChild(fila); 

              //--- Funcion eliminar fila-------------------------------------------------------------------------------
              fila.querySelector("#eliminar").onclick=function(){

                fila.innerHTML="";
                total-=totalF;
                cargarPrecio();

              };
            }
        }
        frutas.appendChild(group);
    }
  }

  xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/productos/index.php", true);
  xhr.send();
}

function cargarPrecio(){
  let labelPrecio = document.querySelector("#precio");

  labelPrecio.innerHTML=total;
}

function comprobarAdmin(){
  let psw = document.querySelector("#idPwd");
  if(psw.value == "frutas"){
    modificarFrutas();
    psw.value="";
  } else{
    alert("Contraseña incorrecta");
    psw.value="";
  }
}

function modificarFrutas(){
  console.log("modificar");
}
