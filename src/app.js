window.onload = function generarCarta() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suitSymbols = [ 
    { symbol: "♠", class: "spade" },
    { symbol: "♣", class: "club" },
    { symbol: "♥", class: "heart" },
    { symbol: "♦", class: "diamond" }
  ];

  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suitSymbols[Math.floor(Math.random() * suitSymbols.length)];

  
  const topLeft = document.getElementById("top-left");
  const bottomRight = document.getElementById("bottom-right");
  const center = document.getElementById("center");
  const button = document.getElementById("new-card-btn")

  topLeft.innerText = randomSuit.symbol;
  topLeft.className = `top-left ${randomSuit.class}`;

  center.innerText = randomValue;

  bottomRight.innerText = randomSuit.symbol;
  bottomRight.className = `bottom-right ${randomSuit.class}`;
  setInterval(generarCarta, 10000);
  button.addEventListener("click",generarCarta)
};
