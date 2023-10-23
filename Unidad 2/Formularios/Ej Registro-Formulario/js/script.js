window.addEventListener("load",inicio);

let bool = true;
function inicio(){

    let formulario = document.getElementById("aceptar");

    formulario.onsubmit=function(){
        //alert("Entro en accion");

        let pass1 = document.getElementById("password1").value;
        let smPass1 = document.getElementById("smPassword1");

        let pass2 = document.getElementById("password2").value;
        let smPass2 = document.getElementById("smPassword2");
        // console.log("Es el smPass2" +smPass2);

        let mail1 = document.getElementById("email");
        let smMail1= document.getElementById("smEmail");

        validarPassword(pass1,smPass1);
        comprobarPassword(pass1,pass2,smPass2);

       return bool;
    };
}

function validarPassword(passwd1,smPasswd1){

    let cadena=String(passwd1);
    let longitudCadena=cadena.length;

    if(cadena == ""){
        bool=false;
        smPasswd1.innerHTML="* Campo Obligatorio";
    }else{
        if(longitudCadena < 8){
            bool=false;
            smPasswd1.innerHTML="* La contraseña debe tener al menos 8 caracteres"
        }else{
            if(!/[A-Z]/.test(cadena) || !/[a-z]/.test(cadena) || !/\d/.test(cadena) || !cadena.includes('$')){
               bool=false;
               smPasswd1.innerHTML="* La contraseña no cumple con los requisitos";
            }
        }
    }
}

function comprobarPassword(pas1,pas2,smPas2){
    let cadena1=String(pas1);
    let cadena2=String(pas2);

    if(cadena1!=cadena2){
        bool=false;
        smPas2.innerHTML="* Las contraseñas no coinciden";
    }
}