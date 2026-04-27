import { MapPin, Phone, MessageCircle, Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ContactInfo() {
  const whatsappUrl = "https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box%20-%20Pragati%20Nagar";
  const instagramUrl = "https://www.instagram.com/crossxfitnessbox/";
  const googleBusinessUrl = "https://www.google.com/search?q=cross+x+fitness+box+pragathi+nagar";

  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] space-y-8 h-full transition-transform duration-300 hover:border-border/80">
      <div>
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
          <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
          Contact Information
        </h3>
        
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all duration-300">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Location</h4>
              <p className="text-muted leading-relaxed">
                Cross X Fitness Box - Pragati Nagar<br/>
                Pragati Nagar, Hyderabad
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4 group">
            <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all duration-300">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Call Us</h4>
              <a href="tel:+919121233317" className="text-muted hover:text-accent transition-colors block text-lg">
                +91 91212 33317
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-border space-y-5">
        <h4 className="font-semibold text-white">Connect With Us</h4>
        
        <div className="flex flex-col gap-3">
          {/* WhatsApp Button */}
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium transition-all duration-300 w-full justify-start py-6 shadow-md hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:-translate-y-1"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-3" />
              Message on WhatsApp
            </a>
          </Button>

          <div className="grid grid-cols-2 gap-3">
            {/* Instagram Button */}
            <Button
              asChild
              variant="outline"
              className="border-border bg-background hover:bg-background text-white hover:text-accent hover:border-accent font-medium transition-all duration-300 w-full justify-center group h-12"
            >
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2 text-accent" />
                Instagram
              </a>
            </Button>

            {/* Google Business Button */}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 w-full justify-center hover:shadow-[0_0_15px_rgba(255,46,46,0.4)] h-12"
            >
              <a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5 mr-2 text-white" />
                Google
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
