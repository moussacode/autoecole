'use client'
import React, { useState } from 'react';
import { QuizzItems } from './QuizzItems'; // Importation du composant QuizzItems
import { quiz_data } from '@/app/Asset/dataquiz'; // Importation des données de quiz

export const QuizzList = () => {
  const [menu, setMenu] = useState('All');

  return (
    <div className='container space-y-8'>
      {/* Menu de sélection par catégorie */}
      <div className="flex justify-center gap-6">
        <button onClick={() => setMenu('All')} type="button" className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
          All
        </button>
        <button onClick={() => setMenu('Lifestyle')} type="button" className={menu === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
          Lifestyle
        </button>
        <button onClick={() => setMenu('Startup')} type="button" className={menu === 'Startup' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
          Startup
        </button>
        <button onClick={() => setMenu('Technology')} type="button" className={menu === 'Technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : ''}>
          Technology
        </button>
      </div>

      {/* Grille des quiz filtrés par catégorie */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          // Filtrer les quiz en fonction du menu sélectionné
          quiz_data
            .filter((item) => menu === 'All' ? true : item.category === menu)
            .map((item, index) => (
              // Afficher chaque quiz dans le composant QuizzItems
              <QuizzItems 
                key={index} 
                title={item.title} 
                category={item.category} 
                questions={item.questions} 
                image={item.questions[0].image} 
                id={item.id} 
              />
            ))
        }
      </div>
    </div>
  );
};
