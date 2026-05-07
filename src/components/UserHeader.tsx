import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuItem from './MenuItem'

export default function UserHeader() {
  return (
    <div className='bg-[#111827] text-white border-b-[#ffc107] border-b-[2px]'>
        <div className='wrapper max-w-[1200px] m-auto px-[10px] md:px-0'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link className='relative w-[220px] h-[112px] block' href="/"><Image src="/logoHeader2.png" fill sizes='220' alt="logo" className='object-cover' loading='eager'/></Link>
                </div>
                <MenuItem/>
            </div>
        </div>
    </div>
  )
}
