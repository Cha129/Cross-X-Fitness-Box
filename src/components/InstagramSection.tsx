import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

function InstagramSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E4405F]/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="bg-gradient-to-tr from-[#FFB400] via-[#FD1D1D] to-[#833AB4] p-[2px] rounded-2xl mb-6 shadow-[0_0_30px_rgba(228,64,95,0.3)]">
          <div className="bg-black p-4 rounded-[14px]">
            <Instagram className="w-10 h-10 text-white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
          Follow Us on Instagram
        </h2>
        
        <p className="text-[#CCCCCC] text-base md:text-lg max-w-md mb-10 leading-relaxed">
          Join our fitness community and stay updated with daily workouts, tips, and transformations.
        </p>
        
        <a
          href="https://www.instagram.com/crossxfitnessbox/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[#E4405F] text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(228,64,95,0.6)] inline-flex items-center gap-3"
        >
          Follow @crossxfitnessbox
          <Instagram className="w-5 h-5 transition-transform group-hover:rotate-12" />
        </a>
      </motion.div>
    </section>
  );
}

export default InstagramSection;
