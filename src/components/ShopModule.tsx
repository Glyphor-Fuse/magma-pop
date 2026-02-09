import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const products = [
  {
    name: "Solar Flare",
    heat: "9/10",
    status: "Limited Stock",
    image: "/images/product-1.png",
    price: "$18.00"
  },
  {
    name: "Acid Rain",
    heat: "4/10",
    status: "Sold Out",
    image: "/images/product-2.png",
    price: "$16.00"
  },
  {
    name: "Midnight Oil",
    heat: "11/10",
    status: "Coming Soon",
    image: "/images/product-3.png",
    price: "$22.00"
  }
];

export const ShopModule = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
              Current <br />Rotation
            </h2>
            <p className="text-muted-foreground text-lg italic">
              Once they’re gone, they’re gone. We never brew the same batch twice.
            </p>
          </div>
          <div className="font-mono text-sm uppercase bg-accent/10 px-6 py-4 border-l-4 border-accent">
            Next Drop: October 31st @ Midnight
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <Card className="bg-white/5 border-white/10 rounded-none overflow-hidden h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${product.status === 'Sold Out' ? 'grayscale opacity-50' : ''}`}
                    />
                    {product.status === 'Sold Out' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                        <span className="text-4xl font-black uppercase tracking-tighter -rotate-12 border-4 border-white px-4">Sold Out</span>
                      </div>
                    )}
                    <Badge className="absolute top-4 left-4 bg-accent text-white font-bold rounded-none">
                      {product.heat} HEAT
                    </Badge>
                  </div>
                  <div className="p-8 border-t border-white/10 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{product.name}</h3>
                      <p className="text-sm font-mono opacity-60 mb-6 italic">{product.status}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black tracking-tighter italic">{product.price}</span>
                      <button className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border-2 transition-all ${product.status !== 'Sold Out' ? 'hover:bg-accent hover:border-accent' : 'opacity-20 cursor-not-allowed'}`}>
                        {product.status === 'Sold Out' ? 'Notified' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopModule;
