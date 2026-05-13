// ЗАДАНИЕ 1
console.log('ЗАДАНИЕ 1');
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// ЗАДАНИЕ 2

console.log('ЗАДАНИЕ 2');
for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

// ЗАДАНИЕ 3

console.log('ЗАДАНИЕ 3');
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// ЗАДАНИЕ 4

console.log('ЗАДАНИЕ 4');
const obj = {"Коля" : '200', "Вася" : '300', "Петя" : '400'}

for (let key in obj) {
    console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
}

// ЗАДАНИЕ 5

console.log('ЗАДАНИЕ 5');
let n = 1000;
let num = 0;

while (n > 50) {
    n /= 2;
    num += 1;
}

console.log('Полученное число: ' + n);
console.log('Количество итераций: ' + num);

// ЗАДАНИЕ 6

console.log('ЗАДАНИЕ 6');

const friday = 5;
let reportDay = 0;

while (reportDay < 31) {
    reportDay += 1;

    if (reportDay % 7 === 5) {
        console.log('Пятница ' + reportDay + ' число. ' + 'Срочно сдать отчет!' );
    }
}