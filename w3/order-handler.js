// ------------------------------------------------------
// form-handler.js
// This module is responsible for reading data from the
// T-shirt order form and returning the values as an object.
// ------------------------------------------------------


// ------------------------------------------------------
// Get a reference to the entire form element
// This allows us to search for inputs INSIDE the form
// instead of searching the whole document.
// ------------------------------------------------------

const orderForm = document.getElementById("order-form");


// ------------------------------------------------------
// Get the quantity input field
// querySelector("#qty") finds the element with id="qty"
// This is the number input where the user chooses how
// many shirts they want.
// ------------------------------------------------------

const quantityInput = orderForm.querySelector("#qty");


// ------------------------------------------------------
// Get the gift wrap checkbox
// .checked will later tell us if the box is checked
// (true) or not checked (false)
// ------------------------------------------------------

const giftWrapInput = orderForm.querySelector("#gift-wrap");


// ------------------------------------------------------
// Get ALL radio buttons that belong to the "size" group
// querySelectorAll returns a NodeList (similar to an array)
// because there are multiple size options.
// ------------------------------------------------------

const sizeRadios = orderForm.querySelectorAll('input[name="size"]');


// ------------------------------------------------------
// HELPER FUNCTION
// This function checks which radio button is selected
// and returns its value (Small, Medium, or Large)
// ------------------------------------------------------

const getSelectedRadioValue = function (radioButtons) {

    // loop through each radio button
    for (const radio of radioButtons) {

        // if this radio button is checked
        if (radio.checked) {

            // return its value
            return radio.value;

        }
    }

    // if none are selected return null
    return null;

};


// ------------------------------------------------------
// MAIN FUNCTION
// This function collects all the form inputs and returns
// them as an object so other files (like app.js) can use it.
// ------------------------------------------------------

export const getOrderInputs = function () {

    return {

        // convert the quantity from a string to a number
        quantity: parseInt(quantityInput.value),

        // get the selected shirt size
        size: getSelectedRadioValue(sizeRadios),

        // check if gift wrap was selected
        giftWrap: giftWrapInput.checked

    };
// TEMPORARY TEST:

};