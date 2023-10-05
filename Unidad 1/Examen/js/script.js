window.onload=inicio;

let cuerpo=document.querySelector("body");

//Constantes
const NUM_CONT=6;
const NUM_CAJA=50;

//Array con las columnas
const columnas=[];
//Array con los numeros marcados
const CajaFinal=[];
//Array con los numeros ganadores
const ganador=[];
//Array con todas las cajas
const TotalCajas=[];

function inicio(){

  //Variables
    let contCaja=0;
    let contColumn=0;
    let contColumn2=0;

    //Caja principal
    let contenedorP=document.createElement("div");
    contenedorP.className= "container";
    cuerpo.appendChild(contenedorP);

    for(let i=1;i<=NUM_CONT;i++){
      //Creaccion de columnas
        let contenedorS=document.createElement("fieldset");
        contenedorS.className= "gallery";
        let leyenda=document.createElement("legend");
        leyenda.textContent="Loteria "+i;
        contenedorS.appendChild(leyenda);
        contenedorP.appendChild(contenedorS);

        columnas.push(contenedorS);

        if(contColumn2>0){
          contenedorS.classList.add("disabledDiv");
        }

        for(let j=1;j<=NUM_CAJA;j++){
          //Creacion de cajas
            let caja=document.createElement("div");
            caja.className="gallery div";
            caja.textContent=j;

            contenedorS.appendChild(caja);
            TotalCajas.push(caja);

            caja.onclick=marcar;

            //Funcion marcar
            function marcar(){

              //Caso en el que esta rojo
              if(caja.style.backgroundColor=="red"){
                contCaja--;
                caja.style.backgroundColor="green";

                let n = caja.textContent;
                console.log(n);

                var comprobar=true;
                var num=CajaFinal.length-1;

                //Se realiza con un while para que de esa forma elimine el ultimo numero marcado de mismo valor
                //Ya que si marcabas el mismo numero en distintas columna el numero se eliminaria en la
                //Primera columna donde se selecciono y cambiaria el array y los numeros seleccionados en cada columna
                //Por lo que en vez de buscar el numero desde delante lo busca desde detras
                while(comprobar==true){
                  if(n==CajaFinal[num]){
                    CajaFinal.splice(num,1);
                    comprobar=false;
                  }
                  num--;
                }
                console.log(CajaFinal);

                //Caso en el que esta verde
                } else{
                  contCaja++;
                  caja.style.backgroundColor="red";
                  CajaFinal.push(caja.textContent);
                  console.log(CajaFinal);

                  //Cuando se marquen los 6 numeros
                  if(contCaja==6){
                    //If para comprobar si es la ultima columna
                    if(contColumn!=columnas.length-1){
                      columnas[contColumn].classList.add("disabledDiv");
                      contColumn++;
                      columnas[contColumn].classList.remove("disabledDiv");
                    } else{
                      columnas[contColumn].classList.add("disabledDiv");
                      btn.disabled=false;
                      btnReset.disabled=true;
                    }
                    contCaja=0;
                  }
                }
            }
          }
          contColumn2++;
    }

    //Boton de sorteo
    let btn=document.createElement("button");
    btn.textContent="SORTEO";
    btn.style.marginLeft="44.5%";
    btn.style.marginRight="1%";
    cuerpo.appendChild(btn);
    btn.disabled=true;

    //Boton de reset
    let btnReset = document.createElement("button");
    btnReset.textContent = "RESETEAR";
    cuerpo.appendChild(btnReset);
    btnReset.onclick = reset;

    btn.onclick=sorteo;
    btnReset.onclick=reset;


    //Funcion sorteo
    function sorteo(){

        btn.disabled=true;
        let contenedorSorteo=document.createElement("div");
        contenedorSorteo.className="gallery2";
        cuerpo.appendChild(contenedorSorteo);
        
        //Generador de numeros aleatorios
        for(let i=0; i<6;i++){
            let cajaG=document.createElement("div");
            cajaG.className="gallery2 div";
            cajaG.style.backgroundColor="aqua";

            let num;
            do{
                num=Math.round(Math.random()*50)
            }while(ganador.includes(num) || num==0);
            ganador.push(num);

            cajaG.textContent=num;
            contenedorSorteo.appendChild(cajaG);
            //console.log(ganador);

        }

        let contenedorNumeros=document.createElement("div");
        contenedorNumeros.className="gallery2";
        cuerpo.appendChild(contenedorNumeros);

        let cont=0;
        let num=0;
        let num2;

        console.log(ganador);

        //Generador de los divs con los numeros marcados en cada columna
        for(let i=0;i<columnas.length;i++){
          num2=num;

          for(num; num<7+num2;num++){
            let CajaNum=document.createElement("div");
            CajaNum.className="gallery2 div";
            contenedorNumeros.appendChild(CajaNum);

            //Divs con los numeros marcados
            if(num<6+num2){
              CajaNum.textContent=CajaFinal[num];
              CajaNum.style.backgroundColor="yellow"
              
              ganador.forEach(function(item,indice){
                  if(item==CajaFinal[num]){
                      CajaNum.style.backgroundColor="red";
                      cont++;
                  }
              })
              
          //Div con el nº de aciertos
          }else{
              CajaNum.textContent=cont;
              CajaNum.style.backgroundColor="green";
          }
          }
          cont=0;
          num--;
        }

    }

    //Funcion de reseteo
    function reset(){

      TotalCajas.forEach(function(item, indice){
        item.style.backgroundColor="green";
      });

      contCaja=0;
      contColumn=0;

      while(CajaFinal.length > 0){
        CajaFinal.pop();
      }
      console.log(CajaFinal);

      columnas[0].classList.remove("disabledDiv");
      columnas[1].classList.add("disabledDiv");
      columnas[2].classList.add("disabledDiv");
      columnas[3].classList.add("disabledDiv");
      columnas[4].classList.add("disabledDiv");
      columnas[5].classList.add("disabledDiv");


    }

}