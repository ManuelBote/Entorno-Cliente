window.onload=inicio;

function inicio(){

    let imagenes=document.querySelectorAll("img");

    let interval = setInterval(bordes, 500);

    function bordes(){
        imagenes.forEach(function(item, indice){
            let num=Math.round(Math.random()*2+1);
            item.className="borde"+num;
        });
    }
}