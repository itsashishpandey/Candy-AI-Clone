import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "The level of technical detail at Velocity is unlike anything I've seen. They don't just fix cars; they optimize them using data I didn't even know was accessible.",
    author: "Marcus Sterling",
    role: "Collector & Racing Enthusiast",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    content: "They treated my Aventador with surgical precision. The performance gains after their stage 2 tuning were immediate and perfectly balanced for daily driving.",
    author: "Elena Rossi",
    role: "Tech Entrepreneur",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    content: "A masterclass in automotive service. From the initial diagnostic report to the final ceramic coating, the communication was professional and transparent.",
    author: "Julian Thorne",
    role: "CEO, Thorne Logistics",
    avatar: "https://i.pravatar.cc/150?u=julian"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Client Relations</h2>
          <h3 className="text-4xl sm:text-5xl font-display font-bold">
            TRUSTED BY THE <span className="text-primary italic">ELITE.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-10 rounded-3xl border-white/5 relative group hover:bg-white/[0.07] transition-all">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-primary/20 transition-colors" />
              
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 relative z-10 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <div className="font-bold text-sm uppercase tracking-widest">{t.author}</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
