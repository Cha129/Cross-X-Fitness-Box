import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

function GoogleMapsSection() {
  const directionsUrl = "https://www.google.com/maps/search/cross+x+fitness+box+pragathi+nagar";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <div className="space-y-6 flex flex-col h-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
          <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
          Find Us Here
        </h2>
        <p className="text-muted ml-5">Visit Cross X Fitness Box - Pragati Nagar</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full rounded-2xl overflow-hidden border-2 border-border shadow-[0_10px_30px_rgba(0,0,0,0.5)] bg-card flex-grow relative"
      >
        <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl z-10"></div>
        <iframe
          src={mapEmbedUrl}
          width="100%"
          className="h-[300px] md:h-[400px] w-full filter contrast-[1.1] grayscale-[0.2]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Cross X Fitness Box Pragati Nagar"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-2"
      >
        <Button
          asChild
          className="w-full bg-primary hover:bg-primary border border-transparent hover:border-accent/50 text-white font-bold px-8 py-7 text-lg rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:-translate-y-1 group"
        >
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <MapPin className="w-6 h-6 mr-3 group-hover:text-accent transition-colors" />
            Get Directions
          </a>
        </Button>
      </motion.div>
    </div>
  );
}

export default GoogleMapsSection;
