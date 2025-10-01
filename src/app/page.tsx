import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection
        productName="iPhone 17 Pro"
        title="So strong. So light. So Pro."
        subtitle="Available starting 10.15"
        imageUrl="https://www.apple.com/v/home/ch/images/heroes/iphone-17-pro/hero_iphone_17_pro__bknyzxfk2agi_large.jpg"
        theme="dark"
      />
      <HeroSection
        productName="MacBook Air 15”"
        title="Impressively big. Impossibly thin."
        subtitle="Check back for availability"
        imageUrl="https://placehold.co/1200x600/F5F5F7/000000?text=MacBook+Air"
        theme="light"
      />
      
      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-neutral-50">
        {/* Apple Watch */}
        <div className="bg-black text-center rounded-lg pt-12">
            <h2 className="text-4xl font-bold text-white">WATCH</h2>
            <p className="text-orange-500 font-semibold">SERIES 9</p>
            <p className="text-white text-xl">Smarter. Brighter. Mightier.</p>
            <div className="mt-4 space-x-4">
                <a href="#" className="text-blue-500 hover:underline">Learn more &gt;</a>
                <a href="#" className="text-blue-500 hover:underline">Buy &gt;</a>
            </div>
            <img src="https://placehold.co/600x400/000000/FFFFFF?text=Apple+Watch" alt="Apple Watch" className="w-full h-auto object-contain mt-8"/>
        </div>

        {/* Vision Pro */}
        <div className="bg-black text-center rounded-lg pt-12 overflow-hidden">
            <h2 className="text-4xl font-bold text-white">Vision Pro</h2>
            <p className="text-white text-xl">Welcome to the era of spatial computing.</p>
            <div className="mt-4 space-x-4">
                <a href="#" className="text-blue-500 hover:underline">Learn more &gt;</a>
            </div>
             <img src="https://placehold.co/600x400/000000/FFFFFF?text=Vision+Pro" alt="Vision Pro" className="w-full h-auto object-contain mt-8 transform scale-150"/>
        </div>

        {/* More products can be added here */}
      </section>
    </div>
  );
}
