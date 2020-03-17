"use strict";

let tower = document.querySelector(".tower");

function towerBuild(x){
    let HTML = "";
    //suskaičiuoju eilučių skaičių
    let rowCounter = (Math.sqrt(1+(8*x))-1)/2; //formulę sumos skaičių nuo iki suskaičiavimui tik atvirkščia. Naudojau diskriminantą
    let rowcounterInt = parseInt(rowCounter);   

    console.log("Bokštas gavosi" + " " + rowcounterInt+" "+ "aukštų");

    let imageArr = [];
    let imageHTML;
    let cupNumInRow = 0;

    for (let i = 1; i<=rowCounter; i++){
        cupNumInRow = cupNumInRow+1;
        }

    //formulė puodelių sumos suskaičiavimui, kai žinomas eilių skaičius ir puodelių skaičius eilėje
    let cupAmountCalc = (1+cupNumInRow)*cupNumInRow/2;
    //paduotų puodelių skirtumas nuo suskaičiuoto, jeigu bokštas būtų taisyklingas
    let diff = x - cupAmountCalc;
    cupNumInRow = cupNumInRow + 1; //kad paskaičiuotų gerą puodelio plotį ir tasi atvejais, kai bokštas netaisyklingas

    for (let i = 1; i<=rowCounter; i++){
        if (i <= (rowCounter - diff)){
            imageHTML = `<img src="./img/red-cup.png" style = "width: calc(100% / ${cupNumInRow}); height: 100%;"></img>`
            imageArr.push(imageHTML);
            HTML += `<div class="row" style = "width: 100%; height: calc(100% / ${rowcounterInt}); margin-left: calc(100% * (${rowcounterInt} - ${imageArr.length}) / 2 / ${rowcounterInt+1});">
            ${imageArr.join("")}
            </div>`;
        }
        else {
            imageHTML = `<img src="./img/red-cup.png" style = "width: calc(100% / ${cupNumInRow}); height: 100%;"></img>`
            imageArr.push(imageHTML);
            HTML += `<div class="row" style = "width: 100%; height: calc(100% / ${rowcounterInt}); margin-left: calc(100% * (${rowcounterInt} - ${imageArr.length}) / 2 / ${rowcounterInt+1});">
            <img src="./img/red-cup.png" style = "width: calc(100% / ${cupNumInRow}); height: 100%;"></img>
            ${imageArr.join("")}
            </div>`;
        }
    }
    tower.innerHTML = HTML;
}

towerBuild(10)


