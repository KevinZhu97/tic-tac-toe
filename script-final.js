function Player(sign) {
    const getSign = () => {
        return sign;
    }
    return {
        getSign
    }
}

//module for gameboard object, this is to know where to put X and O's and reset
const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', '']

    const setField = (index, sign) => {
        board[index] = sign
    }

    const getField = (index) => {
        return board[index]
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = '';
        }
    };
    return {board, setField, getField, resetBoard}
})();

//modules that takes care of elements displayed including what is ON gameboard
const displayController = (() => {
    gameOver = false;
    const restartButton = document.querySelector('.restart')
    const playerChar1 = document.querySelector('.player-name1')
    const playerChar2 = document.querySelector('.player-name2')
    const startingScreen = document.querySelector('#starting-screen')
    const chooseMarker = document.querySelectorAll('.select-marker')
    let player1 = undefined;
    let player2 = undefined;
    fieldElements = document.querySelectorAll('.field');
    chooseMarker.forEach(item => {
        item.addEventListener('click', () => {
            startingScreen.remove();
            player1 = Player(item.innerText);
            if (player1.getSign() == "X") {
                player2 = Player("O")
            } else {
                player2 = Player("X")
            };
            currentMarker = player1.getSign();
        });
    });

    restartButton.addEventListener('click', () => {
        gameBoard.resetBoard();
        updateBoard();
        gameOver = false;
        playerChar1.innerText = "Player 1";
        playerChar2.innerText = "Player 2";
    })

    fieldElements.forEach((field) => {
        field.addEventListener('click', (field) => {
            if (gameOver == false) {
                if (field.target.textContent !== '') return;
                gameBoard.setField(field.target.dataset.index, currentMarker)
                updateBoard();
                if (gameController.checkWinner(currentMarker)) {
                    gameOver = true;
                    displayWinner(currentMarker);
                    
                }
                switchTurn();
            }
        })
    });

    switchTurn = () => {
        if (currentMarker == player1.getSign()) {
            currentMarker = player2.getSign();
        } else {
            currentMarker = player1.getSign();
        }
    }

    const updateBoard = () => {
        for (let i = 0; i < fieldElements.length; i++) {
            fieldElements[i].textContent = gameBoard.getField(i);
        }
    }

    const displayWinner = (winner) => {
        if (winner == player1.getSign()) {
            playerChar1.innerText = "You win!"
        } else {
            playerChar2.innerText = "You win!"
        }
    }

    return {player1, player2}
})();

//initialize player object in gameController() for game rules
const gameController = (() => {
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    const checkWinner = (marker) => {
        return (gameBoard.board[0] === marker && gameBoard.board[1] === marker && gameBoard.board[2] === marker
            || gameBoard.board[3] === marker && gameBoard.board[4] === marker && gameBoard.board[5] === marker
            || gameBoard.board[6] === marker && gameBoard.board[7] === marker && gameBoard.board[8] === marker
            || gameBoard.board[0] === marker && gameBoard.board[3] === marker && gameBoard.board[6] === marker
            || gameBoard.board[1] === marker && gameBoard.board[4] === marker && gameBoard.board[7] === marker
            || gameBoard.board[2] === marker && gameBoard.board[5] === marker && gameBoard.board[8] === marker
            || gameBoard.board[0] === marker && gameBoard.board[4] === marker && gameBoard.board[8] === marker
            || gameBoard.board[2] === marker && gameBoard.board[4] === marker && gameBoard.board[6] === marker)
        }

    return {checkWinner}

    })();

//try to simplyify if else return true/false

//for some reason my fieldelements are not listeninig, CAUSE IT WASNT INVOKED RIGHT AWAY 

//create a function that will switch between player1 and player2 signs, get current sign

//create a reset button that pops up 