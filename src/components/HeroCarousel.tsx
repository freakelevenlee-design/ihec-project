import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  ctaLink: string;
  bgColor: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Accelerating the Global Hydrogen Energy Transition",
    subtitle: "Bridging Innovation and Industry for a Sustainable Future",
    image: "linear-gradient(135deg, #0066CC 0%, #004499 100%)",
    cta: "Explore Our Mission",
    ctaLink: "/about",
    bgColor: "#0066CC"
  },
  {
    id: 2,
    title: "Global Innovation Hub",
    subtitle: "State-of-the-art facilities in Beijing, China",
    image: "linear-gradient(135deg, #00AA66 0%, #008844 100%)",
    cta: "Tour the Center",
    ctaLink: "/about",
    bgColor: "#00AA66"
  },
  {
    id: 3,
    title: "UNIDO's Global Hydrogen Partnership",
    subtitle: "Building International Cooperation Networks",
    image: "linear-gradient(135deg, #0066CC 0%, #00AA66 100%)",
    cta: "Learn About Our Network",
    ctaLink: "/resources",
    bgColor: "#004499"
  },
  {
    id: 4,
    title: "In China, For the World",
    subtitle: "Hydrogen for a Sustainable Future",
    image: "linear-gradient(135deg, #004499 0%, #008844 100%)",
    cta: "Start Your Journey",
    ctaLink: "/services",
    bgColor: "#004499"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-96 md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((s, index) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{
            background: s.image,
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: index === currentSlide ? 'flex' : 'none'
          }}
          className="w-full h-full absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="heading-1 text-white mb-4">{s.title}</h2>
            <p className="text-lg md:text-2xl text-gray-100 mb-8">{s.subtitle}</p>
            <a href={s.ctaLink} className="btn-primary inline-block">
              {s.cta}
            </a>
          </motion.div>
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}
