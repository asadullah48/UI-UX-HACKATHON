import Image from "next/image";

const HeroSection = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="bg-[#FBEBB5] max-w-full mx-auto h-screen relative flex flex-col sm:flex-row items-center sm:justify-between px-8 md:px-48 select-none">
      {/* Text Section */}
      <div className="relative w-full max-w-[440px] h-auto px-4 sm:px-0 text-center sm:text-left">
  <h3 className="text-black font-medium Poppins text-2xl sm:text-4xl md:text-6xl leading-tight sm:leading-normal md:leading-relaxed">
    {title}
  </h3>
  <h2 className="mt-4 text-black font-medium Poppins transform transition-transform duration-300 cursor-pointer hover:scale-105 text-base sm:text-2xl leading-relaxed">
    {subtitle}
  </h2>
  <hr className="mt-2 sm:mt-4 w-16 sm:w-32 border-1.5 border-black" />
</div>

      {/* Image Section */}
      <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
      <Image
  src={imageUrl}
  alt={title}
  width={500}
  height={500}
  priority
  className="w-full sm:w-[400px] md:w-[853px] md:h-[900px]"
/>
      
    </section>
    
  );
};

export default HeroSection;