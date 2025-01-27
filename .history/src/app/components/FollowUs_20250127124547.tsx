import React from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";

interface FollowUsProps {
  instagramUrl?: string;
}

const FollowUs: React.FC<FollowUsProps> = ({ 
  instagramUrl = "https://instagram.com" // default value
}) => {
  return (
    <section 
      className="relative w-full min-h-[24rem] lg:min-h-[32rem] flex items-center justify-center overflow-hidden"
      aria-labelledby="instagram-section-title"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/topPics/Rectangle.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Instagram Icon */}
          <div className="flex justify-center">
            <Instagram 
              className="w-12 h-12 sm:w-16 sm:h-16 text-black animate-pulse" 
              aria-hidden="true"
            />
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h2 
              id="instagram-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[poppins] text-black tracking-tight"
            >
              Our Instagram
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-[poppins]">
              Follow our store on Instagram for exclusive updates
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-4 
                text-base sm:text-lg font-medium font-[poppins] text-black
                bg-white/90 hover:bg-white 
                border border-gray-200 hover:border-gray-300
                rounded-full shadow-lg hover:shadow-xl
                transform hover:-translate-y-0.5
                transition-all duration-300 ease-out"
            >
              <span>Follow Us</span>
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default FollowUs;