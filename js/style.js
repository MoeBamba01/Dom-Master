
let btnPlus = document.querySelectorAll(".btnPlus");
let btnMoins = document.querySelectorAll(".btnmoins");
let closeButtons = document.querySelectorAll(".close");
let articles = document.querySelectorAll(".main");
let prices = document.querySelectorAll(".prix");
let quantities = document.querySelectorAll(".quantite");
let totals = document.querySelectorAll(".total");
let sum = document.getElementById("Prixtotal");

function calculateTotal() {
    let totalPrice = 0;
    for (let i = 0; i < articles.length; i++) {
        let itemPrice = parseFloat(prices[i].innerText.replace(" fcfa", ""));
        let itemQty = parseInt(quantities[i].innerText);
        let itemTotal = itemPrice * itemQty;
        totals[i].innerText = itemTotal + " fcfa";
        totalPrice += itemTotal;
    }
    sum.innerText = "Total: " + totalPrice + " fcfa";
}

function updateQuantity(index, increment) {
    let currentQty = parseInt(quantities[index].innerText);
    let newQty = currentQty + increment;
    
    if (newQty >= 1) {
        quantities[index].innerText = newQty;
        calculateTotal();
    }
}

btnPlus.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateQuantity(index, 1);
    });
});

btnMoins.forEach((button, index) => {
    button.addEventListener("click", () => {
        updateQuantity(index, -1);
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        articles[index].style.display = "none";
        calculateTotal();
    });
});

calculateTotal();