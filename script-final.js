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
    const startingScreen = document.querySelector('#starting-screen')
    const chooseMarker = document.querySelectorAll('.select-marker')
    let player1 = undefined;
    let player2 = undefined;
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

    fieldElements = document.querySelectorAll('.field');
    fieldElements.forEach((field) => {
        field.addEventListener('click', (field) => {
            if (field.target.textContent !== '') return;
            gameBoard.setField(field.target.dataset.index, currentMarker)
            console.log(currentMarker)
            updateBoard();
            switchTurn();
            console.log(currentMarker)
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

    return {player1, player2}
})();

//initialize player object in gameController(())

//for some reason my fieldelements are not listeninig, CAUSE IT WASNT INVOKED RIGHT AWAY 

//create a function that will switch between player1 and player2 signs, get current sign