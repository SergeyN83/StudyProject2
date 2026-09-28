'use strict'

let resolve = true;

function askedNumber(n) {
    function game(counter) {

        if (counter == 0) {
            resolve = confirm("Попытки закончились, хотите сыграть еще?")

            if (resolve == true) {
                game(10)
            } else return
        }

        const answer = prompt(`Угадай число от 1 до 100, количество оставшихся попыток: ${counter}`)
        counter--

        if (answer === null) {
            alert("Игра окончена")
            return
        }

        const trimmedInput = answer.trim();
        const userNumber = Number(trimmedInput);

        if (trimmedInput === "" || Number.isNaN(userNumber)) {
            alert("Введи число!")
            counter++
            game(counter)
        } else if (n > answer) {
            alert(`Загаданное число больше, осталось ${counter} попыток`)
            game(counter)
        } else if (n < answer) {
            alert(`Загаданное число меньше, осталось ${counter} попыток`)
            game(counter)
        } else if (n == answer) {
            const resolve = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
            if (resolve == true) {
                game(10)
            } else return
        }
    }


    game(10)
}

askedNumber(55)
