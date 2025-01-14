import Image from "next/image";


const HeroSection = () => {
  return (
    <section className=" bg-[#FBEBB5] w-full h-auto md:h-[1000px] flex
    {/* Texselect-none">
      <div >
        <h1 className="heading font-medium ml-5 lg:ml-36 lg:mr-10 md:px-3 lg:px-0 2xl:px-0 mt-52 md:mt-96 lg:mt-60 text-[40px] sm:text-[64px] md:text-[50px] lg:text-[45px] xl:text-[50px] font-[poppins]">
          Rocket single <span className=" block ml-[65px] md:ml-0 ">seater</span> 
        </h1>
        <div>
          <button className="heading2 font-medium px-12 lg:px-0 text-[26px] xl:text-[30px] font-[poppins] ml-9 md:ml-0 lg:ml-36 mt-12 md:mt-6 xl:mb-16 hover:text-gray-500 group ">
            Shop Now
          <div className=" border-b-2 border-black xl:w-[146px] mt-3 group-hover:text-gray-500"></div>
          </button>
        </div>
      </div>
      <div className="absolute -top-9 right-5">
        <Image
          src={"/hero/Rocket single seater.png"}
          alt="Rocket single seater"
          width={600}
          height={600}
          className="w-full h-full "
        />
      </div>
    </section>
  );
};

export default HeroSection;
