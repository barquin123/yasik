import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link';

const products = [
  {id:1, name: "product 1", price:120.00, image: "/products/-77JZu87.jpg" },
  {id:2, name: "product 2", price:121.00, image: "/products/4T1Cx71k.jpg" },
  {id:3, name: "product 3", price:122.00, image: "/products/yfYEtpJ7.jpg" },
  {id:4, name: "product 4", price:120.00, image: "/products/ej-Kqw-2.jpg" },
  {id:5, name: "product 5", price:121.00, image: "/products/eHIfGqiS.jpg" },
  {id:6, name: "product 6", price:122.00, image: "/products/oNXqdJj6.jpg" },
  {id:7, name: "product 7", price:120.00, image: "/products/XheZYXau.jpg" },
  {id:8, name: "product 8", price:121.00, image: "/products/ni2R63rG.jpg" },
  {id:9, name: "product 9", price:122.00, image: "/products/5ABQiOW-.jpg" },
  {id:10, name: "product 10", price:122.00, image: "/products/4BSxcClH.jpg" },
];

export default function Products() {
  return (
    <div className='max-w-[1200px] m-auto py-[30px]'>
      <h2 className='font-extrabold text-[30px] text-[#E52D2F] text-center my-[20px]'>Products</h2>
      <div className='flex flex-wrap justify-between gap-y-[25px]'>
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard name={item.name} price={item.price.toFixed(2)} image={item.image}/>
          </div>
        ))}
      </div>
      <Link className='m-auto w-fit px-[30px] text-[22px] rounded-2xl py-[5px] block mt-[30px] bg-[#E52D2F] text-white border border-[#FFC107] hover:bg-[#FFC107] transition-colors duration-200' href={"/products"}>See More</Link>
    </div>
  )
}
