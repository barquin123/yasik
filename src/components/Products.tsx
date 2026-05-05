import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link';

const products = [
  {id:1, name: "product 1", price:120.00, image: "https://placehold.co/220x220" },
  {id:2, name: "product 2", price:121.00, image: "https://placehold.co/220x220" },
  {id:3, name: "product 3", price:122.00, image: "https://placehold.co/220x220" },
  {id:4, name: "product 4", price:120.00, image: "https://placehold.co/220x220" },
  {id:5, name: "product 5", price:121.00, image: "https://placehold.co/220x220" },
  {id:6, name: "product 6", price:122.00, image: "https://placehold.co/220x220" },
  {id:7, name: "product 7", price:120.00, image: "https://placehold.co/220x220" },
  {id:8, name: "product 8", price:121.00, image: "https://placehold.co/220x220" },
  {id:9, name: "product 9", price:122.00, image: "https://placehold.co/220x220" },
  {id:10, name: "product 10", price:122.00, image: "https://placehold.co/220x220" },
];

export default function Products() {
  return (
    <div className='max-w-[1200px] m-auto py-[30px]'>
      <h2 className='font-extrabold text-[24px] text-center my-[20px]'>Products</h2>
      <div className='flex flex-wrap justify-between gap-y-[25px]'>
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard name={item.name} price={item.price.toFixed(2)} image={item.image}/>
          </div>
        ))}
      </div>
      <Link className='m-auto w-fit p-[15px] block mt-[15px]' href={"/products"}>See More</Link>
    </div>
  )
}
