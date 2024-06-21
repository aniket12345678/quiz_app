// import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import FirstPage from './FirstPage';
// import SecondPage from './SecondPage';
// import ThirdPage from './ThirdPage';
import { useState } from 'react';
import Results from './Results';

function App() {
  const [quizData] = useState([
    {
      question: "Which political party is going to win 2024 lok sabha elections ?",
      options: ['BJP', 'Congress', 'AAP', 'TMC'],
      name: 'first',
      correct: 0 //array index number
    },
    {
      question: "What does CSS stads for ?",
      name: 'second',
      options: [
        'Central Style Sheets',
        'Cascading Style Sheets',
        'Cascading Simple Sheests',
        'Cars SUVs Sailboats'
      ],
      correct: 1 //array index number
    },
    {
      question: "What does HTML stands for ?",
      options: [
        "Hypertext Markup Language",
        'Hypertext Markdown Language',
        'Hyperloop Machine Language',
        'Helicopters Terminals Machines Lamborguinis'
      ],
      name: 'third',
      correct: 0 //array index number
    },
    {
      question: "What year was Javascript launched ?",
      name: 'fourth',
      options: ["1995", "1996", "1994", "None of the above"],
      correct: 0 // array index number
    }
  ]);

  const [counter, setCounter] = useState(0);
  const [resultStatus, setResultStatus] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [optionStatus, setOptionStatus] = useState(Array(4).fill(''));
  function getFinalValue() {
    let finalValue = true;
    for (let i = 0; i < optionStatus.length; i++) {
      if (optionStatus[i] === false) {
        finalValue = false
        break;
      }
    }
    return finalValue;
  }
  const nextPage = () => {
    console.log('counter:- ', counter);
    setFinalAnswer([...finalAnswer, getFinalValue()]);
    if (counter === 3) {
      setResultStatus(true);
    } else {
      setCounter((prev) => prev + 1);
      setSelectedRadio('')
      setOptionStatus(Array(4).fill(''));
    }
  }
  function manageOptionState(params) {
    setSelectedRadio(params);
    let fetchAllOptions = [...optionStatus];
    fetchAllOptions = Array(4).fill('');
    if (params === quizData[counter].correct) {
      fetchAllOptions[params] = true;
    } else {
      let correctIndex = quizData[counter].correct;
      fetchAllOptions[correctIndex] = true
      fetchAllOptions[params] = false;
    }
    setOptionStatus(fetchAllOptions);
  }

  return (
    <>
      <div className="quiz-container" id="quiz">
        {
          resultStatus ? <Results data={`You scored ${finalAnswer.filter((x) => x === true).length} out of ${finalAnswer.length}`} />
            :
            <>
              <FirstPage data={quizData[counter]} manageOptionState={manageOptionState} selectedRadio={selectedRadio} optionStatus={optionStatus} />
              <div style={{ padding: '0px 236px' }}>
                <Button id='submit' onClick={nextPage} disabled={optionStatus.filter((x, i) => x === '').length === optionStatus.length} >{counter === 3 ? 'Submit' : 'Next'}</Button>
              </div>
            </>
        }
      </div>
    </>
  );
}

export default App;
