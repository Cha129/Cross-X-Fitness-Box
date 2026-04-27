import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function PromotionalPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('promotionalPopupShown');
    
    if (!hasShown) {
      // Set timer for 120 seconds (120,000 ms)
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('promotionalPopupShown', 'true');
      }, 120000);
      
      // Clean up timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        closeModal();
      }
    };
    
    if (isVisible) {
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isVisible]);

  const closeModal = () => {
    setIsClosing(true);
    // Wait for the fade-out animation to complete (300ms) before removing from DOM
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  if (!isVisible && !isClosing) return null;

  return (
    <div 
      id="modal-overlay"
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(0,0,0,0.8)] px-4 ${isClosing ? 'opacity-0 duration-300' : 'opacity-100 duration-300'}`}
      onClick={handleOutsideClick}
    >
      <div 
        className={`relative bg-[#1A1A1A] rounded-[16px] p-5 md:p-[32px] w-[95%] md:max-w-[90%] lg:max-w-[550px] shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 ${isClosing ? 'scale-95 duration-300' : 'scale-100 duration-300'}`}
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#FF2E2E] transition-all duration-300 hover:scale-110 z-10 bg-transparent flex items-center justify-center min-w-[40px] min-h-[40px] rounded-full"
          aria-label="Close promotional popup"
        >
          <X size={32} />
        </button>
        
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <img 
            src="https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/e01ebf70717aa7cca64363f8d7c3edcf.jpg" 
            alt="Summer Offer at Cross X Fitness Box" 
            className="w-full max-w-[100%] md:max-w-[90%] lg:max-w-[500px] rounded-[12px] object-cover aspect-auto mb-6 shadow-md"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 w-full mt-[24px]">
            <a 
              href="https://wa.me/919121233317?text=Hi%2C%20I%27m%20interested%20in%20the%20summer%20offer%20at%20Cross%20X%20Fitness%20Box"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#FF2E2E] text-white font-bold text-[16px] py-[14px] px-4 rounded-[8px] transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            >
              Join Now
            </a>
            <a 
              href="tel:+919121233317"
              className="flex-1 text-center bg-[#FF2E2E] text-white font-bold text-[16px] py-[14px] px-4 rounded-[8px] transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionalPopup;
