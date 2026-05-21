import { motion } from "framer-motion";
import { Button, Input, Textarea, Checkbox } from "@blinkdotnew/ui";
import { Send, Phone, MessageSquare, ShieldCheck, Mail } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Schedule Free Candy AI <br />
            <span className="text-primary italic">Clone Demo Now</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-xl">
            A senior consultant replies within 24 hours — describe your project, timeline, and budget, and let's get building.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 tracking-widest">Phone / WhatsApp</p>
                <p className="font-bold">+1 (555) AI-MINDS</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 tracking-widest">Telegram Support</p>
                <p className="font-bold">@aimindsupport</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 tracking-widest">Email Address</p>
                <p className="font-bold">hello@aiminds.ai</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] -mr-16 -mt-16" />
          
          <form className="space-y-6 relative z-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40 ml-1">Full Name</label>
                <Input placeholder="Type your name..." className="bg-white/5 border-white/10 h-12 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40 ml-1">Email Address</label>
                <Input placeholder="you@domain.com" type="email" className="bg-white/5 border-white/10 h-12 text-white" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40 ml-1">Phone Number</label>
                <Input placeholder="+1..." className="bg-white/5 border-white/10 h-12 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40 ml-1">Telegram (Optional)</label>
                <Input placeholder="@handle" className="bg-white/5 border-white/10 h-12 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-white/40 ml-1">Project Brief</label>
              <Textarea placeholder="Describe your project — features, timeline, budget..." className="bg-white/5 border-white/10 min-h-[120px] text-white" />
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="pt-1">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">NDA Protection</p>
                <p className="text-xs text-white/40 leading-relaxed">Protect your idea by signing our automated NDA before we discuss the full details.</p>
              </div>
            </div>

            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold group">
              Reach Out to Us Now
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
