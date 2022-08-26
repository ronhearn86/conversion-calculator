/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feet = 3.280839895
const gallon = 0.2641720524
const pound = 2.2046226218
const convert = document.getElementById("convert")

convert.addEventListener("click", function(){ 
    const textValue = document.getElementById("textbox").value
    const meters = (feet * textValue).toFixed(3)
    const feetCalc = ((1/feet) * textValue).toFixed(3)
    const liter = (gallon * textValue).toFixed(3)
    const gallonCalc = ((1/gallon) * textValue).toFixed(3)
    const kilo = (pound * textValue).toFixed(3)
    const poundCalc = ((1/pound) * textValue).toFixed(3)
    const lengthDispay = document.getElementById("length-p")
    const volDispay = document.getElementById("vol-p")
    const massDispay = document.getElementById("mass-p")
    
    lengthDispay.innerHTML = `
        ${textValue} meters = ${meters} feet | ${textValue} feet = ${feetCalc} meters
    `
    
        volDispay.innerHTML = `
        ${textValue} liters = ${liter} gallons | ${textValue} gallons = ${gallonCalc} liters
    `
    
        massDispay.innerHTML = `
        ${textValue} kilos = ${kilo} pounds | ${textValue} pounds = ${poundCalc} kilos
    `
})


    
