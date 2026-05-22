function rockPaperScissors() {
    const options = ['камень', 'ножницы', 'бумага'];

    const userChoice = prompt('Выберите: камень, ножницы или бумага');
    if (userChoice === null) {
        alert('Игра отменена');
        return;
    }

    const normalizedUserChoice = userChoice.trim().toLowerCase();
    if (!options.includes(normalizedUserChoice)) {
        alert('Неверный выбор. Введите: камень, ножницы или бумага');
        return;
    }

    const computerIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerIndex];

    let result;
    if (normalizedUserChoice === computerChoice) {
        result = 'ничья';
    } else if (
        (normalizedUserChoice === 'камень' && computerChoice === 'ножницы') ||
        (normalizedUserChoice === 'ножницы' && computerChoice === 'бумага') ||
        (normalizedUserChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = 'победа';
    } else {
        result = 'поражение';
    }

    alert(
        `Ваш выбор: ${normalizedUserChoice}\n` +
        `Выбор компьютера: ${computerChoice}\n` +
        `Результат: ${result}`
    );
}
