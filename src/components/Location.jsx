import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 lg:py-32 bg-gradient-to-b from-white via-[var(--color-surface)]/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px] hover:shadow-3xl transition-all duration-500 border-2 border-white/30 group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.206584288827!2d88.3432174!3d22.5348943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277435f2eb71f%3A0xc32a4e2ba1b05fc!2sMudiali%20Club!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 group-hover:grayscale-0 grayscale transition-all duration-700"
              title="Google Map Location of Anant Raj Old Clothes Buyer"
            ></iframe>
            <div className="absolute top-6 left-4 right-4 sm:top-8 sm:left-8 sm:right-auto bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-sm sm:text-base">Visit Our Shop</div>
                <div className="text-slate-500 text-xs sm:text-sm">Mudiali Club Landmark</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-light)]/15 text-[var(--color-accent)] font-bold text-sm mb-6 border border-[var(--color-accent)]/20">
              📍 Our Location
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6 sm:mb-8">
              Conveniently Located in <span className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent">Kolkata</span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-slate-600 mb-8 sm:mb-10">
              <div className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 hover:border-[var(--color-accent)]/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)] flex items-center justify-center text-white shrink-0 mt-1 font-bold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-black mb-1 text-lg">Store Address</h4>
                  <p className="leading-relaxed text-slate-700 font-medium">
                    17 No Chandra Mondal Lane<br/>
                    Kolkata (Landmark: Mudiali Club)<br/>
                    West Bengal, 700026
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=17+No+Chandra+Mondal+Lane,+Kolkata,+700026" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white font-black text-lg hover:shadow-xl hover:shadow-[var(--color-accent)]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <Navigation size={20} />
              <span>Get Directions</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
