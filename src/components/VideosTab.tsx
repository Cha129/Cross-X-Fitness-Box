import { ArrowRight } from 'lucide-react';
import VideoGrid from './VideoGrid';

function VideosTab({ selectedProgram }: { selectedProgram: any }) {
  const sectionTitle = selectedProgram 
    ? `${selectedProgram.name} Training Videos` 
    : 'Training Videos';

  return (
    <div className="animate-in fade-in duration-500 w-full rounded-2xl px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <h3 className="text-2xl font-bold text-white text-center">
          {sectionTitle}
        </h3>
        
        <VideoGrid />

        <div className="flex justify-center w-full">
          <a
            href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FF2E2E] text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-cx-red/20"
          >
            Join Now on WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideosTab;
