// ЗАДАНИЕ 1

console.log('ЗАДАНИЕ 1');

const peopleAge = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(peopleAge.sort((a, b) => a.age - b.age));

// ЗАДАНИЕ 2

console.log('ЗАДАНИЕ 2');

function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   { name: 'Глеб', gender: 'male' },
   { name: 'Анна', gender: 'female' },
   { name: 'Олег', gender: 'male' },
   { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// ЗАДАНИЕ 3

console.log('ЗАДАНИЕ 3');

const dateInterval = setInterval(() => {
    console.log(new Date().toLocaleString());
}, 3000);

setTimeout(() => {
    clearInterval(dateInterval);
    console.log('30 секунд прошло');
}, 30000);

// ЗАДАНИЕ 4

console.log('ЗАДАНИЕ 4');

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

// ЗАДАНИЕ 5

console.log('ЗАДАНИЕ 5');

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000);
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(function () {
    sayHi('Глоб');
});
