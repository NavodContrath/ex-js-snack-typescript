/* 1-Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… 
Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
Se è una stringa: stampala in maiuscolo
Se è un numero: moltiplicalo per due e stampalo
Se è un booleano: stampa “Sì” o “No” in base al suo valore
In tutti gli altri casi: stampa “Tipo non supportato”
🎯 BONUS
Se è null: stampa “Il dato è vuoto”
Se è un array: stampa la sua lunghezza
Se è una Promise: attendi che si risolva e stampa il valore del resolve. */

const datoRicevuto: unknown = 12

if (typeof datoRicevuto === "string") {
  console.log(datoRicevuto.toUpperCase())
} else if (typeof datoRicevuto === "number") {
  const datoRaddoppiato: number = datoRicevuto * 2
  console.log(datoRaddoppiato)
} else if (typeof datoRicevuto === "boolean") {
  console.log(datoRicevuto ? "SI" : "NO")
} else if (datoRicevuto === null) {
  console.log("il  dato è vuoto")
} else if (Array.isArray(datoRicevuto)) {
  console.log(datoRicevuto.length)
} else if (datoRicevuto instanceof Promise) {
  datoRicevuto
    .then(data => console.log(data))
} else {
  console.log("Dato non supportato");
}

