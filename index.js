
// function selectDifferentDrivers(arrayofdrivers, func) {
//     return func(arrayofdrivers)
// }

// NOT MY CODE: 

function map(sourceArray, cbFunction) {
    // return setOfFunctions.map(sourceArray)
    return sourceArray.map(cbFunction)
}

function reduce(sourceArray, cbFunction, init = 0) {
    if (init === 0) {
        return sourceArray.reduce(cbFunction)
    } else {
        return sourceArray.reduce(cbFunction, init) 
    }
}