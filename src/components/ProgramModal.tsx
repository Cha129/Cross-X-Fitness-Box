import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, PlayCircle } from 'lucide-react';
import PricingModal from './PricingModal';

function ProgramModal({ isOpen, onClose, program }: { isOpen: boolean, onClose: () => void, program: any }) {
  if (!program) return null;

  const isPersonalTraining = program.name === 'Personal Training';

  if (isPersonalTraining) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <PricingModal onClose={onClose} />
      </Dialog>
    );
  }

  const videosByProgram: Record<string, any[]> = {
    'Strength Training': [
      { id: 1, title: 'Deadlift Technique', thumbnail: 'https://img.youtube.com/vi/op9kVnSso6Q/maxresdefault.jpg', videoId: 'op9kVnSso6Q' },
      { id: 2, title: 'Squat Form Guide', thumbnail: 'https://img.youtube.com/vi/ultWZbUMPL8/maxresdefault.jpg', videoId: 'ultWZbUMPL8' },
      { id: 3, title: 'Bench Press Basics', thumbnail: 'https://img.youtube.com/vi/rT7DgCr-3pg/maxresdefault.jpg', videoId: 'rT7DgCr-3pg' },
      { id: 4, title: 'Pull-Up Progression', thumbnail: 'https://img.youtube.com/vi/eGo4IYlbE5g/maxresdefault.jpg', videoId: 'eGo4IYlbE5g' }
    ],
    'CrossFit / Functional': [
      { id: 1, title: 'Box Jump Tutorial', thumbnail: 'https://img.youtube.com/vi/NBY9-kTuHEk/maxresdefault.jpg', videoId: 'NBY9-kTuHEk' },
      { id: 2, title: 'Battle Ropes Workout', thumbnail: 'https://img.youtube.com/vi/5hKFco_8KJE/maxresdefault.jpg', videoId: '5hKFco_8KJE' },
      { id: 3, title: 'Burpee Variations', thumbnail: 'https://img.youtube.com/vi/TU8QYVW0gDU/maxresdefault.jpg', videoId: 'TU8QYVW0gDU' },
      { id: 4, title: 'Kettlebell Swings', thumbnail: 'https://img.youtube.com/vi/YSxHifyI6s8/maxresdefault.jpg', videoId: 'YSxHifyI6s8' }
    ],
    'Zumba': [
      { id: 1, title: 'Zumba Dance Workout', thumbnail: 'https://img.youtube.com/vi/oe4NbFQXOqQ/maxresdefault.jpg', videoId: 'oe4NbFQXOqQ' },
      { id: 2, title: 'Cardio Dance Party', thumbnail: 'https://img.youtube.com/vi/Hq7Wj_jX0pU/maxresdefault.jpg', videoId: 'Hq7Wj_jX0pU' },
      { id: 3, title: 'Latin Dance Fitness', thumbnail: 'https://img.youtube.com/vi/v8VYpP5xgcw/maxresdefault.jpg', videoId: 'v8VYpP5xgcw' },
      { id: 4, title: 'Group Zumba Class', thumbnail: 'https://img.youtube.com/vi/Wd8N0cMOQ4U/maxresdefault.jpg', videoId: 'Wd8N0cMOQ4U' }
    ]
  };

  const videos = videosByProgram[program.name] || [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-card border-border shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground flex items-center justify-between">
            <span className="flex items-center gap-3">
              <span className="text-accent">{program.icon}</span>
              {program.name} Videos
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-all duration-300 text-muted-foreground hover:text-accent hover:bg-black"
            >
              <X className="w-6 h-6" />
            </button>
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 border border-border hover:border-accent"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                <h4 className="text-white font-semibold text-lg group-hover:text-accent transition-colors">
                  {video.title}
                </h4>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.5)] transform scale-90 group-hover:scale-100 transition-transform">
                  <PlayCircle className="w-8 h-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProgramModal;
