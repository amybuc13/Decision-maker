document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("randomButton");
    const resultDiv = document.getElementById("result");
    const decisions = ["Yes", "No", "Maybe", "Absolutely", "Not Today"];

    button.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * decisions.length);
        resultDiv.textContent = decisions[randomIndex];
    });
});

