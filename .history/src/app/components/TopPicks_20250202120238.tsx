
import Image from "next/image";
import Link from "next/link";
import React from "react";

// interface TopPick {
//   name: string;
//   image: string;
//   price: number;
//   text: string;
// }

// const topPicksData: TopPick[] = [
//   {
//     name: "Trenton modular sofa_3",
//     image: "/topPics/Trenton modular sofa.png",
//     price: 25000.0,
//     text: "mt-8 mb-4 text-start",
//   },
//   {
//     name: "Granite dining table with dining chair",
//     image: "/topPics/Granite dining table.png",
//     price: 25000.0,
//     text: "mt-20",
//   },
//   {
//     name: "Outdoor bar table and stool",
//     image: "/topPics/Outdoor bar table.png",
//     price: 25000.0,
//     text: "mt-7",
//   },
//   {
//     name: "Plain console with teak mirror",
//     image: "/topPics/Plain console.png",
//     price: 25000.0,
//     text: "mt-20",
//   },
// ];

const TopPicks: React.FC = () => {
  const formatPrice = (price: number): string => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16 select-none">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="font-medium text-2xl md:text-4xl lg:text-5xl font-[poppins]">
          Top Picks For You
        </h1>
        <p className="text-gray-400 text-sm md:text-base font-medium font-[poppins] mt-4">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor, and table light
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {topPicksData.map((pick, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-4"
          >
            <div className="aspect-square relative overflow-hidden rounded-md mb-4">
              <Image
                src={pick.image}
                alt={pick.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 2}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-[poppins] line-clamp-2">
                {pick.name}
              </h3>
              <p className="text-base md:text-lg font-medium font-[poppins] text-right">
                {formatPrice(pick.price)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 md:mt-16">
        <Link
          href="/"
          className="inline-block font-medium font-[poppins] text-lg md:text-xl border-b-2 border-black pb-2 hover:border-gray-600 transition-colors duration-300"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default TopPicks;