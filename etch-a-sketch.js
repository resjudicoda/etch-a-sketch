
for (let j = 0; j < 16; j++) {
    const defaultGridColumn = document.createElement('div');
    defaultGridColumn.classList.add('defaultGridColumn');
    container.appendChild(defaultGridColumn);

    for (let k = 0; k < 16; k++) {

    const defaultGridSquare = document.createElement('div');
    defaultGridSquare.classList.add('defaultGridSquare');
    defaultGridColumn.appendChild(defaultGridSquare);
    }
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

let color = random_rgba();

const divs = document.querySelectorAll( 'div.defaultGridSquare' );

divs.forEach((div) => {

div.addEventListener('mouseover', function(e){
    e.target.style.background = 'darkgrey';
})});

let reset = document.querySelector('#Clear');

reset.addEventListener('click', setGrid);

function setGrid () {

    let gridNumber = prompt("Please set the size of the canvas.");

    const clearDivs = document.querySelector('#container');
    clearDivs.innerHTML = '';
    
    for (let i = 0; i < gridNumber; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('gridColumn');
        container.appendChild(gridColumn);

        for (let l = 0; l < gridNumber; l++) {

            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridColumn.appendChild(gridSquare);
            }
    }

    const squares = document.querySelectorAll( 'div.gridSquare' );

    squares.forEach((div) => {

    div.addEventListener('mouseover', function(e){
        e.target.style.background = 'darkgrey';
    })});

}








