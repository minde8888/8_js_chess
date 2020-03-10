"use strict";


//const multi = document.querySelectorAll('div') - rasti visus
//const row = bord.querySelector('row')

const board = document.querySelector('board');
const rowCount = 4;
const columnsCount = 4;
const firstColor = '#fff';
const secondColor = '#000';
let color = '';

let HTML='';
let columnHTML = HTML;
board.innerHTML = HTML;

/*for(let y=1; y<=rowCount; y++){
    columnHTML= '';
    for(let x=1; x<=rowCount; x++){
        columnHTML = '<div class="cell">[$(x), $(y)]</div>';
    }
    HTML = `<div class="row">${columnHTML}</div>`;
    board.innerHTML += HTML;
}*/
for(let y=1; y<=rowCount; y++){
   /* if(y%2===1 && x%2 === 1){color = firstColor;}
    if(y%2===1 && x%2 === 0){color = secondColor;}
    if(y%2===1 && x%2 === 1){color = secondColor;}
    if(y%2===1 && x%2 === 0){color = firstColor;}*/
        //lygine eilute
        if((x+y)%2 === 1){
            //pirmas (lyginis-nelyginis)stulpelis
            color = firstColor;
        }
        }else{
            color = secondColor;
        }
    HTML += `<div class="row" style="height: calc(100% / ${rowCount})">`;
        for(let x=1; x<=rowCount; x++){
            HTML += `<div class="cell" style = "backrgound-color:${Color}; widh: calc(100% / ${columnsCount})">[$(x), $(y)]</div>`;
    }
    HTML += '</div>';
}
board.innerHTML = HTML;

border.style.borderColor = 'blue';
/*let HTML = '<div class="row"> Row 1 </div>';
board.innerHTML = HTML;

let HTML = '<div class"row"> Row 2 </div>';
board.innerHTML += HTML;

let HTML = '<div class"row"> Row 3 </div>';
board.innerHTML += HTML;

let HTML = '<div class"row"> Row 4 </div>';
board.innerHTML += HTML;*/

//const someThingNew = 'kintamojo iterpmas  ${HTML} '