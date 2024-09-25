'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowDown, MdMenu } from 'react-icons/md'
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { buttonVariants } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import { UserOpen } from './UserOpen.jsx';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);

 

    // Detect when the user scrolls and add shadow when the navbar reaches the top
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-lg' : ''}`}>
            <div
                
            >
                <div className="flex justify-between items-center p-5 bg-white">
                    {/* Logo section */}
                    <div className="text-2xl flex items-center gap-2 font-bold">
                        <p>Route Safe</p>
                    </div>

                    {/* Menu Section */}
                    <div className="hidden lg:block ">
                        <ul className="flex items-center gap-6">
                            <li className='inline-block text-black text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold '>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className='inline-block text-black text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold'>
                                <Link href='/cours'>Cours</Link>
                            </li>
                            <li className='inline-block text-black text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold'>
                                <Link href='/quizz'>Quizz</Link>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Button section */}
                    {/* <div className="hidden lg:block space-x-6">
                        <Link href="/sign" className={cn(buttonVariants({ variant: "outline" }), "hover:scale-105 transition-transform duration-100")}>Connection</Link>
                        <Link href="/register" className={cn(buttonVariants({ variant: "default" }), "hover:scale-105 transition-transform duration-100")}>Inscription</Link>
                    </div> */}

                    {/* User Button section */}
                      <div className="hidden lg:block" >

                    <UserOpen />
                      </div>


                    {/* Mobile Hamburger Menu */}
                    <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <MdMenu className="text-4xl" />
                    </div>

                    {/* Mobile Sidebar section */}
                    <ResponsiveMenu isOpen={isOpen} />
                </div>
            </div>
        </div>
    )
}
