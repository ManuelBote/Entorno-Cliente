window.addEventListener("load", inicio);
//total de euros acumulados en la compra
var total=0;
//lista de precios, importante el orden en los 3 vectores: nombre-precio-imagen
const precios = [3, 4, 2, 3 ,5 , 6, 2, 3, 1, 1, 3, 5, 6, 1, 2, 1];

    
    const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
    "melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña",
     "platanos", "pomelos", "prunus", "sandias" ];
  
    const imagenes=["./imagenes/chirimoya.PNG",
    "./imagenes/ciruela.PNG",
    "./imagenes/fresa.PNG",
    "./imagenes/kiwi.PNG",
    "./imagenes/mandarina.PNG",
    "./imagenes/melocoton.PNG",
    "./imagenes/melon.PNG",
    "./imagenes/naranja.PNG",    
    "./imagenes/nectarina.PNG",    
    "./imagenes/papaya.PNG",   
    "./imagenes/peras.PNG",
    "./imagenes/piña.PNG",
    "./imagenes/platanos.PNG",
    "./imagenes/pomelos.PNG",
    "./imagenes/pomelos.PNG",
    "./imagenes/sandias.PNG"];
    
    function inicio(){
    //identificar el bloque html de la izquierda donde va el contenido js
   
