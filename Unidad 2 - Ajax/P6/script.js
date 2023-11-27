window.onload=inicio;

let caja1 = document.querySelector("#caja1");
let caja2 = document.querySelector("#caja2");
let caja3 = document.querySelector("#caja3");
let caja4 = document.querySelector("#caja4");

const alumnoAprovados = [];
const alumnoNotaIgual = [];
const alumnoMediaAprovada = [];



function inicio(){
    calculoNotas();
}

function calculoNotas(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(this.responseText);

        let mediaAlta = 0;
        let alumno;
        let cont1 = 0;
        let cont2 = 0;
        let cont3 = 0;

            objeto.forEach(function(dato, indice){

                let media = (parseInt(dato.nota1)+parseInt(dato.nota2)+parseInt(dato.nota3))/3;

                if(media > mediaAlta){
                    mediaAlta = media;
                    alumno = dato.alumno;
                }

                if(parseInt(dato.nota1)>=5 && parseInt(dato.nota2)>=5 && parseInt(dato.nota3)>= 5){
                    cont1++;
                    alumnoAprovados.push(dato.alumno);
                }

                if(parseInt(dato.nota1)==parseInt(dato.nota2) && parseInt(dato.nota2)==parseInt(dato.nota3)){
                    cont2++;
                    alumnoNotaIgual.push(dato.alumno);
                }

                if((parseInt(dato.nota1)<5 || parseInt(dato.nota2)<5 || parseInt(dato.nota3)< 5) && media>=5){
                    cont3++;
                    alumnoMediaAprovada.push(dato.alumno);
                }


            })

            caja1.textContent = alumno + ": " + mediaAlta;
            caja2.textContent = cont1 + ", " + alumnoAprovados;
            caja3.textContent = cont2 + ", " + alumnoNotaIgual;
            caja4.textContent = cont3 + ", " + alumnoMediaAprovada;
        }
    }

    xhr.open("POST","http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php",true);
    xhr.send();
}
