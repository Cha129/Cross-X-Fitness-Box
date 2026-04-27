import { motion } from 'motion/react';

function FounderSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-border group-hover:shadow-[0_0_30px_rgba(255,46,46,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
              <img 
                src="https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/303f5e8b39f41b50e66c9255381729e2.jpg" 
                alt="Rohith - Founder of Cross X Fitness Box" 
                className="w-full aspect-[4/5] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
                Rohith
              </h2>
              <p className="text-xl font-bold text-accent uppercase tracking-widest">
                Founder & Head Coach
              </p>
              <div className="w-20 h-1 bg-primary mt-6 rounded-full" />
            </div>

            <div className="space-y-6 text-lg">
              <p className="text-white leading-relaxed">
                Rohith, the founder of Cross X Fitness Box, started this fitness journey 7 years ago with a vision to create a powerful and result-driven gym environment in Pragati Nagar. With over 15 years of experience in the fitness industry, Rohith has trained and guided hundreds of individuals in achieving their fitness goals, including weight loss, muscle building, and overall health transformation.
              </p>
              <p className="text-muted leading-relaxed">
                His training philosophy focuses on proper technique, consistency, and personalized coaching. He strongly believes that fitness is not just about lifting weights, but about building discipline, confidence, and a strong mindset.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FounderSection;
