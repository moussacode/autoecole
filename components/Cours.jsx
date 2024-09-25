'use client'

import React from 'react';

import { CoursList } from './CoursList';



export const Cours = () => {
  return (
    <div className="    ">
        
         {/* Title  */}

         <div
          
          className=" text-start mb-8 py-10 bg-secondary  "
        >
            <div className='px-6'>

            
        <div className='text-xl font-semibold'>

          Apprenez le Code de la Route
        </div>
        <p><br />
        Explorez des cours gratuits sur divers sujets qui vous fournissent des compétences de base dans des domaines tels que la conduite, la sécurité routière, et les règles de circulation. Augmentez vos connaissances ou améliorez vos compétences sans aucun engagement financier. </p>
        </div>
        </div>


        <div className=' p-6 '>
            <h1 className='text-xl font-semibold py-6'>
                Explorer les cours
            </h1>

        <div className='flex justify-center items-center  '>

        <CoursList/>
        </div>
        </div>
      
        
     
    </div>
  );
}

