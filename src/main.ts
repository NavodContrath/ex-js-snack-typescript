import type { Dipendente, DipendenteConEmail } from "./type.ts"
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

/* 2-Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
🎯 BONUS
Il type alias Dipendente, ha anche i seguenti dati:
emailAziendale → Email assegnata al dipendente (non si può modificare)
contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”. */

const marco: Dipendente = {
  nome: "Marco",
  cognome: "Rossi",
  annoNascita: 1989,
  sesso: "m",
  anniDiServizio: [2020, 2021, 2023]
}

const marcoConEmail: DipendenteConEmail = {
  nome: "Marco",
  cognome: "Rossi",
  annoNascita: 1989,
  sesso: "m",
  anniDiServizio: [2020, 2021, 2023],
  emailAziendale: "marco.dipendente@email.com",
  contratto: "indeterminato"
}


