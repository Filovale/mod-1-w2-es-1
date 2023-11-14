//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/*
let x = 5
let y = 10
if ( x > y ) {
  console.log(x)
} else {
  console.log(y)
}
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
/*
let num = 788888
if (num < 1) {
     console.log("Tiny");
} else if (num < 10) {
     console.log("Small");
} else if (num < 15) {
     console.log("Medium");
} else if (num < 20) {
     console.log("Large");
} else if (num >= 20)   {
     console.log("Huge");
} 
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
/*
for (let x = 0; x <= 10; x++) {
    if (x === 3) {
    continue;
    }
    if (x === 8) {
      continue;
    }
    console.log(x);
}
*/

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare che il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
/*
for (let x = 0; x <= 15; x++) {
    console.log(x);
    if (x % 2 === 0) {
      console.log ("Pari")
    } else {
      console.log ("Dispari")
    }
}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/*
let x = 5
let y = 3
let somma = x + y
let differenza = x - y
if ( x === 8 ) {
  console.log("questo è x")
} else if ( y === 8 ) {
  console.log("questo è y")
} else if ( somma === 8 ) {
  console.log("questa è la somma") 
} else if ( differenza === 8 ) {
  console.log("questa è la differenza")
} else {
  console.log("Nessuna soluzione è corretta")
}
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/*
let shoppingCart = 0;
let totalShoppingCart = shoppingCart
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart)
} else {
  console.log(totalShoppingCart + 10)
}
*/
/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
/*
let shoppingCart = 100;
let totalShoppingCart = shoppingCart
let blackFriday = totalShoppingCart - (totalShoppingCart/100) * 20
if (blackFriday > 50) {
  console.log(blackFriday)
} else {
  console.log(blackFriday + 10)
}
*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*
let isMale = true;
let gender = (isMale) ? "male" : "female";
console.log(gender);
*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
/*
for (let x = 0; x <= 100; x++) {
    if (x === 0) {
      console.log(x)
  } else if ((x % 3 === 0) && (x % 5 === 0)) {
    console.log ( x + " FizzBuzz")
  } else if (x % 5 === 0) {
    console.log ( x + " Buzz")
  } else if (x % 3 === 0) {
    console.log ( x + " Fizz" )
  }
}
*/