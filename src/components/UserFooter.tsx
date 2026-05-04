import React from 'react'

export default function UserFooter() {
  return (
    <div>
        <div className='wrapper max-w-[1200px] m-auto py-[15px]'>
            <nav>
                <ul className='flex gap-[15px] justify-center'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Cart</a></li>
                </ul>
            </nav>
            <div className='text-center mt-[30px]'>
                logo
            </div>
        </div>
    </div>
  )
}
