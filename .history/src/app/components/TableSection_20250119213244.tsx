import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableSection = () => {
  return (
    <section className="w-full h-[670px] max-[770px]:h-auto max-[770px]:flex-col bg-[#FAF4F4] flex justify-center items-center">
      <div className="w-[605px] h-[560px] m-1 max-[770px]:w-full max-[770px]:h-auto">
      <div className="w-full h-[400px] max-[770px]:h-auto">
        <Image
          src="/sideTable/side table.png"
          alt="side table"
          width={950}
          height={950}
          layout="responsive"
          objectFit="cover"
          className="w-full h-auto lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="text-[36px] font-[500] ml-[5rem] max-[770px]:ml-[2rem] max-[560px]:text-[25px] max-[560px]:font-[600]">
          Side Table
        </h3>
        <button className="mt-2">
          <Link href="/" className="text-[20px] max-[560px]:text-[16px] underline mt-5 font-[500] ml-[5rem] max-[770px]:ml-[2rem]">
            View More
          </Link>
        </button>
      </div>

      <div className="flex flex-col items-center lg:items-start mt-4 w-full lg:w-1/2">
        <Image
          src="/sideTable/Cloud sofa.png"
          alt="cloud sofa"
          width={650}
          height={550}
          layout="responsive"
          objectFit="cover"
          className="w-full h-auto lg:w-[450px] lg:h-[450px]"
        />
        <h3 className="font-medium text-[4vw] lg:text-[2vw] font-[poppins] text-center lg:text-left mt-4">
          Cloud Sofa
        </h3>
        <button className="mt-2">
          <Link href="/" className="text-[3vw] lg:text-[1.5vw] font-medium font-[poppins] border-b-2 border-black py-1">
            View More
          </Link>
        </button>
      </div>
    </section>
  );
};

export default TableSection;
