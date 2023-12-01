window.onload=inicio;

let pais = document.querySelector("#paises");
let deporte = document.querySelector("#deportes");
let contenedorEquipo = document.querySelector("#equipos");
let btn = document.querySelector("#mostrar");

function inicio(){
    obtenerPaises();
    obtenerDeportes();
    let btn = document.querySelector("#mostrar");
    btn.addEventListener("click", mostrarEquipos);
}

async function obtenerPaises(){
    const url = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    var headers= {};

    const objeto = await fetch(url, {
        method:"GET",
        mode:"cors",
        headers:headers
    });

    try{
        const data = await objeto.json();
        for(let i = 0;i < data.countries.length; i++){
            pais.innerHTML+=
                `<option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option>`;
        }
    }
    
    catch(error){
        alert(error);
    }
}

async function obtenerDeportes(){
    const url = "deportes.json";
    var headers= {};

    const objeto = await fetch(url, {
        method:"GET",
        mode:"cors",
        headers:headers
    });

    try{
        const data = await objeto.json();
        for(let i = 0;i <  data.sports.length; i++){
            deporte.innerHTML+=
                `<option value=${data.sports[i].strSport}>${data.sports[i].strSport}</option>`;
        }
    }
    
    catch(error){
        alert(error);
    }
}

async function mostrarEquipos(){
    contenedorEquipo.innerHTML="";
    const url = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s="+deporte.value+"&c="+pais.value;
    var headers= {};

    const objeto = await fetch(url, {
        method:"GET",
        mode:"cors",
        headers:headers
    });

    try{
        const data = await objeto.json();
        for(let i = 0;i <  data.teams.length; i++){
            contenedorEquipo.innerHTML+=
                `<div class="equipo"><img src="${data.teams[i].strTeamBadge}">${data.teams[i].strTeam}</div>`;
        }
    }
    
    catch(error){
        alert(error);
    }
}