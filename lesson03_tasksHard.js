'use strict';

/*Первая задача*/ 
const salary = +prompt('Введите сумму вашего дохода');

let tax = 0;

/*13% на доход до 15 000 ₽
20% на доход от 15 000 ₽ до 50 000 ₽
30% на доход выше 50 000 ₽*/


if (salary <= 15000) {
    tax = salary * 0.13;
    console.log(`Сумма налога ${tax}`);
} else if ((salary >= 15001) && (salary <= 50000)) {
    tax = salary * 0.20;
    console.log(`Сумма налога ${tax}`);
} else {
    tax = salary * 0.3;
    console.log(`Сумма налога ${tax}`);
}


/*Вторая задача*/ 

/*
Налоговая ставка 13% на доход до 15 000 ₽
Налоговая ставка 20% на доход выше 15 000 ₽ означает, что 20% уплачивается не со всей суммы, а лишь с той части, которая превосходит 15 000 ₽, но не выше 50 000 ₽
Налоговая ставка 30% на доход выше 50 000 ₽ означает, что 30% уплачивается не со всей суммы, а лишь с той части, которая превосходит 50 000 ₽.*/

const min = 15000;
const max  = 50000;

if (salary <= 15000) {
    tax = salary * 0.13;
    console.log(`Сумма налога ${tax}`);
} else if ((salary >= 15001) && (salary <= 50000)) {
    tax = min * 0.13 + ((salary - min) * 0.20);
    console.log(`Сумма налога ${tax}`);
} else {
    tax = min * 0.13 + (((salary - min) - (salary - max)) * 0.20) + ((salary - max) * 0.30);
    console.log(`Сумма налога ${tax}`);
}
