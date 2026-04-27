import React from 'react';

function ZumbaSection() {
  const videos = [
    'https://drive.google.com/file/d/1To935l7dtpJxak6ajjNYV-V07Wf0yldO/preview',
    'https://drive.google.com/file/d/1O38u-9KCetjA4fCu3rPEVGLi9dR_f5S2/preview',
    'https://drive.google.com/file/d/1TDzCh9RM7_jQQ2m4FN6dz9TOmWqJc8jH/preview'
  ];

  return (
    <section id="zumba" className="py-24 bg-black px-4 sm:px-6 lg:px-8 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Zumba & Dance Fitness</h2>
        <div className="w-20 h-1 bg-[#FF2E2E] mb-8 rounded-full"></div>
        <p className="text-[#CCCCCC] mb-12 text-lg max-w-3xl">
          Ditch the workout, join the party! Burn hundreds of calories while dancing to the hottest beats. High energy, high fun, and zero judgment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((url, idx) => (
            <div key={idx} className="aspect-video relative rounded-2xl overflow-hidden bg-black border border-[#333] shadow-2xl">
              <iframe 
                src={url} 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Zumba Session Video ${idx + 1}`}
              ></iframe>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <a 
              href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Zumba%20classes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF2E2E] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,46,46,0.3)]"
            >
              Join the Zumba Party
            </a>
        </div>
      </div>
    </section>
  );
}

export default ZumbaSection;
