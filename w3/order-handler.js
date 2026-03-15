// order-handler.js

// Get reference to the form
const orderForm = document.getElementById("order-form");


// Get inputs inside the form
const quantityInput = orderForm.querySelector("#qty");
const giftWrapInput = orderForm.querySelector("#gift-wrap");
const sizeRadios = orderForm.querySelectorAll('input[name="size"]');


// Helper function to find selected size
function getSelectedRadioValue(radios) {

    for (const radio of radios) {

        if (radio.checked) {
            return radio.value;
        }

    }

    return null;
}


// Export function so app.js can use it
export function getOrderInputs() {

    return {

        quantity: parseInt(quantityInput.value),

        size: getSelectedRadioValue(sizeRadios),

        giftWrap: giftWrapInput.checked

    };

}
