const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const player = new Character(0, 0);
const treasure = new Treasure (); // (0,0) = Initial position

// Iteration 1
function drawGrid() {
    // TODO: write the code of the function
    context.lineWidth = 1;
    context.strokeStyle = "black";

    for (var x = 0; x < 500; x += 50) {
        for (var y = 0; y < 500; y += 50) {
            context.strokeRect(x + 5, y + 5, 50, 50);
        }
    }
}


function drawPlayer() {
    context.drawImage(player.sprite, 0, 0, 50, 50);
}

function drawEverything() {
    drawGrid();
    drawPlayer();
    //drawTreasure();
}



window.onload = ()=> drawEverything();