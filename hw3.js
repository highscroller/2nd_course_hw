// ЗАДАНИЕ 1

let password = 'пароль';

let input = prompt('Введите пароль');

if (input === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// ЗАДАНИЕ 2

let c = 67;

if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// ЗАДАНИЕ 3

let d = 6;
let e = 7;

if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

// ЗАДАНИЕ 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// ЗАДАНИЕ 5

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        alert('Зима');
        break;
    case '3':
    case '4':
    case '5':
        alert('Весна');
        break;
    case '6':
    case '7':
    case '8':
        alert('Лето');
        break;
    case '9':
    case '10':
    case '11':
        alert('Осень');
        break;
    default:
        alert('Неверный номер месяца');
}