import { Phone, Search, IndianRupee, Shirt, Sparkles, Clock, Zap } from 'lucide-react';

export default function Services() {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-[var(--color-brand)]" />,
      title: "1. Contact Us",
      description: "Call or WhatsApp us with details of the old clothes or antique items you want to sell."
    },
    {
      icon: <Search className="w-8 h-8 text-[var(--color-brand)]" />,
      title: "2. We Evaluate",
      description: "Our experts will review your items and offer a fair, competitive price based on their condition."
    },
    {
      icon: <IndianRupee className="w-8 h-8 text-[var(--color-brand)]" />,
      title: "3. Get Paid",
      description: "Accept the offer and receive instant cash payment on the spot. It's that simple!"
    }
  ];

  const services = [
    {
      icon: <Shirt className="w-8 h-8 text-white" />,
      title: "Old Clothes & Garments",
      description: "We buy all types of old clothes including sarees, suits, dresses, shirts, pants, and more."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Antique & Vintage Items",
      description: "Purchase of antique products, vintage collectibles, and heritage pieces with historical value."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Used Fashion & Accessories",
      description: "Leather jackets, handbags, belts, jewelry, shoes, and other fashion accessories in good condition."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Bulk Purchase Available",
      description: "Selling large quantities of clothes? We handle bulk orders and offer competitive rates."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-[var(--color-surface)]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Services Offered Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-light)]/15 text-[var(--color-accent)] font-bold text-sm mb-6 border border-[var(--color-accent)]/20">
              ⭐ What We Offer
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              What We <span className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent">Buy From You</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Premium pricing for all types of old clothes, antiques, and vintage items. We're your trusted partner for converting unused items into instant cash.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-[var(--color-accent)]/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[var(--color-accent)]/20">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-light)]/15 text-[var(--color-brand)] font-bold text-sm mb-6 border border-[var(--color-brand)]/20">
              🚀 How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              Sell Your Old Clothes in <span className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] bg-clip-text text-transparent">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We've made the process incredibly easy. No long waiting times, no complicated procedures. Just pure convenience.
            </p>
          </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-accent)] to-[var(--color-brand)] -translate-y-1/2 z-0 opacity-30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center group hover:-translate-y-3 hover:shadow-2xl hover:border-[var(--color-accent)]/50 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-brand)]/10 to-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-[var(--color-brand)]/20 group-hover:to-[var(--color-accent)]/20 transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/10 border border-slate-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent)] to-[var(--color-brand)] rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          <div className="relative z-10 fade-in-up">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">Looking to buy affordable second-hand clothing?</h3>
            <p className="text-[var(--color-accent-light)] text-lg mb-8 max-w-2xl mx-auto font-medium">
              We also sell the items we collect at very low, budget-friendly prices. Visit our location or contact us to check our current inventory.
            </p>
            <a 
              href="tel:9123373789" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[var(--color-accent)] font-black text-lg hover:bg-[var(--color-accent-light)] hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Phone size={20} />
              <span>Contact for Buying</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
