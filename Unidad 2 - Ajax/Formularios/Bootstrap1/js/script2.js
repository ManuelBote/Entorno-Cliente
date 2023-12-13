let accion = document.getElementById("validar");

let bool = true;

accion.onsubmit = function () {
  bool = true;

  //Declaramos el valor que tenga el input y el small para el mensaje de error

  let texto1 = document.getElementById("idTexto1").value;
  let smText1 = document.getElementById("smTexto1");

  let texto2 = document.getElementById("idTexto2").value;
  let smText2 = document.getElementById("smTexto2");

  let n1 = document.getElementById("idNumero1").value;
  let smNum1 = document.getElementById("smNumero1");

  let n2 = document.getElementById("idNumero2").value;
  let smNum2 = document.getElementById("smNumero2");
  //Validamos:
  // 1º Que no esté vacío.
  // 2º Que sea un número.
  // 3º Que sea un número entero.
  // 4º Que esté comprendido entre 1 y 50.
  // Si no hay errores se limpia el elemento small.

  validacion1(texto1, smText1);
  validacion2(texto2, smText2);
  validacion3(n1, smNum1);
  validacion4(n2, smNum2);

  return bool;
};

function validacion1(texto, sm) {
  let cadena = String(texto);
  if (texto == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else if (cadena.length < 5 || cadena.length > 15) {
    sm.innerHTML = "* La cadena debe tener entre 5 y 15 caracteres.";
    bool = false;
  } else if (!/[A-Z]/.test(cadena) || !/\d/.test(cadena)) {
    sm.innerHTML = "* La cadena debe contener un numero y una mayuscula.*";
    bool = false;
  } else{
    sm.innerHTML="";
  }
}

function validacion2(texto, sm) {
  let cadena = String(texto);
  let comprobar = 0;
  for (let i = 0; i < cadena.length; i++) {
    letra = cadena.charAt(i);
    if (letra == "@") {
      comprobar++;
    }
  }

    if (texto == "") {
      sm.innerHTML = "* Campo obligatorio.";
      bool = false;
    } else if (cadena.length <= 20 || cadena.length >= 30) {
      sm.innerHTML = "* La cadena debe tener entre 20 y 30 caracteres.";
      bool = false;
    } else if (comprobar != 1) {
      sm.innerHTML = "* La cadena debe tener un unico '@'.*";
      bool = false;
    } else{
      sm.innerHTML="";
    }
}

function validacion3(num, sm) {
  if (num == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else if (isNaN(num)) {
    sm.innerHTML = "* Introduce un número.";
    bool = false;
  } else if (!Number.isInteger(Number(num))) {
    sm.innerHTML = "* Introduce un número entero.";
    bool = false;
  } else if (num < 1 || num > 10) {
    sm.innerHTML = "* Número fuera del rango (0-10).";
    bool = false;
  } else {
    sm.innerHTML = "";
  }
}

function validacion4(num, sm) {
  if (num == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else if (isNaN(num)) {
    sm.innerHTML = "* Introduce un número.";
    bool = false;
  } else if (!Number.isInteger(Number(num))) {
    sm.innerHTML = "* Introduce un número entero.";
    bool = false;
  } else if (num % 5 != 0) {
    sm.innerHTML = "* El número no es múltiplo de 5.";
    bool = false;
  } else {
    sm.innerHTML = "";
  }
}
