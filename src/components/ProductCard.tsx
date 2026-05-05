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
    <div className='container max-w-[220px] mt-[10px] rounded-[8px] overflow-hidden shadow-[0px_0px_8px_rgba(0,0,0,0.8)] cursor-pointer'>
        <div className="wrapper">
          <div className="image relative w-[220px] h-[294px]">
            <Image src={image} alt={name} fill sizes="220px"/>
          </div>
          <div className='productItem p-[10px] flex justify-between items-center'>
              <h2>{name}</h2>
              <p>{price}</p>
          </div>
        </div>
    </div>
  )
}
