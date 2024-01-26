


function numberCheckin(number) {

    return !isNaN(parseFloat(number)) && isFinite (number)
  
  }
  




function randomGenerate(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

let mysteryNumber = randomGenerate();





const gameBotFunction = function() {
    let maxTries = 3;
    let tries = 0;
    let replay = true;

    while (replay) {
        let mysteryNumber = randomGenerate(1, 100);
        tries = 0;

        while (tries < maxTries) {
            let input = prompt(`Отгадай загаданное число (от 1 до 100). У вас осталось ${maxTries - tries} попыток.`);
            let number = parseFloat(input);

            if (input === null) {
                alert("Игра завершена!");
                break;
            }

            if (numberCheckin(input) && input.trim() !== "") {
                tries++;
                if (number === mysteryNumber) {
                    let playAgain = confirm("Поздравляем, вы угадали число! Хотите сыграть еще раз?");
                    if (playAgain) {
                        break;
                    } else {
                        replay = false;
                        alert("Игра завершена!");
                        break;
                    }
                } else if (tries === maxTries) {
                    alert(`Игра окончена. Загаданное число было: ${mysteryNumber}`);
                    let playNewGame = confirm("Хотите попробовать сыграть еще раз?");
                    if (playNewGame) {
                        break;
                    } else {
                        replay = false;
                        alert("Игра завершена!");
                        break;
                    }
                } else if (number > mysteryNumber) {
                    alert("Загаданное число меньше");
                } else {
                    alert("Загаданное число больше");
                }
            } else {
                alert("Пожалуйста, введите допустимое число (от 1 до 100)");
            }
        }
    }
};

gameBotFunction();