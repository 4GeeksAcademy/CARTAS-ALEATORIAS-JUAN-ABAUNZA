window.onload = function() {
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suitSymbols = [ "♠", "♣", "♥", "♦" ];
  
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuitIndex = suitSymbols [Math.floor(Math.random() * suitSymbols.length)];

  
  document.getElementById("top-left").innerText = randomSuitIndex;
  document.getElementById("center").innerText = randomValue;
  document.getElementById("bottom-right").innerText = randomSuitIndex;
  
  //document.getElementById("card").classList.add(randomSuit);
};
