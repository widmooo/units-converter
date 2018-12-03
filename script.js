const inp1 = document.querySelector(".input1")
const btnCalc1 = document.querySelector(".calculate1")
const error1 = document.querySelector(".error1")
const result1 = document.querySelector(".result1")
const resultText = " is "
const unit1 = "zł"
const unit2 = "$"
const unit3 = "€"
const unit4 = "cm"
const unit5 = "ft"
const unit7 = "l"
const unit8 = "gal"
const unit9 = "℃"
const unit10 = "℉"
const unit11 = "kph"
const unit12 = "mph"
const unit13 = "²"
const unit14 = "√"
const unit15 = "!"



btnCalc1.addEventListener('click', () => {
    error1.innerText = ""
    result1.innerText = ""
const inp1Value = parseFloat(inp1.value)
if(isNaN(inp1Value) ) {
error1.innerText = " Please enter the value!"
}

result1.innerText = (inp1.value) + (unit2) + (resultText) + inp1Value.toFixed(2) * 3.77 + (unit1)
})


////////////////////////////////////////////////////

const inp2 = document.querySelector(".input2")
const btnCalc2 = document.querySelector(".calculate2")
const error2 = document.querySelector(".error2")
const result2 = document.querySelector(".result2")

btnCalc2.addEventListener('click', () => {
    error2.innerText = ""
    result2.innerText = ""
const inp2Value = parseFloat(inp2.value)
if(isNaN(inp2Value) ) {
error2.innerText = " Please enter the value!"
}
const inp2ValueRound = inp2Value.toFixed(2);        
//Doesnt round the result to 2 decimal places :(
result2.innerText = (inp2.value) + (unit1) + (resultText) + inp2ValueRound/ 3.77 + (unit2)
})


///////////////////////////////////////////

const inp3 = document.querySelector(".input3")
const btnCalc3 = document.querySelector(".calculate3")
const error3 = document.querySelector(".error3")
const result3 = document.querySelector(".result3")

btnCalc3.addEventListener('click', () => {
    error3.innerText = ""
    result3.innerText = ""
const inp3Value = parseFloat(inp3.value)
if(isNaN(inp3Value) ) {
error3.innerText = " Please enter the value!"
}

result3.innerText = (inp3.value) + (unit2) + (resultText) + inp3Value * 0.88 + (unit3)
})

///////////////////////////////////////////

const inp4 = document.querySelector(".input4")
const btnCalc4 = document.querySelector(".calculate4")
const error4 = document.querySelector(".error4")
const result4 = document.querySelector(".result4")

btnCalc4.addEventListener('click', () => {
    error4.innerText = ""
    result4.innerText = ""
const inp4Value = parseFloat(inp4.value)
if(isNaN(inp4Value) ) {
error4.innerText = " Please enter the value!"
}

result4.innerText = (inp4.value) + (unit3) +  (resultText) + inp4Value / 0.88 + (unit2)
})

///////////////////////////////////////////

const inp5 = document.querySelector(".input5")
const btnCalc5 = document.querySelector(".calculate5")
const error5 = document.querySelector(".error5")
const result5 = document.querySelector(".result5")

btnCalc5.addEventListener('click', () => {
    error5.innerText = ""
    result5.innerText = ""
const inp5Value = parseFloat(inp5.value)
if(isNaN(inp5Value) ) {
error5.innerText = " Please enter the value!"
}

result5.innerText = (inp5.value) + (unit3) + (resultText) + inp5Value * 4.27 + (unit1)
})

///////////////////////////////////////////

const inp6 = document.querySelector(".input6")
const btnCalc6 = document.querySelector(".calculate6")
const error6 = document.querySelector(".error6")
const result6 = document.querySelector(".result6")

btnCalc6.addEventListener('click', () => {
    error6.innerText = ""
    result6.innerText = ""
const inp6Value = parseFloat(inp6.value)
if(isNaN(inp6Value) ) {
error6.innerText = " Please enter the value!"
}

result6.innerText = (inp6.value) + (unit1) + (resultText) + inp6Value / 4.27 + (unit3)
})

///////////////////////////////////////////

const inp7 = document.querySelector(".input7")
const btnCalc7 = document.querySelector(".calculate7")
const error7 = document.querySelector(".error7")
const result7 = document.querySelector(".result7")

btnCalc7.addEventListener('click', () => {
    error7.innerText = ""
    result7.innerText = ""
const inp7Value = parseFloat(inp7.value)
if(isNaN(inp7Value) ) {
error7.innerText = " Please enter the value!"
}

result7.innerText = (inp7.value) + (unit4) + (resultText) + inp7Value * 0.032808399 + (unit5)
})

///////////////////////////////////////////

const inp8 = document.querySelector(".input8")
const btnCalc8 = document.querySelector(".calculate8")
const error8 = document.querySelector(".error8")
const result8 = document.querySelector(".result8")

btnCalc8.addEventListener('click', () => {
    error8.innerText = ""
    result8.innerText = ""
const inp8Value = parseFloat(inp8.value)
if(isNaN(inp8Value) ) {
error8.innerText = " Please enter the value!"
}

result8.innerText = (inp8.value) + (unit5) + (resultText) + inp8Value / 0.032808399 + (unit4)
})

