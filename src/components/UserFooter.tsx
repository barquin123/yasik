import Link from "next/link";
export default function UserFooter() {
  return (
    <div>
        <div className='wrapper max-w-[1200px] m-auto py-[15px]'>
            <nav>
                <ul className='flex gap-[15px] justify-center'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href={"/cart"}>Cart</Link></li>
                </ul>
            </nav>
            <div className='mx-auto w-fit mt-[30px]'>
                {/* <Image src="https://placehold.co/150x150" width={150} height = {150} alt="logo" /> */}
                <img src="https://placehold.co/60x60" alt="" />
            </div>
        </div>
    </div>
  )
}
