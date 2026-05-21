import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@blinkdotnew/ui";

const faqs = [
  {
    question: "What is a Candy AI Clone and how can it benefit my business?",
    answer: "A Candy AI Clone is a white-label chatbot solution developed by Triple Minds. It allows businesses to launch their own AI-powered chat companion app with features like emotional conversations, NSFW support, and subscription-based monetization—perfect for startups targeting the AI companionship industry."
  },
  {
    question: "Can I fully customize the Candy AI Clone for My Brand?",
    answer: "Absolutely. Our solution is 100% white-label. You can customize the branding, UI/UX, AI personality traits, image generation styles, and monetization parameters to align with your specific market positioning."
  },
  {
    question: "What technologies are used to develop chatbot like Candy AI Clone?",
    answer: "We use a cutting-edge stack including Node.js/Python for backend, React/Next.js for the frontend (PWA), and proprietary LLM fine-tuning techniques. We integrate with leading image/video generation models and use scalable cloud infrastructure."
  },
  {
    question: "How long does it take to launch a fully functional Candy AI Clone?",
    answer: "Our standard delivery timeline is 21 days for a demo-ready, fully functional white-label package. This includes the core platform, payment integrations, and character building engine."
  },
  {
    question: "What are the revenue models available in a Candy AI Clone?",
    answer: "We support multiple high-converting streams: tiered subscriptions, token-based microtransactions, pay-per-view for NSFW content, premium voice calls, and affiliate programs."
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">How can we help?</span>
          <h2 className="text-4xl font-bold text-white mb-4">Quick Answers to Common Questions</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="glass-card border-white/10 rounded-xl px-6">
                <AccordionTrigger className="text-white hover:text-primary transition-colors text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-white/40 mb-4">Still have questions?</p>
          <a href="#contact" className="text-primary font-bold hover:underline">
            Reach out to our senior consultants →
          </a>
        </div>
      </div>
    </section>
  );
}
