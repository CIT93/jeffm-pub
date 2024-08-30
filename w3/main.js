function determineHouseHoldPts(numberInHousehold) {
console.log("Inside the function")

let carbonFootPrintPoints = 0;

if (numberInHousehold === 1) {
  carbonFootPrintPoints = carbonFootPrintPoints + 14;
} else if (numberInHousehold === 2) {
  carbonFootPrintPoints = carbonFootPrintPoints + 12;
} else if (numberInHousehold === 3) {
  carbonFootPrintPoints = carbonFootPrintPoints + 10;
} else if (numberInHousehold === 4) {
  carbonFootPrintPoints = carbonFootPrintPoints + 8;
} else if (numberInHousehold === 5) {
  carbonFootPrintPoints = carbonFootPrintPoints + 6;
} else if (numberInHousehold === 6) {
  carbonFootPrintPoints = carbonFootPrintPoints + 4;
} else if (numberInHousehold >= 7) {
  carbonFootPrintPoints = carbonFootPrintPoints + 2;
}

console.log(`Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootPrintPoints}.`);
}



//const numberInHousehold = 3;



  // global scope


  determineHouseHoldPts(1);
  determineHouseHoldPts(2);
  determineHouseHoldPts(3);
  determineHouseHoldPts(4);
  determineHouseHoldPts(5);
  determineHouseHoldPts(6);
  determineHouseHoldPts(7);
  determineHouseHoldPts(10);

//working code 7 or more will add 2 points