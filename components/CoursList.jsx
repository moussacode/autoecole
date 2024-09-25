import React from 'react'
import { CourItems } from './CourItems'
import { blog_data } from '@/app/Asset/assets';

export const CoursList = () => {
  return (
    <div className='container '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>

            {
                blog_data.map((item,index) => {

                    return <CourItems key={index}  title={item.title} description={item.description} image={item.image} id={item.id}/>
                }
            )
  
            }

        </div>
    </div>
  )
}
