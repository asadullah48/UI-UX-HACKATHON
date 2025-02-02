import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[var(--hero-bg-color)] min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 pt-16 lg:pt-0 order-2 lg:order-1">
            <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-medium text-gray-800 leading-tight">
              Rocket single seater
            </h1>
            <div className="group inline-block w-fit">
              <Link 
                href="/shop" 
                className="inline-block text-lg sm:text-xl font-medium text-black transition-colors duration-300 hover:text-gray-800"
                aria-label="Shop Now"
              >
                Shop Now
              </Link>
              <div className="h-0.5 w-[60px] sm:w-[121px] bg-black mt-2 transition-all duration-300 ease-in-out group-hover:w-[140px]" />
            </div>
          </div>

          {/* Image Container */}
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full order-1 lg:order-2">
            <Image
              src="/hero/Rocket single seater.png"
              alt="Rocket single seater"
              fill
              priority
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-contain object-center transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--gradient-start)]/20 to-[var(--gradient-end)] pointer-events-none" />
    </section>
  );
};

export default HeroSection;