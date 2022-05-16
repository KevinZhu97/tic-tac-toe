currentPlayer = ""

//Remove starting screen upon marker selection
const startingScreen = document.querySelector('#starting-screen')
const chooseMarker = document.querySelectorAll('.select-marker')
chooseMarker.forEach(item => {
    item.addEventListener('click', event => {
        startingScreen.remove();
        currentPlayer = item.textContent
        console.log(currentPlayer)
    });
});

//Give field markers and evenlistener to mark the currentPlayer and changes currentPlayer after each turn
//Add an if statement that is constantly detecting if there are three or more in a row
const fields = document.querySelectorAll('.field')
fields.forEach(item => {
    item.addEventListener('click', event => {
        if (item.innerText == "") {
            item.innerText = currentPlayer;
        if (currentPlayer == "X") {
            currentPlayer = "O"
        } else {
            currentPlayer = "X"
        }
        };
    });
});


//Store gameboard as an array inside of gameboard object using module
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const reset = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    };

    return {reset};
})();

//Object that controls the flow of the game
const displayController = (() => {

})

//Object that controls the rules of the game
const gameController = (() => {
    let round = 1;
    let isOver = false;

    const checkWinner = (fieldIndex) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    }
})