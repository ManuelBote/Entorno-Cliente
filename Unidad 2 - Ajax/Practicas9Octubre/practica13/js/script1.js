window.onload=inicio;

function inicio(){

    let enlaces=document.querySelectorAll("a");
    console.log(enlaces);

    let doe=0;
    let pt=0;

    enlaces.forEach(function(item, indice){
        if(item.href.includes("http://doe.juntaex.es")){
            doe++;
        }
        if(item.href.includes(".pt")){
            pt++;
        }
    })

    console.log("Paginas del deo: "+ doe);
    console.log("Paginas portuguesas: " + pt);
}