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
    <div className='bg-primary border-none'>
      <div className='w-full flex justify-center items-center bg-white rounded-bl-[100px] lg:rounded-bl-[200px]'>
        <div className='container grid grid-cols-1 lg:grid-cols-2 min-h-[450px] lg:min-h-[579px] w-full relative px-6 md:px-12 lg:px-20'>
          {/* brand info */}
          <div className="flex flex-col justify-center py-4 lg:py-0 ">
            <div className="text-center lg:text-left space-y-4 lg:space-y-6 max-w-[500px] mx-auto lg:mx-0">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-2xl font-semibold lg:text-3xl xl:text-4xl !leading-tight"
              >
                Maîtrisez le Code de la Route avec <span className='text-[#EA5345]'>AutoQuizz</span> !
              </motion.h1>
              <motion.p
                variants={SlideRight(0.8)}
                initial="hidden"
                animate="visible"
                className="text-base lg:text-lg"
              >
                AutoQuizz aide les conducteurs à revoir et à mémoriser la signification des panneaux de signalisation, afin de réduire les infractions.
              </motion.p>
              {/* button section */}
              <motion.div
                variants={SlideRight(1.0)}
                initial="hidden"
                animate="visible"
                className="flex gap-4 justify-center lg:justify-start mt-6 items-center"
              >
                <Link href="/quizz" className={cn(buttonVariants({ variant: "default" }), "primary-btn hover:scale-105 transition-transform duration-100")}>
                  Je fais mon quizz
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Image section with floating elements */}
     

          <div className="relative flex justify-center items-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative z-10 flex justify-center items-center w-[200px] lg:w-[250px] xl:w-[300px]"
            >
              <Image
                className='flex-1'
                src={HeroImg}
                alt='Moussa Code'
                width={200}
                height={200}
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ stiffness: 100, delay: 0.2 }}
              className='hidden lg:block'
            >
              <motion.div
                className="absolute p-3 bg-red-500 rounded-lg top-[30px] lg:top-[60px] left-[20px] lg:left-[40px]"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center justify-center text-white">
                  <p className="text-lg lg:text-xl font-semibold">
                    <CountUp
                      start={0}
                      end={898}
                      duration={3}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                    />
                  </p>
                  <p className="text-sm lg:text-base">Accidents en 2023</p>
                </div>
              </motion.div>

              {/* Floating circles */}
              <motion.div
                className="absolute w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full top-[80px] lg:top-[110px] right-[0px]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute w-4 h-4 lg:w-6 lg:h-6 bg-yellow-500 rounded-full bottom-[60px] lg:bottom-[80px] left-[80px] lg:left-[100px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <motion.div
                className="absolute w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-full bottom-[40px] lg:bottom-[50px] right-[40px] lg:right-[50px]"
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </motion.div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
