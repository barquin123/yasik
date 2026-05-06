import Image from 'next/image';
import React from 'react'

type Products = {
  name: string;
  id?: number;
  price:string;
  image:string;
}

export default function ProductCard({name, id, price, image,} : Products) {
  return (
    <div className='container max-w-[220px] mt-[10px] rounded-[8px] overflow-hidden shadow-[0px_0px_8px_rgba(0,0,0,0.8)] cursor-pointer bg-white'>
        <div className="wrapper">
          <div className="image relative w-[220px] h-[294px]">
            <Image src={image} alt={name} fill sizes="220px"/>
          </div>
          <div className='productItem p-[10px]'>
              <div className='flex justify-between items-center'>
                <h2>{name}</h2>
                <p className='text-[#FFC107]'>{price}</p>
              </div>
            <button className='px-[10px] py-[5px] rounded-[8px] m-auto w-fit block cursor-pointer bg-white border border-[#E52D2F] text-[#E52D2F] mt-[15px] hover:bg-[#FFC107] hover:border-white hover:text-white transition-colors duration-300'>Add to cart</button>
          </div>
        </div>
    </div>
  )
}
