import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

function CTASection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-tight">
            Ready to Transform?
          </h2>
          
          <p className="text-xl md:text-2xl text-white font-medium">
            Start your fitness journey with Cross X Fitness Box today
          </p>
          
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] uppercase tracking-wide group"
            >
              <a
                href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20start%20my%20fitness%20journey%20at%20Cross%20X%20Fitness%20Box"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Join Now (WhatsApp)
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
