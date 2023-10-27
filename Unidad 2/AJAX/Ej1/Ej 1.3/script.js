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
            let caja = document.getElementById("caja");
            caja.innerHTML="";

            let text = document.createElement("div");
            text.className="info";
            let img = document.createElement("div");

            let num = Math.floor(Math.random()*7);
            //console.log(num);

            text.innerHTML="ID: "+(num+1);
            img.innerHTML="<video src='"+objeto[num].url+"' autoplay loop>";

            caja.appendChild(text);
            caja.appendChild(img);
        }
    }
    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();
}