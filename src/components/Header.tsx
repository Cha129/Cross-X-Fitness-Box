import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Instagram, Phone, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Locations', path: '/locations' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === `#${path.substring(2)}`;
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0B0B]/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/ea1751d07526eeddf000970efbe8c957.png"
              alt="Cross X Fitness Box Logo"
              className="h-12 w-auto brightness-200 contrast-200 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                  isActive(link.path)
                    ? 'text-[#FFD700]'
                    : 'text-muted hover:text-accent'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD700] rounded-t-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="hidden xl:flex flex-col items-end mr-2">
              <a href="tel:+919121233317" className="text-xs text-white/80 hover:text-white flex items-center gap-1 transition-colors">
                <Phone className="w-3 h-3" /> +91 91212 33317
              </a>
              <a href="tel:+917997777211" className="text-xs text-white/80 hover:text-white flex items-center gap-1 transition-colors mt-0.5">
                <Phone className="w-3 h-3" /> +91 79977 77211
              </a>
            </div>

            <a 
              href="https://www.instagram.com/crossxfitnessbox/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-[24px] h-[24px]" />
            </a>
            
            <Button
              asChild
              className="bg-[#FF2E2E] hover:bg-[#FF2E2E]/90 text-white font-bold transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] rounded-full px-6"
            >
              <a
                href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Button>
          </div>

          <div className="flex lg:hidden items-center space-x-4">
            <a 
              href="https://www.instagram.com/crossxfitnessbox/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-[24px] h-[24px]" />
            </a>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-card">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#0B0B0B] border-border overflow-y-auto">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className={`text-lg font-medium transition-colors duration-300 border-b border-border pb-4 ${
                        isActive(link.path)
                          ? 'text-[#FFD700] font-semibold border-[#FFD700]'
                          : 'text-muted-foreground hover:text-[#FFD700] hover:border-[#FFD700]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm text-white/50 uppercase tracking-wider mb-3">Contact Us</h4>
                    <div className="flex flex-col gap-3">
                      <a href="tel:+919121233317" className="flex items-center text-white text-sm hover:text-[#FFD700] transition-colors">
                        <Phone className="w-4 h-4 mr-2 text-[#FFD700]" /> +91 91212 33317
                      </a>
                      <a href="tel:+917997777211" className="flex items-center text-white text-sm hover:text-[#FFD700] transition-colors">
                        <Phone className="w-4 h-4 mr-2 text-[#FFD700]" /> +91 79977 77211
                      </a>
                      <a 
                        href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-white text-sm hover:text-[#25D366] transition-colors mt-2"
                      >
                        <MessageCircle className="w-4 h-4 mr-2 text-[#25D366]" /> WhatsApp Us
                      </a>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-[#FF2E2E] hover:bg-[#FF2E2E]/90 text-white font-bold w-full transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] rounded-full mt-4"
                  >
                    <a
                      href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Now
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
