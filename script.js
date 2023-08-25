function createSquareDivs(rows) {
    /*
        Purpose: Creates each box in the grid
        Paremeter: x = amount of rows and columns
    */

    let div = document.createElement('div');
    div.className = 'grid';
    let drawing_board = document.querySelector('#drawing-board');
    let parent_width = drawing_board.offsetWidth;

    // Get width for each gridbox
    width = Math.floor(parent_width / rows) + 'px';
    div.style.minWidth = width;

    drawing_board.appendChild(div);
}


function completeGrid(rows) {
    /*
        Purpose: Completes the whole grid
        Parameter: rows = amount of rows and columns
    */
    for (let i = 0; i < rows * rows; i++) {
        createSquareDivs(rows);
    }
}

completeGrid(50);
