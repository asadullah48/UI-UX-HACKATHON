import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5] min-h-screen flex items-center px-4 md:px-16 grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 w-full">
    
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-med text-gray-800 leading-snug">
          Rocket single seater
        </h1>
        <h2 className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition">
          Shop Now
        </h2>
        <hr className="mt-2 sm:mt-4 w-[60px] sm:w-[121px] border-1.5 border-black" />
      </div>
      <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
        <Image
          src={"/hero/Rocket single seater.png"}
          alt="Rocket single seater"
          width={400}
          height={400}
          
          className="w-full sm:w-[400px] md:w-[853px] md:h-[900px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
