import React, { useState } from 'react';
import qBank from '../data'; // Import the question bank from data.js

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < qBank.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
    };

    return (
        <div className="quiz-container">
           
            {showScore ? (
                <div className="score-section">
                    <h2>You scored {score} out of {qBank.length}</h2>
                    <button onClick={handleRestart}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{qBank.length}
                        </div>
                        <div className="question-text">
                            {qBank[currentQuestion].ques}
                        </div>
                    </div>
                    <div className="answer-section">
                        {qBank[currentQuestion].opt1 && (
                            <button onClick={() => handleAnswerClick(qBank[currentQuestion].ans === '1')}>
                                {qBank[currentQuestion].opt1}
                            </button>
                        )}
                        {qBank[currentQuestion].opt2 && (
                            <button onClick={() => handleAnswerClick(qBank[currentQuestion].ans === '2')}>
                                {qBank[currentQuestion].opt2}
                            </button>
                        )}
                        {qBank[currentQuestion].opt3 && (
                            <button onClick={() => handleAnswerClick(qBank[currentQuestion].ans === '3')}>
                                {qBank[currentQuestion].opt3}
                            </button>
                        )}
                        {qBank[currentQuestion].opt4 && (
                            <button onClick={() => handleAnswerClick(qBank[currentQuestion].ans === '4')}>
                                {qBank[currentQuestion].opt4}
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Quiz;