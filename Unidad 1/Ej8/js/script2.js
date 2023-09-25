window.onload=inicio;

function inicio(){

    //Variables de HTML
    let btn=document.getElementById("mostrarJS");
    let cajaPadre=document.getElementById("padre");
    let imagenes=document.getElementById("cajaImagenes");

    btn.onclick=generar;

    //Crear otros elementos 
    let caja2=document.createElement("fieldset");
    caja2.className="gallery";
    caja2.style.border="1px solid black";
    caja2.style.borderRadius="1rem";

    let leyenda=document.createElement("legend");
    leyenda.textContent="Practica 8";
    caja2.appendChild(leyenda);
    caja2.appendChild(imagenes);

    let temporizador=document.createElement("span");
    temporizador.textContent="Tiempo: 30";
    cajaPadre.appendChild(temporizador);
    
    cajaPadre.appendChild(caja2);
    

    function generar(){
        console.log("Entrar en la funcion generar");

        let contS=30;

        juego();

        let temp = setInterval(tiempo, 3000);
        function tiempo(){
            if(contS==0){
                
            }
            juego();
        }

        function juego(){
            imagenes.innerHTML="";
            let contador=0;

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

            caja.onmouseover=function(){
                caja.style.transform="scale(1.5)";
            }

            caja.onmouseout=function(){
                caja.style.transform="scale(1)";
            }

            caja.onclick=function(){
                if(caja.className == "ponerBorde"){
                    caja.className="quitarBorde"
                    contador--;
                } else{
                    if(contador==6){
                        return
                    }
                    caja.className="ponerBorde";
                    contador++;
                }
            }    
            
        }
        }

        

    }



}