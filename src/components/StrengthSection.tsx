import React from 'react';

function StrengthSection() {
  const videos = [
    'https://drive.google.com/file/d/1CylihNrt8SjH3hxeW0mTnPrdu-iCxKjY/preview',
    'https://drive.google.com/file/d/1uUVYc5a7L8xuo8iaifHLD3q-CYumzI0m/preview'
  ];

  return (
    <section id="strength" className="py-24 bg-[#0A0A0A] px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Strength Training</h2>
        <div className="w-20 h-1 bg-[#FF2E2E] mb-8 rounded-full"></div>
        <p className="text-[#CCCCCC] mb-12 text-lg max-w-3xl">
          Build foundational power and aesthetic physique with our structured strength training programs. Focus on compound movements and progressive overload.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((url, idx) => (
            <div key={idx} className="aspect-video relative rounded-2xl overflow-hidden bg-black border border-[#333] shadow-2xl">
              <iframe 
                src={url} 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Strength Workout Video ${idx + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a 
              href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Strength%20Training"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF2E2E] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,46,46,0.3)]"
            >
              Start Your Strength Journey
            </a>
        </div>
      </div>
    </section>
  );
}

export default StrengthSection;
