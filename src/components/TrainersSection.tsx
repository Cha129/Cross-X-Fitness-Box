function TrainersSection() {
  const trainers = [
    {
      id: 'vikas',
      name: 'Vikas',
      role: 'Certified Personal Trainer',
      tag: 'Expert Coach',
      bio: 'Specializes in strength training and muscle building with 10+ years of experience.',
      image: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/37ab57d0ad9dd3e3332f389d72b21df5.jpg',
      bookLink: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20book%20Vikas%20as%20my%20personal%20trainer'
    },
    {
      id: 'prashant',
      name: 'Prashant',
      role: 'Transformation Specialist',
      tag: 'Fitness Expert',
      bio: 'Expert in functional training and body transformation with proven results.',
      image: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/c0b9aa1de7fe7faea9e45aaadb93e695.png',
      bookLink: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20book%20Prashant%20as%20my%20personal%20trainer'
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-header">Our Expert Trainers</h2>
        <p className="section-subtitle">
          Learn from the best in the industry
        </p>
        <div className="decorative-line"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <img 
                src={trainer.image} 
                alt={`${trainer.name} - ${trainer.role}`} 
                className="w-full h-[300px] object-cover rounded-[8px] mb-[20px]"
              />
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-[24px] font-bold text-white leading-tight">{trainer.name}</h3>
                  <p className="text-[14px] text-[#AAAAAA]">{trainer.role}</p>
                </div>
                <span className="bg-[#FF2E2E] text-white text-[12px] font-bold px-[12px] py-[6px] rounded-[20px] whitespace-nowrap">
                  {trainer.tag}
                </span>
              </div>
              
              <p className="text-[13px] text-[#CCCCCC] leading-[1.6] mb-6 flex-grow">
                {trainer.bio}
              </p>
              
              <a 
                href={trainer.bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF2E2E] text-white py-[12px] px-[32px] rounded-[8px] font-bold text-[14px] transition-all duration-300 text-center w-full mt-auto hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] block"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrainersSection;
