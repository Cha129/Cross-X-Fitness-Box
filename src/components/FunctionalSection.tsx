import React from 'react';

function FunctionalSection() {
  const videos = [
    'https://drive.google.com/file/d/1ZK2tWJuWpBtrT07uRMqALgnjp3lJHcOE/preview',
    'https://drive.google.com/file/d/1Mmn1xmTUrLqtpLi1ITbXgfX2JdNwGdgg/preview',
    'https://drive.google.com/file/d/1CsPg022Neh41v0JRiWLelTtk4UUfGZZZ/preview'
  ];

  return (
    <section id="functional" className="py-24 bg-black px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">CrossFit / Functional Training</h2>
        <div className="w-20 h-1 bg-[#FF2E2E] mb-8 rounded-full"></div>
        <p className="text-[#CCCCCC] mb-12 text-lg max-w-3xl">
          Improve your agility, balance, and explosive power. Our functional area is equipped for high-intensity training that prepares you for real-world movement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((url, idx) => (
            <div key={idx} className="aspect-video relative rounded-2xl overflow-hidden bg-black border border-[#333] shadow-2xl">
              <iframe 
                src={url} 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Functional Workout Video ${idx + 1}`}
              ></iframe>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:text-left">
            <a 
              href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Functional%20Training"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF2E2E] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,46,46,0.3)]"
            >
              Join Functional Classes
            </a>
        </div>
      </div>
    </section>
  );
}

export default FunctionalSection;
