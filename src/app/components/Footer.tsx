import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-between">
                            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                                <div className="text-4xl font-bold mb-4">SWAG<span className="text-gray-400">ZE</span></div>
                                <div className="flex space-x-4">
                                <FaGithub />
                                <FaLinkedin />
                                <BsTelephoneFill />
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                                <h3 className="text-xl font-semibold mb-4">Featured Categories</h3>
                                <ul>
                                    <li className="mb-2"><a href="#" className="hover:text-##B26F31]">Women T-Shirts</a></li>
                                    <li className="mb-2"><a href="#" className="text-[#B26F31]">Casual Combo</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Bottom Wear</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Simple T-Shirts</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Sweatshirts</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Hoodies</a></li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                                <h3 className="text-xl font-semibold mb-4">Other Categories</h3>
                                <ul>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Men&apos;s Shorts</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Crop & Tank Top</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Drop Shoulder Tee</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Unisex</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Deal Bundle</a></li>
                                    <li className="mb-2"><a href="#" className="hover:text-[#B26F31]">Co Ord Tracksuit</a></li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/4">
                                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                                <ul>
                                    <li className="mb-2 flex items-center"><i className="fas fa-phone-alt mr-2 text-[#B26F31]"></i> +92 301-2540472</li>
                                    <li className="mb-2 flex items-center"><i className="fas fa-envelope mr-2 text-[#B26F31]"></i> hafsaahmed697@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900 py-4 mt-10">
                        <div className="container mx-auto px-4 text-center text-sm">
                            <p>Copyright © 2025 SWAGZE | All Rights Reserved.</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href="#" className="hover:text-[#B26F31]">Privacy Policy</a>
                                <a href="#" className="hover:text-[#B26F31]">Terms & Conditions</a>
                                <a href="#" className="hover:text-[#B26F31]">Refund Policy</a>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        }

export default Footer