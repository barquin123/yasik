import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuItem from './MenuItem'

export default function UserHeader() {
  return (
    <div className='bg-[#111827] text-white'>
        <div className='wrapper max-w-[1200px] m-auto px-[10px] md:px-0'>
            <div className='flex justify-between items-center'>
                <div className='relative w-[220px] h-[112px]'>
                    <Image src="/logoHeader2.png" fill sizes='220' alt="logo" className='object-cover'/>
                </div>
                <MenuItem/>
            </div>
        </div>
    </div>
  )
}
