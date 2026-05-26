// ЗАДАНИЕ 1

let a = 2;
let b = 3;

function task1() {
    console.log('ЗАДАНИЕ 1');

    if (Number(a) > Number(b)) {
        console.log(b);
    } else if (Number(a) === Number(b)) {
        console.log(`Числа ${a} и ${b} равны`);
    } else {
        console.log(a);
    }
}

task1();

// ЗАДАНИЕ 2

function task2() {
    console.log('ЗАДАНИЕ 2');

    let oddNumber = prompt('Введите число');

    if (Number(oddNumber) % 2 === 0) {
        console.log(`Число четное`);
    } else if (Number(oddNumber) % 2 !== 0) {
        console.log(`Число нечетное`);
    }
}

task2();

// ЗАДАНИЕ 3

function task3() {
    console.log('ЗАДАНИЕ 3');

    let number = prompt('Введите число которое нужно заквадратить');

    squareNumber = number ** 2;
    
    console.log(`Квадрат числа ${number} равен ${squareNumber}`);
    return squareNumber;
}

task3();

// ЗАДАНИЕ 4

function task4() {
    console.log('ЗАДАНИЕ 4');

    let age = prompt('Введите ваш возраст');

if (Number(age) < 0) {
    console.log('Вы ввели неправильное значение');
} else if (Number(age) <= 12) {
    console.log('Привет, друг!');
} else {
    console.log('Добро пожаловать!');
}

task4();

// ЗАДАНИЕ 5

function task5() {
    console.log('ЗАДАНИЕ 5');

    let firstNumber = prompt('Введите первое число');
    let secondNumber = prompt('Введите второе число');

    if (isNaN(Number(firstNumber)) || isNaN(Number(secondNumber))) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(`Произведение чисел ${firstNumber} и ${secondNumber} равно ${Number(firstNumber) * Number(secondNumber)}`);
    }
}

task5();

// ЗАДАНИЕ 6

function task6() {
    console.log('ЗАДАНИЕ 6');

    let cubeNumber = prompt('Введите число которое нужно закубить');

    if (isNaN(Number(cubeNumber))) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${cubeNumber} в кубе равняется ${cubeNumber ** 3}`);
    }
}

task6();

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