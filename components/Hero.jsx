'use client'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { motion } from "framer-motion";
import { SlideRight } from "@/lib/animation";
import Image from 'next/image'
import HeroImg from "../app/assets/pngegg.png";
import CountUp from "react-countup";

export const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center '>
      <div className='container grid grid-cols-1 lg:grid-cols-2 min-h-[579px] w-full relative px-20'>
                    {/* brand info */}
        <div className="flex flex-col justify-center py-1 lg:pr-16 xl:pr-40 lg:py-0">
          <div className="text-center lg:text-left space-y-6">
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
              className="text-3xl font-semibold lg:text-6xl !leading-tight"
            >
              Fais Ton Quizz <span className="text-primary">Gratuitement</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              Apprendre et reviser le code de la route sauve des vies.
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center lg:justify-start !mt-8 items-center"
            >
                        <Link href="/quizz" className={cn(buttonVariants({ variant: "default" }), "primary-btn hover:scale-105 transition-transform duration-100")}>Je fais mon quizz</Link>
                        
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
          <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{  stiffness: 100, delay: 0.2 }}
          
          className='hidden  lg:block'
          >

         
          <motion.div
            className="absolute p-3 bg-red-500 rounded-lg top-[60px] left-[40px]"
            
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center justify-center text-white ">
          <p className="text-xl font-semibold">
            <CountUp
              start={0}
              end={898}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p >Accidents en 2023</p>
        </div>
          </motion.div>
          <motion.div
            className="absolute w-8 h-8 bg-green-500 rounded-full top-[110px] right-[0px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute w-6 h-6 bg-yellow-500 rounded-full bottom-[80px] left-[100px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute w-10 h-10 bg-blue-500 rounded-full bottom-[50px] right-[50px]"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
           </motion.div>
        </div>
        </div>
    </div>
  )
}
