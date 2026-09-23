import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function VegetablePage() {
  const onionSpecs = [
    { label: "Type", value: "Red / Rose / White Onion" },
    { label: "Size", value: "25mm to 65mm+" },
    { label: "Origin", value: "Maharashtra & Gujarat, India" },
    { label: "Packing", value: "5kg, 10kg, 25kg Mesh Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const potatoSpecs = [
    { label: "Type", value: "Fresh Potatoes (Sugar Free)" },
    { label: "Size", value: "45mm+ / 50mm+" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "10kg, 25kg, 50kg Jute / Mesh Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">Farm Fresh Vegetables</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Procured daily from trusted farms across India, our vegetables are sorted, graded, and packed with precision to ensure prolonged shelf life and exceptional quality upon arrival.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard 
          title="Fresh Red Onions"
          specs={onionSpecs}
          imageSrc="https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1974&auto=format&fit=crop"
        />
        <ProductDetailCard 
          title="Fresh Potatoes"
          specs={potatoSpecs}
          imageSrc="https://images.unsplash.com/photo-1518977673343-a4e6140e7939?q=80&w=1974&auto=format&fit=crop"
        />
      </div>
      <CtaSection />
    </div>
  );
}
