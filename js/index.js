// Операция сложение
// Операция вычитания
// Операция умножения
// Операция деления 
// 


$(document).ready(function(){
  const screen = $('.scr-wrap');
  const cell = $(`<div class="cell"></div>`)
  // Клик на блок с цифрой рисует в экранчике нужную цифру, машина воспринимает ее не как строку а как число...

  $('.item').click(function(){
    const buttonNumber = Number($(this).children().html());
    // console.log(typeof($(this).children().html()), buttonNumber, typeof(buttonNumber));

    cell.append(buttonNumber);
    screen.append(cell);
  });

});