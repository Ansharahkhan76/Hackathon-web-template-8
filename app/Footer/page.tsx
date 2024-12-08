
import { Armchair } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="pt-12 w-full">
        <div className="bg-[#F0F2F3] w-full flex flex-col md:flex-row justify-between px-6 md:px-24 py-12">

          {/* Footer div 1 start */}
          <div className="w-full md:w-[320px] py-6 md:py-12">
            <div className="flex py-4 gap-3 pt-4">
              <Armchair className="text-[#029FAE]" size={36} strokeWidth={2.25} />
              <p className="text-black text-2xl hover:font-semibold font-medium">Comforty</p>
            </div>
            <p className="w-full md:w-48">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.</p>

            {/* Social Links Section */}
            <div className="py-2 text-white">
              <div className="flex gap-3 pt-6">
                <div className="rounded-full bg-white">
                  <Link href="https://github.com/Ansharahkhan76">
                    <Image alt="Github" height={40} width={40} src="/github.png" className="rounded-full" />
                  </Link>
                </div>

                <div className="rounded-full bg-white">
                  <Link href="https://www.linkedin.com/in/ansharah-khan-25a8162b7">
                    <Image alt="LinkedIn" height={40} width={40} src="/linkedin.webp" className="rounded-sm" />
                  </Link>
                </div>

                <div className="rounded-full bg-white">
                  <Link href="mailto:anshrahkhan29@gmail.com">
                    <Image alt="Email" height={40} width={40} src="/email.jpg" className="rounded-full filter" />
                  </Link>
                </div>

                <div className="rounded-full bg-white">
                  <Link href="https://www.instagram.com/_ansharah.khan_">
                    <Image alt="Instagram" height={40} width={40} src="/insta.png" className="rounded-full filter" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Footer div 1 end */}

          {/* Footer div 2 start */}
          <div className="w-full md:w-[320px] py-6 md:py-12">
            <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">CATEGORY</p>
            <div className="py-4 text-black gap-3">
              <p className="pt-2">Sofa</p>
              <p className="pt-2">ArmChair</p>
              <p className="pt-2">WingChair</p>
              <p className="text-[#029fae] pt-2">Desk Chair</p>
              <p className="pt-2">Wooden Chair</p>
              <p className="pt-2">Pak Bench</p>
            </div>
          </div>
          {/* Footer div 2 end */}

          {/* Footer div 3 start */}
          <div className="w-full md:w-[320px] py-6 md:py-12">
            <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">Support</p>
            <div className="py-4 text-black gap-3">
              <p className="pt-2">Help & Support</p>
              <p className="pt-2">Terms & Conditions</p>
              <p className="pt-2">Privacy Policy</p>
              <p className="pt-2">Help</p>
            </div>
          </div>
          {/* Footer div 3 end */}

          {/* Footer div 4 start */}
          <div className="w-full md:w-[320px] py-6 md:py-12">
            <p className="text-slate-700 border-b-2 border-[#029fae] w-32 py-2 text-xl">Newsletter</p>
            <div className="flex gap-6 justify-center py-6">
              <input type="email" placeholder="Email Address..." className="bg-transparent border-b-2 border-[#029fae] py-4 pr-20" />
              <button className="font-medium border-b-2 border-[#029fae]">SUBMIT</button>
            </div>
            <p className="mr-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero perferendis at, repellendus explicabo similique nam?</p>
          </div>
          {/* Footer div 4 end */}

        </div>

        <hr className="text-[#029fae]" />
        <p className="text-center py-6">Hackathon Done By Ansharah Khan</p>
      </div>
    </>
  );
}