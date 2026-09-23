import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function MilletsPage() {
  const pearlMilletSpecs = [
    { label: "Type", value: "Pearl Millet (Bajra)" },
    { label: "Quality", value: "Machine Cleaned / Sortex Cleaned" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const fingerMilletSpecs = [
    { label: "Type", value: "Finger Millet (Ragi)" },
    { label: "Color", value: "Reddish Brown" },
    { label: "Moisture", value: "12% Max" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">Nutritious Millets</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Embrace the superfoods of the future. Our export-quality millets are gluten-free, highly nutritious, and sustainably grown to meet the rising global demand for healthy alternatives.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard 
          title="Pearl Millet (Bajra)"
          specs={pearlMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
        />
        <ProductDetailCard 
          title="Finger Millet (Ragi)"
          specs={fingerMilletSpecs}
          imageSrc="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
        />
      </div>
      <CtaSection />
    </div>
  );
}
