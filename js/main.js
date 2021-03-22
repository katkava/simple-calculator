//*take in out  2 values
//press button - calculate
//if + is selected, do num1 + num2 do calculation for each - use switch case or else 
//show output using innerText

document.querySelector("#plus").addEventListener('click', plus)
document.querySelector("#minus").addEventListener('click', minus)
document.querySelector("#multiply").addEventListener('click', multiply)
document.querySelector("#divide").addEventListener('click', divide)
 
 // let x = Number(document.querySelector(".num1").value)
 // let y = Number(document.querySelector(".num2").value)
 // let calculate = document.getElementById("calculate") 

 //.... global variables aren't working, why? 

 function plus() {
 const x = Number(document.querySelector(".num1").value)
 const y = Number(document.querySelector(".num2").value)
 const calculate = document.getElementById("calculate")
 
  calculate.onclick = function() {
   result = x+y
    document.querySelector("#placeToPutResult").innerText = result
  }
 }

 function minus() {
 const x = Number(document.querySelector(".num1").value)
 const y = Number(document.querySelector(".num2").value)
 const calculate = document.getElementById("calculate")
 
  calculate.onclick = function() {
   result = x-y
    document.querySelector("#placeToPutResult").innerText = result
  }
 }

 function multiply() {
 const x = Number(document.querySelector(".num1").value)
 const y = Number(document.querySelector(".num2").value)
 const calculate = document.getElementById("calculate")
 
  calculate.onclick = function() {
   result = x*y
    document.querySelector("#placeToPutResult").innerText = result
  }
 }

 function divide() {
 const x = Number(document.querySelector(".num1").value)
 const y = Number(document.querySelector(".num2").value)
 const calculate = document.getElementById("calculate")
 
  calculate.onclick = function() {
   result = x/y
    document.querySelector("#placeToPutResult").innerText = result
  }
 }

// function doCalculate(){
 // const  x = Number(document.querySelector(".num1").value
 // const y = Number(document.querySelector(".num2").value
//   const plus = document.getElementById("plus")
//   const minus = document.getElementById("minus")
//   const multiply = document.getElementById("multiply")
//   const divide = document.getElementById("divide")
  
//   plus.onclick = function() {
//    result = x+y
//    document.querySelector("#placeToPutResult").innerText = result
//   }
//  }


//  document.querySelector("#calculate").addEventListener('click', doCalculate)
 
// function doCalculate(){
//   const  x = Number(document.querySelector(".num1").value)
//   const y = Number(document.querySelector(".num2").value)
//   const plus = document.getElementById("plus")
//   const minus = document.getElementById("minus")
//   const multiply = document.getElementById("multiply")
//   const divide = document.getElementById("divide")
  
//   plus.onclick = function() {
//    result = x+y
//    document.querySelector("#placeToPutResult").innerText = result
//   }
//  }
//  let result;
//  switch (symbol){
//   case "+":
//    result = x + y;
//    break;
//    case "-":
//    result = x - y;
//    break;
//    case "x":
//    result = x * y;
//    break;
//    case "÷":
//    result = x/y;
//    break; 
   
//  } 
 // console.log(result)
 
 
 // }

 