window.onload=inicio;

function inicio(){
    let formulario=document.getElementById("validar");
    console.log(formulario);
    formulario.onsubmit=validaciones;

    function validaciones(){
        console.log("Entrar en validar");
        alert("validando");
        let n1=document.getElementById("idNumero1");
        let sm1=document.getElementById("smNumero1");

        let n2=document.getElementById("idNumero2");
        let sm2=document.getElementById("smNumero2");

        let n3=document.getElementById("idNumero3");
        let sm3=document.getElementById("smNumero3");

        let n4=document.getElementById("idNumero4");
        let sm4=document.getElementById("smNumero4");

        let n5=document.getElementById("idNumero5");
        let sm5=document.getElementById("smNumero5");

        let n6=document.getElementById("idNumero6");
        let sm6=document.getElementById("smNumero6");

        let array=[n1,n2,n3,n4,n5,n6];
        let bool_repetido=false;

        let smRepetido=document.getElementById("smValidar");

        for(let i=0;i<array.length;i++){
            for(let j=0;j<array.length;j++){
                if(array[i]==array[j] && i!=j){
                    bool_repetido=true;
                }
            }
        }

        if(bool_repetido){
            smRepetido.innerHTML="Error, numero repetido"
        }

        validar(n1, sm1);
        validar(n2, sm2);
        validar(n3, sm3);
        validar(n4, sm4);
        validar(n5, sm5);
        validar(n6, sm6);

        function validar(num, sm){

        }
    }
}