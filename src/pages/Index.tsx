import { Hero } from "@/components/Hero";
import { HeatToggle } from "@/components/HeatToggle";
import { ShopModule } from "@/components/ShopModule";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Instagram, MapPin, Star, Twitter } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-background/50 border-b border-white/5">
        <div className="text-2xl font-black tracking-tighter uppercase italic">
          Magma<span className="text-accent">Pop</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-widest">
          <a href="#shop" className="hover:text-accent transition-colors">Shop Drops</a>
          <a href="#about" className="hover:text-accent transition-colors">Our Lab</a>
          <a href="#locations" className="hover:text-accent transition-colors">Stockists</a>
        </div>
        <Button size="sm" className="rounded-none bg-accent hover:bg-accent/90 text-white font-bold px-6">
          Cart (0)
        </Button>
      </nav>

      <main>
        <Hero />
        
        <HeatToggle />

        {/* Brand Story Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square">
              <img 
                src="/images/lab-process.png" 
                alt="Fermentation Lab" 
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute -bottom-10 -right-10 bg-accent p-10 hidden lg:block">
                <span className="text-5xl font-black italic tracking-tighter uppercase leading-none">
                  Small <br /> Batch <br /> Only.
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                Born in the <br /><span className="text-stroke">concrete jungle.</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Magma Pop wasn't born in a kitchen—it was born in a garage during a heatwave. We treat flavor like a soundtrack: sometimes you want a slow burn, sometimes you want a distorted kick to the face.
              </p>
              <Button variant="link" className="p-0 h-auto text-lg font-bold uppercase tracking-widest flex items-center gap-2 group">
                Read our story <Star className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <ShopModule />

        {/* Marquee */}
        <div className="bg-accent py-6 overflow-hidden whitespace-nowrap border-y-2 border-white select-none">
          <div className="flex animate-marquee gap-10 text-4xl font-black uppercase italic tracking-tighter text-white">
            <span>Free Shipping over $50</span>
            <span>🌶️</span>
            <span>Limited Batch #042 Selling Fast</span>
            <span>🌶️</span>
            <span>Next Drop 10/31</span>
            <span>🌶️</span>
            <span>Free Shipping over $50</span>
            <span>🌶️</span>
            <span>Limited Batch #042 Selling Fast</span>
            <span>🌶️</span>
            <span>Next Drop 10/31</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="text-4xl font-black tracking-tighter uppercase italic mb-8">
                Magma<span className="text-accent">Pop</span>
              </div>
              <p className="text-muted-foreground max-w-sm mb-8">
                Sign up for drop alerts. We don't spam, we just warn you before the heat hits.
              </p>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent flex-grow"
                />
                <Button className="rounded-none bg-white text-black font-bold px-8 hover:bg-accent transition-colors">
                  Join
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6">Social</h4>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Instagram size={16}/> Instagram</li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Twitter size={16}/> Twitter</li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><MapPin size={16}/> Stockists</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6">Help</h4>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li className="hover:text-white transition-colors cursor-pointer">Shipping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Wholesale</li>
                <li className="hover:text-white transition-colors cursor-pointer">Returns</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            <span>© 2024 Magma Pop Sauce Co.</span>
            <span>Built for the Burn.</span>
          </div>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Index;