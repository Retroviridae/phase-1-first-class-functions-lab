const returnFirstTwoDrivers = function (drivers) {
    let firstTwo= function (){
        return drivers.slice(0,2)
    }
    return firstTwo()
}
// console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
const returnLastTwoDrivers = function (drivers) {
    let lastTwo= function (){
        return drivers.slice(drivers.length-2)
    }
    return lastTwo()
}
// console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo',]))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
// console.log(selectingDrivers)
function createFareMultiplier (value) {
    return function (multiplier){
        return value * multiplier
    }
}
// console.log(createFareMultiplier(2))

function fareDoubler (value=10) {
    return value * 2
}
// console.log(fareDoubler(10));
function fareTripler (value=10) {
    return value * 3
}
// // console.log(fareTripler(10));
function selectDifferentDrivers (arrayOfDrivers,namedFunction){
    return namedFunction(arrayOfDrivers)
}
// console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnLastTwoDrivers));