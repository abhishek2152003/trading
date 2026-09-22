import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Premium Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    link: "/products/spices"
  },
  {
    title: "Nuts & Dry Fruits",
    image: "https://img.magnific.com/free-photo/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls_176474-2051.jpg?semt=ais_hybrid&w=740&q=80",
    link: "/products/dry-fruits"
  },
  {
    title: "Grains & Pulses",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1989&auto=format&fit=crop",
    link: "/products/grains"
  },
  {
    title: "Fruits and Vegetable",
    image: "https://images.unsplash.com/photo-1581338772954-b7e9189cb528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZydWl0JTIwYW5kJTIwdmVnZXRhYmxlc3xlbnwwfDF8MHx8fDA%3D",
    link: "/products/fruits-and-vegetable"
  },
  {
    title: "Premium Seafood",
    image: "https://images.unsplash.com/photo-1732565600318-b95129833f0a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/seafood"
  },
  {
    title: "Wholesome Millets",
    image: "https://images.unsplash.com/photo-1705475388190-775066fd69a5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/millets"
  },
  {
    title: "Herbs & Seasonings",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=60",
    link: "/products/herbs"
  },
  {
    title: "Coffee & Tea",
    image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/products/beverages"
  }
];

export default function ProductSection() {
  return (
    <section className="py-20 md:py-32 bg-soft-blue relative border-t border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20">
          <span className="text-spice-gold font-bold tracking-widest uppercase text-sm mb-3 block">Our Catalog</span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-deep-navy mb-6">
            Explore Our <span className="text-industrial-blue">Premium Products</span>
          </h2>
          <div className="w-24 h-1.5 bg-spice-gold mx-auto rounded-full mb-8"></div>
          <p className="text-charcoal/80 text-lg max-w-2xl mx-auto">
            From the finest hand-picked spices to export-grade dry fruits and grains, we supply the world with uncompromised quality and authentic flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, idx) => (
            <Link href={category.link} key={idx} className="group relative block w-full aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(11,41,66,0.1)] hover:shadow-[0_20px_40px_rgba(11,41,66,0.2)] transition-shadow duration-300">
              <Image 
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 drop-shadow-md">
                    {category.title}
                  </h3>
                  <div className="flex items-center text-spice-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    <span>View Products</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link href="/products" className="inline-flex items-center justify-center px-10 py-4 border-2 border-deep-navy text-lg font-bold rounded-full text-deep-navy hover:bg-deep-navy hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
            View Complete Catalog
          </Link>
        </div>
        
      </div>
    </section>
  );
}
