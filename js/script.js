{
    let playerResult = 0;
    let computerResult = 0;
    
    const playGame = function(playerInput) {
        clearMessages();

        const getMoveName = function (argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            } else if (argMoveId == 2){
                return 'papier';
            } else if (argMoveId == 3){
                return 'nożyce';
            }
        }

        const displayResult = function (argComputerMove, argPlayerMove) {
            if (argComputerMove == argPlayerMove) {
                printMessage('Remis!');
            } else if (argComputerMove = 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
                playerResult++;
                document.getElementById('player-score').innerHTML = playerResult;
            } else if (argPlayerMove !== 'kamień' && argPlayerMove !== 'papier' && argPlayerMove !== 'nożyce') {
                printMessage('Niepoprawny ruch! Spróbuj jeszcze raz.');
            } else {
                printMessage('Przegrywasz!');
                computerResult++;
                document.getElementById('computer-score').innerHTML = computerResult;
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        const computerMove = getMoveName(randomNumber);

        printMessage(`Mój ruch to ${computerMove}.`);

        const playerMove = getMoveName(playerInput);

        printMessage(`Twój ruch to ${playerMove}.`);

        displayResult(computerMove, playerMove);

    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    })

    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    })

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    })
}
