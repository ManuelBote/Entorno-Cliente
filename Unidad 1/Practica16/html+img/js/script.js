window.onload=inicio;

const teamDAW=["Manuel","Mario","Mauro","Alvaro Pachon", "Raúl"];
const enlaces=["http://practicasmanuelbote.atwebpages.com","http://mariojuarez.atwebpages.com",
"http://practicasmanuelbote.atwebpages.com", "http://practicasmanuelbote.atwebpages.com", "http://raulblazquez.mywebcommunity.org"];

function inicio(){

    let enlaces_nav=document.querySelectorAll("nav ul li a");
    console.log(enlaces_nav);

    let logo=document.querySelector("[href='#myPage']");
    console.log(logo);
    logo.textContent="";

    let imagen=document.createElement("img");
    logo.appendChild(imagen);
    imagen.src="img/favicon.png";

    let nombrePrincipal=document.querySelector("h1");
    nombrePrincipal.textContent="2ºDAW";

    let subtitulo=document.querySelector("div p");
    subtitulo.textContent="Los pitbull del Javascript";

    enlaces_nav.forEach(function(item,indice){
        item.textContent=teamDAW[indice];
        item.setAttribute("target", "_blanck")
        item.href=enlaces[indice];
    })

}