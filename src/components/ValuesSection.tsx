import { motion } from 'motion/react';
import { Target, Star, Users, Activity } from 'lucide-react';
import React from 'react';

function ValuesSection() {
  const values = [
    {
      id: 1,
      title: "Discipline",
      description: "Consistency is the key to results. We instill habits that last a lifetime.",
      icon: <Target className="w-10 h-10 text-white mb-6" />
    },
    {
      id: 2,
      title: "Excellence",
      description: "We provide top-tier coaching, equipment, and facilities for optimal performance.",
      icon: <Star className="w-10 h-10 text-white mb-6" />
    },
    {
      id: 3,
      title: "Community",
      description: "A supportive environment where everyone pushes each other to be better.",
      icon: <Users className="w-10 h-10 text-white mb-6" />
    },
    {
      id: 4,
      title: "Transformation",
      description: "Real results through structured programs and dedicated effort.",
      icon: <Activity className="w-10 h-10 text-white mb-6" />
    }
  ];

  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Core Values
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,46,46,0.3)] hover:border-primary/50 group"
            >
              <div className="w-20 h-20 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4 uppercase tracking-wide">
                {value.title}
              </h3>
              <p className="text-white leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
