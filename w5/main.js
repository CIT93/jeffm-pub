
// Array to store carbon footprint data as an array of objects 
// Each entry in the array will be an object with properties: houseHoldMembers, houseSize, houseSizePTS, houseHoldPTS, and total
const cfpData = [];  // This will be an array of objects

// Function to determine house size points
function determineHouseSizePts(size) {
    const sizePointsMap = {
        large: 10,
        medium: 8,
        small: 5,
        apt: 2
    };
    return sizePointsMap[size] || 0; // Return 0 if size is not found
}

// Function to determine household points
function determineHouseHoldPts(numberInHousehold) {
    if (numberInHousehold >= 6) return 2;
    if (numberInHousehold === 5) return 4;
    if (numberInHousehold === 4) return 6;
    if (numberInHousehold === 3) return 8;
    if (numberInHousehold === 2) return 10;
    if (numberInHousehold === 1) return 12;
    return 14; // If number of people is 0 or any unexpected value
}

// Object to store carbon footprint data and display it
const myObj = {
    cfpTotal: 0, // Initially set to 0, will update in start()
    houseSize: "",
    displayOut: function() {
        console.log("This is a method call");
        console.log(this); // Logs the object and its properties
        console.log(`Total Carbon Footprint: ${this.cfpTotal}`);
        console.log(`House Size: ${this.houseSize}`);
    }
};

// Start function to calculate and store the data
function start(houseHoldMembers, houseSize) {
    // Step 1: Calculate points for household members and house size
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;

    // Step 2: Create an object to represent one entry in the carbon footprint data
    // This object stores data for a single calculation of carbon footprint points
    const carbonFootprintEntry = {
        houseHoldMembers: houseHoldMembers,
        houseSize: houseSize,
        houseSizePTS: houseSizePTS,
        houseHoldPTS: houseHoldPTS,
        total: total
    };

    // Step 3: Push the object into the cfpData array (array of objects)
    cfpData.push(carbonFootprintEntry);  // This adds the new entry to the array of objects

    // Step 4: Update the myObj object to reflect the latest data (not required but for logging purposes)
    myObj.cfpTotal = total;
    myObj.houseSize = houseSize;

    // Call the displayOut method to log the object data
    myObj.displayOut();

    // Step 5: Update the HTML with the new data
    displayOutput();
}

// Function to display the carbon footprint data on the HTML page
function displayOutput() {
    const output = document.getElementById("output");
    output.innerHTML = ''; // Clear previous output

    // Step 6: Loop through the cfpData array (array of objects)
    // Display each object (household data) on the HTML page
    cfpData.forEach((data, index) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <h2>Entry ${index + 1}</h2>
            <p>Household Members: ${data.houseHoldMembers}</p>
            <p>House Size: ${data.houseSize}</p>
            <p>Household Points: ${data.houseHoldPTS}</p>
            <p>House Size Points: ${data.houseSizePTS}</p>
            <p><strong>Total Carbon Footprint: ${data.total}</strong></p>
        `;
        output.appendChild(newDiv);
    });
}

// Calling the start function for all possible combinations of household size and house size
// This will create an array of objects (cfpData) with all the carbon footprint data

// For 1 household member
start(1, 'apt');
start(1, 'small');
start(1, 'medium');
start(1, 'large');

// For 2 household members
start(2, 'apt');
start(2, 'small');
start(2, 'medium');
start(2, 'large');

// For 3 household members
start(3, 'apt');
start(3, 'small');
start(3, 'medium');
start(3, 'large');

// For 4 household members
start(4, 'apt');
start(4, 'small');
start(4, 'medium');
start(4, 'large');

// For 5 household members
start(5, 'apt');
start(5, 'small');
start(5, 'medium');
start(5, 'large');

// For 6 or more household members
start(6, 'apt');
start(6, 'small');
start(6, 'medium');
start(6, 'large');

