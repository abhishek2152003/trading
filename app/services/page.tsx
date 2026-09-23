import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export default function ServicesPage() {
  const steps = [
    {
      title: "Sourcing & Procurement",
      description: "We source our products directly from reliable farmers and trusted agro vendors across India, ensuring the highest quality raw materials.",
      icon: (
        <svg className="w-8 h-8 text-spice-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      title: "Quality Check & Processing",
      description: "Our experts properly clean, dry, and process the products. Every batch undergoes rigorous quality control to meet international export standards.",
      icon: (
        <svg className="w-8 h-8 text-spice-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    },
    {
      title: "Packaging",
      description: "We offer customized packaging solutions (5kg, 10kg, 15kg cartons, etc.) tailored to client requirements, ensuring freshness during transit.",
      icon: (
        <svg className="w-8 h-8 text-spice-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
      )
    },
    {
      title: "Global Shipping",
      description: "With a robust logistics network, we ensure timely and safe delivery of our agricultural commodities to clients worldwide.",
      icon: (
        <svg className="w-8 h-8 text-spice-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-soft-blue flex flex-col">
      {/* Header */}
      <section className="relative w-full py-24 md:py-32 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a00?q=80&w=2070&auto=format&fit=crop"
            alt="Logistics and Export"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Our Export Process</h1>
          <div className="w-24 h-1 bg-spice-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-soft-blue max-w-3xl mx-auto drop-shadow-md">
            From the fertile farms of India to your destination. We ensure quality, transparency, and timely delivery at every step of our export journey.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-spice-gold">
                <div className="w-16 h-16 bg-soft-blue rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {step.icon}
                </div>
                <div className="text-spice-gold font-extrabold text-4xl mb-4 opacity-30">0{index + 1}</div>
                <h3 className="text-2xl font-bold text-deep-navy mb-4 font-heading">{step.title}</h3>
                <p className="text-charcoal/80 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
    </div>
  );
}
