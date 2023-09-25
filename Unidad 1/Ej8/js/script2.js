window.onload=inicio;

function inicio(){

    //Variables de HTML
    let btn=document.getElementById("mostrarJS");
    let cajaPadre=document.getElementsByClassName("container");
    let imagenes=document.getElementById("cajaImagenes");

    btn.onclick=generar;

    function generar(){
        console.log("Entrar en la funcion generar");

        imagenes.innerHTML="";

        for(let i =0;i<20;i++){
            

            let caja=document.createElement("img");

            let num;

            do{
                num = Math.round(Math.random()*190);
            } while(num==0);

            if(num>95){
                num= num-95;
                caja.src= "https://randomuser.me/api/portraits/women/"+num+".jpg";
                imagenes.appendChild(caja);
            } else {
                caja.src= "https://randomuser.me/api/portraits/men/"+num+".jpg";
                imagenes.appendChild(caja);
            }
        }

    }



}