function createSquareDivs() {
    /*
        Purpose: Creates each box in the grid
    */

    let div = document.createElement('div');
    div.className = 'grid';
    let gridContainer = document.querySelector('#drawing-board');

    gridContainer.appendChild(div);
}


function completeGrid(rows) {
    /*
        Purpose: Completes the whole grid
        Parameter: rows = amount of rows and columns
    */

   let gridContainer = document.querySelector('#drawing-board');
    gridContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < rows * rows; i++) {
        createSquareDivs();
    }
}

function paintGrid(color) {
    /*
        Purpose: Paints the grid based on the desired color
        Parameter: color: desired color
    */

    let drawingBoard = document.getElementById('drawing-board');
    let isDragging = false;

    // Initial click
    drawingBoard.addEventListener('mousedown', event => {
        if(event.target.className === 'grid') {
            isDragging = true;
            event.target.style.backgroundColor = color;

        }
    });

    // Dragging click
    drawingBoard.addEventListener('mousemove', event => {
        if(isDragging) {
            if(event.target.className === 'grid')
                event.target.style.backgroundColor = color;
        }
    });

    // User is not clicking
    drawingBoard.addEventListener('mouseup', event => {
        isDragging = false;
    });
}



completeGrid(16);
paintGrid('blue');


