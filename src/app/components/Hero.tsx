import { useState, useEffect } from 'react';
import '../globals.css' ;
import localFont from "next/font/local";



const fontOne = localFont({
    src: "../../fonts/kugile.regular.ttf"
  });

const images = [
  '/images/hoodie1.jpg', 
  '/images/jacket1.jpg',
  '/images/hoodie2.jpg',
  '/images/jacket2.jpg',
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="text-white px-10 md:px-20">
          <h1 className={`${fontOne.className} text-4xl md:text-6xl font-bold font-mono`}>Stylish Hoodies & Jackets</h1>
          <p className={`${fontOne.className} text-lg md:text-2xl mt-4`}>
            Discover the perfect blend of comfort and style. Shop now!
          </p>
          <button className={`${fontOne.className} mt-6 px-6 py-3 bg-[#B26F31] hover:bg-[#a66c37] text-white font-semibold rounded-md`}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
// function localFont removed to resolve conflict with import statement

