import React from 'react'

export default function UserHeader() {
  return (
    <div className='bg-white'>
        <div className='wrapper max-w-[1200px] m-auto py-[15px]'>
            <div className='flex justify-between'>
                <div>
                    logo
                </div>
                <nav>
                    <ul className='flex gap-[15px]'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Cart</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
