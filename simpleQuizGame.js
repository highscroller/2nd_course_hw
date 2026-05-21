function simpleQuiz() {
    const quiz = [
        {
            question: 'Зимой и летом одним цветом?',
            answers: ['Ель', 'Сосна', 'Дуб', 'Береза'],
            correctAnswer: 'Ель'
        },
        {
            question: 'Висит груша, нельзя скушать?',
            answers: ['Яблоко', 'Груша', 'Лампочка', 'Банан'],
            correctAnswer: 'Лампочка'
        },
        {
            question: 'То висячий, то стоячий, то холодный, то горячий?',
            answers: ['Фрезерный станок', 'Плита', 'Котел', 'Душ'],
            correctAnswer: 'Душ'
        },
        {
            question: 'Возьму его в руки, сожму его крепко — он станет упругим и твердым как репка',
            answers: ['Палка', 'Кирпич', 'Снежок', 'Картофель'],
            correctAnswer: 'Снежок'
        },
        {
            question: 'Кругом волоса, посередине колбаса?',
            answers: ['Кукуруза', 'Дыня', 'Ананас', 'Гриб'],
            correctAnswer: 'Кукуруза'
        }
    ];

    let correctCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const item = quiz[i];
        const message = item.question + "\n" + item.answers.join("\n");
        const userAnswer = prompt(message);
        const isCorrect = userAnswer !== null
            && userAnswer.trim().toLowerCase() === item.correctAnswer.toLowerCase();

        if (isCorrect) {
            correctCount++;
            alert(`Правильно! Счёт: ${correctCount} из ${quiz.length}`);
        } else {
            alert(`Неправильно. Счёт: ${correctCount} из ${quiz.length}`);
        }
    }

    alert(`Игра окончена. Правильных ответов: ${correctCount} из ${quiz.length}`);
}
