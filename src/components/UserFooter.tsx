import Image from "next/image";
import Link from "next/link";
import { getNav } from "./config/nav.config";
import FooterMenuItem from "./FooterMenuItem";
export default function UserFooter() {
    const navigation = getNav("headerNav")
  return (
    <div className='bg-[#111827] text-white border-t-[#ffc107] border-t-[2px]'>
        <div className='wrapper max-w-[1200px] m-auto py-[30px]'>
            <FooterMenuItem/>
            {/* smm logos */}
            <div>
                <div >
                    <Link className='mx-auto relative mt-[30px] relative w-[150px] h-[150px] block' href="/"><Image src="/footerLogoV2.png" fill sizes="150" alt="logo" className="object-contain" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
