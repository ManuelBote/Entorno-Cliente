window.onload=inicio;

function inicio(){

    let imagenes=document.querySelectorAll("img");

    let interval = setInterval(bordes, 500);

    function bordes(){
        imagenes.forEach(function(item, indice){
            let num=Math.round(Math.random()*4+1);
            item.src="img/img"+num+".jpg";
        });
    }
}