"use client"
import React from 'react'
import { getNav } from './config/nav.config'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FooterMenuItem() {
    const navigation = getNav("headerNav");
    const pathName = usePathname()
  return (
    <nav>
        <ul className='flex gap-[15px] justify-center'>
            {navigation?.items.map((menu)=>
            {
                const isActive = pathName === menu.href
                return(
                    <li key={menu.label} className={`${isActive ? "active" : ""}`}><Link href={menu.href}>{menu.label}</Link></li>
                )
            }
            )}
        </ul>
    </nav>
  )
}
