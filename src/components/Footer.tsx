import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Locations', path: '/locations' }
  ];

  return (
    <footer className="bg-[#0B0B0B] text-white border-t-[3px] border-[#FF2E2E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <img
              src="https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/ea1751d07526eeddf000970efbe8c957.png"
              alt="Cross X Fitness Box Logo"
              className="h-14 w-auto brightness-200 contrast-200"
            />
            <p className="text-[#CCCCCC] leading-relaxed">
              Transform your strength with premium training facilities and expert coaching in Pragati Nagar, Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center">
              <span className="w-4 h-[2px] bg-[#FF2E2E] mr-2"></span> Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-6 flex items-center">
              <span className="w-4 h-[2px] bg-[#FF2E2E] mr-2"></span> Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                <span className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
                  Cross X Fitness Box - Pragati Nagar<br/>
                  Pragati Nagar, Hyderabad
                </span>
              </li>
              <li className="flex flex-col space-y-3 pt-2">
                <div className="flex items-center justify-between group bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#FFD700]" />
                    <a href="tel:+919121233317" className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
                      +91 91212 33317
                    </a>
                  </div>
                  <a 
                    href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:scale-110 transition-transform"
                    aria-label="WhatsApp Primary Contact"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex items-center justify-between group bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#FFD700]" />
                    <a href="tel:+917997777211" className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
                      +91 79977 77211
                    </a>
                  </div>
                  <a 
                    href="https://wa.me/917997777211?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:scale-110 transition-transform"
                    aria-label="WhatsApp Secondary Contact"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-12 flex flex-col items-center border-t border-white/10 pt-12">
          <div className="flex justify-center items-center flex-wrap gap-[20px] md:gap-[30px]">
            <a
              href="https://www.google.com/maps/search/cross+x+fitness+box+pragathi+nagar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-[14px] text-[#4285F4] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
            >
              <MapPin className="w-[24px] h-[24px]" />
              Google
            </a>
            <a
              href="https://www.instagram.com/crossxfitnessbox/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-[14px] text-[#E4405F] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
            >
              <Instagram className="w-[24px] h-[24px]" />
              Instagram
            </a>
            <a
              href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold text-[14px] text-[#25D366] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
            >
              <MessageCircle className="w-[24px] h-[24px]" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#CCCCCC] text-sm text-center md:text-left">
            © 2026 Cross X Fitness Box. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-sm text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-[#CCCCCC] hover:text-[#FFD700] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
