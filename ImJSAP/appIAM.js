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

// let screenPrice = 530;
// let servicePrice1 = 7;
// let servicePrice2 = 15;

// // let getAllServicePrices = function() {
// //   return servicePrice1 + servicePrice2
// // }

// // allServicePrices = getAllServicePrices();

// let getAllServicePrice = function() {

//   let allServicePrices = servicePrice1 + servicePrice2;
//   alert(allServicePrices);

  
// }

// // function getFullPrice() {
// //   return screenPrice + allServicePrices

// // }

// // fullPrice = getFullPrice();

// function getFullPrice() {
  
//   let fullPrice = allServicePrices + screenPrice;
//   alert(allServicePrices);

// }


// // 3. Создай функцию getTitle.
// // Функция изменяет название проекта(titleProject), переводит первый символ в верхний регистр(делает заглавной), 
// // а остальные в нижний регистр(делает маленькими) и возвращает отредактированное название проекта (titleProject). 

// let titleProject = "my project"

// function getTitle() {
// let firstChar = titleProject.charAt(0);
// let upperFirstChar = firstChar.toUpperCase();
// let restOfString = titleProject.slice(1);

// let result = upperFirstChar + restOfString;

// return (result);
// }


// Пользователю дается возможность ввода. Если он вводит число, то оно добавляется в итоговую сумму. 
// Если он вводит любую непустую строку, то программа выводит сообщение "введите число, а не строку". 
// Пользователю предлагается вводить числа до тех пор, пока он не введет пустую строку или пока он не нажмет отмена в окне prompt. 
// Когда пользователь нажимает отмена или вводит пустую строку, программа заканчивает выполнение и выводит итоговую сумму.



// function isNumber(n){
//   return !isNaN(parseFloat(n)) && isFinite(n);
//   //return !isNaN(n) && isFinite(n);
  
// }

// function sum(aa, bb){
//   return aa + bb;

// }

// let ff = (aa, bb) => {return (aa + bb)}
// let dd = () => {console.log("hello")}

// addEventListener(aa, bb)
// forEach(aa)



// function processTabs(){
//   let tabMenu = document.querySelectorAll('.tab-link');
//   let tabContent = document.querySelectorAll('.tab-pane');

//   tabMenu.forEach((item, index) => {
//       item.classList.remove('active');   
//       item.addEventListener('click', () => {            
//           tabMenu.forEach((item2) => {
//               item2.classList.remove('active');
//           })
//           tabContent.forEach((item) => {
//               item.classList.remove('active');
//           })
//           tabContent[index].classList.add('active');  
//           item.classList.add('active');   
                 
//       })
//   })
// }


// function isNumber(n){
//   return !isNaN(parseFloat(n));
// }

let sum = 0;

while(true) {

  let input = prompt("Пользователь, введи число !");  
  let number = parseFloat(input);

  if (input === null || input === "") {
    break;
  }


  if (isNaN(input)) {
    alert("Введи число, а не строку!");
    continue;
  }
  
  
  sum += number;
}

alert( "Сумма пользователя: " + sum );


