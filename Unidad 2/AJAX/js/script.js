window.onload=inicio;

function inicio(){
    let btn = document.getElementById("mostrar");
    btn.onclick= function(){

        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange=function(){

            if(this.readyState==4 && this.status==200){
                var objeto = JSON.parse(this.responseText);

                objeto.forEach(recorrer);
                function recorrer(item, index){
                    document.getElementById("videos").innerHTML+= "<img src='"+item.imagen+"' width='100%' autoplay loop>";
                    document.getElementById("videos").className="gallery";
                }

            }
        }

        xhr.open("GET","http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
        xhr.send();

    }
}