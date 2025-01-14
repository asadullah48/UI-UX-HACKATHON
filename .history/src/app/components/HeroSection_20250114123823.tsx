import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5] w-full h-auto md:h-[1000px] flex flex-col md:flex-row pt-[150px] md:pt-[300px] px-4 md:px-[132px] relative">
        {/* Text Section */}
        <div className="relative w-full sm:w-[440px] h-auto sm:h-[276px] px-4 sm:px-0">
          <h3 className="text-black font-medium Poppins text-[28px] sm:text-[36px] md:text-[64px] leading-[34px] sm:leading-[42px] md:leading-[96px]">
            Rocket single seater
          </h3>
          <h2 className="mt-4 sm:mt-4 text-black font-medium Poppins transform transition-transform duration-300 cursor-pointer hover:scale-105 text-[16px] sm:text-[24px] leading-[20px] sm:leading-[36px]">
            Shop Now
          </h2>
          <hr className="mt-2 sm:mt-4 w-[60px] sm:w-[121px] border-1.5 border-black" />
        </div>
      <div className="relative flex justify-center sm:justify-star
        <Image
          src={"/hero/Rocket single seater.png"}
          alt="Rocket single seater"
          width={853}
          height={700}
          className="w-full s "
        />
      </div>
    </section>
  );
};

export default HeroSection;
