import { ArrowRight, PhoneCall } from 'lucide-react';
import { useState, useEffect } from 'react';

// Import all images from the images folder
const heroImages = [
  new URL('../assets/images/pic2.jpeg', import.meta.url).href,
  new URL('../assets/images/pic3.jpeg', import.meta.url).href,
  new URL('../assets/images/pic4.jpeg', import.meta.url).href,
  new URL('../assets/images/pic5.jpeg', import.meta.url).href,
  new URL('../assets/images/pic6.jpeg', import.meta.url).href,
  new URL('../assets/images/pic7.jpeg', import.meta.url).href,
  new URL('../assets/images/pic8.jpeg', import.meta.url).href,
  new URL('../assets/images/pic9.jpeg', import.meta.url).href,
  new URL('../assets/images/pic10.jpeg', import.meta.url).href,
  new URL('../assets/images/pic11.jpeg', import.meta.url).href,
  new URL('../assets/images/pic12.jpeg', import.meta.url).href,
  new URL('../assets/images/pic13.jpeg', import.meta.url).href,
  new URL('../assets/images/pic14.jpeg', import.meta.url).href,
  new URL('../assets/images/pic15.jpeg', import.meta.url).href,
  new URL('../assets/images/pic16.jpeg', import.meta.url).href,
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-[var(--color-surface)] via-white to-[var(--color-surface-dark)]">
      {/* Premium Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[var(--color-brand-light)]/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-[var(--color-accent-light)]/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{animationDelay: '0.5s'}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-slate-200/50 shadow-sm mb-6 hover:shadow-md transition-all duration-300">
              <span className="flex w-2.5 h-2.5 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
              <span className="text-sm font-bold text-slate-700">✨ Top Buyer in Kolkata</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight mb-4 sm:mb-6">
              Turn Your Old Clothes Into <span className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent relative inline-block">
                Instant Cash
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-[var(--color-accent)]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              We buy all kinds of old clothes, antique products, and more. Get the best price for your items with our hassle-free evaluation and instant payment service in Kolkata.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="tel:9123373789"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white font-bold text-lg hover:shadow-xl hover:shadow-[var(--color-accent)]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <PhoneCall size={20} />
                <span>Call Us Now</span>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 border-2 border-slate-200 font-bold text-lg hover:bg-slate-50 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300"
              >
                <span>How it Works</span>
                <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-semibold flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
                <span>Best Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">✓</div>
                <span>Instant Cash</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">✓</div>
                <span>Trusted</span>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none slide-in-right">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 relative shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-white/30">
              {/* Image with fade transition */}
              <img 
                src={heroImages[currentImageIndex]} 
                alt="Old clothes collection" 
                className="w-full h-full object-cover transition-opacity duration-1000"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Image carousel indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-full">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-8 h-2 bg-white rounded-full' 
                        : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-auto bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl flex items-center gap-4 hover:shadow-2xl transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-600 font-bold text-lg sm:text-xl shrink-0">
                  ₹
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm sm:text-base">Cash on the spot</div>
                  <div className="text-slate-500 text-xs sm:text-sm">No waiting time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
