console.log("Hello from inside the main.js file");

// let myVar;

const myVar = "Jeff";
const myVarType = typeof myVar;

console.log(`myVarType: ${myVarType}`);
console.log(`${myVarType}`);

function runNow() {
    if (myVarType === "number") {
        console.log("Will this one run?");
    } else {
        console.log("Will this one run?");
    }
}

runNow();
runNow();


// to update html with total (const carbonPrintTotal)
const myVar = document.querySelector("h2");
// to update index.html
myVar.textContent = myVarType;