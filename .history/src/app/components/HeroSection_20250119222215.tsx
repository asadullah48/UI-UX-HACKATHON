import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5] max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between py-8 px-4 sm:px-16 lg:px-32 ">
      {/* Text Section */}
      <div className="">
        <h3 className="text-black font-medium Poppins text-[28px] sm:text-[36px] md:text-[64px] leading-[34px] sm:leading-[42px] md:leading-[96px]">
          Rocket single seater
        </h3>
        <h2 className="mt-4 sm:mt-4 text-black font-medium Poppins transform transition-transform duration-300 cursor-pointer hover:scale-105 text-[16px] sm:text-[24px] leading-[20px] sm:leading-[36px]">
          Shop Now
        </h2>
        <hr className="mt-2 sm:mt-4 w-[60px] sm:w-[121px] border-1.5 border-black" />
      </div>
      <div className="relative flex justify-center sm:justify-star">
        <Image
          src={"/hero/Rocket single seater.png"}
          alt="Rocket single seater"
          width={600}
          height={600}
          layout="intrinsic"
          objectFit="contain"
          className="w-full sm:w-[400px md:w-{853px] md:h-[900]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
