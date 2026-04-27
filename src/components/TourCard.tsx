import { cn } from '@/lib/utils';

export default function TourCard({ label, thumbnailImage, description, link360Url }: { label: string, thumbnailImage: string, description: string, link360Url: string }) {
  return (
    <a
      href={link360Url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex flex-col items-center text-center cursor-pointer overflow-hidden",
        "w-[140px] md:w-[170px] lg:w-[200px]",
        "bg-[#1A1A1A] rounded-[12px] p-3",
        "hover:bg-[#2A2A2A] transition-colors duration-300"
      )}
    >
      <div className="w-full aspect-[160/106] rounded-[8px] overflow-hidden mb-3 bg-black/50">
        <img
          src={thumbnailImage}
          alt={`360 View - ${label}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="text-white font-bold text-sm md:text-base mb-1">
        {label}
      </h4>
      <p className="text-[#CCCCCC] text-xs md:text-sm leading-tight">
        {description}
      </p>
    </a>
  );
}
