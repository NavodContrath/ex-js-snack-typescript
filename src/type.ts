/* SNACK 2 */
export type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number
    sesso: "m" | "f"
    anniDiServizio: number[]
}

export type DipendenteConEmail = Dipendente & {
    readonly emailAziendale: string
    contratto: "indeterminato" | "determinato" | "freelance"
}