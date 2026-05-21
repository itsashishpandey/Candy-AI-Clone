import React from 'react';
import { Cpu, Activity, Database, Wind } from 'lucide-react';

const specs = [
  {
    label: 'Diagnostic Latency',
    value: '< 0.04ms',
    icon: Cpu,
    detail: 'Proprietary processing engine for real-time telemetry.'
  },
  {
    label: 'Analysis Accuracy',
    value: '99.99%',
    icon: Activity,
    detail: 'Manufacturer-grade sensor synchronization.'
  },
  {
    label: 'Dataset Comparison',
    value: '4.2PB',
    icon: Database,
    detail: 'Comparative analysis against global performance logs.'
  },
  {
    label: 'Airflow Optimization',
    value: '+18%',
    icon: Wind,
    detail: 'Average gain through computational fluid dynamics.'
  }
];

export function TechStats() {
  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 opacity-50" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Precision Engineering</h2>
            <h3 className="text-4xl sm:text-5xl font-display font-bold mb-8 leading-tight">
              WHERE DATA MEETS <br />
              <span className="text-primary italic">DIGITAL PERFECTION.</span>
            </h3>
            <p className="text-foreground/60 mb-10 text-lg leading-relaxed">
              We leverage aerospace-grade diagnostic equipment to analyze every micro-transaction within your vehicle's nervous system. No guess work. Only absolute data.
            </p>
            
            <div className="space-y-6">
              {['Proprietary Diagnostic Algorithms', 'Aerospace Calibration Standards', 'Real-time Telemetry Tracking'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-widest text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="glass p-8 rounded-3xl border-white/5 hover:border-primary/20 transition-colors group">
                <spec.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-display font-bold mb-1 tracking-tighter">{spec.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4">{spec.label}</div>
                <p className="text-xs text-foreground/40 leading-relaxed">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
