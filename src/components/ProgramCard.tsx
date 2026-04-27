import { motion } from 'motion/react';
import React from 'react';

interface Program {
    name: string;
    icon: React.ReactNode;
    description: string;
}

function ProgramCard({ program, onClick, index }: { program: Program, onClick: () => void, index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-card border border-border rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,46,46,0.5)] hover:border-t-[3px] hover:border-t-accent flex flex-col h-full"
    >
      <div className="flex flex-col items-center text-center space-y-4 flex-grow">
        <div className="w-20 h-20 rounded-xl bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          <div className="text-accent">
            {program.icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-foreground transition-colors duration-300">
          {program.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {program.description}
        </p>
        <div className="pt-4 mt-auto">
          <span className="text-accent font-semibold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
            View Videos 
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default ProgramCard;
