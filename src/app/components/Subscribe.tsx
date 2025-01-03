import localFont from 'next/font/local';
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaRegEnvelopeOpen } from "react-icons/fa6";

const fontOne = localFont({
    src: "../../fonts/kugile.regular.ttf"
  });



function Subscribe() {
  return (
    <>
   <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center opacity-70 flex items-center justify-center h-[60vh]">
    <div id="root" className="w-full max-w-2xl p-6 rounded-lg text-center">
        <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full">
                {/* <i className="fas fa-envelope text-3xl text-black"></i */}
                <FaRegEnvelopeOpen />
            </div>
        </div>
        <h1 className={`${fontOne.className} text-3xl font-bold text-white mb-2`}>Stay up to date with Swagze?</h1>
        <p className={`${fontOne.className } text-white font-semibold  mb-6`}>Subscribe to our newsletter for the latest updates exclusive offers and insider information on all things Swagze. Don&apos;t miss out - join our community today</p>
        <div className="flex justify-center">
            <input type="email" placeholder="someone@example.com" className="p-3 rounded-l-full w-2/3 md:w-1/2 focus:outline-none"/>
            <button className="bg-black text-white p-3 rounded-r-full flex items-center justify-center">
                <span className="mr-2">Subscribe</span>
                {/* <i className="fas fa-arrow-right"></i> */}
                <FaArrowCircleRight />

            </button>
        </div>
    </div> 
</div>


    </>
  )
}

export default Subscribe