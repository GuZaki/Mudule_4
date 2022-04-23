'use strict';

const myWeight = 60;
const speedLight = 3e8;

const speedLightExponent = Math.pow(speedLight, 2);

const einstein = myWeight * speedLightExponent;

console.log(einstein);