import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { TechStats } from '@/components/sections/TechStats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechStats />
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 opacity-30" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass p-12 md:p-20 rounded-[3rem] border-white/10 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-[120px] translate-y-1/2 -translate-x-1/2" />
              
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-primary mb-6">Engineered for You</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-10 max-w-3xl mx-auto leading-[1.1]">
                READY TO EXPERIENCE <span className="text-primary italic">THE NEXT LEVEL?</span>
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 text-base font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20">
                  Book Your Diagnostic
                </button>
                <div className="flex items-center gap-4 text-foreground/60">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <span className="font-bold text-xs text-primary">24/7</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Priority Support Line</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
