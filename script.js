'use strict';

const productEnter = prompt ("Наименование товара");
const product = productEnter;

const quantityEnter = prompt ("Количество товара");
const quantity = +quantityEnter;

const categoryEnter = prompt ("Категория товара");
const category = categoryEnter;

const priceEnter = prompt ("Цена товара");
const price = +priceEnter;

const summ = price * quantity;

console.log(typeof product);
console.log(typeof quantity);
console.log(typeof category);
console.log(typeof price);

console.log(`На складе ${quantity} ед. товара "${product}" на сумму ${summ} деревянных`);