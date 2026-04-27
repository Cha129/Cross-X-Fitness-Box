import { motion } from 'motion/react';

function MissionSection() {
  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-12 md:p-16 text-center transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]"
        >
          <div className="w-16 h-[3px] bg-accent mx-auto mb-8 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight mb-8">
            Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6">
            At Cross X Fitness Box, our mission is to provide a motivating and professional fitness environment where individuals can transform their bodies and improve their lifestyle through expert guidance and structured training programs.
          </p>
          <p className="text-lg text-muted">
            We are committed to fostering a culture of hard work, dedication, and continuous improvement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionSection;
