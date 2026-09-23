import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function DryFruitsPage() {
  const cashewsSpecs = [
    { label: "Grade", value: "W240, W320, W450 (Export Quality)" },
    { label: "Color", value: "White / Pale Ivory" },
    { label: "Taste", value: "Rich, Buttery, and Sweet" },
    { label: "Origin", value: "India" },
    { label: "Moisture", value: "5% Max" },
    { label: "Packing", value: "10kg, 25kg Vacuum or Tin Packs" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const almondsSpecs = [
    { label: "Type", value: "California / Gurbandi / Mamra" },
    { label: "Color", value: "Brown" },
    { label: "Taste", value: "Naturally Sweet & Crunchy" },
    { label: "Origin", value: "India & USA" },
    { label: "Moisture", value: "6% Max" },
    { label: "Packing", value: "10kg, 20kg Carton boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const blackRaisinSpecs = [
    { label: "Type", value: "Seedless Black Raisins" },
    { label: "Color", value: "Dark Black" },
    { label: "Size", value: "Long / Round" },
    { label: "Taste", value: "Naturally Sweet" },
    { label: "Origin", value: "Maharashtra, India" },
    { label: "Packing", value: "5kg, 10kg, 15kg carton box" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">Premium Dry Fruits</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Discover our exclusive range of export-quality dry fruits, sourced directly from the finest farms. Hand-picked, perfectly processed, and hygienically packed to retain their natural crunch, flavor, and immense nutritional value.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        {/* Cashews */}
        <ProductDetailCard 
          title="Premium Cashew Nuts (Kaju)"
          specs={cashewsSpecs}
          imageSrc="https://images.unsplash.com/photo-1599598425947-330026217c40?q=80&w=2070&auto=format&fit=crop"
        />

        {/* Almonds */}
        <ProductDetailCard 
          title="Raw Almonds (Badam)"
          specs={almondsSpecs}
          imageSrc="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=2069&auto=format&fit=crop"
        />

        {/* Black Raisins */}
        <ProductDetailCard 
          title="Seedless Black Raisins"
          specs={blackRaisinSpecs}
          imageSrc="https://images.unsplash.com/photo-1599908867568-d05c68f2f211?q=80&w=1973&auto=format&fit=crop"
        />
      </div>
      
      <CtaSection />
    </div>
  );
}
