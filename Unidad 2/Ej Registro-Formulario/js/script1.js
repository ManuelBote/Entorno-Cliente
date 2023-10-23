window.onload=inicio;

let bool = true;

function inicio(){

    let accion = document.getElementById("aceptar");

    accion.onsubmit=function(){

        let usuario = document.getElementById("user").value;
        let smUsuario = document.getElementById("smUser");
    
        let pass = document.getElementById("password").value;
        let smPass = document.getElementById("smPassword");
    
        comprobar(usuario, smUsuario, pass, smPass);
    
        return bool;
    }

}

function comprobar(usr, smU, ps, smP){
    cadena1 = String(usr);
    cadena2 = String(ps);

    if(cadena1==""){
        bool=false;
        smU.innerHTML="Campo obligatorio"
    }

    if(cadena2==""){
        bool=false;
        smP.innerHTML="Campo obligatorio"
    }

}
