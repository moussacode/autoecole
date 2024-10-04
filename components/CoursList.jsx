'use client'
import React from 'react'
import { CourItems } from './CourItems'
import { blog_data } from '@/app/Asset/assets';
import { useState } from 'react';


export const CoursList = () => {

  const [menu,setMenu]=useState('All')

  return (
    <div className='container space-y-8'>
      <div className="flex justify-center gap-6">

        <button onClick={()=>setMenu('All')} type="button" className={menu===('All')?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu('Lifestyle')} type="button" className={menu===('Lifestyle')?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        <button onClick={()=>setMenu('Startup')} type="button" className={menu===('Startup')?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
        <button onClick={()=>setMenu('Technology')} type="button" className={menu===('Technology')?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
        
     
      </div>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>

            {
                blog_data.filter((item)=> menu==='All'?true:item.category===menu).map((item,index) => {

                    return <CourItems key={index}  title={item.title} description={item.description} image={item.image} id={item.id}/>
                }
            )
  
            }

        </div>
    </div>
  )
}
