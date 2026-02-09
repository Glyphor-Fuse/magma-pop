import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <img 
          src="/images/hero-bottle.png" 
          alt="Magma Pop Hot Sauce" 
          className="w-full h-full object-cover opacity-60 scale-110 animate-pulse-slow"
        />
      </div>

      <div className="relative z-20 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground rounded-full">
            Batch #042: The Solar Flare
          </span>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.8] mb-8 drop-shadow-2xl">
            Burn <span className="text-accent italic">Better.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-10 text-muted-foreground leading-relaxed">
            Small-batch fermentations that prioritize sensory chaos over pure pain. Seasonal, scarce, and strictly for the bold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-16 px-10 text-lg font-bold rounded-none uppercase tracking-widest bg-accent hover:bg-accent/90 transition-all">
              Secure a Bottle
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-bold rounded-none uppercase tracking-widest border-2 hover:bg-white/5 transition-all">
              Taste the Lab
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-2 opacity-50 text-[10px] tracking-widest uppercase font-bold">
          <span>Habanero</span>
          <span>Ghost Pepper</span>
          <span>Smoked Pineapple</span>
          <span>Fermented Garlic</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
