"use client";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart , FaSearch } from "react-icons/fa"; 
// import Hero from "./Hero";

export default function Navbar() {

  return (
    <>
      <div className="flex justify-between bg-gray-100 p-4 md:flex md:justify-around items-center">
        <div className="hidden md:flex items-center border border-gray-300 rounded">
          <div className="p-2">
            <FaSearch/>
          </div>
          <input
            type="text"
            placeholder="Search Products Here....."
            className="p-2 outline-none"
          />
        </div>
        <div className="text-center">
          <Image src={"/images/logo.jpg"} alt="" width={150} height={150}/>
        </div>
        <div className="">
          <Link href="/cart">
            <FaShoppingCart className="h-8 w-8 mt-4 " />
          </Link>
        </div>
      </div>
    </>
  );
}
