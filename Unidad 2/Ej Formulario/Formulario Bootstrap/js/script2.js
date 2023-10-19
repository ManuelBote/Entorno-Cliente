let accion = document.getElementById("cargar");

accion.onsubmit =function(){
        
    let ciclo = document.querySelector("input[name=radio]:checked").value;
    var modulosElements = document.querySelectorAll(
        'input[name="modulos"]:checked'
      );
      var modulos = [];
      for (var i = 0; i < modulosElements.length; i++) {
        modulos.push(modulosElements[i].value);
      }    let curso = document.getElementById("selectCurso").value;
    let nomb = document.getElementById("nombre").value;


    alert("Ciclo: "+ciclo + "\n Modulos: "+modulos.join(",")+"\n Curso: "+curso+"\n Nombre: "+nomb);

}