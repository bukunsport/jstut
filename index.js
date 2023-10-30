// alert('Test')
// prompt('Insert Your Passcode')
// Generating Random Number from 0 to 100 - Create a Frontend Button Fot it. 
console.log (Math.round (Math.random() * 100))


var A = 6 / 40000;
    console.log(A)

// Function to perform the calculation
function calculateA() {
    var A = 6 / 40000;
    return A;
}

// Event listener for the button
document.getElementById("calculateButton").addEventListener("click", function() {
    var result = calculateA();
    document.getElementById("result").innerHTML = "Result: " + result;
});
