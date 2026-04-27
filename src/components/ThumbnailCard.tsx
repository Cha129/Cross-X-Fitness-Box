import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Map } from 'lucide-react';

export default function ThumbnailCard({ label, thumbnailUrl, isActive, onClick }: { label: string, thumbnailUrl: string, isActive: boolean, onClick: () => void }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center cursor-pointer transition-all duration-300",
        "w-[100px] h-[80px] md:w-[120px] md:h-[90px] lg:w-[140px] lg:h-[100px]",
        "bg-[#1A1A1A] rounded-[8px] p-2",
        "border-[2px]",
        isActive 
          ? "border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.5)] bg-[rgba(255,215,0,0.1)] scale-105 duration-200" 
          : "border-transparent hover:border-[#FFD700] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
      )}
    >
      <div className="w-full h-full relative rounded-[6px] overflow-hidden bg-black/50 flex items-center justify-center">
        {!imgError ? (
          <img
            src={thumbnailUrl}
            alt={`Cross X Fitness Box - ${label}`}
            loading="lazy"
            onError={() => setImgError(true)}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
            )}
          />
        ) : (
          <Map className="w-6 h-6 text-[#CCCCCC] opacity-50" />
        )}
      </div>
      <span
        className={cn(
          "mt-[8px] text-[12px] font-medium text-center whitespace-nowrap transition-colors duration-300",
          isActive ? "text-[#FFD700]" : "text-[#CCCCCC]"
        )}
      >
        {label}
      </span>
    </div>
  );
}
