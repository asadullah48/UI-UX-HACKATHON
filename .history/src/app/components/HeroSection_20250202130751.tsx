import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const heroQuery = groq`
  *[_type == "hero"][0] {
    title,
    subtitle,
    image
  }
`;

export async function getHeroData() {
  return await client.fetch(heroQuery);
}

const HeroSection = async () => {
  const heroData = await getHeroData();

  return (
    <section className="bg-[#FBEBB5] max-w-full mx-auto h-screen relative flex flex-col sm:flex-row items-center sm:justify-between px-8 md:px-48 select-none">
      {/* Text Section */}
      <div className="relative w-full sm:w-[440px] h-auto sm:h-[276px] px-4 sm:px-0 text-center sm:text-left">
        <h3 className="text-black font-medium Poppins text-[28px] sm:text-[36px] md:text-[64px] leading-[34px] sm:leading-[42px] md:leading-[96px]">
          {heroData.title}
        </h3>
        <h2 className="mt-4 sm:mt-4 text-black font-medium Poppins transform transition-transform duration-300 cursor-pointer hover:scale-105 text-[16px] sm:text-[24px] leading-[20px] sm:leading-[36px]">
          {heroData.subtitle}
        </h2>
        <hr className="mt-2 sm:mt-4 w-[60px] sm:w-[121px] border-1.5 border-black" />
      </div>
      <div className="mt-8 sm:mt-0 sm:w-1/2 flex justify-center">
        <Image
          src={heroData.image}
          alt={heroData.title}
          width={500}
          height={500}
          className="w-full sm:w-[400px] md:w-[853px] md:h-[900px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;