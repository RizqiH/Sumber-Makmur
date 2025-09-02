import Image from 'next/image';

export default function FullImageSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/Product-1.jpg"
          alt="Fashion Collection"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Style Meets <span className="text-white">Comfort</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of fashion and functionality with our carefully curated collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-neutral-100 text-black font-semibold py-4 px-8 rounded-sm transition-all duration-300 transform hover:scale-105">
              Explore Collection
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-4 px-8 rounded-sm transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to top</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </div>
    </section>
  );
}
