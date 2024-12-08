import { Heart } from "lucide-react"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import Footer from "../Footer/page"
import Navbar from "../Navbar/page"

export default function Cart(){
    return(
        <>
        <Navbar />
        <div className="py-12 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">

        {/* Left Section - Product List */}
        <div className="space-y-8 sm:space-y-0 w-full sm:w-[900px]">

          {/* Product Card 1 */}
          <div className="flex sm:justify-between px-12 py-6 border-b-2 border-[#029fae]">
            <div className="flex w-full sm:w-[350px]">
              <Image 
                src="/c-5.jpg"
                alt="Chair"
                className="bg-cover w-[150px] h-[150px]"
                width={150}
                height={150}
              />
              <div className="pl-5">
                <p className="text-base py-4">Library Stool Chair</p>
                <p>Ashin State / Cobalt</p>
                <div className="flex justify-between text-slate-700">
                  <p>Size : L </p>
                  <p>Q : 1</p>
                </div>
                <div className="flex pt-4 gap-6">
                  <Trash2 size={32} strokeWidth={1.5} />
                  <Heart size={32} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="sm:flex sm:items-center">MRP : $99</div>
          </div>

          {/* Product Card 2 */}
          <div className="flex sm:justify-between px-12 py-6 border-b-2 border-[#029fae]">
            <div className="flex w-full sm:w-[350px]">
              <Image 
                src="/heroC-1.jpg"
                alt="Chair"
                className="bg-cover w-[150px] h-[150px]"
                width={150}
                height={150}
              />
              <div className="pl-5">
                <p className="text-base py-4">Library Stool Chair</p>
                <p>Ashin State / Cobalt</p>
                <div className="flex justify-between text-slate-700">
                  <p>Size : L </p>
                  <p>Q : 1</p>
                </div>
                <div className="flex pt-4 gap-6">
                  <Trash2 size={32} strokeWidth={1.5} />
                  <Heart size={32} strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="sm:flex sm:items-center">MRP : $99</div>
          </div>

        </div>

        {/* Right Section - Summary */}
        <div className="w-full sm:w-[370px]">
          <p className="text-2xl font-semibold">Summary</p>
          <div className="flex py-4 justify-between">
            <p>Subtotal</p>
            <p>$198.00</p>
          </div>
          <div className="flex border-b-2 border-[#029fae] py-4 justify-between">
            <p>Estimate Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex border-b-2 border-[#029fae] py-4 justify-between">
            <p>Total</p>
            <p>$198.00</p>
          </div>

          <div className="py-12 text-center">
            <button className="bg-[#029fae] text-xl text-white py-4 px-7 rounded-xl font-semibold w-full sm:w-auto">
              Member CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
            <Footer />
            </>
    )
}