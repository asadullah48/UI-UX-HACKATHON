import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" bg-[#FBEBB5] max-w-full mx-auto h-screen relative flex flex-col sm:flex-row items-center sm:justify-between px-8 md:px-48 select-none">
    sm:flex-row items-center 
      {/* Text Section */}
      <div className="relative w-full sm:w-[440px] h-auto sm:h-[276px] px-4 sm:px-0 text-center sm:text-left">
        <h3 className="text-black font-bold Poppins text-[28px] sm:text-[36px] md:text-[64px] leading-[34px] sm:leading-[42px] md:leading-[96px]">
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
          width={803}
          height={1000}
          
          className="w-[80%] sm:w-[70%] lg:w-[100%] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
