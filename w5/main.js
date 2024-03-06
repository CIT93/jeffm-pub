// Array to store carbon footprint data
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
  const total = householdPTS + houseSizePTS; // Pushing the data to the cfpData array

  cfpData.push({
    houseH: houseHoldMembers,
    houseS: houseSize,
    householdPTS: householdPTS,
    houseSizePTS: houseSizePTS,
    cfpTotal: total,
  });
}

// Function to display the output in the webpage
function displayOutput() {
  const outputDiv = document.getElementById("output"); // Get the output element
  outputDiv.innerHTML = ""; // Clear previous content // Loop through each object in the cfpData array and create elements for each

  cfpData.forEach((obj) => {
    const objDiv = document.createElement("div"); // Create a new div for each object
    objDiv.innerHTML = `<h2>Carbon Footprint: ${obj.cfpTotal}</h2>
<p>Household Members: ${obj.houseH}</p>
<p>House Size: ${obj.houseS}</p>
<p>Household Points: ${obj.householdPTS}</p>
<p>House Size Points: ${obj.houseSizePTS}</p>`;
    outputDiv.appendChild(objDiv); // Append this div to the output div
  });
}

// Example calls to the start function with test data
// These are here for demonstration. You may remove or comment out these lines.
start(2, "apt");
start(10, "large");
start(2, "small");
start(4, "medium");

// Call the displayOutput function to display the data on the webpage
// It's called here to run after the DOM is fully loaded
window.onload = displayOutput;
