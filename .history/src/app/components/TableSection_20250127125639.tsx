import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCard {
  id: string;
  title: string;
  image: string;
  slug: string;
}

const products: ProductCard[] = [
  {
    id: "side-table",
    title: "Side Table",
    image: "/sideTable/side table.png",
    slug: "/products/side-table",
  },
  {
    id: "cloud-sofa",
    title: "Cloud Sofa",
    image: "/sideTable/Cloud sofa.png",
    slug: "/products/cloud-sofa",
  },
];

const ProductDisplay: React.FC<{ product: ProductCard }> = ({ product }) => {
  return (
    <div className="group flex flex-col items-center lg:items-start w-full max-w-lg mx-auto">
      <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          priority
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="mt-6 text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium font-[poppins] text-gray-900">
          {product.title}
        </h2>
        
        <Link 
          href={product.slug}
          className="inline-flex items-center mt-3 text-base sm:text-lg font-medium font-[poppins] text-gray-900 group-hover:text-gray-600 transition-colors duration-300"
        >
          <span className="border-b-2 border-current pb-1">View More</span>
          <svg 
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const TableSection: React.FC = () => {
  return (
    <section 
      className="bg-[#F4F4F4] py-16 px-4 sm:px-6 lg:px-8" 
      aria-label="Featured Products"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <ProductDisplay key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableSection;