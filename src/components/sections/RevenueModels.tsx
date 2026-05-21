import { motion } from "framer-motion";
import { CreditCard, TrendingUp, Image, Mic, Users, Heart, Zap, ShieldCheck, Globe } from "lucide-react";

const models = [
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: "Monthly & Tiered Subscriptions",
    description: "Charge users for premium access to romantic, naughty, or emotionally supportive AI characters.",
    details: "Offer multi-tier plans (Basic, Gold, VIP). Unlock NSFW features, voice chat, memory mode, and custom avatars."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Pay-Per-Chat / Token-Based",
    description: "Let users buy credits or tokens to unlock features on-demand—just like popular games or dating apps.",
    details: "Charge per message, voice call, or NSFW image. Each message they send is a dollar in your bank."
  },
  {
    icon: <Image className="w-6 h-6 text-primary" />,
    title: "NSFW Image & Video Generator",
    description: "Offer AI-generated spicy images or role-play videos tailored to the user's preferences.",
    details: "Pay-per-image/video. Custom kinks, avatars, and scenes = ultra engagement. 90% higher engagement."
  },
  {
    icon: <Mic className="w-6 h-6 text-primary" />,
    title: "Voice & Telephonic Calls",
    description: "Take intimacy to the next level with real-time voice conversations.",
    details: "Charge per minute or session. Users feel like they're talking to a real partner. High margins."
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Affiliate & Referral Program",
    description: "Turn your users into promoters with in-app referral rewards.",
    details: "Reward users who bring friends. Bonus tokens, free chats, or revenue share. Organic growth."
  }
];

export function RevenueModels() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Profitable Revenue Models for Your <br />
            <span className="text-primary italic">Candy AI Clone</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            At Triple Minds, we don’t just deliver a chatbot—we hand you a revenue-generating machine. Unlock a proven business model in the fast-growing AI companionship space.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {models.slice(0, 3).map((model, i) => (
            <ModelCard key={i} {...model} i={i} />
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
           {models.slice(3).map((model, i) => (
            <ModelCard key={i+3} {...model} i={i+3} />
          ))}
        </div>

        <div className="mt-20 glass-card rounded-3xl p-8 md:p-12 border-primary/20 bg-primary/5 overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mb-40 -mr-40" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase mb-4">
                Bonus Service
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Adult business registration, handled</h3>
              <p className="text-white/60 mb-8">
                Beyond building your Candy AI Clone, we help you get fully registered and live-ready — company formation, high-risk merchant approvals, and payment gateway onboarding.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "LLC & offshore company formation",
                  "High-risk merchant account approvals",
                  "Adult-friendly legal & compliance paperwork"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <ShieldCheck className="text-primary w-5 h-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                 {['One-Call Setup', 'Global Coverage'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-white/70 text-sm">
                    <Globe className="text-primary w-4 h-4" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-8 text-center flex-col">
                <div className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4">Adult Biz Status</div>
                <div className="text-4xl font-black text-primary mb-2">APPROVED</div>
                <div className="text-sm text-white/60 mb-8">Legal · Merchant · Live</div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  {['LLC', 'KYC', 'High-Risk', 'GDPR'].map((tag) => (
                    <div key={tag} className="border border-white/20 py-2 rounded font-mono text-xs text-white/60 uppercase">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full blur-xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full blur-2xl opacity-30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModelCard({ icon, title, description, details, i }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="glass-card p-8 rounded-2xl border-white/10 hover:border-primary/40 transition-all group"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="text-xs text-white/40 border-t border-white/5 pt-4 italic">
        {details}
      </div>
    </motion.div>
  );
}
