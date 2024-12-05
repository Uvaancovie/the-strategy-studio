import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-white py-20 md:py-32"
    >
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-500 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500 rounded-full blur-2xl opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Empowering Growth <span className="text-yellow-500">|</span> Igniting Success
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Salona Singh is a strategic business consultant dedicated to helping businesses unlock their full potential and achieve lasting success.
          </p>
          <button className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg font-bold hover:bg-gray-100 transition">
            Get Started <FaArrowRight />
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/personal/salona-singh.jpeg"
            alt="Salona Singh"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
