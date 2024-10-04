'use client'
import React from 'react'

import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { motion } from "framer-motion";
import { SlideRight } from "@/lib/animation";
import Image from 'next/image'
import HeroImg from "../app/assets/quizz.png";
import AboutImg from "../app/assets/accident.png";
import CountUp from "react-countup";
export const Fonctionnement = () => {

  return (
   <div className='relative flex justify-center items-center pt-30  '>
    <div className='absolute z-30'>
    <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative z-10 flex justify-center items-center w-[200px] lg:w-[250px] xl:w-[300px] top-[-350px]  left-[0px] "
            >
              <Image
                className='flex-1 '
                src={AboutImg}
                alt='Moussa Code'
                width={150}
                height={200}
              />
            </motion.div>

    </div>
     <div className=' relative '>
    <div className=' flex justify-center items-center    '>
      <div className='container grid grid-cols-1 lg:grid-cols-2 min-h-[579px]  relative p-10 w-full'>
                    {/* brand info */}
        <div className="flex flex-col justify-center py-1 lg:pr-16 xl:pr-40 lg:py-0">
          <div className="text-center lg:text-left space-y-4 lg:space-y-6 max-w-[500px] mx-auto lg:mx-0">
            {/* <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
             Quizz gratuit à 100%
            </motion.p> */}
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-3xl font-semibold leading-tight"
            >
             Comment fonctionne  <span className='text-primary'>AutoQuizz 
              </span> ?
            </motion.h1>
            
            <motion.div
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-base"
            ><p>

Suivez ces étapes simples pour commencer à utiliser AutoQuizz et améliorer vos connaissances du code de la route. Notre application est conçue pour être conviviale et efficace pour vous aider à devenir un conducteur plus prudent. </p>
<ul className='mt-3 flex-col space-y-3'>
  <li className='flex items-center gap-3'>
 <p className='font-semibold'>Étape 1 </p>

    <p >Créez un compte pour commencer.</p>
  </li>
  <li className='flex items-center gap-3'>
 <p className='font-semibold'>Étape 2 </p>

    <p >Répondez à un quiz pour tester vos connaissances.</p>
  </li>
 
 
</ul>
            </motion.div>
           
           
          </div>
        </div>
            
        {/* Image section with floating elements */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative z-10 flex justify-center items-center w-[150px] lg:w-[250px] xl:w-[300px]"
          >
            <Image
              className='flex-1 '
            src={HeroImg}
            alt='Moussa Code'
            width={200}
              height={200}
            />
          </motion.div>

          {/* Floating elements */}
          {/* Floating circles */}
          
        </div>
        </div>
    </div>
    </div>
   </div>
  )
}
