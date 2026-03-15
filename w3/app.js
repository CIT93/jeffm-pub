// app.js

// Import the module that reads the order form
import * as orderHandler from "./order-handler.js";


// Select elements
const orderForm = document.getElementById("order-form");
const orderSummary = document.getElementById("order-summary");


// Runs when the form is submitted
function handleOrderSubmit(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get order data from order-handler.js
    const orderData = orderHandler.getOrderInputs();

    // Update the summary
    orderSummary.textContent =
        `Ordered ${orderData.quantity} ${orderData.size} T-Shirts`;

}


// Initialize the app
function init() {

    orderForm.addEventListener("submit", handleOrderSubmit);

    console.log("App Initialized");

}


// Start the app
document.addEventListener("DOMContentLoaded", init);