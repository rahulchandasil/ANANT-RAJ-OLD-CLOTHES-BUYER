import { CheckCircle2 } from 'lucide-react';
import pic20 from '../assets/images/pic20.jpeg';

export default function About() {
  const points = [
    "Fair & Transparent Pricing",
    "Instant Cash Payment",
    "We Buy All Types of Old Clothes",
    "Antique Items Also Accepted",
    "Trusted by Hundreds of Sellers",
    "Convenient Kolkata Location"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image composition */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-xl relative group">
              <img 
                src={pic20} 
                alt="Stack of clothes" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=2070&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 border-[8px] border-white/30 rounded-3xl mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-4 sm:bottom-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-[160px] sm:max-w-[200px] border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 z-10">
              <div className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent font-black text-3xl sm:text-4xl mb-1">100%</div>
              <div className="text-slate-600 text-xs sm:text-sm font-bold leading-snug">Customer Satisfaction & Trust</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-light)]/15 text-[var(--color-brand)] font-bold text-sm mb-6 border border-[var(--color-brand)]/20">
              📖 About Anant Raj
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4 sm:mb-6">
              Kolkata's Most <span className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent">Trusted</span> Old Clothes Buyer
            </h2>
            
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed mb-8 font-medium">
              <p>
                At Anant Raj Old Clothes Buyer, we specialize in purchasing your used garments, antique clothing, and textiles. Our mission is to provide a seamless, hassle-free selling experience while giving old clothes a second life.
              </p>
              <p>
                We buy these items at a fair price and sell them at a low-range budget to people who are interested, making fashion and antiques accessible while promoting sustainable reuse in our community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 hover:border-[var(--color-accent)]/30 hover:shadow-md transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-brand)] shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold">{point}</span>
                </div>
              ))}
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}
