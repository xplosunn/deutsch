import React, {useState} from 'react';
import './App.css';
import {exercises as allExercises, Exercise} from "./exercises";

type OngoingExercise = {
    name: string;
    exercise: Exercise;
    submittedAnswer: string | null;
}

function shuffle<T>(unshuffled: T[]): T[] {
    return unshuffled
        .map(value => ({value, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
}

const exerciseToOngoing = (name: string, exercise: Exercise): OngoingExercise => {
    return {
        name,
        exercise: shuffle(exercise),
        submittedAnswer: null,
    }
}

const isSubmittedAnswerCorrect = (submitted: string, correct: string): Boolean => {
    return submitted.trim().toLowerCase() === correct.trim().toLowerCase()
}

function App() {
    let [maybeOngoingExercise, setMaybeOngoingExercise] = useState<OngoingExercise | null>(null);

    if (!maybeOngoingExercise || !maybeOngoingExercise.exercise) {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Exercises:
                    </p>
                    <div>
                        {
                            Object.keys(allExercises).map((name) =>
                                (<button
                                    onClick={() => setMaybeOngoingExercise(exerciseToOngoing(name, allExercises[name]))}>{name}</button>)
                            )
                        }
                    </div>
                </header>
            </div>
        )
    }

    const ongoingExercise: OngoingExercise = maybeOngoingExercise
    const question = ongoingExercise.exercise[0]

    const next = () => {
        if (ongoingExercise.exercise.length > 1) {
            setMaybeOngoingExercise({
                ...ongoingExercise,
                exercise: ongoingExercise.exercise.slice(1),
                submittedAnswer: null
            })
        } else {
            setMaybeOngoingExercise(null)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>{ongoingExercise.name}:</p>
                <p>{question.prompt}</p>
                {
                    ongoingExercise.submittedAnswer
                        ? isSubmittedAnswerCorrect(ongoingExercise.submittedAnswer, question.answer)
                            ? (<>
                                <p>Correct!</p>
                                <p>It was: {question.answer}</p>
                                <button onClick={next}>Next
                                </button>
                            </>)
                            : (<>
                                <p>Wrong!</p>
                                <p>You answered: {ongoingExercise.submittedAnswer}</p>
                                <p>It was: {question.answer}</p>
                                <button onClick={next}>Next
                                </button>
                            </>)
                        : (<>
                            <input type="text" id="input-answer"/>
                            <button onClick={() => setMaybeOngoingExercise({
                                ...ongoingExercise,
                                submittedAnswer: (document.getElementById("input-answer")! as HTMLInputElement).value
                            })}>Submit
                            </button>
                        </>)
                }
            </header>
        </div>
    )
}

export default App;
