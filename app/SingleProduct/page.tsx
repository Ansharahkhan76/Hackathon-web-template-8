import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Footer from "../Footer/page"
import Navbar from "../Navbar/page"


export default function SingleProductPage(){
    return(
        <>
        <Navbar />


<div className="px-6 md:px-24 py-12 flex flex-col md:flex-row justify-between space-y-12 md:space-y-0">
      {/* Image Section */}
      <div className="h-[300px] md:h-full w-full md:w-[620px]">
        <Image
          src="/c-6.jpg"
          alt="Chair"
          className="bg-cover h-full w-full"
          height={600}
          width={620}
        />
      </div>

      {/* Product Details Section */}
      <div className="h-full w-full md:w-[620px]">
        <p className="font-semibold text-3xl md:text-5xl">Library Stool Chair</p>

        <div className="py-6 border-b-2 border-[#029fae]">
          <button className="bg-[#029fae] text-white text-base py-3 px-6 rounded-3xl">
            $20.00 USD
          </button>
        </div>

        <p className="pt-4 w-full md:w-[550px] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, dolorum saepe? Architecto sint illum ad
          aliquid voluptates officia earum? Et?
        </p>

        <div className="py-6 flex border-b-2 border-[#029fae]">
          <button className="bg-[#029fae] text-white flex text-base py-3 px-8 gap-4 rounded-xl">
            <ShoppingCart size={32} strokeWidth={1.5} />
            Cart
          </button>
        </div>
      </div>
    </div>

            <div className="py-12 justify-between flex px-24">
                <p className="font-semibold">Featured Product</p>
                <button className="border-b-2 border-[#029fae]">View All</button>
            </div>
{/* 5 cards pics */}
            <div className="px-24 py-12">
    <div className="flex flex-wrap justify-center gap-4 md:justify-between">
        <div className="w-full sm:w-[170px] h-36 hover:bg-[#F0F2F3]  py-4 flex flex-col items-center justify-center text-center">
            <Image src="/c-1.jpg"
            width={100}
            alt="Zapier"
            height={100}
            className="bg-cover h-full w-full"></Image>
            <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="w-full sm:w-[170px] h-36   py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/c-4.jpg"
            width={100}
            alt="CIB Bank"
            height={100}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="w-full sm:w-[170px] h-36  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/c-5.jpg"
            width={100}
            alt="Z"
            height={100}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="w-full sm:w-[170px] h-36  py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
           
        <Image src="/c-6.jpg"
            width={100}
            alt="Burnt Toast"
            height={100}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>

        <div className="w-full sm:w-[170px] h-36 py-4 hover:bg-[#F0F2F3]  flex flex-col items-center justify-center text-center">
            
        <Image src="/c-7.jpg"
            width={100}
            alt="MOZ"
            height={100}
            className="bg-cover h-full w-full"></Image>
             <div className="">
                <p className="text-sm">Library Stool Chair</p>
                <p>$99.00</p>
            </div>
        </div>
    </div>
</div>

<Footer />
            </>
    )
}