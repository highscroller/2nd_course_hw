function simpleArithmetic() {
    const firstNumber = Math.floor(Math.random() * 10) + 1;
    const secondNumber = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*', '/'];
    const operator = operations[Math.floor(Math.random() * operations.length)];
    let attempts = 0;

    let correctAnswer;  
    switch (operator) {
        case '+':
            correctAnswer = firstNumber + secondNumber;
            break;
        case '-':
            correctAnswer = firstNumber - secondNumber;
            break;
        case '*':
            correctAnswer = firstNumber * secondNumber;
            break;
        case '/':
            correctAnswer = firstNumber / secondNumber;
            correctAnswer = Math.round(correctAnswer * 100) / 100;
            break;
    }

    let attempt = Number(prompt(`Вопрос на засыпку: ${firstNumber} ${operator} ${secondNumber}. Ваш ответ?`))

    if (isNaN(attempt)) {
        alert('Явно мимо');
        return false;
    }
    
    if (attempt === correctAnswer) {
        alert(`Молодец!`);
        return true;
    } else {
        alert(`Получится в другой раз :(`);
        return false;
    }
}