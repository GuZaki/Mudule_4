'use strict';

/*Первая задача*/

for(let i = 1; i <= 10; i++) {
    console.log('-------------');
    for(let j = 1; j <= 10; j++) {
        let a = Math.pow(j, i);
        console.log(`${j} в степени ${i} = ${a}`);
    }
}

/*второй вариант*/

for(let i = 1; i <= 10; i++) {
    console.log('-------------');
    for(let j = 1; j <= 10; j++) {
        console.log(`${j} ^ ${i} =`, Math.pow(j, i));
    }
}

/*третий вариант*/

for(let i = 1; i <= 10; i++) {
    console.log('-------------');
    for(let j = 1; j <= 10; j++) {
        console.log(`${j} ^ ${i} =`, (j ** i));
    }
}



/*Вторая задача*/

function isPrime(num) {
    let n = true;
    for(let i = 2; i < num; i++) {
        (num % i == 0) ? n = false : n;
        break;
    }
    return n;
}

const result = isPrime(5);
console.log(result);

