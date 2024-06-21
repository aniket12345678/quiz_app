import React from 'react'

const Results = ({ data }) => {
    return (
        <div className='quiz-header'>
            <h3>Quiz App</h3>
            <hr />
            <strong>
                {data}
            </strong>
        </div>
    )
}

export default Results
