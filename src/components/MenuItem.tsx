"use client"
import Hamburger from 'hamburger-react';
import Link from 'next/link'
import React, { useState } from 'react'

export default function MenuItem() {
    const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
        <div className='hidden md:block'>
            <nav>
                <ul className='flex gap-[15px]'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href={"/cart"}>Cart</Link></li>
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
                    <li className='mb-[5px] p-[10px]'><Link href="/">Home</Link></li>
                    <li className='mb-[5px] p-[10px]'><Link href="/products">Products</Link></li>
                    <li className='mb-[5px] p-[10px]'><Link href={"/cart"}>Cart</Link></li>
                </ul>
            </nav>    
        </div>
    </div>
  )
}
