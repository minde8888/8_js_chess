"use strict";

const board = document.querySelector('.board');
const lefta = document.querySelector('.left');
const righta = document.querySelector('.right');
const bottoma = document.querySelector('.bottom');
const topa = document.querySelector('.top');

const rowsCount = 8;
const columnsCount = 8;
const letter = rowsCount;
const integer = columnsCount;
const firstColor = '#fff';
const secondColor = '#000';
let color = '';

let HTML = '';

for ( let d=1; d<=letter; d++ ){
     HTML += `<div class="ddd" style="height: calc(100% / ${letter});">${d}</div>`;
}
righta.innerHTML = HTML;
lefta.innerHTML = HTML;

HTML = '';

for ( let y=1; y<=rowsCount; y++ ) {
    HTML += `<div class="row"
                  style="height: calc(100% / ${rowsCount});">`;
        for ( let x=1; x<=columnsCount; x++ ) {
            if ( (x+y)%2 === 0 )  {
                color = firstColor;
            } else {
                color = secondColor;
            }

            HTML += `<div class="cell"
                          style="background-color: ${color};
                                 width: calc(100% / ${columnsCount});">
                    </div>`;
        }
    HTML += `</div>`;
}
board.innerHTML = HTML;

HTML = '';

for ( let a=1; a<=integer; a++ ){
     HTML += `<div class="aaa" style="width: calc(100% / ${integer});">${a}</div>`;
}

topa.innerHTML = HTML;
bottoma.innerHTML = HTML;

HTML = '';
board.style.borderColor = 'black';





