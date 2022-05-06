'use strict';

/*Первая задача:
Напишите функцию генератор  массива случайных чисел. Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно;*/

function getArray(q){
    const array = []
    for (let i = 0; i < q; i++) {
        array.push(Math.round(1 + Math.random() * 99));
    }
    return array;
}

console.log(getArray(40));


/*Вторая задача:
Продолжаем работать с предыдущей функцией
Функция принимает еще два параметра n и m
Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.*/

function getArray2(q, n, m){
    const array2 = []
    for (let i = 0; i < q; i++) {
        array2.push(Math.round(n + Math.random() * ((m - n))));
    }
    return array2;
}

console.log(getArray2(20, 0, 10));


/*Третья задача:
Добавьте 4-ый опциональный параметр у функции это строка:
если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел*/

function getArray3(q, n, m, str){
    const array3 = []
    for (let i = 0; i < q; i++) {
        array3.push(Math.round(n + Math.random() * ((m - n))));
    }
    if(str === 'even') {
        return array3.filter(x => x % 2 === 0);
    } else if(str === 'odd') {
        return array3.filter(x => x % 2 !== 0);
    }}

console.log(getArray3(27, -10, 50, 'even'));


/*Четвертая задача:
Необходимо написать функцию, которая принимает 2 параметра n и m
И возвращает массив с високосными годами в диапазоне между n и m
Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.*/



function leapYear(year) {
    if ((year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0)){
        return year;
    } else {
        return false;
    }
}

function getYear(n, m){
    const yearArray = []
    for (let i = n; i <= m; i++) {
        yearArray.push(i);
    }
    for (let i = m; i <= n; i++) {
        yearArray.push(i);
    }

    const newYearArray = []
    yearArray.forEach((year) => {
        if (leapYear(year))
            newYearArray.push(year);
    });
    return newYearArray;
}

console.log(getYear(10, 200));

/*Пятая задача:
Написать простой игровой бот, который умеет следующее:

Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается.*/


const num = Math.round(1 + Math.random() * 99);
console.log(num);
let userNum;

while (userNum = prompt("Загадано число от 1 до 100. Введите свой вариант")) {
    if (+userNum > num)
        alert("Меньше! Введите еще раз свой вариант");
    else if (+userNum < num)
        alert("Больше! Введите еще раз свой вариант");
    else if(isNaN(userNum))
        alert ('Введи число!');
    else if (+userNum === num) {
        alert(`Ты угадал! Это число ${num}.`);
        break;
    }
}

/*Необязательное задание
Усовершенствуйте игру, которую написали в game01

+бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
+бот запоминает каждое число которое ввел пользователь и записывает в массив
бот отграничивает количество попыток до 30% от количества цифр в диапазоне
если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
если диапазон от 50 до 100, то попыток бот даёт 15
если попытки закончились игра прекращается*/

let userNumMin = +prompt(`Введите минимальное число:`);
let userNumMax = +prompt(`Введите максимальное число:`);
const arr = [userNumMin, userNumMax];
console.log(arr);


const num = Math.floor((Math.random() * (userNumMax - userNumMin + 1)) + userNumMin);
console.log(num);

let userNum;
let attempts = 0;

function askQuestion(){
    while (userNum = prompt("Загадано число от 1 до 100. Введите свой вариант")) {
        if (+userNum > num)
            alert("Меньше! Введите еще раз свой вариант");
        else if (+userNum < num)
            alert("Больше! Введите еще раз свой вариант");
        else if(parseInt(userNum) != NaN && userNum != '')
            alert ('Введи число!');
        else if (+userNum === num) {
            alert(`Ты угадал! Это число ${num}.`);
            break;
        } else if  (arguments >= 3) {
            alert('Game over');
            return;
        }
        attempts++;
        console.log(attempts);
    }
}

askQuestion();
