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
    item.innerText = currentPlayer;
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
    });
});


//Query Select all field divs so that when clicked its innertext will be X or O depending on turn 2