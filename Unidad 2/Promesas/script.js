window.onload=inicio;

let pais = document.querySelector("#Paises");
let deporte = document.querySelector("#Deporte");

function inicio(){
    obtenerPaises();
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
        for(let i = 0; data.countries.length; i++){
            pais.innerHTML+=
                `<option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option>`;
        }
    }
    
    catch(error){
        //alert(error);
    }
}