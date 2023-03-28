
async function getGameInfo() {
    let result = await requestPlayerGame();
    if (!result.successful) {
        alert("Something is wrong with the game please login again!");
        window.location.pathname = "index.html";
    } else {
        GameInfo.game = result.game;
        if (GameInfo.scoreBoard) GameInfo.scoreBoard.update(GameInfo.game); 
        else GameInfo.scoreBoard = new ScoreBoard(GameInfo.game);
    }
}


async function getDecksInfo() {
    let result = await requestDecks();
    if (!result.successful) {
        alert("Something is wrong with the game please login again!");
        window.location.pathname = "index.html";
    } else {
        GameInfo.matchDecks = result.decks;
        if (GameInfo.playerDeck) GameInfo.playerDeck.update(GameInfo.matchDecks.mycards); 
        else GameInfo.playerDeck = new Deck("Your cards",
            GameInfo.matchDecks.mycards,30,300,playCard,GameInfo.images.card);
        if (GameInfo.oppDeck) GameInfo.oppDeck.update(GameInfo.matchDecks.oppcards); 
        else GameInfo.oppDeck = new Deck("Opponent cards",
            GameInfo.matchDecks.oppcards,GameInfo.width-30-Deck.nCards*Card.width,300,null,GameInfo.images.card);
    }
}


async function getShipsInfo() {
    if (!result.successful) {
        alert("Something is wrong with the game please login again!");
        window.location.pathname = "index.html";
    } else {
        let playerShip = GameInfo.game.player.ship;
        let oppShip = GameInfo.game.opponents[0].ship;
    
        if (GameInfo.playerShip) GameInfo.playerShip.update(playerShip); 
        else GameInfo.playerShip = new Ship("Your ship",
            playerShip,400,20,300,GameInfo.images.ship, GameInfo.images.ripples,false);
        if (GameInfo.oppShip) GameInfo.oppShip.update(oppShip); 
        else GameInfo.oppShip = new Ship("Opponent ship",
            oppShip,730,20,300,GameInfo.images.ship, GameInfo.images.ripples,true);
    }
}



async function playCard(card) {
    if (!card.active) {
        alert("That card was already played");
    } else if (confirm(`Do you want to play the "${card.name}" card?`)) {
        let result = await requestPlayCard(card.deckId);
        if (result.successful) {
            await getGameInfo();
            await getDecksInfo();
            await getShipsInfo();
        }
        alert(result.msg);
    }
}


async function endturnAction() {
    let result = await requestEndTurn();
    if (result.successful) {
        await  getGameInfo();
        GameInfo.prepareUI();
    } else alert("Something went wrong when ending the turn.")
}