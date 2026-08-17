import { useState } from 'react';
import { X } from 'lucide-react';
import pic10 from '../assets/images/pic10.jpeg';
import pic11 from '../assets/images/pic11.jpeg';
import pic12 from '../assets/images/pic12.jpeg';
import pic13 from '../assets/images/pic13.jpeg';
import pic15 from '../assets/images/pic15.jpeg';
import pic16 from '../assets/images/pic16.jpeg';
import pic18 from '../assets/images/pic18.jpeg';
import pic19 from '../assets/images/pic19.jpeg';
import pic20 from '../assets/images/pic20.jpeg';
import pic21 from '../assets/images/pic21.jpeg';
import pic5 from '../assets/images/pic5.jpeg';
import pic7 from '../assets/images/pic7.jpeg';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: pic11, alt: "Assorted old clothes bundle", className: "md:col-span-2 md:row-span-2" },
    { src: pic12, alt: "Stack of folded clothes", className: "md:col-span-1 md:row-span-1" },
    { src: pic13, alt: "Used textiles", className: "md:col-span-1 md:row-span-1" },
    { src: pic15, alt: "Various garments", className: "md:col-span-1 md:row-span-2" },
    { src: pic10, alt: "Vintage collection", className: "md:col-span-1 md:row-span-1" },
    { src: pic7, alt: "Sorted clothing", className: "md:col-span-1 md:row-span-1" },
    { src: pic18, alt: "Old clothes item", className: "md:col-span-1 md:row-span-1" },
    { src: pic19, alt: "Textile collection", className: "md:col-span-1 md:row-span-1" },
    { src: pic20, alt: "Antique garment", className: "md:col-span-1 md:row-span-1" },
    { src: pic21, alt: "Vintage wear", className: "md:col-span-1 md:row-span-1" },
    { src: pic5, alt: "Classic textiles", className: "md:col-span-1 md:row-span-1" },
    { src: pic16, alt: "Retro collection", className: "md:col-span-1 md:row-span-1" }
  ];
  

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-gradient-to-b from-white via-[var(--color-surface)]/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-light)]/15 text-[var(--color-brand)] font-bold text-sm mb-6 border border-[var(--color-brand)]/20">
            🖼️ Our Products
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4 sm:mb-6">
            Items We <span className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent">Buy & Sell</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Take a look at the variety of old clothes, textiles, and antique items we process every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((item, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${item.className} hover-effect`}
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/30 group-hover:from-black/20 group-hover:to-black/40 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white font-bold text-center text-sm">View Item</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 transition-opacity duration-300" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
