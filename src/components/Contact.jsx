import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gradient-to-br from-[var(--color-brand)] via-[var(--color-brand)] to-[var(--color-brand-dark)] rounded-[3rem] p-8 sm:p-16 lg:p-20 relative overflow-hidden text-center shadow-2xl hover:shadow-3xl transition-all duration-500">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Ready to Sell Your Old Items?
            </h2>
            <p className="text-[var(--color-accent-light)] text-lg sm:text-xl mb-12 font-medium">
              Contact Anant Raj Old Clothes Buyer today for the best prices in Kolkata. We are available on phone and WhatsApp.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/919123373789" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[var(--color-brand-dark)] font-bold text-lg hover:bg-[var(--color-accent-light)] hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="text-green-500" size={24} />
                <span>WhatsApp Us</span>
              </a>
              <a 
                href="tel:9123373789" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-brand-dark)] text-white font-bold text-lg hover:bg-white hover:text-[var(--color-brand)] border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Phone size={24} />
                <span>Call 9123373789</span>
              </a>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-[var(--color-accent-light)] font-bold">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>Alt: 9163199308</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>malisuresh36313@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
