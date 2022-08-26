// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

// 20 meters = 65.4 feet | 20 feet = 6 meters
//20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

let lengthPara = document.getElementById("length-para")
let volumePara = document.getElementById("volume-para")
let massPara = document.getElementById("mass-para")
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
const mToFt = 3.281
const lToGln = 0.264
const kToLb  = 2.204

convertBtn.addEventListener("click", function() {
    getMeterFeet()
    getLiterGalon()
    getKilPound()
    // inputEl.value = ""   //clear input field
})

function getMeterFeet() {
    let test = `${inputEl.value} meters = ${(inputEl.value * mToFt).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / mToFt).toFixed(3)} meters`
    lengthPara.textContent = test
}

function getLiterGalon() {
    let test = `${inputEl.value} litres = ${(inputEl.value * lToGln).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / lToGln).toFixed(3)} litres`
    volumePara.textContent = test
}

function getKilPound(){
    let test = `${inputEl.value} kilos = ${(inputEl.value * kToLb).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / kToLb).toFixed(3)} kilos`
    massPara.textContent = test
}

