import { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Flame, Star, Zap } from 'lucide-react';

export const HeatToggle = () => {
  const [value, setValue] = useState([75]);

  useEffect(() => {
    const root = document.documentElement;
    if (value[0] < 33) {
      root.style.setProperty("--accent", "142 70% 50%"); // Acid Green
      root.style.setProperty("--primary", "142 70% 5%");
    } else if (value[0] < 66) {
      root.style.setProperty("--accent", "24 95% 53%"); // Bright Orange
      root.style.setProperty("--primary", "24 95% 5%");
    } else {
      root.style.setProperty("--accent", "0 100% 50%"); // Magma Red
      root.style.setProperty("--primary", "0 100% 5%");
    }
  }, [value]);

  return (
    <section className="py-24 px-6 bg-accent/5 border-y border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center justify-center gap-4">
          Adjust Your Threshold <Zap className="fill-accent text-accent" />
        </h2>
        
        <div className="relative pt-12 pb-8">
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
            className="cursor-pointer"
          />
          <div className="flex justify-between mt-6 px-2">
            <div className={`flex flex-col items-center gap-2 transition-all ${value[0] < 33 ? "scale-125 text-accent" : "opacity-40"}`}>
              <Star size={32} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Mild</span>
            </div>
            <div className={`flex flex-col items-center gap-2 transition-all ${value[0] >= 33 && value[0] < 66 ? "scale-125 text-accent" : "opacity-40"}`}>
              <Flame size={32} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Medium</span>
            </div>
            <div className={`flex flex-col items-center gap-2 transition-all ${value[0] >= 66 ? "scale-125 text-accent" : "opacity-40"}`}>
              <Flame size={32} strokeWidth={3} className="animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Magma</span>
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm font-mono uppercase tracking-[0.3em] opacity-60">
          Global page heat: {value[0]}% Intensity
        </p>
      </div>
    </section>
  );
};

export default HeatToggle;
