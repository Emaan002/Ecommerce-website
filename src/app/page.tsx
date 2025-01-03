'use client'
import ProductCard from "./components/ProductCard";
import { products } from "@/data/products";
import Hero from "./components/Hero";
import localFont from "next/font/local";

const fontTwo = localFont({
    src: "../fonts/qinferly-personal-use.regular.ttf"
  });


export default function Home() {
  return (
    <>
    <Hero/>
    <main className="p-6">
    <h1 className={`${fontTwo.className} md:text-6xl text-4xl text-center font-bold mt-6 mb-6`}>The Comprehensive Collection</h1>
    <div className="border-t-2 border border-[#B26F31] my-3 w-40 mx-auto text-center"/>

    <div className="px-20 hover:border-[#B26F31] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </main>
  </>
  );
}
