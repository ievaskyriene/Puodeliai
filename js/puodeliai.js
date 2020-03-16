"use strict";


    let tower = document.querySelector(".tower");
   
    let cupcounter = 7;

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

cupnumbinrow = cupnumbinrow + 1;


let margin = rowcounterint - cupnumbinrow;
console.log(rowcounterint)
console.log(cupnumbinrow)
console.log(margin)

for (let i = 1; i<=rowcounter; i++){
    
    if (i <= (rowcounter - diff)){
    imageHML = `<img src="./img/red-cup.png" style = "width: calc(100% / ${cupnumbinrow}); height: 100%;"></img>`
    imageArr.push(imageHML);
    console.log(imageArr.length);
    HTML += `<div class="row" style = "width: 100%; height: calc(100% / ${rowcounterint}); margin-left: calc(100% * (${rowcounterint} - ${imageArr.length}) / 2 / ${rowcounterint});">
    ${imageArr.join("")}
    </div>`;}
    
    else {
        
        imageHML = `<img src="./img/red-cup.png" style = "width: calc(100% / ${cupnumbinrow}); height: 100%;"></img>`
        imageArr.push(imageHML);
        console.log(imageArr.length);
        HTML += `<div class="row" style = "width: 100%; height: calc(100% / ${rowcounterint}); margin-left: calc(100% * (${rowcounterint} - ${imageArr.length}) / 2 / ${rowcounterint});">
        <img src="./img/red-cup.png" style = "width: calc(100% / ${cupnumbinrow}); height: 100%;"></img>
        ${imageArr.join("")}
    
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


tower.innerHTML = HTML;

}

rowcount(cupcounter)

/*let cupamount = (1+cupnumbinrow)*cupnumbinrow/2;*/

