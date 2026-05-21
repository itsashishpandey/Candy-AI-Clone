import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Globe, Zap, MousePointer2, Search, Settings } from "lucide-react";
import { Button } from "@blinkdotnew/ui";

export function MobilePWA() {
  return (
    <section className="py-24 px-6 bg-secondary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass-card rounded-[3rem] p-4 border-white/20 shadow-2xl max-w-[320px] mx-auto overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-20" />
               <img 
                 src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" 
                 alt="Mobile PWA Interface"
                 className="rounded-[2.5rem] w-full h-[600px] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex flex-col justify-end p-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-xl">
                   <Smartphone className="text-white w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">PWA Experience</h3>
                 <p className="text-white/60 text-xs">Zero friction, instant access directly from browser.</p>
               </div>
            </div>
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
          </motion.div>

          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Platform Compatibility</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Web-Based Candy AI App <br />
              <span className="text-primary italic">Fit For Android & iOS</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Instead of fighting store policies, we build progressive, mobile-optimized web apps that feel just like native mobile apps. Users can launch your chatbot directly from their browser and save its icon to their home screen.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, title: "100% Policy Freedom", desc: "No App Store rejections or fees." },
                { icon: <Globe className="w-5 h-5" />, title: "Universal Reach", desc: "One link for all devices globally." },
                { icon: <Zap className="w-5 h-5" />, title: "Zero Friction", desc: "Instant access, no download needed." },
                { icon: <MousePointer2 className="w-5 h-5" />, title: "App-Like Feel", desc: "Fully responsive and scalable." },
                { icon: <Search className="w-5 h-5" />, title: "SEO Ready", desc: "Highly discoverable on Google." },
                { icon: <Settings className="w-5 h-5" />, title: "Complete Control", desc: "You own the platform entirely." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Expertise in Candy AI <br />
            <span className="text-primary italic">Chatbot Development</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            It takes a lot more than just an application to succeed. We provide the full package for a successful launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: "01", title: "Tested Features", desc: "Every feature is thoroughly tested with our 5-stage process to deliver reliability." },
            { id: "02", title: "Proven Business Model", desc: "Launch and generate revenue with the proven business model of Candy.AI." },
            { id: "03", title: "Instant Launch", desc: "Don't wait; get ready to launch and lead the industry with new opportunities." },
            { id: "04", title: "Cost Saving", desc: "Get a custom app for $15k-$42k. White label starts from just $5k." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border-white/10 group hover:border-primary/40 transition-all">
              <span className="text-5xl font-black text-white/5 mb-6 block group-hover:text-primary/20 transition-colors">{item.id}</span>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
