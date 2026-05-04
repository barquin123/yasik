import ContactUs from "@/src/components/ContactUs";
import HeroSection from "@/src/components/HeroSection";
import Products from "@/src/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh]">
      <HeroSection/>
      <Products/>
      <ContactUs/>
    </div>
  );
}
