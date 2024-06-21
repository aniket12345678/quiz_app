import React from 'react'
import { Form } from 'react-bootstrap';

const FirstPage = ({ data, manageOptionState, optionStatus, selectedRadio }) => {
    const { question, options, name, correct } = data;
    return (
        <div className="quiz-header">
            <h3>Quiz app</h3>
            <hr />
            <h6 id="question">{question}</h6>
            <ul>
                {
                    options.map((iterator, i) => {
                        return (
                            <li key={i} className={
                                typeof optionStatus[i] === 'string'
                                    ? '' :
                                    optionStatus[i] ? 'correct-option' : 'wrong-option'
                            }
                            >
                                <Form.Check
                                    name={name}
                                    type='radio'
                                    checked={selectedRadio === i}
                                    label={iterator}
                                    id={`default-${name}`}
                                    onChange={() => manageOptionState(i)}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FirstPage
