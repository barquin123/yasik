import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuItem from './MenuItem'

export default function UserHeader() {
  return (
    <div className='bg-white'>
        <div className='wrapper max-w-[1200px] m-auto py-[15px] px-[10px] md:px-0'>
            <div className='flex justify-between items-center'>
                <div>
                    {/* <Image src="https://placehold.co/150x150" width={150} height = {150} alt="logo" /> */}
                    <img src="https://placehold.co/60x60" alt="" />
                </div>
                <MenuItem/>
            </div>
        </div>
    </div>
  )
}
