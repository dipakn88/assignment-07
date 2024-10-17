document.getElementById("calc").onclick = function() {
    // Get values from the form
    let DogSize = document.getElementById("DogSize").value;
    let days = document.getElementById("days").value;

    // Price calculation
    let price = DogSize * days;

    // Tax calculation (47%)
    let taxRate = 0.47;
    let tax = price * taxRate;

    // Total cost
    let totalCost = price + tax;

    // Display the results
    document.getElementById("price").textContent = `Price: $${price.toFixed(2)}`;
    document.getElementById("Tax").textContent = `Tax: $${tax.toFixed(2)}`;
    document.getElementById("total").textContent = `Total: $${totalCost.toFixed(2)}`;
}