import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1756222805146-e17e9d7924a4?q=80&w=2000"
          alt="Luxury car engine service"
          className="w-full h-full object-cover opacity-40 scale-105 animate-in zoom-in duration-[10s] ease-out fill-mode-forwards"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 carbon-overlay opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Elite Performance Engineering
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            PRECISION CARE FOR <span className="text-primary text-glow italic">THE EXTRAORDINARY.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/60 mb-10 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Specialized automotive engineering and restoration exclusively for high-performance supercars and luxury imports. Where data meets craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-base font-bold uppercase tracking-wider group">
              Schedule Appointment
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold uppercase tracking-wider glass border-white/10 hover:bg-white/5">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Process
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Overlay for Desktop */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-10 animate-in fade-in slide-in-from-right duration-1000 delay-500">
        <div className="glass p-6 rounded-2xl border-white/5 flex gap-12">
          <div>
            <div className="text-3xl font-display font-bold text-primary">2,400+</div>
            <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-1">Engines Tuned</div>
          </div>
          <div className="w-[1px] bg-white/10" />
          <div>
            <div className="text-3xl font-display font-bold text-primary">15+</div>
            <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-1">Master Engineers</div>
          </div>
          <div className="w-[1px] bg-white/10" />
          <div>
            <div className="text-3xl font-display font-bold text-primary">99.9%</div>
            <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-1">Precision Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
