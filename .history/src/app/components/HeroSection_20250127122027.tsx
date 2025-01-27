import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#FBEBB5] min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 pt-16 lg:pt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-800 leading-tight">
              Rocket single seater
            </h1>
            <div className="group inline-block w-fit">
              <Link 
                href="/shop" 
                className="inline-block text-lg sm:text-xl font-medium text-black group-hover:text-gray-800 transition-colors duration-300"
              >
                Shop Now
              </Link>
              <div className="h-0.5 w-[60px] sm:w-[121px] bg-black mt-2 group-hover:w-[140px] transition-all duration-300 ease-in-out" />
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full">
            <Image
              src="/hero/Rocket single seater.png"
              alt="Rocket single seater"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-contain object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Element (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FBEBB5]/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
