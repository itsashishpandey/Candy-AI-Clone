import React from 'react';
import { Zap, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white w-6 h-6" fill="currentColor" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter uppercase">
                Velocity<span className="text-primary">Performance</span>
              </span>
            </div>
            <p className="text-foreground/50 max-w-sm mb-8 leading-relaxed">
              The world's leading specialized workshop for premium automotive performance, restoration, and engineering. Precision is our baseline.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'Expertise', 'Process', 'Testimonials', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/50 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/50 leading-relaxed uppercase tracking-widest">
                  808 Performance Ave, <br />
                  Stuttgart, Germany 70435
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/50 uppercase tracking-widest">+49 (0) 711 911 0</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/50 uppercase tracking-widest">engineering@velocity.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">
            © 2024 Velocity Performance Engineering. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.4em] text-foreground/30 hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
