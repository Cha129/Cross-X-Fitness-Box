interface Trainer {
  id?: string;
  image: string;
  name: string;
  experience: string;
  specialization: string;
  bio: string;
  programs?: string[];
}

function TrainerCard({ trainer }: { trainer: Trainer }) {
  // Validate if trainer object exists and has required properties
  if (
    !trainer ||
    !trainer.name ||
    !trainer.image ||
    !trainer.experience ||
    !trainer.specialization ||
    !trainer.bio
  ) {
    console.warn('TrainerCard: Invalid or missing trainer data detected', trainer);
    return (
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-20 h-20 bg-muted/20 rounded-full mb-4 flex items-center justify-center border border-[#2A2A2A]">
          <span className="text-[#CCCCCC] text-xs">No Image</span>
        </div>
        <p className="text-[#CCCCCC] font-medium">Trainer data unavailable</p>
        <p className="text-xs text-[#CCCCCC]/60 mt-2">Missing required profile information.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 flex flex-col h-full hover:border-[#FFD700] transition-all duration-300 group">
      <div className="w-full h-[280px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden mb-6 bg-muted/10">
        <img 
          src={trainer.image} 
          alt={trainer.name} 
          className="w-full h-full object-cover object-top filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="flex-grow flex flex-col">
        <h3 className="text-[#FFFFFF] font-bold text-[18px] mb-1">{trainer.name}</h3>
        <p className="text-[#FFD700] text-[14px] font-bold mb-2">{trainer.specialization}</p>
        <p className="text-[#CCCCCC] text-[12px] uppercase tracking-wider mb-4">
          {trainer.experience}
        </p>
        <p className="text-[#CCCCCC] text-[14px] leading-[1.6] mt-auto">{trainer.bio}</p>
      </div>
    </div>
  );
}

export default TrainerCard;
