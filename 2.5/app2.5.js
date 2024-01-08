// let titleProject = prompt('Название проекта?');

// let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями');


// let responsive = confirm("Нужен ли респонсивный сайт?");

// let service1 = prompt ('Какой сервис нужен ?')
// let servicePrice1 = parseFloat(prompt("Сколько это будет стоить?"));

// let service2 = prompt ('Какой еще сервис тебе нужен?');
// let servicePrice2 = parseFloat(prompt("Сколько будет стоить этот второй сервис?"));

// let screenPrice = 458;
// let fullPrice = screenPrice + servicePrice1 + servicePrice2;


// var partnerCommission = 0.1;
// var servicePercentPrice = Math.round(fullPrice - (fullPrice * partnerCommission));

// console.log('Тоговая стоимость проекта после комиссии') + servicePercentPrice;

/////////////////////////////////////////////////////////////


let getAllServicePrices = function() {
  return service1 + service2;
}

let allServicePrices = getAllServicePrices();



function getFullPrice() {
  return screenPrice + allServicePrices;

}

let fullPrice = getFullPrice();



function getTitle() {
  return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
  
}

let modifidTitle = getTitle();


function getServicePercentPrices() {
return Math.round(fullPrice - (fullPrice * servicePercent));
}

let servicePercentPrice = getServicePercentPrices();



console.log(modifiedTitle);
console.log(screensValue);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);


function getRollbackMessage(price) {
  if (price > 50000) {
      return "Сделаем скидку 10%";
  } else if (price > 20000 && price < 40000) {
      return "Сделаем скидку 5%";
  } else if (price < 20000 && price > 0) {
      return "Скидка не предусмотрена";
  } else if (price <= 0) {
      return "Что-то пошло не так";
  } else {
      // Если price равно 0, 20000 или 50000
      return "Текст по желанию";
  } 
}



