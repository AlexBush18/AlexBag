// let screenPrice = 300

// let titleProject = prompt("Название проекта");

// let screensValue = prompt("шаблонные, с уникальным дизайном, с анимациями");

// let userInput = prompt("Нужен ли респонсивный сайт? (введите 'да' или 'нет')");
// let responsive = userInput.toLowerCase() === 'да';
// console.log(responsive);
 
// let serviceNew1 = prompt("Какой сервис нужен ?");
// let servicePrice1 = prompt("Сколько это будет стоить ?")
// let serviceNew2 = prompt("Какой еще сервис тебе нужен? ")
// let servicePrice2 = prompt("Сколько будет стоить этот второй сервис?")

// let fullPrice = parseFloat(screenPrice) + parseFloat(servicePrice1) + parseFloat(servicePrice2);

// let partnerPercent = 0.1
// let servicePercentPrice = Math.round(fullPrice - (fullPrice * partnerCommission));
// console.log(servicePercentPrice);

// if (fullPrice >= 50000) {
//     console.log("дадим скидку 10%");
// } else if (fullPrice >= 20000 && fullPrice <= 40000) {
//     console.log("сделаeм скидку 5%");
//   } else if (fullPrice <= 20000 && fullPrice >= 0) {
//     console.log("скидка не предусмотрена");
//   } else if (fullPrice < 0); {
//     console.log("Что-то пошло не так");
// }
   


// 1. Создай / Объяви функцию getAllServicePrices с помощью метода "function expression".
// Функция должна возвращать стоимость всех дополнительных услуг.

// Результат функции запиши в переменную allServicePrices.

// 2. Создай функцию getFullPrice с помощью метода "function declaration".
// Функция должна возвращать стоимость всех дополнительных услуг(allServicePrices) и стоимость вёрстки(screenPrice )

// Результат функции запиши в переменную fullPrice.
let servicePrice1 = 20;
let servicePrice2 = 15;

let getAllServicePrice = function() {

    allServicePrices = servicePrice1 + servicePrice2;
    
}

console.log(allServicePrices);