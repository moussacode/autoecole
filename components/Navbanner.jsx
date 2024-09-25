'use client'

import Link from 'next/link'
import React from 'react'


export const Navbanner = () => {
  return (
    <div>
        <div
     
        className="bg-primary  text-center font-semibold p-4 hidden lg:block relative"
      >
        Apprend le code de la route gratuitement.
        <Link href="/cours" className="text-secondary ml-2 hover:border-b-2 border-black">
          Je profite
        </Link>
        
      </div>
    </div>
  )
}
