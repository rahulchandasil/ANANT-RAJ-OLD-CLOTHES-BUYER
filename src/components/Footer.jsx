import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 text-slate-600 py-12 lg:py-16 border-t border-slate-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          
          <div className="fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg">
                AR
              </div>
              <span className="font-black text-xl text-slate-900">Anant Raj</span>
            </div>
            <p className="text-slate-500 max-w-xs leading-relaxed font-medium">
              Kolkata's premier old clothes and antique buyer. We provide the best prices, instant cash, and a seamless selling experience.
            </p>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-slate-900 font-black mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-500 hover:text-[var(--color-brand)] transition-colors duration-300 font-semibold">Home</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-[var(--color-brand)] transition-colors duration-300 font-semibold">About Us</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-[var(--color-brand)] transition-colors duration-300 font-semibold">How It Works</a></li>
              <li><a href="#gallery" className="text-slate-500 hover:text-[var(--color-brand)] transition-colors duration-300 font-semibold">Products</a></li>
            </ul>
          </div>

          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-slate-900 font-black mb-6 text-lg">Business Information</h4>
            <ul className="space-y-3 text-slate-500">
              <li><strong className="text-slate-700">Owner:</strong> Suresh Mali</li>
              <li><strong className="text-slate-700">Phone:</strong> <a href="tel:+919123373789" className="hover:text-[var(--color-brand)] transition-colors">+91 9123373789</a></li>
              <li><strong className="text-slate-700">Alt Phone:</strong> <a href="tel:+919163199308" className="hover:text-[var(--color-brand)] transition-colors">+91 9163199308</a></li>
              <li><strong className="text-slate-700">Email:</strong> <a href="mailto:malisuresh36313@gmail.com" className="hover:text-[var(--color-brand)] transition-colors break-all">malisuresh36313@gmail.com</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} All Rights Reserved by
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:border-[var(--color-accent)]/50 hover:bg-slate-50 transition-all duration-300 text-slate-400 hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-[var(--color-accent)]/10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
