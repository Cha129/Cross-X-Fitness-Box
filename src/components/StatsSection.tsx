import { motion } from 'motion/react';
import { Award, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import React from 'react';

function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-12 h-12 text-accent mb-6" />
    },
    {
      id: 2,
      number: "7+",
      label: "Years of Cross X Fitness Box",
      icon: <Building2 className="w-12 h-12 text-accent mb-6" />
    },
    {
      id: 3,
      number: "500+",
      label: "Transformations",
      icon: <TrendingUp className="w-12 h-12 text-accent mb-6" />
    },
    {
      id: 4,
      number: "Certified",
      label: "Trainer",
      icon: <CheckCircle className="w-12 h-12 text-accent mb-6" />
    }
  ];

  return (
    <section className="py-24 bg-background relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,46,46,0.3)] hover:border-primary/50 group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-accent mb-2 tracking-tight">
                {stat.number}
              </h3>
              <p className="text-white font-medium text-lg uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
