/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(6, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

console.log(crazySum(3, 2));
console.log(crazySum(4, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a, b) {
  if (a < 19) {
    return Math.abs(a - b);
  } else {
    return Math.abs(a - b) * 3;
  }
}
console.log(crazyDiff(5, 19));
console.log(crazyDiff(22, 19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return "true";
  } else {
    return "Il numero non rientra nel boundary";
  }
}

console.log(boundary(25));
console.log(boundary(188));
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(250));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  if (string.slice(0, 7) === "EPICODE") {
    return string;
  } else {
    return "EPICODE" + string;
  }
}

console.log(epify("EPICODE è una scuola"));
console.log(epify("Ciao sono Tommaso"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0) {
    return "il numero è multiplo di 3 o 7";
  } else {
    return "il numero non è multipo di 3 o 7";
  }
}
console.log(check3and7(18));
console.log(check3and7(25));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", ils cui copo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(myString) {
  return myString.split("").reverse().join("");
}
console.log(reverseString("Tommaso"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(upperFirst("sto facendo il corso full stack developer"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
  return string.slice(1, -1);
}
console.log(cutString("Developer"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
  }
  return randomNumbers;
}
console.log(giveMeRandom(3));
console.log(giveMeRandom(5));
