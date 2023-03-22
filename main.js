const kmPrice = 0.21; // prezzo al km
let km = parseInt ( prompt("Quanti chilometri devi percorrere?"));
let age = parseInt ( prompt("Quanti anni hai?"));
let ticketPrice = km * kmPrice; // prezzo del biglietto senza sconti

if (age < 18) {
  // sconto del 20% per i minorenni
  ticketPrice *= 0.8;
} else if (age >= 65) {
  // sconto del 40% per gli over 65
  ticketPrice *= 0.6;
}

// arrotondamento a due cifre decimali
ticketPrice = ticketPrice.toFixed(2);

console.log(`Il prezzo del biglietto è di ${ticketPrice} euro.`);
document.getElementById("prezzo").value = ticketPrice