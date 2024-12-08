import Image from "next/image"
import Navbar from "../Navbar/page"
import { HeartHandshake, ShoppingCart, TreePalm, Trophy, Waves } from "lucide-react"
import Link from "next/link"
import Footer from "../Footer/page"

export default function AboutUs(){
    return(
        <>
        <Navbar />
        <div className="py-12">
      <div className="px-6 sm:px-12 lg:px-24 flex flex-col sm:flex-row py-12 justify-between h-auto sm:h-[600px]">
        {/* Text Section */}
        <div className="h-full bg-[#029fae] py-12 rounded-lg px-8 w-full sm:w-[620px]">
          <p className="font-semibold text-3xl sm:text-5xl">About Us - Comforty</p>

          <p className="pt-4 pb-4 border-b-2 border-black w-full sm:w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis similique eaque a soluta eius cumque
            quas minus, voluptatibus in rerum reiciendis, atque perferendis. Eligendi neque blanditiis praesentium, officia
            quisquam repellat sint vero aut debitis quidem impedit nihil nemo tenetur.
          </p>

          <div className="pt-6 sm:pt-24 pb-6 sm:pb-12">
            <Link href="/Products">
              <button className="bg-white text-black flex text-base py-3 px-8 gap-4 rounded-xl">
                <ShoppingCart size={32} strokeWidth={1.5} />
                View Collection
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="h-full w-full sm:w-[620px] mt-6 sm:mt-0">
          <Image
            src="/c-1.jpg"
            alt="Chair"
            className="bg-cover h-full w-full"
            height={600}
            width={620}
          />
        </div>
      </div>
    </div>

        <div className="text-center py-12 px-24">
            <p className="text-2xl font-semibold">What Makes Our Brand Diffrent</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="px-6 sm:px-12 lg:px-24">
      <div className="bg-[#F0F2F3] flex flex-col sm:flex-row justify-between px-6 sm:px-12 py-12 space-y-8 sm:space-y-0">
        
        {/* Feature 1 */}
        <div className="flex gap-4 sm:gap-6 items-start sm:items-center">
          <div>
            <Trophy size={44} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-black font-semibold">Next Day as Standard</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sit?</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-4 sm:gap-6 items-start sm:items-center">
          <div>
            <Waves size={44} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-black font-semibold">Made by True Artisans</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, error.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-4 sm:gap-6 items-start sm:items-center">
          <div>
            <HeartHandshake size={44} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-black font-semibold">24 / 7 Support</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, atque?</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex gap-4 sm:gap-6 items-start sm:items-center">
          <div>
            <TreePalm size={44} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-black font-semibold">Unstable Price</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, natus.</p>
          </div>
        </div>

      </div>
    </div>

      <div className=" py-12 md:px-24">
            <p className="text-2xl sm:text-center font-semibold">Our Popular Products</p>
            </div>

            <div className="px-6 sm:px-12 lg:px-24">
      <div className="h-auto flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0">

        {/* First Product */}
        <div className="w-full sm:w-[630px] h-full border-b-2 border-[#029fae]">
          <div className="h-[400px]">
            <Image
              alt="Sofa"
              src="/abSofa-1.jpg"
              height={400}
              width={630}
              className="bg-cover h-full w-full"
            />
          </div>
          <div className="py-2 px-3">
            <p>The Popular Suite Sofa</p>
            <p>$58.00</p>
          </div>
        </div>

        {/* Second and Third Product */}
        <div className="w-full sm:w-[630px] flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-8">

          {/* Second Product */}
          <div className="h-full sm:w-[310px] border-b-2 border-[#029fae]">
            <div className="h-[400px]">
              <Image
                className="bg-cover h-full w-full"
                alt="Chair"
                width={310}
                height={400}
                src="/abSofa-2.jpg"
              />
            </div>
            <div className="px-3">
              <p>The Office Chair</p>
              <p>$58.00</p>
            </div>
          </div>

          {/* Third Product */}
          <div className="h-full sm:w-[310px] border-b-2 border-[#029fae]">
            <div className="h-[400px]">
              <Image
                className="bg-cover h-full w-full"
                alt="Chair"
                width={310}
                height={400}
                src="/abSofa-3.jpg"
              />
            </div>
            <div className="px-3">
              <p>The Dandy Chair</p>
              <p>$58.00</p>
            </div>
          </div>

        </div>
      </div>
    </div>


        <Footer />
        </>
    )
}


