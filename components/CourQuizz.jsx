'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const QuizSection = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timer, setTimer] = useState(30); // Timer state
  const totalQuestions = quiz.length;

  // Handle option selection
  const handleOptionChange = (selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: selectedOption,
    });
  };

  // Handle next question click
  const handleNextQuestion = () => {
    const currentQuestion = quiz[currentQuestionIndex];
    if (selectedAnswers[currentQuestionIndex] === currentQuestion.answer) {
      setScore(score + 1);
    }
    setShowErrors(true);

    if (currentQuestionIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowErrors(false);
        setTimer(30); // Reset the timer for the next question
      }, 1000);
    } else {
      setTimeout(() => setShowResults(true), 1000);
    }
  };

  // Handle quiz restart
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowErrors(false);
    setScore(0);
    setTimer(30); // Reset timer
    setQuizStarted(false); // Reset the quiz to the start screen
  };

  // Handle quit quiz
  const quitQuiz = () => {
    setQuizStarted(false);
  };

  // Timer logic
  useEffect(() => {
    if (quizStarted && timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0 && quizStarted) {
      handleNextQuestion(); // Auto-move to next question
    }
  }, [timer, quizStarted]);

  useEffect(() => {
    if (quizStarted) {
      setTimer(30); // Reset timer when quiz starts or on new question
    }
  }, [currentQuestionIndex, quizStarted]);

  const currentQuestion = quiz[currentQuestionIndex];

  // Calculate progress
  const calculateProgress = () => {
    return ((currentQuestionIndex + 1) / totalQuestions) * 100;
  };

  return (
    <div className='quiz-section container mx-auto p-4'>
      {!quizStarted ? (
        <div className='text-center'>
          <h2 className='text-xl font-semibold mb-4'>Do you want to take the quiz?</h2>
          <button
            onClick={() => setQuizStarted(true)}
            className='px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-200'
            aria-label='Start the quiz'
          >
            Start Quiz
          </button>
        </div>
      ) : !showResults ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-lg font-semibold mb-4'>
            Question {currentQuestionIndex + 1} / {totalQuestions}
          </h2>
          <div className='w-full flex justify-center items-center'>
            <Image
              src={currentQuestion.image}
              alt={currentQuestion.question || ''}
              className='mb-6 w-full h-[221px]  rounded-lg md:w-2/3'
            />
          </div>
          <h3 className='mb-4 text-lg'>{currentQuestion.question}</h3>

          {/* Render the options as clickable divs */}
          <ul className='space-y-4'>
            {currentQuestion.options.map((option, optIndex) => (
              <li
                key={optIndex}
                onClick={() => handleOptionChange(option)}
                className={`p-3 rounded-md cursor-pointer transition duration-200 ${
                  selectedAnswers[currentQuestionIndex] === option
                    ? 'bg-blue-50'
                    : 'bg-white border-gray-300'
                } ${
                  showErrors
                    ? selectedAnswers[currentQuestionIndex] === option
                      ? option === currentQuestion.answer
                        ? 'bg-green-100 text-green-800 border-green-600'
                        : 'bg-red-100 text-red-800 border-red-600'
                      : 'bg-white border-gray-300'
                    : 'hover:bg-blue-50 hover:border-blue-600'
                } border-2`}
                aria-label={`Option ${optIndex + 1}: ${option}`}
              >
                {option}
              </li>
            ))}
          </ul>

          {/* Timer */}
          <div className='mt-4 text-right text-red-600'>
            Time Left: {timer} seconds
          </div>

          {/* Progress bar */}
          <div className='mt-6'>
            <div className='w-full bg-gray-200 rounded-full h-2'>
              <div
                className='bg-blue-600 h-2 rounded-full'
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <span className='block text-right mt-2'>
              {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          </div>

          {/* Next or Finish button */}
          <button
            onClick={handleNextQuestion}
            className={`px-4 py-2 mt-6 ${
              selectedAnswers[currentQuestionIndex]
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } rounded-md`}
            disabled={!selectedAnswers[currentQuestionIndex]}
            aria-label='Next question'
          >
            {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </motion.div>
      ) : (
        <div className='text-center'>
          <h3 className='text-xl font-semibold mb-4'>
            Your Score: {score} / {totalQuestions}
          </h3>
          <p className='mb-6'>
            {score === totalQuestions
              ? 'Congratulations! You got all the questions correct!'
              : 'Good effort! You can try again to improve your score.'}
          </p>

          {/* Options to restart or quit the quiz */}
          <div className='flex justify-center space-x-4'>
            <button
              onClick={restartQuiz}
              className='px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200'
              aria-label='Restart quiz'
            >
              Restart Quiz
            </button>
            <button
              onClick={quitQuiz}
              className='px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200'
              aria-label='Quit quiz'
            >
              Quit Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
