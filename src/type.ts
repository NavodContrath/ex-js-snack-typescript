/* SNACK 2 */
export type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso: "m" | "f",
    anniDiServizio: number[]
}

export type DipendenteConEmail = Dipendente & {
    readonly emailAziendale: string,
    contratto: "indeterminato" | "determinato" | "freelance"
}
/* SNACK 3 */
export type Developer = Dipendente & {
    ruolo: "Developer",
    livelloEsperienza: "Junior" | "Mid" | "Senior",
    linguaggi?: string[],
    certificazioni: string[]
}

export type ProjectManager = Dipendente & {
    ruolo: "ProjectManager",
    teamSize: number | null,
    budgetGestito?: number,
    stakeholderPrincipali: string[]
}

export type Team = {
    nome: string,
    progettoAttuale: string | null,
    budget: number,
    membri: [ProjectManager, Developer, ...Developer[]]
}