// let titleProject = 'Оценка стоимости'

// let screensValue = 'шаблонные, с уникальным дизайном, с анимациями'

// let screenPrice = 58

// let percentage = 33

// let fullPrice = 450

// let responsive = true;


let titleProject = prompt('Название проекта?');

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');


let responsive = confirm("Нужен ли респонсивный сайт?");

let service1 = prompt ('Какой сервис нужен ?')
let servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));

let service2 = prompt ('Какой еще сервис тебе нужен?');
let servicePrice2 = parseFloat(prompt("Сколько будет стоить этот второй сервис?"));

let screenPrice = 458;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;


var partnerCommission = 0.1;
var servicePercentPrice = Math.round(fullPrice - (fullPrice * partnerCommission));

console.log('Тоговая стоимость проекта после комиссии') + servicePercentPrice;


if (fullPrice > 50000) {
    console.log('Сделаем скидку 10%');
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log("Сделаем скидку 5%");
  } else if (fullPrice < 20000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
  } else if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
}