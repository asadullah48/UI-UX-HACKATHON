import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5] max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between py-8 px-4 sm:px-16 lg:px-32 ">
      {/* Text Section */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/2">
        <h3 className="text-[24px] sm:text-[36px] lg:text-[64px] font-medium leading-[1.2]">
          Rocket single seater
        </h3>
        <h2 className="mt-4 text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-black bg-yellow-500 px-6 py-2 rounded-md transition-transform hover:scale-105">
          Shop Now
        </h2>
        <hr className="mt-2 sm:mt-4 w-[60px] sm:w-[121px] border-1.5 border-black" />
      </div>
      <div className="mt-8 sm">
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
