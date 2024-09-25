import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
  

export const UserOpen = () => {
  return (
    <div>
        <DropdownMenu className='border-none'>
  <DropdownMenuTrigger  className='flex justify-center items-center cursor-pointer gap-1 border border-gray-300 rounded-[50px] p-1'>
    
             <div className=' bg-blue-100 rounded-full p-2'>
                          <FaUser  />
             </div>
          <div className='p-2'>
              <MdKeyboardArrowDown />
          </div>
          
          </DropdownMenuTrigger>
  <DropdownMenuContent className='mr-8'>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>  <Link href="/register">Créer mon compte</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>  <Link href="/sign">Se connecter</Link>
    </DropdownMenuItem>
    
    <DropdownMenuItem>Sign out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

                      
          

         
  </div>
  )
}
