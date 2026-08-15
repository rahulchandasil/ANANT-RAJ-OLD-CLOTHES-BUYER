import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl shadow-lg py-3 border-b border-slate-100/50' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[var(--color-accent)]/30 duration-300">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent">Anant Raj</span>
              <span className="text-xs text-slate-500 font-semibold tracking-wide">Old Clothes Buyer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-[var(--color-brand)] transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:9123373789"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white text-sm font-bold hover:shadow-lg hover:shadow-[var(--color-accent)]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <PhoneCall size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2.5 text-slate-600 hover:text-[var(--color-brand)] transition-colors duration-300 rounded-lg hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100/50 shadow-xl py-6 px-4 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-semibold text-slate-700 hover:text-[var(--color-brand)] py-2.5 px-4 rounded-lg transition-all duration-300 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:9123373789"
            className="flex items-center justify-center gap-2 px-6 py-3 mt-4 rounded-lg bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white font-bold hover:shadow-lg transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <PhoneCall size={18} />
            <span>Call Now: 9123373789</span>
          </a>
        </div>
      )}
    </header>
  );
}