///////////////////////////////////////////

const inp9 = document.querySelector(".input9")
const btnCalc9 = document.querySelector(".calculate9")
const error9 = document.querySelector(".error9")
const result9 = document.querySelector(".result9")

btnCalc9.addEventListener('click', () => {
    error9.innerText = ""
    result9.innerText = ""
const inp9Value = parseFloat(inp9.value)
if(isNaN(inp9Value) ) {
error9.innerText = " Please enter the value!"
}

result9.innerText = (inp9.value) + (unit7) + (resultText) + inp9Value / 0.264172052 + (unit8)
})

///////////////////////////////////////////

const inp10 = document.querySelector(".input10")
const btnCalc10 = document.querySelector(".calculate10")
const error10 = document.querySelector(".error10")
const result10 = document.querySelector(".result10")

btnCalc10.addEventListener('click', () => {
    error10.innerText = ""
    result10.innerText = ""
const inp10Value = parseFloat(inp10.value)
if(isNaN(inp10Value) ) {
error10.innerText = " Please enter the value!"
}

result10.innerText = (inp10.value) + (unit8) + (resultText) + inp10Value * 0.264172052 + (unit7)
})

///////////////////////////////////////////

const inp11 = document.querySelector(".input11")
const btnCalc11 = document.querySelector(".calculate11")
const error11 = document.querySelector(".error11")
const result11 = document.querySelector(".result11")

btnCalc11.addEventListener('click', () => {
    error11.innerText = ""
    result11.innerText = ""
const inp11Value = parseFloat(inp11.value)
if(isNaN(inp11Value) ) {
error11.innerText = " Please enter the value!"
}
const inp11Valuesynt = (inp11Value * 1.8) + 32
result11.innerText = (inp11.value) + (unit9) + (resultText) + inp11Valuesynt + (unit10)
})

///////////////////////////////////////////

const inp12 = document.querySelector(".input12")
const btnCalc12 = document.querySelector(".calculate12")
const error12 = document.querySelector(".error12")
const result12 = document.querySelector(".result12")

btnCalc12.addEventListener('click', () => {
    error12.innerText = ""
    result12.innerText = ""
const inp12Value = parseFloat(inp12.value)
if(isNaN(inp12Value) ) {
error12.innerText = " Please enter the value!"
}
const inp12Valuesynt = (inp12Value - 32) / 1.8
result12.innerText = (inp12.value) + (unit10) + (resultText) + inp12Valuesynt + (unit9)
})

///////////////////////////////////////////

const inp13 = document.querySelector(".input13")
const btnCalc13 = document.querySelector(".calculate13")
const error13 = document.querySelector(".error13")
const result13 = document.querySelector(".result13")

btnCalc13.addEventListener('click', () => {
    error13.innerText = ""
    result13.innerText = ""
const inp13Value = parseFloat(inp13.value)
if(isNaN(inp13Value) ) {
error13.innerText = " Please enter the value!"
}

result13.innerText = (inp13.value) + (unit11) + (resultText) + inp13Value * 0.621371192 + (unit12)
})

///////////////////////////////////////////

const inp14 = document.querySelector(".input14")
const btnCalc14 = document.querySelector(".calculate14")
const error14 = document.querySelector(".error14")
const result14 = document.querySelector(".result14")

btnCalc14.addEventListener('click', () => {
    error14.innerText = ""
    result14.innerText = ""
const inp14Value = parseFloat(inp14.value)
if(isNaN(inp14Value) ) {
error14.innerText = " Please enter the value!"
}

result14.innerText = (inp14.value) + (unit12) + (resultText) + inp14Value / 0.621371192 + (unit11)
})

///////////////////////////////////////////

const inp15 = document.querySelector(".input15")
const btnCalc15 = document.querySelector(".calculate15")
const error15 = document.querySelector(".error15")
const result15 = document.querySelector(".result15")

btnCalc15.addEventListener('click', () => {
    error15.innerText = ""
    result15.innerText = ""
const inp15Value = parseFloat(inp15.value)
if(isNaN(inp15Value) ) {
error15.innerText = " Please enter the value!"
}
const inp15ValuePower = Math.pow(inp15Value, 2);
result15.innerText = (inp15.value) + (unit13) + (resultText) + inp15ValuePower
})

////////////////////////////////////////

const inp16 = document.querySelector(".input16")
const btnCalc16 = document.querySelector(".calculate16")
const error16 = document.querySelector(".error16")
const result16 = document.querySelector(".result16")

btnCalc16.addEventListener('click', () => {
    error16.innerText = ""
    result16.innerText = ""
const inp16Value = parseFloat(inp16.value)
if(isNaN(inp16Value) ) {
error16.innerText = " Please enter the value!"
}
const inp16ValueSqrt = Math.sqrt(inp16Value, 2);
result16.innerText = (unit14) + (inp16.value) + (resultText) + inp16ValueSqrt
})
