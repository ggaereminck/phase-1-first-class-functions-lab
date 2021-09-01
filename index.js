// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(){
    const first = [drivers[0] , drivers[1]];
    return first
}

const returnLastTwoDrivers = function(){
    const last = [drivers[2] , drivers[3]];
    return last
}

let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function farePrice(x){
        return fare * x
    }
}

function fareDoubler(doubler){
    return doubler * 2
}

function fareTripler(tripler){
    return tripler * 3
}

function selectDifferentDrivers(drivers, x){
    return x();
}