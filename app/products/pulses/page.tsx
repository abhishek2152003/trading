import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function PulsesPage() {
  const chickpeasSpecs = [
    { label: "Type", value: "Kabuli Chickpeas" },
    { label: "Size", value: "42-44, 44-46, 58-60 Count / Oz" },
    { label: "Moisture", value: "10-12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const redLentilsSpecs = [
    { label: "Type", value: "Red Lentils (Masoor Dal)" },
    { label: "Quality", value: "Sortex Cleaned, Split & Skinned" },
    { label: "Moisture", value: "14% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">Premium Pulses & Dals</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          As a staple protein source, our pulses are carefully processed and sortex-cleaned. We supply premium lentils, chickpeas, and peas across the globe with uncompromising quality.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard 
          title="Kabuli Chickpeas (Chana)"
          specs={chickpeasSpecs}
          imageSrc="https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=2016&auto=format&fit=crop"
        />
        <ProductDetailCard 
          title="Red Lentils (Masoor Dal)"
          specs={redLentilsSpecs}
          imageSrc="https://images.unsplash.com/photo-1582285141121-698d284a75ab?q=80&w=1969&auto=format&fit=crop"
        />
      </div>
      <CtaSection />
    </div>
  );
}
