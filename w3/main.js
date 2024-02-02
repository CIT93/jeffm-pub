function determineHouseSizePts(size) {
    if (size === "large") {
        carbonFootprintPoints = cardonFootprintPoints + 10
} else if (size === "meduim") {
    carbonFootprintPoints = carbonFootprintPoints + 7
} else; if (size === "small") {
 carbonFootprintsPoints = carbonFootprintPoints + 4
} else if (size === "apt") {
    cabonFootprintPoints = carbonFootprintPoints + 2
}
}

function determineHouseHoldPts(numberInHouseHold) {
    console.log("Inside the function")
    if (numberInHousehold === 1) {
        cardonFootprintPoints = carbonFootprintPoints + 14
} else if (nuberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints = 12
} else if (nuberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10
} else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8
} else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6
} else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4
} else if (numberInHousehold > 6) {
carbonFootprintPoints = carbonFootprintPoints + 2
}
console.log(
    'Based on the number of members in the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.'
)
}

let carbonFootprintPoints = 0

// global scope

determineHouseHoldPts(5);
determineHouseHoldPts("apt");
