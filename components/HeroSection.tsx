import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-32"
      style={{ backgroundImage: "url('/images/business-strategy.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 text-primary-white">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Empowering Growth | Igniting Success
          </h1>
          <p className="text-lg md:text-xl text-white">
            Salona Singh is a strategic business consultant dedicated to helping
            businesses unlock their full potential and achieve lasting success.
          </p>
          <button className="bg-primary-pink text-primary-white px-6 py-3 rounded font-bold hover:bg-primary-yellow transition">
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/personal/salona-singh.jpeg"
            alt="Salona Singh"
            width={300}
            height={300}
            className="rounded-full shadow-xl border-4 border-primary-pink"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
