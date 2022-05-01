'use strict';

/*Первая задача:
Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
1 евро = 1.2 доллара, 1 доллар = 73 рубля.*/

function changeCurrent (euro) {
    const usd = euro * 1.2;
    return usd * 73
}

const result = changeCurrent (2);
console.log(result);

/*Вторая задача:
Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие. Пример:  "привет Мир" => "Привет мир"*/

function getString(word) {
    const newWord = word.slice(1);
    return word[0].toUpperCase() + newWord.toLowerCase();
}

const result2 = getString ("привет Мир");
console.log(result2);


/*Третья задача:
Напишите функцию, которая принимает строку и возвращает обратную строку. Пример: "Привет мир" => "рим тевирП"*/

function getNewString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString = newString + string[i];
    }
    return newString;
}

const result3 = getNewString("привет Мир");
console.log(result3);

/*второй вариант решения*/
{
    function getNewStr(string) {
        return string.split('').reverse().join('');
    }

    const result4 = getNewStr("привет Мир");
    console.log(result4);
}

/*Четвертая задача:
Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод
Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
Порядок применения скидок должен соблюдаться*/


let discount1 = 0;
let discount2 = 0;
let discount3 = 0;
let discount4 = 0;

function calculate(summ, howMany, promo) {
    const discount1 = summ * 0.03;
    const discount2 = ((summ - 30000) * 0.15);
    const discount3 = summ * 0.1;
    const discount4 = 500;
    
    if (howMany > 10) {
        summ = summ - discount1;
        console.log(summ);
    } 

    if (summ > 30000) {
        summ = summ - discount2;
        console.log(summ);
    } 

    if (promo === "METHED") {
        summ = summ - discount3;
        console.log(summ);
    }

    if (promo === "G3H2Z1" && summ > 2000) {
        summ = summ - discount4;
        console.log(summ);
    } 
return summ;
}

const result5 = calculate(55000, 15, "METHED");
console.log(`Итоговая сумма, с учетом скидок, составит:`, result5, `руб.`);

