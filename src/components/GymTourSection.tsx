function GymTourSection() {
  const videos = [
    "1HDfEEnbv_MIP50X2L36Xhb4hUkVZZWBk",
    "1uZ-vb41pE-85eqEDeyzUewFBYD2dVKOq"
  ];

  return (
    <section className="bg-[#0B0B0B] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] text-white font-bold text-center mb-2">Gym Tour</h2>
        <p className="text-[16px] text-[#CCCCCC] text-center mb-12">Take a virtual walkthrough of our premium facility</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((id, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] border-2 border-transparent rounded-[12px] p-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:-translate-y-2 flex flex-col"
            >
              <iframe
                src={`https://drive.google.com/file/d/${id}/preview`}
                className="w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-[8px] border-0"
                allow="autoplay"
                allowFullScreen={true}
                title={`Gym Tour Video ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GymTourSection;
