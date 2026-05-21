import React from 'react';
import { Settings, Zap, Shield, Microscope, Gauge, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Precision Tuning',
    description: 'ECU remapping and performance calibration using dyno-integrated diagnostics.',
    icon: Gauge,
    className: 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/20 to-secondary',
    image: 'https://images.unsplash.com/photo-1611785677708-128fc827a1e0?q=80&w=800'
  },
  {
    title: 'Engine Engineering',
    description: 'Complete rebuilds and blueprinting for maximum reliability and power.',
    icon: Settings,
    className: 'md:col-span-1 md:row-span-1 bg-secondary/50',
  },
  {
    title: 'Elite Detailing',
    description: 'Multi-stage paint correction and graphene ceramic protection.',
    icon: Sparkles,
    className: 'md:col-span-1 md:row-span-2 bg-secondary/30 overflow-hidden',
    image: 'https://images.unsplash.com/photo-1689182358874-fa9a57a95cc9?q=80&w=800'
  },
  {
    title: 'Diagnostic Audit',
    description: 'Deep-level scanning using manufacturer-grade proprietary hardware.',
    icon: Microscope,
    className: 'md:col-span-1 md:row-span-1 bg-secondary/50',
  },
  {
    title: 'Protection Systems',
    description: 'Advanced security and anti-theft tracking for high-value assets.',
    icon: Shield,
    className: 'md:col-span-2 md:row-span-1 bg-gradient-to-r from-secondary to-primary/10',
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Core Competencies</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3 className="text-4xl sm:text-5xl font-display font-bold max-w-2xl leading-tight">
              ADVANCED SOLUTIONS FOR <span className="text-primary italic">PEAK PERFORMANCE.</span>
            </h3>
            <p className="text-foreground/60 max-w-md">
              We provide a comprehensive ecosystem of services designed to enhance and protect the integrity of premium automotive machinery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-3xl p-8 border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden ${service.className}`}
            >
              {service.image && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
              )}
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="text-2xl font-display font-bold mb-2 uppercase tracking-tight">{service.title}</h4>
                <p className="text-foreground/50 text-sm leading-relaxed max-w-[200px]">
                  {service.description}
                </p>
                
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                  Learn More <Zap className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
