function ZumbaVideosSection() {
  const videos = [
    "https://drive.google.com/file/d/1To935l7dtpJxak6ajjNYV-V07Wf0yldO/preview",
    "https://drive.google.com/file/d/1O38u-9KCetjA4fCu3rPEVGLi9dR_f5S2/preview"
  ];

  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-white font-bold mb-4 uppercase">Zumba Workouts</h2>
        <p className="text-[#CCCCCC] text-xl">Fun, high-energy dance workouts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
        {videos.map((url, index) => (
          <div 
            key={index} 
            className="bg-[#1A1A1A] border border-border rounded-xl p-3 flex flex-col hover:border-[#FF2E2E] transition-colors"
          >
            <div className="relative pt-[56.25%] overflow-hidden rounded-lg bg-black">
                <iframe
                src={url}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay"
                allowFullScreen={true}
                title={`Zumba Workout Video ${index + 1}`}
                ></iframe>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF2E2E] text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-cx-red/20"
        >
          Join Now on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ZumbaVideosSection;
