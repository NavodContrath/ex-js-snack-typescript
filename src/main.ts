import type { Dipendente, DipendenteConEmail, Developer, ProjectManager, Team } from "./type.ts"
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

/* 3-Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:
Developer
livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer 
in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
ProjectManager
teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
🎯 BONUS
Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:
nome → Nome del team (stringa).
progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
budget → Importo numerico del budget assegnato al team (sempre presente).
membri → Una tuple in cui il primo elemento è sempre un Project Manager, 
seguito da uno o più Developers (almeno un developer obbligatorio). */

const marcoDeveloper: Developer = {
  nome: "Marco",
  cognome: "Rossi",
  annoNascita: 1989,
  sesso: "m",
  anniDiServizio: [2020, 2021, 2023],
  ruolo: "Developer",
  livelloEsperienza: "Mid",
  linguaggi: ["JavaScript", "Java", "C++"],
  certificazioni: ["Boolean"]
}

const marcoProjectManager: ProjectManager = {
  nome: "Marco",
  cognome: "Rossi",
  annoNascita: 1989,
  sesso: "m",
  anniDiServizio: [2020, 2021, 2023],
  ruolo: "ProjectManager",
  teamSize: 5,
  budgetGestito: 1000000,
  stakeholderPrincipali: ["Gino", "Pippo", "Livio"]
}

const teamDiMarco: Team = {
  nome: "Marco il meglio",
  progettoAttuale: "Progetto di Marco",
  budget: 1000000,
  membri: [marcoProjectManager, marcoDeveloper]
}