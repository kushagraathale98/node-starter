var faker = require('faker');
const loader=require("loader");


var randomProduct = faker.commerce.productName();
var randomPrice = faker.commerce.price();
console.log(randomProduct + "-" + randomPrice);
