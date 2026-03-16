// app.js

// Import the module that reads the order form
import * as orderHandler from "./order-handler.js";


// Select elements from the HTML page
const orderForm = document.getElementById("order-form");
const orderSummary = document.getElementById("order-summary");


// Runs when the form is submitted
const handleOrderSubmit = function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get order data from order-handler.js
    const orderData = orderHandler.getOrderInputs();

    // Update the summary text on the page
    orderSummary.textContent =
        `Ordered ${orderData.quantity} ${orderData.size} T-Shirts`;

};


// Initialize the app
const init = function () {

    // Listen for the form submission event
    orderForm.addEventListener("submit", handleOrderSubmit);

    console.log("App Initialized");

};


// Start the app when the page loads
document.addEventListener("DOMContentLoaded", init);





// =====================================================
// NOTES AND ORIGINAL CODE (COMMENTED OUT)
// =====================================================

// The instructor asked for functions written using this format:
//
// const myFun = function () {
//
// }
//
// This is called a "function expression stored in a constant variable".


// -----------------------------------------------------
// ORIGINAL handleOrderSubmit FUNCTION (REPLACED)
// -----------------------------------------------------

// function handleOrderSubmit(event) {
//
//     // Prevent page refresh
//     event.preventDefault();
//
//     // Get order data from order-handler.js
//     const orderData = orderHandler.getOrderInputs();
//
//     // Update the summary
//     orderSummary.textContent =
//         `Ordered ${orderData.quantity} ${orderData.size} T-Shirts`;
//
// }


// The line above was replaced with:
//
// const handleOrderSubmit = function (event) {
//
// };



// -----------------------------------------------------
// ORIGINAL init FUNCTION (REPLACED)
// -----------------------------------------------------

// function init() {
//
//     orderForm.addEventListener("submit", handleOrderSubmit);
//
//     console.log("App Initialized");
//
// }


// The line above was replaced with:
//
// const init = function () {
//
// };