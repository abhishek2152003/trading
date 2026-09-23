import Image from "next/image";
import CtaSection from "@/components/CtaSection";

export default function GalleryPage() {
  const images = [
    { src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop", alt: "Spices in market", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1615486171448-47702f354f0a?q=80&w=1974&auto=format&fit=crop", alt: "Agriculture Field", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop", alt: "Cargo Shipping", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1599908867568-d05c68f2f211?q=80&w=1973&auto=format&fit=crop", alt: "Black Raisins", span: "md:col-span-1 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1512805147242-c3e794cf1a53?q=80&w=2070&auto=format&fit=crop", alt: "Fresh Vegetables", span: "md:col-span-2 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1974&auto=format&fit=crop", alt: "Cardamom Spices", span: "md:col-span-1 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop", alt: "Healthy Food", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <div className="min-h-screen bg-soft-blue flex flex-col">
      {/* Header */}
      <section className="relative w-full py-20 md:py-28 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1987&auto=format&fit=crop"
            alt="Gallery Header"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Our Gallery</h1>
          <div className="w-24 h-1 bg-spice-gold mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-soft-blue max-w-2xl mx-auto drop-shadow-md">
            A visual journey through our procurement, processing, and shipping processes. Experience the quality firsthand.
          </p>
        </div>
      </section>

      {/* Masonry Grid Section */}
      <section className="py-16 md:py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-6 auto-rows-[250px]">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl overflow-hidden group shadow-lg ${image.span} min-h-[250px]`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-xl drop-shadow-md">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
