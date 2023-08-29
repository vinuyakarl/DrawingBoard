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

    // Loop until there is no more child (used when we are changing grid sizes)
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < rows * rows; i++) {
        createSquareDivs();
    };
}

function paintGrid(color) {
    /*
        Purpose: Paints the grid based on the desired color
        Parameter: color: desired color
    */

    let drawingBoard = document.getElementById('drawing-board');
    let isDragging = false; // If mouse is drag clicked

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

function buttonFunctions () {
    let colorMenu = document.getElementById('color-menu');
    let changeColorButton = document.getElementById('change-color');
    let eraserButton = document.getElementById('eraser');
    let clearButton = document.getElementById('clear');
    let gridLinesButton = document.getElementById('grid-lines');
    let gridSizeMenu = document.getElementById('size-scale');
    let toggleEraser = false;

    // Allows user to change color
    changeColorButton.addEventListener('click', () => {
        colorMenu.click();
        document.addEventListener('mousemove', () => {
            if (!toggleEraser) {
                paintGrid(colorMenu.value);
            };
        });
    });

    // Makes the 'brush' into an eraser
    eraserButton.addEventListener('click', () => {
        toggleEraser = !toggleEraser;
        eraserButton.style.backgroundColor = toggleEraser ? 'grey' : 'black';
        colorValue = toggleEraser ? 'white' : colorMenu.value;
        paintGrid(colorValue);
    });

    // Clears the drawing board
    clearButton.addEventListener('click', () => {
        let grid = document.querySelectorAll('.grid');
        for (box of grid) {
            box.style.backgroundColor = 'white';
        }
    });

    // Toggles grid lines
    gridLinesButton.addEventListener('click', () => {
        let grid = document.querySelectorAll('.grid');
        let toggleGridLines = gridLinesButton.style.backgroundColor === 'grey';
        for (box of grid) {
            box.style.border = toggleGridLines ? '1px solid black' : 'none';
        }
        gridLinesButton.style.backgroundColor = toggleGridLines ? 'black' : 'grey';
    });

    // Changes board size
    gridSizeMenu.addEventListener('mousemove', () => {
        let test = document.getElementById('size-value');
        test.innerText = gridSizeMenu.value + " x " + gridSizeMenu.value;
    })

    gridSizeMenu.addEventListener('change', () => {
        completeGrid(gridSizeMenu.value);
    })
}

function main() {
    completeGrid(16);
    paintGrid('red');
    buttonFunctions();
}

main();