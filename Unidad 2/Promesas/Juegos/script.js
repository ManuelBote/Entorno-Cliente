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
}

function agregarGeneros(){
    for(let i = 0; i< GENEROS.length; i++){
        select.innerHTML+=
            `<option value="${GENEROS[i]}">${GENEROS[i]}</option>`;
    }
}
