window.onload = function() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["spade", "club", "heart", "diamond"];
    const suitSymbols = { "spade": "♠", "club": "♣", "heart": "♥", "diamond": "♦" };
    
    const randomValue = values[Math.floor(Math.random() * 13)];
    const randomSuitIndex = Math.floor(Math.random() * 4);
    const randomSuit = suits[randomSuitIndex];
    const suitSymbol = suitSymbols[randomSuit];
    
    document.getElementById("top-left").innerText = suitSymbol + " " + randomValue;
    document.getElementById("center").innerText = randomValue;
    document.getElementById("bottom-right").innerText = suitSymbol + " " + randomValue;
    
    document.getElementById("card").classList.add(randomSuit);
};