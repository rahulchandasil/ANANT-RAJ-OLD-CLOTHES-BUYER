import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:9123373789"
      aria-label="Call us"
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[var(--color-brand)] text-white rounded-full shadow-lg hover:bg-[var(--color-brand-dark)] hover:scale-110 transition-all duration-300 md:bottom-6 md:right-6 group"
    >
      <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
      
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[var(--color-brand)] animate-ping opacity-20 group-hover:hidden"></span>
    </a>
  );
};

export default FloatingCallButton;
