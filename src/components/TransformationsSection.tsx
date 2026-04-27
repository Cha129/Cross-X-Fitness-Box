function TransformationsSection() {
  const transformations = [
    "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/0b5bf459a02db814ea67acfc4ca6b558.png",
    "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/088c750358a7716bb257a58b2cd84aca.png",
    "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/2c714a1dd264d7fa93fe39d76e4b3bcf.png",
    "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/c006927f3c17c6183afdfcecb6973ed0.png",
    "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/c06f413f28fbf17195253abbeef81b9b.png"
  ];

  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl text-white font-bold text-center mb-4 uppercase">Client Transformations</h2>
      <p className="text-[#CCCCCC] text-xl text-center mb-12">Real Results from Our Members</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1600px] mx-auto">
        {transformations.map((src, index) => (
          <div 
            key={index} 
            className="relative aspect-square w-full overflow-hidden rounded-[12px] bg-[#1A1A1A] shadow-[0_4px_12px_rgba(0,0,0,0.3)] group cursor-pointer"
          >
            <img 
              src={src} 
              alt={`Client Transformation ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center">
              <span className="text-white font-bold text-[18px] tracking-widest uppercase text-center px-4">
                Before & After
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TransformationsSection;
