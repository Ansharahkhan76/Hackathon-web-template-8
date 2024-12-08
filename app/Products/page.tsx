import Navbar from "../Navbar/page";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Footer from "../Footer/page";


export default function Products(){
    return(
        <>
        <Navbar />
        <div>
      <p className="text-3xl px-24 font-semibold py-12">All Products</p></div>

      <div className="pt-12 pb-20 md:px-24 sm:px-10 flex flex-wrap justify-center md:justify-between gap-6">
  {/* First Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-1.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Second Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-7.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Third Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-6.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Fourth Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-5.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>
</div> 


{/* Second Row */}

<div className="pt-12 pb-20 md:px-24 sm:px-10 flex flex-wrap justify-center md:justify-between gap-6">
  {/* First Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-7.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Second Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-4.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Third Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-5.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Fourth Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-1.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>
</div> 


{/* third Row */}

<div className="pt-12 pb-20 md:px-24 sm:px-10 flex flex-wrap justify-center md:justify-between gap-6">
  {/* First Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-1.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Second Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-6.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Third Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-7.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>

  {/* Fourth Card */}
  <div className="h-[350px] w-[280px] border-b-2 border-slate-600 ">
    <div className="h-[320px] w-full">
        <Image alt="Chair"
        src="/c-4.jpg"
        height={300}
        width={300}></Image>
         <div className="flex pt-12 pb-4 justify-between px-2"><div><p>Library Stool Chair</p>
         <div><p className="font-semibold text-base">$20</p></div></div>
         <div className="bg-[#029fae] rounded-xl py-2 px-3"><ShoppingCart size={36} strokeWidth={1.25} /></div></div>
         
    </div>
  </div>
</div> 

<div className="h-auto py-8 px-6 md:px-24">
      <div className="w-full h-full px-6 md:px-24 justify-center py-12 bg-[#F0F2F3]">
        {/* Header Text for Newsletter Subscription */}
        <p className="font-semibold text-2xl sm:text-3xl text-center">
          To Subscribe to the Newsletter
        </p>
        
        {/* Input Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center py-6">
          <input
            type="email"
            placeholder="Email Address..."
            className="bg-transparent border-b-2 border-slate-800 py-4 pr-20 w-full sm:w-2/3"
          />
          <button className="font-medium border-b-2 border-slate-800 w-full sm:w-auto py-4 mt-4 sm:mt-0">
            SUBMIT
          </button>
        </div>

        {/* Follow Product Section */}
        <p className="font-semibold text-2xl sm:text-3xl text-center py-8">
          Follow Product And Get Discount On Instagram
        </p>

        {/* Images of Chairs */}
        <div className="py-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-between">
            <div className="w-full sm:w-[170px] h-36 hover:bg-[#F0F2F3] py-4 flex flex-col items-center justify-center text-center">
              <Image
                src="/c-1.jpg"
                width={100}
                alt="Zapier"
                height={100}
                className="bg-cover h-full w-full"
              />
            </div>

            <div className="w-full sm:w-[170px] h-36 py-4 hover:bg-[#F0F2F3] flex flex-col items-center justify-center text-center">
              <Image
                src="/heroC-2.jpg"
                width={100}
                alt="PipeDrive/png"
                height={100}
                className="bg-cover h-full w-full"
              />
            </div>

            <div className="w-full sm:w-[170px] h-36 py-4 hover:bg-[#F0F2F3] flex flex-col items-center justify-center text-center">
              <Image
                src="/c-4.jpg"
                width={100}
                alt="CIB Bank"
                height={100}
                className="bg-cover h-full w-full"
              />
            </div>

            <div className="w-full sm:w-[170px] h-36 py-4 hover:bg-[#F0F2F3] flex flex-col items-center justify-center text-center">
              <Image
                src="/c-5.jpg"
                width={100}
                alt="Z"
                height={100}
                className="bg-cover h-full w-full"
              />
            </div>

            <div className="w-full sm:w-[170px] h-36 py-4 hover:bg-[#F0F2F3] flex flex-col items-center justify-center text-center">
              <Image
                src="/c-6.jpg"
                width={100}
                alt="Burnt Toast"
                height={100}
                className="bg-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

<Footer />
        </>
    )
}