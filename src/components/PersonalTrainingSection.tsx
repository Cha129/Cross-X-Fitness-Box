import React from 'react';

function PersonalTrainingSection() {
  const videoUrl = 'https://drive.google.com/file/d/1C1Nxm0v3vULgu2QsHbEnaQ2zhT3gynw4/preview';

  return (
    <section id="personal" className="py-24 bg-[#0A0A0A] px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Personal Training</h2>
        <div className="w-20 h-1 bg-[#FF2E2E] mb-8 rounded-full"></div>
        <p className="text-[#CCCCCC] mb-12 text-lg max-w-3xl">
          Get personalized attention and a custom workout plan tailored specifically to your body and goals. Work 1-on-1 with our expert coaches to maximize your results.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-video relative rounded-2xl overflow-hidden bg-black border border-[#333] shadow-2xl">
            <iframe 
              src={videoUrl} 
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Personal Training Overview"
            ></iframe>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/5">
              <h4 className="text-[#FFD700] font-bold text-xl mb-2">Custom Nutrition Plan</h4>
              <p className="text-sm text-[#AAAAAA]">Fuel your workouts with a diet that works for you, not against you.</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/5">
              <h4 className="text-[#FFD700] font-bold text-xl mb-2">Technique Correction</h4>
              <p className="text-sm text-[#AAAAAA]">Master every movement safely with constant feedback from your trainer.</p>
            </div>
            
            <a 
              href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20book%20a%20Personal%20Trainer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF2E2E] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all w-full text-center shadow-[0_0_20px_rgba(255,46,46,0.3)]"
            >
              Book Your Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalTrainingSection;
