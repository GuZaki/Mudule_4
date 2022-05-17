'use strict';

const cart = {
    items: [], // товары
    totalPrice: 0, //общая стоимость корзины
    count: 0, //количество товаров

    // получить общую стоимость товаров, возвращает значение свойства totalPrice
    getTotalPrice: function () {
        return this.totalPrice;
    },

    // увеличить количество товаров, принимает один параметр(число). Увеличивает свойство count на это число
    increaseCount: function (increaseNumber) {
        this.count = this.count + increaseNumber;
    },

    // метод формирует объект из полученных параметров и добавляет его в свойство items
    // так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
    add: function (productName, productPrice, productQuantity = 1) {
        const item = {
            productName,
            productPrice,
            productQuantity,
        };

        this.items.push(item);
        this.increaseCount(item.productQuantity);
        this.calculateItemPrice();
    },

    //calculateItemPrice() пересчитывает стоимость всей корзины и записывает значение в totalPrice
    calculateItemPrice: function () {
        this.totalPrice = this.items.reduce((prev, cur) => prev + cur.productPrice * cur.productQuantity, 0)
    },

    //clear() Очищает полностью нашу корзину, возвращает все значения в изначальные
    clear: function (){
        this.items = [];
        this.count = 0;
        this.calculateItemPrice();
    },

    //print() распечатать корзину. Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
    print: function (){
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
};

cart.add('cappucino', 100, 2);
cart.add('sugar', 10, 2);
cart.add('cake', 300, 2);

cart.print();
console.log(cart);



