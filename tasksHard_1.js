'use strict';

/*Первая задача*/ 
const salary = +prompt('Введите сумму вашего дохода');
let tax = 0;

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
{
    const salary = +prompt('Введите сумму вашего дохода');
    let tax = 0;
    const minSalary = 15000;
    const maxSalary = 50000;

    if (salary <= 15000) {
        tax = salary * 0.13;
        console.log(`Сумма налога ${tax}`);
    } else if ((salary >= 15001) && (salary <= 50000)) {
        tax = minSalary * 0.13 + ((salary - minSalary) * 0.20);
        console.log(`Сумма налога ${tax}`);
    } else {
        tax = minSalary * 0.13 + (((salary - minSalary) - (salary - maxSalary)) * 0.20) + ((salary - maxSalary) * 0.30);
        console.log(`Сумма налога ${tax}`);
    }
}