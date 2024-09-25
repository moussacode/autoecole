'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image'
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
// Variants for animations
const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0.5, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
  });

export const CourItems = ({title,description,image,id}) => {
  return (
    <div >
       
        {/* Grid sections with animations */}
        <div className="hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r hover:from-white/10 hover:via-white/30 hover:to-white/10">
          {/* Section 1 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp(0.2)}
            className="bg-white shadow-md rounded-lg p-3 border-2 border-gray-300  "
          >
            <Link href={`cours/${id}`}>
            <Image class="rounded-lg" src={image} alt=""/>
        
            </Link>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">
            {description.length > 90 ? `${description.slice(0, 75)}...` : description} </p>
            <Link href={`cours/${id}`} className={cn(buttonVariants({ variant: "default" }), "hover:scale-105 transition-transform duration-100")}>
              Suivre ce cour
            </Link>
          </motion.div>

          
        </div>
    </div>
  )
}
