let screenPrice = 458
let partnerCommission = 0.1
let allServicePrices;
let modifidTitle = "";
let titleProject;
let screensValue;
let responsive;






const asking = function() {
titleProject = prompt('Название проекта?');


screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');


responsive = confirm("Нужен ли респонсивный сайт?");

}





let service1 = prompt ('Какой сервис нужен ?')
let servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));

let service2 = prompt ('Какой еще сервис тебе нужен?');
let servicePrice2 = parseFloat(prompt("Сколько будет стоить этот второй сервис?"));





let getAllServicePrices = function() {
  return servicePrice1 + servicePrice2
}

function getFullPrice() {
  return screenPrice + allServicePrices

}

function getServicePercentPrices() {
return fullPrice - (fullPrice * partnerCommission);
}

function getTitle() { 
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
    
}



console.log(modifidTitle);
console.log(screensValue);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);










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


asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
modifidTitle = getTitle();

console.log(Math.ceil(servicePercentPrice));
console.log(titleProject);
console.log(screensValue);
console.log(responsive);