let accion = document.getElementById("cargar");

accion.onsubmit =function(){
        
  console.log("Entrar");

    let ciclo = document.querySelector("input[name=radio]:checked").value;

    let modulosElements = document.querySelectorAll("input[name='modulos']:checked");
    let modulos = [];
    for (let i = 0; i < modulosElements.length; i++) {
      modulos.push(modulosElements[i].value);
    }
    
    let multi = document.querySelectorAll("select[multiple]");
    console.log(multi);
    let selectMultiple=[];
    for(let i = 0; i < multi[0].length; i++){
      console.log("entro en bucle");
      console.log(multi[0][i].selected);
      if(multi[0][i].selected==true){
        selectMultiple.push(multi[0][i].value);
      }
    }

    let curso = document.getElementById("selectCurso").value;
    let nomb = document.getElementById("nombre").value;
    let texto = document.getElementById("exampleFormControlTextarea1").value;

    let alertaFinal = "Ciclo: "+ciclo + 
                  "\n Modulos: " + modulos.join(", ")+
                  "\n Multiple: " + selectMultiple.join(", ") +
                  "\n Curso: " + curso +
                  "\n Nombre: " + nomb + 
                  "\n Texto: " + texto;


    alert(alertaFinal);

}