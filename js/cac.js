const firstInput = document.querySelector("#one")
const secondInput = document.querySelector("#two")
const subButton = document.querySelector ("#sub")
const addButton = document.querySelector("#add")
const multiButton= document.querySelector("#multiply")
const divButton = document.querySelector("#divide")
const h2 = document.querySelector("#result")

function addTwoNumbers (n1,n2){
  n1 = Number(firstInput.value)
  n2 = Number(secondInput.value)
  let total= n1 + n2
  h2.innerText= total
}
addButton.addEventListener('click', addTwoNumbers)

function subtractTwoNumbers (n1, n2){
  n1 = Number(firstInput.value)
  n2= Number(secondInput.value)
  let total = n1-n2 
  h2.innerText= total 
}

subButton.addEventListener('click',subtractTwoNumbers)

function multiTwoNumbers(n1, n2){
  n1= Number(firstInput.value)
  n2= Number(secondInput.value)
  let total = n1 * n2 
  h2.innerText= total
}

multiButton.addEventListener('click',multiTwoNumbers)

function divideTwoNumbers(n1,n2){
  n1= Number(firstInput.value)
  n2= Number (secondInput.value)
  let total= n1 / n2
  h2.innerText= total
}

divButton.addEventListener('click',divideTwoNumbers)