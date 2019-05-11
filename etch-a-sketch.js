

let reset = document.querySelector('#Clear');

reset.addEventListener('click', setGrid);

function clearGrid () {

    

}

function setGrid () {

    let gridNumber = prompt("Please set the size of the canvas.");

    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare')
        container.appendChild(gridSquare);
    }

    const divs = document.querySelectorAll( 'div.gridSquare' );

    divs.forEach((div) => {

    div.addEventListener('mouseover', function(e){
        e.target.style.background = 'darkgrey'
    })});

}








