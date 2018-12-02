const inp1 = document.querySelector(".input1")
const btnCalc1 = document.querySelector(".calculate1")
const error1 = document.querySelector(".error1")
const result1 = document.querySelector(".result1")
const resultText1 = "Your result is: "
const unit1 = "zł"

btnCalc1.addEventListener('click', () => {
    error1.innerText = ""
    result1.innerText = ""
const inp1Value = parseFloat(inp1.value)
if(isNaN(inp1Value) ) {
error1.innerText = " Please enter the value!"
}

result1.innerText = (resultText1) + inp1Value / 3,77 + (unit1)
})
//Why const unit doesnt apper after result and how to round result to 2 decimal places 

////////////////////////////////////////////////////

const inp2 = document.querySelector(".input2")
const btnCalc2 = document.querySelector(".calculate2")
const error2 = document.querySelector(".error2")
const result2 = document.querySelector(".result2")
const resultText2 = "Your result is: "
const unit2 = "$"

btnCalc2.addEventListener('click', () => {
    error2.innerText = ""
    result2.innerText = ""
const inp2Value = parseFloat(inp2.value)
if(isNaN(inp2Value) ) {
error2.innerText = " Please enter the value!"
}

result2.innerText = (resultText2) + inp2Value * 3,77 + (unit2)
})


///////////////////////////////////////////

const inp3 = document.querySelector(".input3")
const btnCalc3 = document.querySelector(".calculate3")
const error3 = document.querySelector(".error3")
const result3 = document.querySelector(".result3")
const resultText3 = "Your result is: "
const unit3 = "€"

btnCalc3.addEventListener('click', () => {
    error3.innerText = ""
    result3.innerText = ""
const inp3Value = parseFloat(inp3.value)
if(isNaN(inp3Value) ) {
error3.innerText = " Please enter the value!"
}

result3.innerText = (resultText3) + inp3Value * 0,88 + (unit3)
})