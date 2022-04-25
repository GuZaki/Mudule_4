'use strict';

/*Вторая задача*/

const rain = Math.round(Math.random());

console.log(rain);

if (rain === 1) {
    alert('Пошёл дождь. Возьмите зонт!');
} else {
    alert('Дождя нет!');
}

/*Третья задача*/

const mathematic = +prompt('Введите кол-во баллов по математике');
const russianLang = +prompt('Введите кол-во баллов по русскому языку');
const informatika = +prompt('Введите кол-во баллов по информатике');

const pass = mathematic + russianLang + informatika;

if (pass >= 256) {
    alert('Поздравляю, вы поступили на бюджет!');
} else {
    alert('В другой раз!');
}

/*Четвёртая задача*/

const summ = +prompt('Сколько денег вы хотите снять?');

if (summ % 100 === 0) {
    console.log('Ok');
} else {
    console.log('No');
}


