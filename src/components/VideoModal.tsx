import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

function VideoModal({ isOpen, onClose, video }: { isOpen: boolean, onClose: () => void, video: any }) {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl bg-background border-border p-0 overflow-hidden gap-0 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <VisuallyHidden>
          <DialogTitle>{video.title}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full pt-[56.25%] bg-black">
          {/* Placeholder for actual video player */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-primary border-b-[10px] border-b-transparent ml-1" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
            <p className="text-muted-foreground text-sm">Video playback will be integrated here.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default VideoModal;
