"use client";

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"


export default function HeroPage(){
    return(
        <>
        <div className="px-6 md:px-24 py-12">
  <div className="bg-[#F0F2F3] w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:h-[600px]">
    
    {/* Left section */}
    <div className="py-12 px-4 md:py-24 md:px-12 w-full md:w-[450px]">
      <p className="text-base">Welcome to my Chairy</p>
      <p className="text-4xl md:text-5xl pt-4 pb-6 font-semibold">Best Furniture Collection for your interior.</p>
      
      <button className="bg-[#029fae] text-white font-medium py-3 px-7 flex gap-3 items-center rounded-xl">
        Shop Now
        <ArrowRight size={36} strokeWidth={1.25} />
      </button>
    </div>
    
    {/* Right section */}
    <div className="w-full md:w-[400px]">
      <Image src="/herochair.png" alt="Chair" height={400} width={400} className="mx-auto" />
    </div>
  </div>
</div>
                
                <div>

                <div className="px-16 md:px-24">
    <div className="flex flex-wrap justify-center gap-4 md:justify-between">
        <div className="w-full sm:w-[170px] h-36 hover:bg-[#F0F2F3]  py-4 flex flex-col items-center justify-center text-center">
            <Image src="/zapierLogo.png"
            width={100}
            alt="Zapier"
            height={100}></Image>
        </div>
        
        <div className="w-full  sm:w-[170px] h-36  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
        <Image src="/pipLogo.png"
            width={100}
            alt="PipeDrive/png"
            height={100}></Image>
        </div>

        <div className="w-full sm:w-[170px] h-36   py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/cibLogo.png"
            width={100}
            alt="CIB Bank"
            height={100}></Image>
        </div>

        <div className="w-full sm:w-[170px] h-36  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/zLogo.png"
            width={100}
            alt="Z"
            height={100}></Image>
        </div>

        <div className="w-full sm:w-[170px] h-36  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
           
        <Image src="/burntLogo.png"
            width={100}
            alt="Burnt Toast"
            height={100}></Image>
        </div>

        <div className="w-full sm:w-[170px] h-36 py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/mozLogo.png"
            width={100}
            alt="MOZ"
            height={100}></Image>
        </div>
    </div>
</div>
      </div>


      {/* featured products */}
            <div>
      <p className="text-3xl px-24 font-semibold py-12">Featured Products</p></div>

      <div className="pt-12 pb-20 md:px-24 sm:px-10 flex flex-wrap justify-center md:justify-between gap-6">
  {/* First Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
       <Link href="/SingleProduct">
       <Image alt="Chair"
        src="/c-1.jpg"
        height={300}
        width={300}></Image></Link>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Second Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Link href="SingleProduct"><Image alt="Chair"
        src="/c-6.jpg"
        height={300}
        width={300}></Image></Link>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Third Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
       <Link href="SingleProduct"> <Image alt="Chair"
        src="/c-5.jpg"
        height={300}
        width={300}></Image></Link>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Fourth Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Link href="SingleProduct"><Image alt="Chair"
        src="/c-4.jpg"
        height={300}
        width={300}></Image></Link>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>
</div> 

<div>
      <p className="text-3xl px-24 font-semibold py-12">Top Catogeries</p></div>

{/* 3 hero Cards */}
<div className="px-6 py-8 flex flex-col md:flex-row justify-between gap-8">
    
  {/* Card 1 */}
  <div className="relative max-w-sm mx-auto overflow-hidden shadow-slate-50 rounded-lg shadow-lg">
    <img src="/heroC-1.jpg" alt="Wing Chair" className="w-full h-auto" />
    <div className="absolute bottom-4 right-4 bg-black text-white p-4">
      <h4 className="text-lg font-semibold">Wing Chair</h4>
      <p>2,934 Products</p>
    </div>
  </div>
  
  {/* Card 2 */}
  <div className="relative max-w-sm mx-auto overflow-hidden shadow-slate-50 rounded-lg shadow-lg">
    <img src="/heroC-2.jpg" alt="Wooden Chair" className="w-full h-auto" />
    <div className="absolute bottom-4 right-4 bg-black text-white p-4">
      <h4 className="text-lg font-semibold">Wooden Chair</h4>
      <p>3,500 Products</p>
    </div>
  </div>
  
  {/* Card 3 */}
  <div className="relative max-w-sm mx-auto overflow-hidden shadow-slate-500 rounded-lg shadow-lg">
    <img src="/heroC-3.png" alt="Desk Chair" className="w-full h-auto" />
    <div className="absolute bottom-4 right-4 bg-black text-white p-4">
      <h4 className="text-lg font-semibold">Desk Chair</h4>
      <p>279 Products</p>
    </div>
  </div>

</div>


<hr />

{/* 5 Imges Cover */}


<div className="md:flex  md:flex-row md:justify-between px-6 md:px-24 py-12 w-full">

  {/* Large Image Section */}
  <div className="bg-slate-400 w-full sm:mb-10 md:w-[650px] h-[300px] md:h-[550px]">
    <Image
      alt="Orange Chair"
      src="/c-5.jpg"
      height={630}
      width={650}
      className="bg-cover h-full w-full"
    />
  </div>

  {/* Small Images Section */}
  <div className="space-y-3 w-full md:w-[650px]">

    {/* First Row of Small Images */}
    <div className="flex md:flex-row justify-between h-[300px] md:h-[265px] w-full gap-3">
      <div className="w-full md:w-[310px] h-full bg-yellow-500">
        <Image
          alt="Orange Chair"
          src="/c-4.jpg"
          height={630}
          width={650}
          className="bg-cover h-full w-full"
        />
      </div>
      <div className="w-full md:w-[310px] h-full bg-yellow-500">
        <Image
          alt="Orange Chair"
          src="/c-1.jpg"
          height={630}
          width={650}
          className="bg-cover h-full w-full"
        />
      </div>
    </div>

    {/* Second Row of Small Images */}
    <div className="flex md:flex-row justify-between h-[300px] md:h-[260px] w-full gap-3">
      <div className="w-full md:w-[310px] h-full">
        <Image
          alt="Orange Chair"
          src="/c-6.jpg"
          height={630}
          width={650}
          className="bg-cover h-full w-full"
        />
      </div>
      <div className="w-full md:w-[310px] h-full">
        <Image
          alt="Orange Chair"
          src="/c-4.jpg"
          height={630}
          width={650}
          className="bg-cover h-full w-full"
        />
      </div>
    </div>

  </div>

</div>

    {/* Second Row Cards */}
    <div className="pt-20 pb-20 md:px-24 sm:px-10 flex flex-wrap justify-center md:justify-between gap-6">
  {/* First Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600">
    <div className="h-[320px] w-full">
      <Image
        alt="Chair"
        src="/c-7.jpg"
        height={300}
        width={300}
        className="bg-cover"
      />
      <div className="flex pt-12 pb-4 justify-between px-2">
        <div>
          <p>Library Stool Chair</p>
          <div><p className="font-semibold text-base">$20</p></div>
        </div>
        <div className="bg-[#029fae] rounded-xl py-2 px-3">
          <ShoppingCart size={36} strokeWidth={1.25} />
        </div>
      </div>
    </div>
  </div>

  {/* Second Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600">
    <div className="h-[320px] w-full">
      <Image
        alt="Chair"
        src="/c-4.jpg"
        height={300}
        width={300}
        className="bg-cover"
      />
      <div className="flex pt-12 pb-4 justify-between px-2">
        <div>
          <p>Library Stool Chair</p>
          <div><p className="font-semibold text-base">$20</p></div>
        </div>
        <div className="bg-[#029fae] rounded-xl py-2 px-3">
          <ShoppingCart size={36} strokeWidth={1.25} />
        </div>
      </div>
    </div>
  </div>

  {/* Third Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600">
    <div className="h-[320px] w-full">
      <Image
        alt="Chair"
        src="/c-5.jpg"
        height={300}
        width={300}
        className="bg-cover"
      />
      <div className="flex pt-12 pb-4 justify-between px-2">
        <div>
          <p>Library Stool Chair</p>
          <div><p className="font-semibold text-base">$20</p></div>
        </div>
        <div className="bg-[#029fae] rounded-xl py-2 px-3">
          <ShoppingCart size={36} strokeWidth={1.25} />
        </div>
      </div>
    </div>
  </div>

  {/* Fourth Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600">
    <div className="h-[320px] w-full">
      <Image
        alt="Chair"
        src="/c-1.jpg"
        height={300}
        width={300}
        className="bg-cover"
      />
      <div className="flex pt-12 pb-4 justify-between px-2">
        <div>
          <p>Library Stool Chair</p>
          <div><p className="font-semibold text-base">$20</p></div>
        </div>
        <div className="bg-[#029fae] rounded-xl py-2 px-3">
          <ShoppingCart size={36} strokeWidth={1.25} />
        </div>
      </div>
    </div>
  </div>
</div>
                </>
    )
}