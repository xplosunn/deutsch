export type Question = {
    prompt: string;
    answers: string[];
}

export type Exercise = Question[]

const exercise = (prompt: string, answer: string | string[]): Question => {
    return {
        prompt,
        answers: (typeof answer === 'string') ? [answer] : answer
    }
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

const verbenImPraeteritum = [
    exercise("Wegen des schlechten Wetters _____ der Wettkampf abgesagt. (werden)", "wurde"),
    exercise("Trotz des Strassenlärms _____ ich mich gut konzentrieren. (können)", "konnte"),
    exercise("Trotz seines Erfolges _____ er stolz auf sich. (sein)", "war"),
    exercise("Trotz seiner Erkältung _____ der Sänger das Konzert abbrechen. (müssen)", "musste"),
    exercise("Trotz der hohen Personalkosten _____ die Firma in diesem Jahr einen Gewinn. (erzielen)", "erzielte"),
    exercise("Wegen der hohen Personalkosten _____ die Firma in diesem Jahr Verluste. (machen)", "machte"),
    exercise("Wegen des fleissigen Trainings _____ sie die Silbermedaille. (erringen)", "errang"),
    exercise("Trotz der Massnahmen der Regierung _____ sich die Lage auf dem Arbeitsmarkt nicht. (verbessern)", "verbesserte"),
    exercise("Wegen der Massnahmen der Regierung _____ die Zahl der Arbeitslosen. (sinken)", "sank"),
    exercise("Trotz der vielen Gespräche _____ man keine Lösund. (finden)", "fand"),
]

const verbenMitPraepositionen = [
    exercise("Verzichten Sie doch ___ Klatsch und Trasch!", "auf"),
    exercise("Erinnerst du dich oft ___ deine Studienzeit?", "an"),
    exercise("Ich gratuliere dir ___ Geburtstag.", "zum"),
    exercise("Freust du dich ___ dein Praktikum?", ["auf", "über"]),
    exercise("Ich fürchte mich ___ Schlangen.", "vor"),
    exercise("___ welche Stelle hast du dich beworben?", "Um"),
    exercise("Er gehört ___ den bekannsten Künstlern Deutschlands.", "zu"),
    exercise("Hast du dich ___ dem Preis erkundigt?", "nach"),
    exercise("Die meisten Künstler in Deutschland leben ___ sehr wenig Geld.", "von"),
]

const zeitangabenPraepositionen = [
    exercise("___ Nachmittag besuden wir eine Ausstellung", "Am"),
    exercise("Wir sehen uns ___ drei Wochen.", "in"),
    exercise("Kommst du ___ Samstag mit zum Fussball?", "am"),
    exercise("___ Moment habe ich leider keine Zeit.", "Im"),
    exercise("Er hat sich ___ Skifahren das Bein gebrochen.", "beim"),
    exercise("Der Kunde kommt ___ 13. Mai.", "am"),
    exercise("Der Kunde kommt ___ 13.30 Uhr.", "um"),
    exercise("Was habit ihr ___ des Urlaubs gemacht?", "während"),
    exercise("___ Juli fahren wir nach Spanien.", "Im"),
]

const deklinationVonArtikel: Question[] = [
    exercise("Nominativ, Maskulinum", "der"),
    exercise("Nominativ, Femininum", "die"),
    exercise("Nominativ, Neutrum", "das"),
    exercise("Nominativ, Plural", "die"),

    exercise("Akkusativ, Maskulinum", "den"),
    exercise("Akkusativ, Femininum", "die"),
    exercise("Akkusativ, Neutrum", "das"),
    exercise("Akkusativ, Plural", "die"),

    exercise("Dativ, Maskulinum", "dem"),
    exercise("Dativ, Femininum", "der"),
    exercise("Dativ, Neutrum", "dem"),
    exercise("Dativ, Plural", "den"),

    exercise("Genitiv, Maskulinum", "des"),
    exercise("Genitiv, Femininum", "der"),
    exercise("Genitiv, Neutrum", "des"),
    exercise("Genitiv, Plural", "der"),
]

const LokalangabenWechselPraepositionen: Question[] = [
    ...[
        exercise("___ Deutschland", "nach"),
        exercise("___ München", "nach"),
        exercise("___ Europa", "nach"),
        exercise("___ Hause", "nach"),

        exercise("___ die Kirche", "in"),
        exercise("___ die Schule", "in"),
        exercise("___ das Restaurant", "in"),
        exercise("___ den Park", "in"),
        exercise("___ die Schweiz", "in"),
        exercise("___ den Sudan", "in"),
        exercise("___ die Niederlande", "in"),
        exercise("___ die USA", "in"),

        exercise("___ das Fenster", "an"),
        exercise("___ die Nordsee", "an"),
        exercise("___ den Strand", "an"),

        exercise("___ den Berg", "auf"),
        exercise("___ eine einsame Insel", "auf"),
        exercise("___ den Potsdamer Platz", "auf"),

        exercise("___ meinen Eltern", "zu"),
        exercise("___ dem Artzt", "zu"),
        exercise("___ dem Friseur", "zu"),
        exercise("___ der Polizei", "zu"),
        exercise("___ dem Unterricht", "zu"),
        exercise("___ Mercedes", "zu"),
    ].map(question => ({
        ...question,
        prompt: "Wohin gehen/fahren/fliegen Sie?" + question.prompt,
    })),
    ...[
        exercise("___ Deutschland", "in"),
        exercise("___ München", "in"),
        exercise("___ Europa", "in"),
        exercise("___ Hause", "zu"),

        exercise("___ der Kirche", "in"),
        exercise("___ der Schule", "in"),
        exercise("___ dem Restaurant", "in"),
        exercise("___ dem Park", "in"),
        exercise("___ der Schweiz", "in"),
        exercise("___ dem Sudan", "in"),
        exercise("___ den Niederlande", "in"),
        exercise("___ den USA", "in"),

        exercise("___ dem Fenster", "an"),
        exercise("___ der Nordsee", "an"),
        exercise("___ dem Strand", "an"),

        exercise("___ dem Berg", "auf"),
        exercise("___ einer einsamen Insel", "auf"),
        exercise("___ dem Potsdamer Platz", "auf"),

        exercise("___ meinen Eltern", "bei"),
        exercise("___ dem Artzt", "bei"),
        exercise("___ dem Friseur", "bei"),
        exercise("___ der Polizei", "bei"),
        exercise("___ dem Unterricht", "bei"),
        exercise("___ Mercedes", "bei"),
    ].map(question => ({
        ...question,
        prompt: "Wo waren Sie?" + question.prompt,
    })),
]

export const exercises: Record<string, Exercise> = {
    "Verben im Perfekt": verbenImPerfekt,
    "Verben im Präteritum": verbenImPraeteritum,
    "Verben mit Präpositionen": verbenMitPraepositionen,
    "Zeitangaben Präpositionen": zeitangabenPraepositionen,
    "Deklination von Artikel": deklinationVonArtikel,
    "Lokalangaben Wechselpräpositionen": LokalangabenWechselPraepositionen,
};