// ЗАДАНИЕ 1

console.log('ЗАДАНИЕ 1');

const firstArray = [1, 5, 4, 10, 0, 3];
let i = 0;

while (firstArray[i] != 10) {
    console.log(firstArray[i])
    i++;
} console.log(`${firstArray[i]}. Число 10 было под индексом ${i}`)

// ЗАДАНИЕ 2

console.log('ЗАДАНИЕ 2');

const secondArray = [1, 5, 4, 10, 0, 3];
let j = 0;

while (secondArray[j] != 4) {
    console.log(secondArray[j])
    j++;
} console.log(`${secondArray[j]}. Число 4 было под индексом ${j}`)

// ЗАДАНИЕ 3 

console.log('ЗАДАНИЕ 3');

const thirdArray = [1, 3, 5, 10, 20];

console.log(thirdArray.join(' '));

// ЗАДАНИЕ 4

console.log('ЗАДАНИЕ 4');

const array = []
for (let k1 = 0; k1 < 3; k1++) {
    array[k1] = [];
    for (let k2= 0; k2 < 3; k2++) {
        array[k1][k2] = 1;   
    }
}

console.log(array);

// ЗАДАНИЕ 5

console.log('ЗАДАНИЕ 5')

const arrayPush = [1, 1, 1];

arrayPush.push(2, 2, 2)

console.log(arrayPush)

// ЗАДАНИЕ 6

console.log('ЗАДАНИЕ 6')

const arraySort = [9, 8, 7, 'a', 6, 5];

console.log(arraySort)
console.log(arraySort.sort())
console.log(arraySort.sort().filter(item => item!= "a"))

//ЗАДАНИЕ 7

console.log('ЗАДАНИЕ 7')

const tryArray = [9, 8, 7, 6, 5];
let tryNumber = Number(prompt("Введите число"));

if (tryArray.includes(tryNumber)) {
    alert("Угадал");
} else {
    alert("Не угадыал")
}

// ЗАДАНИЕ 8

console.log('ЗАДАНИЕ 8');

const row = "abcdef";
console.log(row);
const arr = row.split('');
console.log(arr);
arr.reverse();
console.log(arr);
const revRow = arr.join('');
console.log(revRow);

// ЗАДАНИЕ 9 

console.log('ЗАДАНИЕ 9')

const arr9 = [[1, 2, 3],[4, 5, 6]];
console.log(arr9);
console.log(arr9.flat());

// ЗАДАНИЕ 10

console.log('ЗАДАНИЕ 10')

const arr10 = [];
for (let i = 0; i < 10; i++) {
    arr10.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr10);

for (let i = 0; i < arr10.length; i++) {
    if (i === arr10.length - 1) {
        console.log(`Элемент ${arr10[i]} последний`)
        break
    }
    let sumArr  = arr10[i] + arr10[i + 1];
    console.log(`Сумма текущего (${arr10[i]}) и следующего (${arr10[i + 1]}) равна ${sumArr}`)
}

// ЗАДАНИЕ 11

console.log('ЗАДАНИЕ 11')

const arr11 = [];
for (let i = 0; i < 5; i++) {
    arr11.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr11);

for (let i = 0; i < arr11.length; i++) {
    arr11[i] = arr11[i]**2
}
console.log(arr11);

// ЗАДАНИЕ 12

console.log('ЗАДАНИЕ 12')

const arr12 = ['a', 'ab', 'abc', 'abcd', 'abcde'];
console.log(arr12);
const arr12length = [];

for (let i = 0; i < arr12.length; i++) {
    arr12length.push(arr12[i].length);
}
console.log(arr12length);

// ЗАДАНИЕ 13

console.log('ЗАДАНИЕ 13')

const arr13 = [];
for (let i = 0; i < 10; i++) {
    arr13.push(Math.floor(Math.random() * 21) - 10);
}
console.log(arr13);
console.log(arr13.filter(item => item < 0))

// ЗАДАНИЕ 14

console.log('ЗАДАНИЕ 14')

const arr14 = [];
const arr14Even = [];
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 10) + 1);
}

for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 === 0) {
        arr14Even.push(arr14[i]);
    }
}

console.log(arr14);
console.log(arr14Even);

// ЗАДАНИЕ 15

console.log('ЗАДАНИЕ 15')

const arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}

let sumArr15 = 0;
for (let i = 0; i < arr15.length; i++) {
    sumArr15 += arr15[i];
}
const mean = sumArr15 / arr15.length
console.log(arr15);
console.log(`Среднее арифметическое: ${mean}`);