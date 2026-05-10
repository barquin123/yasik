import ProductCard from '@/src/components/ProductCard';
import React from 'react'
const items = [
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
  {id:11, name: "product 11", price:120.00, image: "/products/HqwWa2Sl.jpg" },
  {id:12, name: "product 12", price:121.00, image: "/products/yVZkhCh5.jpg" },
  {id:13, name: "product 13", price:122.00, image: "/products/Geu-zXjH.jpg" },
  {id:14, name: "product 14", price:120.00, image: "/products/dZwRFTMh.jpg" },
  {id:15, name: "product 15", price:121.00, image: "/products/xhf332AM.jpg" },
  {id:16, name: "product 16", price:122.00, image: "/products/W5KR9mWx.jpg" },
  {id:17, name: "product 17", price:120.00, image: "/products/XpIr2v2m.jpg" },
  {id:18, name: "product 18", price:121.00, image: "/products/cJxDuDHa.jpg" },
  {id:19, name: "product 19", price:122.00, image: "/products/t1MY9oqB.jpg" },
  {id:20, name: "product 20", price:122.00, image: "/products/dHfyNYnW.jpg" },
  {id:21, name: "product 21", price:120.00, image: "/products/yn2bqwY6.jpg" },
  {id:22, name: "product 22", price:121.00, image: "/products/iEp0kya7.jpg" },
  {id:23, name: "product 23", price:122.00, image: "/products/9fIlXfEu.jpg" },
  {id:24, name: "product 24", price:120.00, image: "/products/TAhznjXs.jpg" },
  {id:25, name: "product 25", price:121.00, image: "/products/vTUI_1xS.jpg" },
  {id:26, name: "product 26", price:122.00, image: "/products/aYCn1qGe.jpg" },
  {id:27, name: "product 27", price:120.00, image: "/products/MfgFLQJq.jpg" },
  {id:28, name: "product 28", price:121.00, image: "/products/EKXDIoGI.jpg" },
  {id:29, name: "product 29", price:122.00, image: "/products/B0NCDysq.jpg" },
  {id:30, name: "product 30", price:122.00, image: "/products/09c1N7G6.jpg" },
  {id:31, name: "product 30", price:122.00, image: "/products/CSaRKzDw.jpg" },
  {id:32, name: "product 30", price:122.00, image: "/products/UIvZFnPd.jpg" },
];

export default function products() {
  return (
    <div className='container max-w-[1200px] m-auto'>
      <div className='flex flex-wrap gap-y-[25px] md:justify-between justify-evenly'>
        {items.map((item) => (
          <div key={item.id}>
            <ProductCard image={item.image} name={item.name} price = {item.price.toFixed(2)}/>
          </div>
        ))}
      </div>
    </div>
  )
}
