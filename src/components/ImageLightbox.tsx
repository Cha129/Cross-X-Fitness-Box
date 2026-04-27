import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Image {
  url: string;
  alt: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: Image[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

function ImageLightbox({ isOpen, onClose, images, currentIndex, onNavigate }: ImageLightboxProps) {
  if (!images || images.length === 0) return null;

  const handlePrevious = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] bg-black/95 border-none p-0">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 z-50 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain"
            />
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="absolute right-4 z-50 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ImageLightbox;
