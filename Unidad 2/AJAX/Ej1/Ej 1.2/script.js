window.onload=inicio;

function inicio(){
    let btn = document.getElementById("mostrar");
    btn.onclick= Mostrar;

}

function Mostrar(){
    //Crear un objeto XMLhttpRequest
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        //Control de estado de la peticion y del servidor
        if(this.readyState==4 && this.status==200){
            //Aceso al fichero y servidor abierto
            //Averiguar formato de los datos para hacer el parseo
            var objeto=JSON.parse(this.responseText);
            let idFila=document.getElementById("fila");
            objeto.forEach(recorrer);

            function recorrer(item, index){
                //console.log(item.url);
                let divX = document.createElement("div");
                divX.className="col-lg-3";
                divX.innerHTML="<video src='"+item.url+"' width='200' height='100' autoplay loop></video>";
                idFila.appendChild(divX);
            }
        }
    }
    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();
}