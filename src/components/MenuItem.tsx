"use client"
import Hamburger from 'hamburger-react';
import Link from 'next/link'
import React, { useState } from 'react'
import { getNav } from './config/nav.config';
import { usePathname } from 'next/navigation';

export default function MenuItem() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const pathName = usePathname()
    const navigation = getNav("headerNav");
  return (
    <div>
        <div className='hidden md:block'>
            <nav>
                <ul className='flex gap-[15px]'>
                    {navigation?.items.map((menu)=>
                        {
                            const isActive = pathName === menu.href
                                return (
                                <li key={menu.label} className={`${isActive ? "active" : ""}`}><Link href={menu.href}>{menu.label}</Link></li>
                            )
                        }
                    )}
                </ul>
            </nav>
        </div>
        <div className='md:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className={`fixed z-[10] right-0 top-0 py-[15px] bg-[#111827] transition-all duration-300 h-[100vh] ${isOpen ? "w-[150px]": "w-[0]"}`}>
            <div className='md:hidden flex justify-end'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <nav>
                <ul>
                    {navigation?.items.map((menu)=>(
                        <li key={menu.label}><Link href={menu.href}>{menu.label}</Link></li>
                    ))}
                </ul>
            </nav>    
        </div>
    </div>
  )
}
