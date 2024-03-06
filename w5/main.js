// cfpData array to store carbon footprint data
const cfpData = [];

// Function to determine house size points
function determineHouseSizePts(size) {
let houseSizePoints = 0;
if (size === "large") {
houseSizePoints = 10;
} else if (size === "medium") {
houseSizePoints = 7;
} else if (size === "small") {
houseSizePoints = 4;
} else if (size === "apt") {
houseSizePoints = 2;
}
return houseSizePoints;
}

// Function to determine household points
function determineHouseHoldPts(numberInHousehold) {
let householdPoints = 0;
if (numberInHousehold === 1) {
householdPoints = 14;
} else if (numberInHousehold === 2) {
householdPoints = 12;
} else if (numberInHousehold === 3) {
householdPoints = 10;
} else if (numberInHousehold === 4) {
householdPoints = 8;
} else if (numberInHousehold === 5) {
householdPoints = 6;
} else if (numberInHousehold === 6) {
householdPoints = 4;
} else if (numberInHousehold > 6) {
householdPoints = 2;
}
return householdPoints;
}

// Start function to initialize the application
function start(houseHoldMembers, houseSize) {
const householdPTS = determineHouseHoldPts(houseHoldMembers);
const houseSizePTS = determineHouseSizePts(houseSize);
const total = householdPTS + houseSizePTS;

// Pushing the data to the cfpData array
cfpData.push({
houseH: houseHoldMembers,
houseS: houseSize,
householdPTS: householdPTS,
houseSizePTS: houseSizePTS,
cfpTotal: total
});
}

// Function to display the output in the console
function displayOutput() {
for (let obj of cfpData) {
console.log(obj);
}
}

// Function to display the layout of objects
function displayLayoutObj(obj) {
console.log(obj);
const output = document.getElementById("output");
const newH2 = document.createElement("h2");
newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
output.appendChild(newH2);
}

// Test calls to the start function
start(2, "apt");
start(10, "large");
start(2, "small");
start(4, "medium");

// Uncomment this to test the displayOutput function
 displayOutput();