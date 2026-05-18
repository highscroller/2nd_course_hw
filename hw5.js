// ЗАДАНИЕ 1

console.log('ЗАДАНИЕ 1');

let a = prompt('Введите число a');
let b = prompt('Введите число b');
if (Number(a) > Number(b)) {
    console.log(`Число ${a} больше числа ${b}`);
} else if (Number(a) === Number(b)) {
    console.log(`Число ${a} равно числу ${b}`);
} else {
    console.log(`Число ${a} меньше числа ${b}`);
}

// ЗАДАНИЕ 2

console.log('ЗАДАНИЕ 2');

let oddNumber = prompt('Введите число');

if (Number(oddNumber) % 2 === 0) {
    console.log(`Число ${oddNumber} четное`);
} else if (Number(oddNumber) % 2 !== 0) {
    console.log(`Число ${oddNumber} нечетное`);
}

// ЗАДАНИЕ 3

console.log('ЗАДАНИЕ 3');

let number = prompt('Введите число которое нужно заквадратить');

squareNumber = number ** 2;

console.log(`Квадрат числа ${number} равен ${squareNumber}`);
console.log(`${squareNumber}`);

// ЗАДАНИЕ 4

console.log('ЗАДАНИЕ 4');

let age = prompt('Введите ваш возраст');

if (Number(age) < 0) {
    console.log('Вы ввели неправильное значение');
} else if (Number(age) <= 12) {
    console.log('Привет, друг!');
} else if (Number(age) === 67) {
    console.log('Доступ закрыт');
} else {
    console.log('Добро пожаловать!');
}

// ЗАДАНИЕ 5

console.log('ЗАДАНИЕ 5');

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

if (isNaN(Number(firstNumber)) && isNaN(Number(secondNumber))) {
    console.log('Одно или оба значения не являются числом');
} else {
    console.log(`Произведение чисел ${firstNumber} и ${secondNumber} равно ${Number(firstNumber) * Number(secondNumber)}`);
}

// ЗАДАНИЕ 6

console.log('ЗАДАНИЕ 6');

let cubeNumber = prompt('Введите число которое нужно закубить');

if (isNaN(Number(cubeNumber))) {
    console.log('Переданный параметр не является числом');
} else {
    console.log(`${cubeNumber} в кубе равняется ${cubeNumber ** 3}`);
}

// ЗАДАНИЕ 7

console.log('ЗАДАНИЕ 7');

const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
};

console.log("Площадь первого круга: " + circle1.getArea());
console.log("Периметр первого круга: " + circle1.getPerimeter());
console.log("Площадь второго круга: " + circle2.getArea());
console.log("Периметр второго круга: " + circle2.getPerimeter());