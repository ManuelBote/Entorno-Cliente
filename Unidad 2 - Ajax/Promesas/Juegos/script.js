window.onload = inicio;

const GENEROS = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];

let select = document.querySelector("#tipoGenero");
let btn = document.querySelector("#mostrar");
let head = document.querySelector("thead");
let body = document.querySelector("tbody");

function inicio() {
    agregarGeneros();
    btn.onclick=mostrarJuegos();
}

function agregarGeneros(){
    for(let i = 0; i< GENEROS.length; i++){
        select.innerHTML+=
            `<option value="${GENEROS[i]}">${GENEROS[i]}</option>`;
    }
}

function mostrarJuegos(){
    head.innerHTML='<tr>'+
        '<th scope="col">Juego</th>'+
        '<th scope="col">Imagen</th>'+
        '<th scope="col">Pagina</th>'+
        '</tr>';
    body.innerHTML="";
    obtenerJuegos();

}


async function obtenerJuegos(){
    const url = "https://www.freetogame.com/api/games?category="+select.value;
    var headers= {};

    const objeto = await fetch(url, {
        method:"GET",
        mode:"cors",
        headers:headers
    });

    try{
        const data = await objeto.json();
        for(let i = 0;i < data.length; i++){
            body.innerHTML+=
            '<tr>'+
            '<td>'+data.title+'</td>'+
            '<td><img src="'+data.thumbnail+'"></td>'+
            '<td><iframe src="'+data.freetogame_profile_url+'"></td>'+
            '</tr>';
        }
    }
    
    catch(error){
        alert(error);
    }
}