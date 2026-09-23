import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function FruitsPage() {
  const mangoSpecs = [
    { label: "Variety", value: "Alphonso / Kesar / Banganapalli" },
    { label: "Color", value: "Golden Yellow" },
    { label: "Taste", value: "Sweet and Aromatic" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "3kg, 5kg Corrugated Boxes" },
    { label: "Availability", value: "March to July" },
  ];

  const pomegranateSpecs = [
    { label: "Variety", value: "Bhagwa" },
    { label: "Color", value: "Deep Red" },
    { label: "Taste", value: "Sweet with soft seeds" },
    { label: "Origin", value: "Maharashtra, India" },
    { label: "Packing", value: "3.5kg, 4kg Carton Boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">Fresh Export Fruits</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Experience the natural sweetness and premium quality of our hand-picked, farm-fresh fruits. We guarantee optimal freshness during global transit.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard 
          title="Fresh Mangoes"
          specs={mangoSpecs}
          imageSrc="https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1974&auto=format&fit=crop"
        />
        <ProductDetailCard 
          title="Fresh Pomegranate (Bhagwa)"
          specs={pomegranateSpecs}
          imageSrc="https://images.unsplash.com/photo-1615486171448-47702f354f0a?q=80&w=1974&auto=format&fit=crop"
        />
      </div>
      <CtaSection />
    </div>
  );
}
