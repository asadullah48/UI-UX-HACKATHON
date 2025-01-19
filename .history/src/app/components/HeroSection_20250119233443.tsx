import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" bg-[#FBEBB5] max-w-full mx-auto h-s relative flex flex-col sm:flex-row items-center sm:justify-between px-8 md:px-40">
    sm:flex-row items-center 
      {/* Text Section */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/2">
        <h3 className="text-[24px] sm:text-[36px] lg:text-[64px] font-medium Poppins leading-[1.2]">
          Rocket single seater
        </h3>
        <h2 className="mt-4 text-[16px] sm:text-[20px] lg:text-[24px] font-medium Poppins text-black bg-yellow-500 px-6 py-2 rounded-md transition-transform hover:scale-105">
          Shop Now
        </h2>
        <hr className="mt-2 sm:mt-4 w-[60px] sm:w-[121px] border-1.5 border-black" />
      </div>
      <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
        <Image
          src={"/hero/Rocket single seater.png"}
          alt="Rocket single seater"
          width={900}
          height={1000}
          
          className="w-[80%] sm:w-[70%] lg:w-[100%] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
