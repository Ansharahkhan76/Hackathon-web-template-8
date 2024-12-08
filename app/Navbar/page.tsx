"use client";

import { useState } from "react";
import { Check } from "lucide-react"
import { Info } from "lucide-react"
import { Armchair } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>

        {/* purple line */}

        <div className="flex bg-[#272343] justify-between  w-full py-4 md:px-24">
            <div className="flex text-white"><Check size={32} strokeWidth={1.5} /><p>Free shipping on all orders over $50</p></div>

            <div className=" text-white gap-5 flex">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            className="text-white bg-transparent  py-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}>
            English ▲
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 text-black bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">English</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Spanish</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">French</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">German</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Italian</li>
              </ul>
            </div>
          )}
        </div>
         <Link href="/FAQ"> <p className="py-2 font-semibold">Faqs</p></Link>
                <Link href="/Contact"><div className="md:flex py-2 hidden sm:block  gap-2"><Info size={32} strokeWidth={1.5} /><p>Need Help</p></div></Link>
            </div>
        </div>

        {/* Comforty Nav start */}

        <div className="bg-[#F0F2F3] sm:justify-between w-full py-4">
  <div className="py-1 sm:px-8 sm:justify-between md:px-24 flex flex-wrap justify-between items-center">
    {/* logo */}
    <div className="flex gap-3 pt-4">
      <Armchair className="text-[#029FAE]" size={36} strokeWidth={2.25} />
      <p className="text-black text-2xl hover:font-semibold font-medium">Comforty</p>
    </div>

    <Link href="/Cart">
      <div className="flex bg-white py-3 md:px-5 gap-4 items-center">
        <ShoppingCart size={36} strokeWidth={1.25} />
        <p className="py-2 hidden sm:block">Cart</p>
        <div className="bg-[#029fae] rounded-full py-2 px-4 text-white">
          <p>2</p>
        </div>
      </div>
    </Link>
  </div>
</div>
        
        {/* second navbar */}


        <div className="md:px-24 py-5 border-b-2 border-slate-600 justify-between flex">
            <div className="flex sm:px-5 gap-7">
            <Link href="/"><p className="text-[#029fae]">Home</p></Link>
            <Link href="/SingleProduct"><p className="hover:text-[#029fae]">Shop</p></Link>
          <Link href="/Products">  <p className="hover:text-[#029fae]">Product</p></Link>
            <Link href="/Contact"><p className="hover:text-[#029fae]">Contact</p></Link>
            <Link href="/About"><p className="hover:text-[#029fae]">About</p></Link>
            </div>

            <p className="hidden sm:block">Contact : 03123456789</p>
        </div>




        </>
    )

}