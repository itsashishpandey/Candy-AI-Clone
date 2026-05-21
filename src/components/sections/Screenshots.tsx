import { motion } from "framer-motion";
import { Button } from "@blinkdotnew/ui";
import { MessageSquare, Layout, Sparkles, PieChart, Settings, Globe, MoreHorizontal } from "lucide-react";

const screens = [
  {
    id: "chat-stefanie",
    title: "Chat Interface",
    description: "AI companion Stefanie showing emotion-driven conversation starters and gallery preview",
    icon: <MessageSquare className="w-4 h-4" />,
    url: "https://images.unsplash.com/photo-1620712943543-bcc4628c9bb5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "generator",
    title: "AI Generator",
    description: "AI image & video generator with outfit, pose and background presets and prompt builder",
    icon: <Sparkles className="w-4 h-4" />,
    url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "analytics",
    title: "Admin Analytics",
    description: "Analytics dashboard with ARPU, total revenue, and active-user KPIs",
    icon: <PieChart className="w-4 h-4" />,
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "geo",
    title: "Geo Analytics",
    description: "Comparing coins purchased vs spent by country and feature",
    icon: <Globe className="w-4 h-4" />,
    url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
  }
];

export function Screenshots() {
  return (
    <section className="py-24 px-6 bg-secondary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Take a Look Inside</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Screenshots of A <br />
              Platform <span className="text-primary italic">Similar to Candy AI</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-xs text-white/40 uppercase">More Screens to show</div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Schedule Full Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-3xl overflow-hidden border-white/10 hover:border-primary/30 transition-all">
                 <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                   <div className="flex items-center gap-3">
                     <div className="text-primary">{screen.icon}</div>
                     <span className="text-xs font-medium text-white/60 tracking-tight">candyai.app/admin/{screen.id}</span>
                   </div>
                   <div className="flex gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-white/10" />
                     <div className="w-2 h-2 rounded-full bg-white/10" />
                     <div className="w-2 h-2 rounded-full bg-white/10" />
                   </div>
                 </div>
                 <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={screen.url} 
                      alt={screen.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <h3 className="text-xl font-bold text-white mb-2">{screen.title}</h3>
                      <p className="text-white/60 text-sm">{screen.description}</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm italic mb-8">
            "We were the marketing partner of Candy.ai (2022-2024). We know exactly what works."
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center border-y border-white/5 py-8">
             {['Verified Traffic', 'SEO Management', '60% Signup Uplift', 'Architecture Design'].map((label, i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                 </div>
                 <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
