import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrivals = () => {
  return (
    <section className="relative flex flex-col md:flex-row justify-center md:justify-end items-center min-h-screen -4 sm:px-8 py-16 bg-[#FFF9E5]">
      {/* Left Image */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center">
        <Image
          src={"/topPics/Asgaard sofa.png"}
          alt="Asgaard sofa"
          width={600}
          height={500}
          className="w-full  max-w-[500px] object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="relative px-4 sm:px-8 md:px-16 mt-52 md:mt-0 text-center md:text-left z-10 md:w-1/2">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium font-[poppins]">
          New Arrivals
        </h3>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-[poppins]">
          Asgaard Sofa
        </h1>
        <button className="border-[1.5px] border-black  font-[poppins] ">
          <Link href="/">Order Now</Link>
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
