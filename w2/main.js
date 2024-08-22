console.log("Hope This Works");
/*1
Count the members of your household. 
14
*/
const memberCount = 14;
/*2
Consider the size of your home.
7
*/
const sizeHome = 7;
/*3
Evaluate your food choices.
4
*/
const foodChoice = 4;
/*4
Examine your water consumption.
4
*/
const waterUse = 4;
/*5
Determine how many household purchases you make each year.
4
*/
const yearHouseholdPurchases = 4;
/*6
Consider how much waste you produce. The more trash 
5
*/
const wasteProduce = 5;
/*7
Identify the amount of waste that you recycle. 
0
*/
const wasteRecycle = 0;
/*8
Tally up your annual transportation scores. 
6
*/
const annualTransportation = 6;
/*9
Add up your points.
44
*/
const carbonPrintTotal =
  memberCount +
  sizeHome +
  foodChoice +
  waterUse +
  yearHouseholdPurchases +
  wasteProduce +
  wasteRecycle +
  annualTransportation;
// to update html with total (const carbonPrintTotal)
const totalPoints = document.querySelector("h2");
// to update index.html
totalPoints.textContent = carbonPrintTotal;














