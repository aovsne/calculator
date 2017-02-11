// javascript for today's wish
var today = new Date()
var hour = today.getHours()
var greetings

if(hour > 18){
  greetings = 'Good Evening!!'
} else if(hour > 12){
  greetings = 'Good AFternoon!!'
} else if (hour > 0){
  greetings = 'Good morning!!'
} else{
  greetings = "Welcome!!"
}

document.getElementById('wish').innerHTML = greetings


function btnAdd(){
  document.calculator.display.value += '+'
}
function btnSubs(){
  document.calculator.display.value += '-'
}
function btnMul(){
  document.calculator.display.value += '*'
}
function btnDiv(){
  document.calculator.display.value += '/'
}
function btnEql(){
    document.calculator.display.value = eval(document.calculator.display.value
    )
}
function btnClr(){
  document.calculator.display.value = ""
}