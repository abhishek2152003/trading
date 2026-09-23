import ProductDetailCard from "@/components/ProductDetailCard";
import CtaSection from "@/components/CtaSection";

export default function SpicesPage() {
  const turmericSpecs = [
    { label: "Type", value: "Finger / Bulb / Powder" },
    { label: "Curcumin Content", value: "2% to 5%+" },
    { label: "Origin", value: "India" },
    { label: "Packing", value: "25kg, 50kg PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const cuminSpecs = [
    { label: "Grade", value: "Singapore 98% / 99%, Europe 99.5%" },
    { label: "Origin", value: "Gujarat & Rajasthan, India" },
    { label: "Moisture", value: "9% Max" },
    { label: "Packing", value: "25kg, 50kg Paper/PP Bags" },
    { label: "Availability", value: "Throughout the year" },
  ];

  const cardamomSpecs = [
    { label: "Size", value: "6mm, 7mm, 8mm+" },
    { label: "Color", value: "Deep Green" },
    { label: "Origin", value: "Kerala, India" },
    { label: "Packing", value: "1kg, 5kg Carton Boxes" },
    { label: "Availability", value: "Throughout the year" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-deep-navy mb-6">Authentic Indian Spices</h1>
        <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          Known as the spice bowl of the world, India produces spices with rich aromas and intense flavors. Our spices are unadulterated, expertly processed, and packaged to retain their essential oils.
        </p>
      </div>

      <div className="space-y-24 px-4 sm:px-6 lg:px-8 pb-24">
        <ProductDetailCard 
          title="Turmeric (Haldi)"
          specs={turmericSpecs}
          imageSrc="https://images.unsplash.com/photo-1615486511484-92e172ca4f0c?q=80&w=2070&auto=format&fit=crop"
        />
        <ProductDetailCard 
          title="Cumin Seeds (Jeera)"
          specs={cuminSpecs}
          imageSrc="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
        />
        <ProductDetailCard 
          title="Green Cardamom (Elaichi)"
          specs={cardamomSpecs}
          imageSrc="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1974&auto=format&fit=crop"
        />
      </div>
      <CtaSection />
    </div>
  );
}
