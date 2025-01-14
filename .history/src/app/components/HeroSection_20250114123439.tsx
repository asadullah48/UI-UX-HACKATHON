import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="
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
