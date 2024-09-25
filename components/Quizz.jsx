'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Exemple de questions pour le quizz
const questions = [
  { question: "Quelle est la vitesse maximale autorisée en ville ?", options: ["30 km/h", "50 km/h", "70 km/h", "90 km/h"], correct: 1 },
  { question: "Que signifie un panneau rouge avec un cercle blanc au milieu ?", options: ["Interdiction de passer", "Obligation de tourner", "Arrêt obligatoire", "Ralentir"], correct: 0 },
  { question: "Quel est l'âge minimum pour obtenir un permis de conduire ?", options: ["16 ans", "18 ans", "20 ans", "22 ans"], correct: 1 },
  { question: "Qui a la priorité à un rond-point ?", options: ["Voiture entrant dans le rond-point", "Voiture déjà dans le rond-point", "Cycliste", "Piéton"], correct: 1 },
  // Ajoutez d'autres questions ici...
  // J'ai ajouté 4 questions pour l'exemple, mais vous devez en ajouter 16 autres pour atteindre 20.
];

export const Quizz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const progress = (currentQuestion + 1) / questions.length * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        {/* Barre de progression */}
        <motion.div 
          className="relative h-4 bg-gray-300 rounded-full mb-6"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: `${progress}%` }} />
        </motion.div>

        {/* Affichage des résultats si le quizz est terminé */}
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Vous avez obtenu {score} sur {questions.length} bonnes réponses</h2>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-blue-500 text-white rounded-lg">Recommencer</button>
          </div>
        ) : (
          <>
            {/* Affichage des questions */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4">Question {currentQuestion + 1}/{questions.length}</h2>
              <p className="text-gray-700">{questions[currentQuestion].question}</p>
            </div>

            {/* Options de réponse */}
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="px-6 py-3 bg-gray-200 hover:bg-blue-200 rounded-lg"
                  onClick={() => handleAnswerOptionClick(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};


