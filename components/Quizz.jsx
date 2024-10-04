import React from 'react'
import { QuizzList } from './QuizzList'

export const Quizz = () => {
  return (
    <div className="    ">
        
      {/* Title */}
      <div className="text-start mb-8 py-10 bg-secondary">
        <div className='px-6'>
          <div className='text-xl font-semibold'>
            Apprenez avec des Quiz
          </div>
          <p className="mt-4">
            Découvrez des quiz gratuits couvrant une variété de sujets qui vous aideront à développer des compétences clés, comme la conduite, la sécurité routière, et les règles de circulation. Renforcez vos connaissances ou améliorez vos compétences de manière ludique et accessible, sans aucun frais.
          </p>
        </div>
      </div>

      <div className='p-6'>
        <h1 className='text-xl font-semibold py-6'>
          Explorez les Quizz
        </h1>

        <div className='flex justify-center items-center'>
          <QuizzList/>
        </div>
      </div>
    </div>
  )
}
