'use strict';

/* Первая задача:
Напишите функцию filter(), функция принимает в параметрах 2 массива. Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
Результат функции: массив из всех студентов, которые сдали экзамен.*/

const allStudentList = ['Ivanov', 'Petrov', 'Orlov', 'Sidorov', 'Dorofeev', 'Kalinin', 'Sokolov', 'Zinin'];
const failedStudentList = ['Ivanov', 'Dorofeev', 'Zinin'];

function filter(allStudentList, failedStudentList) {
    return allStudentList.filter(item => !failedStudentList.includes(item));
}

const result = filter(allStudentList, failedStudentList);
console.log(result);


/*Вторая задача:
Напишите функцию getAverageValue для получения среднеарифметического значения с округлением в меньшую сторону до целого числа
С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:*/

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue(allCashbox){
    let num = 0;
    for (let i = 0; i < allCashbox.length; i++) {
        num += allCashbox[i];
    }
    return Math.floor(num/allCashbox.length);
}

const result2 = getAverageValue(allCashbox);
console.log(result2);

/*Третья задача:
Напишите функцию addPrefix. Функция получает массив в виде параметров и возвращает массив с префиксами.
После префикса пробел добавляется автоматически*/

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix(names, prefix) {
    return names.map(names => prefix + names);
}

const result3 = addPrefix(names, 'Mr ');
console.log(result3);

/* Не обязательное задание
Напишите функцию getAveragePriceGoods. для получения средней цены товара. Дан многомерный  массив:
В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.*/

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"



const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};

const numbers = [1, 2, 3, 4];
console.log(getAverage(numbers)); // => 2.5