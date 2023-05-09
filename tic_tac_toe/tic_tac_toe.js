console.log('Fichier chargé');

// Variables 

    let reset = document.getElementById('btn_reset');
    let info = document.getElementById('infos');

    let boxes = Array.from(document.getElementsByClassName('btn'));

    let winnerIndicator = getComputedStyle(document.body).getPropertyValue('#{$green}');

    const O_PLAY = "O";
    const X_PLAY = "X";

    let currentPlayer = X_PLAY;
    let plays = Array(9).fill(null);

    const winningCombos = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
    ]

//


// Play

    const START_GAME = () => {
        boxes.forEach(box => box.addEventListener( 'click', boxClicked ));
    }

    function boxClicked(e) {
        const id = e.target.id; 

        if (!plays[id]) {
            plays[id] = currentPlayer;
            e.target.innerText = currentPlayer;

            if (playerWon() !==false) {
                info.innerHTML = `Player ${currentPlayer} has won 🎉`;

                let winningBlocks = playerWon();
                winningBlocks.map( block => boxes[box].classList.add("winning-blocks"));
                return
            } 

            currentPlayer= currentPlayer == X_PLAY ? O_PLAY : X_PLAY;
        }

    }

//


// Win 

    function playerWon() {

        for (const condition of winningCombos) {
            let [a, b, c] = condition;

            if (plays[a] && (plays[a] === plays[b]) && (plays[a] === plays[c])) {
                return [a, b, c];
            };
        };
        return false;

    } 

//


// Reset 

    reset.addEventListener( 'click', () => {

        plays.fill(null);

        boxes.forEach( box => {
            box.innerText = '';
            box.style.backgroundColor=''
        });

        info.innerHTML = '';

        currentPlayer = X_PLAY;

    });

//

START_GAME();