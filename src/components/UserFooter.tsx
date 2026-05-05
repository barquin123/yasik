import Image from "next/image";
import Link from "next/link";
export default function UserFooter() {
  return (
    <div className='bg-[#111827] text-white'>
        <div className='wrapper max-w-[1200px] m-auto py-[15px]'>
            <nav>
                <ul className='flex gap-[15px] justify-center'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href={"/cart"}>Cart</Link></li>
                </ul>
            </nav>
            <div className='mx-auto relative mt-[30px] relative w-[150px] h-[150px]'>
                <Image src="/footerLogoV2.png" fill sizes="150" alt="logo" className="object-contain" />
            </div>
        </div>
    </div>
  )
}
