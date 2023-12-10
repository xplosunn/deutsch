import React, {FormEventHandler, useState} from 'react';
import './App.css';
import {exercises as allExercises, Exercise, exercises} from "./exercises";

type OngoingExercise = {
    name: string;
    exercise: Exercise;
    submittedAnswer: string | null;
    totalCorrectAnswers: number;
    totalQuestions: number;
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
        totalCorrectAnswers: 0,
        totalQuestions: exercise.length,
    }
}

const isSubmittedAnswerCorrect = (submitted: string, correctAnswers: string[]): Boolean => {
    return correctAnswers.some(correct => correct.trim().toLowerCase() === submitted.trim().toLowerCase())
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
                                (<>
                                    <button
                                        onClick={() =>
                                            setMaybeOngoingExercise(exerciseToOngoing(name, allExercises[name]))
                                        }>{name}</button>
                                    <hr/>
                                </>)
                            )
                        }
                    </div>
                </header>
            </div>
        )
    }

    const ongoingExercise: OngoingExercise = maybeOngoingExercise
    const question = ongoingExercise.exercise[0]

    const submit: FormEventHandler<{}> = (e) => {
        e.preventDefault();
        setMaybeOngoingExercise({
            name: ongoingExercise.name,
            exercise: ongoingExercise.exercise,
            submittedAnswer: (document.getElementById("input-answer")! as HTMLInputElement).value,
            totalCorrectAnswers: ongoingExercise.totalCorrectAnswers,
            totalQuestions: ongoingExercise.totalQuestions,
        })
    }

    const answersStr = question.answers.length == 1 ? question.answers[0] : question.answers.join(" / ")

    if (!ongoingExercise.submittedAnswer) {
        return (
            <div className="App">
                <header className="App-header">
                    <p>{ongoingExercise.name}:</p>
                    <p>{question.prompt}</p>
                    <form onSubmit={submit}>
                        <input type="text" id="input-answer"/>
                        <button type="submit">Submit</button>
                    </form>
                </header>
            </div>
        )
    }

    const isAnswerCorrect = isSubmittedAnswerCorrect(ongoingExercise.submittedAnswer, question.answers)
    const nextButtonText = ongoingExercise.exercise.length > 1 ? "Next" : "Back to exercise list"

    const next: FormEventHandler<{}> = (e) => {
        e.preventDefault();
        if (ongoingExercise.exercise.length > 1) {
            setMaybeOngoingExercise({
                name: ongoingExercise.name,
                exercise: ongoingExercise.exercise.slice(1),
                submittedAnswer: null,
                totalCorrectAnswers: isAnswerCorrect ? ongoingExercise.totalCorrectAnswers + 1 : ongoingExercise.totalCorrectAnswers,
                totalQuestions: ongoingExercise.totalQuestions,
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
                    isAnswerCorrect ?
                        (<form onSubmit={next}>
                            <p>Correct!
                                ({ongoingExercise.totalCorrectAnswers + 1}/{ongoingExercise.totalQuestions - ongoingExercise.exercise.length + 1})</p>
                            <p>It was: {answersStr}</p>
                            <button type="submit">{nextButtonText}</button>
                        </form>)
                        : (<form onSubmit={next}>
                            <p>Wrong!
                                ({ongoingExercise.totalCorrectAnswers}/{ongoingExercise.totalQuestions - ongoingExercise.exercise.length + 1})</p>
                            <p>You answered: {ongoingExercise.submittedAnswer}</p>
                            <p>It was: {answersStr}</p>
                            <button type="submit">{nextButtonText}</button>
                        </form>)
                }
            </header>
        </div>
    )
}

export default App;
