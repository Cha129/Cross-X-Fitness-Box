import React from 'react';
import { Dumbbell, Zap, User, Music } from 'lucide-react';

function ProgramsSection() {
  const programs = [
    {
      id: 'strength',
      title: 'Strength Training',
      icon: <Dumbbell size={40} />,
      description: 'Build muscle, increase strength, and transform your physique with structured workouts.',
    },
    {
      id: 'functional',
      title: 'CrossFit / Functional',
      icon: <Zap size={40} />,
      description: 'Improve mobility, endurance, and real-life strength with high-intensity workouts.',
    },
    {
      id: 'personal',
      title: 'Personal Training',
      icon: <User size={40} />,
      description: '1-on-1 coaching with expert trainers for faster and guaranteed results.',
      badge: '🔥 Most Popular',
      isPopular: true,
    },
    {
      id: 'zumba',
      title: 'Zumba',
      icon: <Music size={40} />,
      description: 'Fun, energetic dance workouts to burn calories and stay fit.',
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-24 bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header">OUR PROGRAMS</h2>
        <p className="section-subtitle">
          Explore our range of training programs. Click a card to see workout videos and details.
        </p>
        <div className="decorative-line"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div 
              key={program.id} 
              onClick={() => scrollToSection(program.id)}
              className={`premium-card cursor-pointer group hover:scale-105 ${program.isPopular ? 'border-[#FF2E2E]' : ''}`}
            >
              {program.badge && (
                <div className="absolute -top-3 -right-3 bg-[#FF2E2E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  {program.badge}
                </div>
              )}
              
              <div className="icon-container transition-transform duration-300 group-hover:rotate-12">
                {program.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-4 transition-colors group-hover:text-[#FF2E2E]">
                {program.title}
              </h3>
              <p className="text-[#CCCCCC] text-center mb-8 flex-grow">
                {program.description}
              </p>
              
              <div className="mt-auto">
                <span className="inline-block w-full text-center text-[#FF2E2E] font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
