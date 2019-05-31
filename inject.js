console.log(board);
var getCards = document.getElementsByClassName("set-card-td");
var cards = new Array();
for (var i = 0; i < getCards.length; i++) {
    console.log(getCards[i].getElementsByTagName("a")[0]);
    cards.push(getCards[i].getElementsByTagName("a")[0]);
    console.log(cards[cards.length - 1]);
}


for (var x = 1; x < board.theSets.length; x++) {
    if (x >= board.theSets.length - 1) {

    }
    for (var y = 0; y < board.theSets[x].length; y++) {

        console.log("card " + board.theSets[x][y]);
        console.log(cards[board.theSets[x][y] - 1]);
        click(cards[board.theSets[x][y] - 1]);

    }
    console.log("---------");


}
// alert("Wait a bit before continuing");


function click(card) {

    var script = document.createElement('script');
    script.type = "text/javascript";
    script.innerHTML = card.href;
    document.getElementsByTagName('head')[0].appendChild(script);
    script.parentElement.removeChild(script);

}