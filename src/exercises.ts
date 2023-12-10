export type Question = {
    prompt: string;
    answer: string;
}

export type Exercise = Question[]

const exercise = (prompt: string, answer: string): Question => {
    return {prompt, answer}
}

const verbenImPerfekt = [
    exercise("Wie viele E-mails haben Sie gestern _____? (schreiben)", "geschrieben"),
    exercise("Hast du mir aus dem Urlaub ein Souvenir _____? (mitbringen)", "mitgebracht"),
    exercise("Ich habe mal wieder gen ganzen Tag im Büro _____. (sitzen)", "gesessen"),
    exercise("Haben Sie nicht _____, dass die Sitzung erst um 15.00 Uhr anfängt? (wissen)", "gewusst"),
    exercise("Wann hat das Konzert _____? (beginnen)", "begonnen"),
    exercise("Der Künster ist 1961 nach Düsseldorf  _____. (umziehen)", "umgezogen"),
    exercise("Ich habe mein Studium 1990 als Diplomphysiker _____. (abschliessen)", "abgeschlossen"),
    exercise("Im MoMA hat 2002 ein Ausstellung der Gemälde von Gerhard Richter _____. (stattfinden)", "stattgefunden"),
    exercise("Conrad Zuse hat 1937 den ersten frei programmierbaren Computer _____. (erfinden)", "erfunden"),
]

export const exercises: Record<string, Exercise> = {
    "Verben im Perfekt": verbenImPerfekt,
};