let titleProject = prompt('Название проекта?');

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');


let responsive = confirm("Нужен ли респонсивный сайт?");

let service1 = prompt ('Какой сервис нужен ?')
let servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));

let service2 = prompt ('Какой еще сервис тебе нужен?');
let servicePrice2 = parseFloat(prompt("Сколько будет стоить этот второй сервис?"));

let screenPrice = 458;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;


let partnerCommission = 0.1;
let servicePercentPrice = Math.round(fullPrice - (fullPrice * partnerCommission));

console.log('Итоговая стоимость проекта после комиссии: ' + servicePercentPrice);

///////////////////////////////////////////////////////////


let getAllServicePrices = function() {
  return servicePrice1 + servicePrice2
}

allServicePrices = getAllServicePrices();



function getFullPrice() {
  return screenPrice + allServicePrices

}

fullPrice = getFullPrice();



function getTitle() {
  return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
  
}

modifidTitle = getTitle();


function getServicePercentPrices() {
return Math.round(fullPrice - (fullPrice * partnerCommission));
}

servicePercentPrice = getServicePercentPrices();

// function getServicePercentPrices() {
//   return fullPrice - servicePercentPrice;
//   }
  
//   servicePercentPrice = getServicePercentPrices();



console.log(modifidTitle);
console.log(screensValue);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);



///////////////////////////////////////////////////////////////////


function getRollbackMessage(price) {
  if (price > 50000) {
      return "Сделаем скидку 10%";
  } else if (price > 20000 && price < 40000) {
      return "Сделаем скидку 5%";
  } else if (price > 40000 && price < 50000) { // Этого диапазона не было в задании, поэтому я его не вписывал 
      return "Сделаем скидку 5%";
  } else if (price < 20000 && price > 0) {
      return "Скидка не предусмотрена";
  } else if (price <= 0) {
      return "Что-то пошло не так";
  } else if (price === 0 || price === 20000 || price === 50000) {
      return "Проверка на строгое равенство";
  } 
}


function showTypeOf(fullPrice) {
  console.log(typeof fullPrice);
}

fullPrice = showTypeOf();
