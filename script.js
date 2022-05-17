'use strict';

const product = "apple";
const quantity = 2;
const category = "fruit";
const price = 100;

console.log (product);

let summ = price * quantity;
console.log (summ);

{
    const productEnter = prompt ("Наименование товара");
    const product = productEnter;

    const quantityEnter = prompt ("Количество товара");
    const quantity = +quantityEnter;

    if (Number.isNaN(quantity)) {
        alert ("Вы ввели некорректные данные");
    } 

    const categoryEnter = prompt ("Категория товара");
    const category = categoryEnter;

    const priceEnter = prompt ("Цена товара");
    const price = +priceEnter;

    if (Number.isNaN(price)) {
        alert ("Вы ввели некорректные данные");
    } 

    const summ = price * quantity;
    if (summ === +summ) {
        console.log(`На складе ${quantity} ед. товара "${product}" на сумму ${summ} деревянных`);  
    } 
}


