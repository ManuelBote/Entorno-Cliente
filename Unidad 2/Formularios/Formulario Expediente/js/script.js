window.onload=inicio;

let bool=true;

function inicio(){

    let exp = document.getElementById("expediente").value;
    let smExp = document.getElementById("smExpediente");

    let nomb = document.getElementById("nombre").value;
    let smNom = document.getElementById("smNombre");

    let ape = document.getElementById("apellido").value;
    let smApe = document.getElementById("smApellido");

    let dwec = document.getElementById("dwec").value;
    let smdwec = document.getElementById("smdwec");

    let dwes = document.getElementById("dwes").value;
    let smdwes = document.getElementById("smdwes");

    let ds = document.getElementById("ds").value;
    let smds = document.getElementById("smds");

    let eie = document.getElementById("eie").value;
    let smeie = document.getElementById("smeie");

    let diw = document.getElementById("diw").value;
    let smdiw = document.getElementById("smdiw");

    let accion = document.getElementById("accion");
    console.log(accion);
    accion.onsubmit=function(){

        if(exp=="" || nomb=="" || ape=="" || dwec=="" || dwes=="" || ds=="" || eie=="" || diw==""){
            smExp.innerHTML="*Campo obligatorio";
            smNom.innerHTML="*Campo obligatorio";
            smApe.innerHTML="*Campo obligatorio";
            smExp.innerHTML="*Campo obligatorio";
            smdwec.innerHTML="*Campo obligatorio";
            smdwes.innerHTML="*Campo obligatorio";
            smds.innerHTML="*Campo obligatorio";
            smeie.innerHTML="*Campo obligatorio";
            smdiw.innerHTML="*Campo obligatorio";
            bool=false;
        } else{
            let cadena=String(exp);
            if(cadena.length!=6){
                bool=false
                smExp.innerHTML="*Cadena no valida";
            } else{
                for(let i; i<cadena.length-1; i++){
                    let caracter = cadena.charAt(i);
                    if(!/\d/.test(caracter)){
                        bool=false;
                        smExp.innerHTML="*Cadena no valida";
                    }
                }
                let caracter=cadena.charAt(cadena.length-1);
                if(!/[A-Z]/.test(caracter)){
                    bool=false;
                    smExp.innerHTML="*Cadena no valida";
                }
                if(dwec<0 || dwec>10 || dwes<0 || dwes>10 || ds<0 || ds>10 || eie<0 || eie>10 || diw<0 || diw>10){
                    bool=false;
                    smdwec.innerHTML="*Nota no valida";
                    smdwes.innerHTML="*Nota no valida";
                    smds.innerHTML="*Nota no valida";
                    smeie.innerHTML="*Nota no valida";
                    smdiw.innerHTML="*Nota no valida";
                }
            } 
        }


        return bool;
    }

}