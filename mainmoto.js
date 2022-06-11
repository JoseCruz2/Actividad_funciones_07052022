addEventListener("DOMContentLoaded", async()=>{
    let btn = document.querySelector(".colour-select");
    // let img = document.querySelector("#producto")
    let datosUrl = location.search;
    let urlData = new URLSearchParams(datosUrl); 
    let peticion = await fetch("data.json")
    let json = await peticion.json()

document.querySelector("#compañia").src = json[`${urlData.get('id')}`].compañia
document.querySelector("#logo2").src = json[`${urlData.get('id')}`].logo2
document.querySelector("#titulo").innerText = json[`${urlData.get('id')}`].titulo
document.querySelector("#tecnica").innerHTML = json[`${urlData.get('id')}`].ficha
    // urlData.get('id')   

    json[`${urlData.get('id')}`].similares.forEach((data, id) => {
        btn.insertAdjacentHTML("beforeend", //html
         `
         <div data-producto="${data.img}"><img src="${data.logo}"></div>
         `
         )
    });

    });