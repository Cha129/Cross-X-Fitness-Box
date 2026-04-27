import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Lazy loaded image component
const LazyImage = ({ src, alt, category, onClick }: { src: string, alt: string, category: string, onClick: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-3 group">
      <div 
        ref={imgRef} 
        className="relative aspect-square overflow-hidden rounded-xl bg-card border border-border shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:border-accent transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        {isInView && (
          <>
            <img
              src={src}
              alt={alt}
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} filter grayscale-[0.2] group-hover:grayscale-0`}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-black bg-[#FFD700] font-bold tracking-widest uppercase text-sm px-8 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                View
              </span>
            </div>
          </>
        )}
        {!isLoaded && (
          <div className="absolute inset-0 bg-card animate-pulse" />
        )}
      </div>
      <p className="text-white font-bold text-center uppercase tracking-widest text-sm opacity-80 group-hover:opacity-100 transition-opacity">
        {category}
      </p>
    </div>
  );
};

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      url: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/373c91290876de593b95a1d2af0946d2.png',
      category: 'Gym',
      alt: 'Gym storefront exterior with red frame'
    },
    {
      id: 2,
      url: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/fc325cc818502911d7b17e92adb23f25.png',
      category: 'Workouts',
      alt: 'Gym interior with cardio equipment'
    },
    {
      id: 3,
      url: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/8eaef8120081cd168a33b787a26f0877.png',
      category: 'Workouts',
      alt: 'Gym floor with treadmills'
    },
    {
      id: 4,
      url: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/bc3c427f5a2e4a8a96b8c5ab8e8e9451.png',
      category: 'Gym',
      alt: 'Gym interior with heavy lifting equipment'
    },
    {
      id: 5,
      url: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/2fb236e401e01fcb4c589dccff214482.png',
      category: 'Workouts',
      alt: 'Gym interior with functional training area'
    },
    {
      id: 6,
      url: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/b10fce33266b796dd2ae6e7c739493f8.png',
      category: 'Gym',
      alt: 'Gym interior with pull-up bars'
    },
    {
      id: 7,
      url: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/2c40872da9aa9ec9b668f595777b77ce.png',
      category: 'Events',
      alt: 'Motivational wall art'
    }
  ];

  const categories = ['All', 'Gym', 'Workouts', 'Transformations', 'Events'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: any) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e?: any) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredImages.length]);

  return (
    <>
      <Helmet>
        <title>Gallery - Cross X Fitness Box</title>
        <meta name="description" content="Explore our state-of-the-art gym facilities, workouts, and community events through our photo gallery." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase">
                Gallery
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Explore Our Facilities & Community
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all ${
                    activeFilter === category ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-[#1A1A1A] text-[#CCCCCC] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <LazyImage
                      src={image.url}
                      alt={image.alt}
                      category={image.category}
                      onClick={() => openLightbox(index)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-32 border-2 border-dashed border-border rounded-2xl mt-12"
              >
                <p className="text-2xl text-muted font-medium">No images found in this category.</p>
              </motion.div>
            )}
          </div>
        </main>

        <Footer />

        <AnimatePresence>
          {lightboxOpen && filteredImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 p-3 bg-card hover:bg-accent hover:text-black rounded-full text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 md:left-10 z-50 p-4 bg-card/50 hover:bg-accent hover:text-black rounded-full text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 md:right-10 z-50 p-4 bg-card/50 hover:bg-accent hover:text-black rounded-full text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                  </button>
                </>
              )}

              <div 
                className="relative w-full h-full max-w-6xl mx-auto p-4 md:p-12 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImageIndex}
                    src={filteredImages[selectedImageIndex].url}
                    alt={filteredImages[selectedImageIndex].alt}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="max-w-full max-h-full object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-border"
                  />
                </AnimatePresence>
                
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black font-bold tracking-widest bg-[#FFD700] px-6 py-3 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                  {selectedImageIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default GalleryPage;
