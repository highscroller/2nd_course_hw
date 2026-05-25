// ЗАДАНИЕ 1

console.log('ЗАДАНИЕ 1');

const jsToUpperCase = "js";
console.log(jsToUpperCase);
console.log(jsToUpperCase.toUpperCase());

// ЗАДАНИЕ 2

console.log('ЗАДАНИЕ 2');

function filterStartsWithJ(array) {
    return array.filter(item => item.toLowerCase().startsWith('j'));
}

const arrayStartsWith = ['Js', 'html', 'javascript', 'css', 'Jupiter'];
console.log(arrayStartsWith);
console.log(filterStartsWithJ(arrayStartsWith));

// ЗАДАНИЕ 3

console.log('ЗАДАНИЕ 3');

const roundNumber = 32.58884;

console.log(Math.floor(roundNumber));
console.log(Math.ceil(roundNumber));
console.log(Math.round(roundNumber));

// ЗАДАНИЕ 4

console.log('ЗАДАНИЕ 4');

const minMaxNumber = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...minMaxNumber));
console.log(Math.max(...minMaxNumber));

// ЗАДАНИЕ 5

console.log('ЗАДАНИЕ 5');

console.log(Math.floor(Math.random() * 10) + 1);

// ЗАДАНИЕ 6

console.log('ЗАДАНИЕ 6');

function randomNumber() {
    return Math.floor(Math.random() * userNumber) + 1;
}

const userNumber = 3;
console.log(randomNumber(userNumber));

// ЗАДАНИЕ 7

console.log('ЗАДАНИЕ 7');

function randomBetweenNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetweenNumbers(1, 67));

// ЗАДАНИЕ 8

console.log('ЗАДАНИЕ 8');

const now = new Date();
console.log(now.toLocaleDateString());

// ЗАДАНИЕ 9

console.log('ЗАДАНИЕ 9');

const currentDate = new Date();
console.log("Сегодня: " + currentDate.toLocaleDateString());

const futureDate = new Date(currentDate.getTime() + 1000 * 60 * 60 * 24 * 73);
console.log("Через 73 дня: " + futureDate.toLocaleDateString());

// ЗАДАНИЕ 10

console.log('ЗАДАНИЕ 10');

function formatDateTime(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const dateLog = new Date();
console.log(formatDateTime(dateLog));