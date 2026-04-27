import { motion } from 'motion/react';

function VisionSection() {
  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-12 md:p-16 text-center transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,46,46,0.1)]"
        >
          <div className="w-16 h-[3px] bg-accent mx-auto mb-8 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-8">
            Our Vision
          </h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6">
            To become one of the most trusted and result-driven fitness centers in Pragati Nagar, known for quality training, strong community, and real transformations.
          </p>
          <p className="text-lg text-muted">
            We envision a community where fitness is accessible, enjoyable, and a fundamental part of everyday life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default VisionSection;
