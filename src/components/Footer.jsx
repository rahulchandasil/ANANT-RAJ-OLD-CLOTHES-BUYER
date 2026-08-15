import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 py-12 lg:py-16 border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          
          <div className="fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg">
                AR
              </div>
              <span className="font-black text-xl text-white">Anant Raj</span>
            </div>
            <p className="text-slate-400 max-w-xs leading-relaxed font-medium">
              Kolkata's premier old clothes and antique buyer. We provide the best prices, instant cash, and a seamless selling experience.
            </p>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-white font-black mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors duration-300 font-semibold">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300 font-semibold">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors duration-300 font-semibold">How It Works</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-white transition-colors duration-300 font-semibold">Products</a></li>
            </ul>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-white font-black mb-6 text-lg">Business Information</h4>
            <ul className="space-y-3 text-slate-400">
              <li><strong className="text-slate-300">Owner:</strong> Suresh Mali</li>
              <li><strong className="text-slate-300">Phone:</strong> <a href="tel:+919123373789" className="hover:text-white transition-colors">+91 9123373789</a></li>
              <li><strong className="text-slate-300">Alt Phone:</strong> <a href="tel:+919163199308" className="hover:text-white transition-colors">+91 9163199308</a></li>
              <li><strong className="text-slate-300">Email:</strong> <a href="mailto:malisuresh36313@gmail.com" className="hover:text-white transition-colors">malisuresh36313@gmail.com</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Anant Raj Old Clothes Buyer. All rights reserved. 
            <span className="text-slate-600 mx-2">•</span>
            Designed with ❤️ for premium experience
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center hover:from-[var(--color-brand)] hover:to-[var(--color-accent)] transition-all duration-300 text-slate-400 hover:text-white hover:shadow-lg hover:shadow-[var(--color-accent)]/30"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
