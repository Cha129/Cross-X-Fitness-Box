function TrainingProgramsSection() {
  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">Our Training Programs</h2>
        <p className="text-[#CCCCCC] text-base md:text-lg">Choose your fitness journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Card 1 - Strength Training */}
        <div className="bg-[#1A1A1A] border border-border rounded-3xl p-8 flex flex-col h-full hover:border-[#FFD700] transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Strength Training</h3>
          <p className="text-[#CCCCCC] mb-8 leading-relaxed">
            Build muscle, increase strength, and transform your physique with structured workouts.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1ZK2tWJuWpBtrT07uRMqALgnjp3lJHcOE/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Strength Training Video 1"
              ></iframe>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1Mmn1xmTUrLqtpLi1ITbXgfX2JdNwGdgg/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Strength Training Video 2"
              ></iframe>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1CsPg022Neh41v0JRiWLelTtk4UUfGZZZ/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Strength Training Video 3"
              ></iframe>
            </div>
          </div>
          <a 
            href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20the%20Strength%20Training%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#FF2E2E] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] mt-auto"
          >
            Join Strength Program
          </a>
        </div>

        {/* Card 2 - Personal Training */}
        <div className="bg-[#1A1A1A] border border-border rounded-3xl p-8 flex flex-col h-full hover:border-[#FFD700] transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Personal Training</h3>
          <p className="text-[#CCCCCC] mb-8 leading-relaxed">
            1-on-1 coaching with expert trainers for faster and guaranteed results.
          </p>
          <div className="w-full aspect-video relative rounded-xl overflow-hidden bg-black mb-8">
            <iframe 
                src="https://drive.google.com/file/d/1C1Nxm0v3vULgu2QsHbEnaQ2zhT3gynw4/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Personal Training Video"
              ></iframe>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/6df5d4aa9fb6c9788a9b46e8f4a87002.jpg" 
                alt="Vikas - Certified Personal Trainer" 
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <div className="text-white font-bold">Vikas</div>
              <div className="text-[#CCCCCC] text-xs">Certified PT</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <img 
                src="https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/d8ec9dd50e45021b23c276d0cb399c81.png" 
                alt="Prashant - Fitness Specialist" 
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <div className="text-white font-bold">Prashant</div>
              <div className="text-[#CCCCCC] text-xs">Transformation Expert</div>
            </div>
          </div>
          <a 
            href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20book%20a%20personal%20trainer"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#FF2E2E] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] mt-auto"
          >
            Book Personal Trainer
          </a>
        </div>

        {/* Card 3 - Functional Training */}
        <div className="bg-[#1A1A1A] border border-border rounded-3xl p-8 flex flex-col h-full hover:border-[#FFD700] transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Functional Training</h3>
          <p className="text-[#CCCCCC] mb-8 leading-relaxed">
            Improve mobility, endurance, and real-life strength with high-intensity workouts.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1CylihNrt8SjH3hxeW0mTnPrdu-iCxKjY/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Functional Training Video 1"
              ></iframe>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1uUVYc5a7L8xuo8iaifHLD3q-CYumzI0m/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Functional Training Video 2"
              ></iframe>
            </div>
          </div>
          <a 
            href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Functional%20Training"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#FF2E2E] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] mt-auto"
          >
            Join Functional Training
          </a>
        </div>

        {/* Card 4 - Zumba */}
        <div className="bg-[#1A1A1A] border border-border rounded-3xl p-8 flex flex-col h-full hover:border-[#FFD700] transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-4">Zumba</h3>
          <p className="text-[#CCCCCC] mb-8 leading-relaxed">
            Fun, energetic dance workouts to burn calories and stay fit.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1To935l7dtpJxak6ajjNYV-V07Wf0yldO/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Zumba Video 1"
              ></iframe>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1O38u-9KCetjA4fCu3rPEVGLi9dR_f5S2/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Zumba Video 2"
              ></iframe>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden bg-black">
              <iframe 
                src="https://drive.google.com/file/d/1TDzCh9RM7_jQQ2m4FN6dz9TOmWqJc8jH/preview" 
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Zumba Video 3"
              ></iframe>
            </div>
          </div>
          <a 
            href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Zumba%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#FF2E2E] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] mt-auto"
          >
            Join Zumba Class
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrainingProgramsSection;
