"use strict";


    let tower = document.querySelector(".tower");
    let innertower = document.querySelector(".innertower");
    let cupcounter =32;

function rowcount(x){
    let HTML = "";
   
    let rowcounter;

rowcounter = (Math.sqrt(1+(8*x))-1)/2;
let rowcounterint = parseInt(rowcounter);
rowcounterint;  

console.log("Bokštas gavosi" + " " + rowcounterint+" "+ "aukštų");

let imageArr = [];
let imageHML;
let cupnumbinrow = 0;

for (let i = 1; i<=rowcounter; i++){
    cupnumbinrow = cupnumbinrow+1;
}


let cupamount = (1+cupnumbinrow)*cupnumbinrow/2;


let diff = cupcounter - cupamount;

for (let i = 1; i<=rowcounter; i++){
    if (i < (rowcounter - diff)){
    imageHML = `<img src="./img/red-cup.png" style = "width: calc(100% / ${cupnumbinrow}) heigth: calc(100% / ${rowcounterint})"></img>`
    imageArr.push(imageHML);
    HTML += `<div class="row">
    ${imageArr}
    </div>`;}
    
    else {

        imageHML = `<img src="./img/red-cup.png" style = "width: calc(100% / ${cupnumbinrow}) heigth: calc(100% / ${rowcounterint})"></img>`
        imageArr.push(imageHML);
        HTML += `<div class="row">
        <img src="./img/red-cup.png" style = "width: calc(100% / ${cupnumbinrow}) heigth: calc(100% / ${rowcounterint})"></img>
        ${imageArr}
        </div>`;

    }
}



/*

else {
        cupnumbinrow = cupnumbinrow+diff
    for(let i = 0; i<cupnumbinrow; i++){
        imageArrlast.push(imageHML)}

        HTML = HTML + `<div class="lastrow" style="text-align: center;">
        ${imageArrlast}
        </div>`;
    }
*/


innertower.innerHTML = HTML;

}

rowcount(cupcounter)

/*let cupamount = (1+cupnumbinrow)*cupnumbinrow/2;*/

