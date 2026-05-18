function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    while (true) {
        const guess = Number(prompt('Угадайте число от 1 до 100'));

        if (guess === null || isNaN(guess)) {
            alert('Введите число');
            continue;
        }
        if (guess < 1 || guess > 100) {
            alert('Число должно быть от 1 до 100');
            continue;
        }

        attempts += 1;

        if (guess === randomNumber) {
            alert(`Вы угадали! Это было ${randomNumber}. Попыток: ${attempts}`);
            break;
        }
        if (guess < randomNumber) {
            alert('Загаданное число больше');
        } else {
            alert('Загаданное число меньше');
        }
    }
}