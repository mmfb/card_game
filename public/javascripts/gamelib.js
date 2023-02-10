const width = 1000;
const height = 400;

var game;
var scoreBoard;

var loading = true;

async function refresh() {
    if (game.player.state == "Waiting") {
        let result = await requestPlayerGame();
        game = result.game;
        scoreBoard.update(game);        
    }
}

function preload() {

}


async function setup() {
    let canvas = createCanvas(width, height);
    canvas.parent('game');
    // preload  images
    
    let result = await requestPlayerGame();
    game = result.game;
    scoreBoard = new ScoreBoard(game); 
    setInterval(refresh,1000);
    loading = false;
}
function draw() {
    background(220);
    if (loading) {
        textAlign(CENTER, CENTER);
        textSize(40);
        fill('black');
        text('Loading...', width/2, height/2);
    } else {
        scoreBoard.draw();
    }
}

function mouseClicked() {
  
}
