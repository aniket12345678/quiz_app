import React from 'react'

const QuizApp = () => {
    return (
        <div classname="quiz-container" id="quiz">
            <div classname="quiz-header">
                <h2 id="question">Which political party is going to win 2024 lok sabha elections?</h2>
                <ul>
                    <li>
                        <input type="radio" name="answer" id="a" classname="answer" />
                        <label htmlFor="a" id="a_text">BJP</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="b" classname="answer" />
                        <label htmlFor="b" id="b_text">Congress</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="c" classname="answer" />
                        <label htmlFor="c" id="c_text">AAP</label>
                    </li>
                    <li>
                        <input type="radio" name="answer" id="d" classname="answer" />
                        <label htmlFor="d" id="d_text">TMC</label>
                    </li>
                </ul>
            </div>
            <button id="submit">Submit</button>
        </div>

    )
}

export default QuizApp
