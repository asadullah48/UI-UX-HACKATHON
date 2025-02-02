import Image from "next/image";

const HeroSection = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="bg-[#FBEBB5] max-w-full mx-auto h-screen relative flex flex-col sm:flex-row items-center sm:justify-between px-8 md:px-48 select-none">
      {/* Text Section */}
      
      <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
      <Image
  src={imageUrl}
  alt={title}
  width={500}
  height={500}
  priority
  className="w-full sm:w-[400px] md:w-[853px] md:h-[900px]"
/>
      </div>
      <HeroSection
  title="Rocket single seater"
  subtitle="Shop Now"
  imageUrl="/hero/Rocket single seater.png"
/>
    </section>
    
  );
};

export default HeroSection;