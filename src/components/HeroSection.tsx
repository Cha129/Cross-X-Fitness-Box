import { motion } from 'motion/react';
import { Zap, Users, Trophy, Dumbbell, Award, Target, ShieldCheck } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-[#0B0B0B] overflow-hidden flex flex-col items-center justify-between py-8 md:py-12 lg:py-16">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/de8a87bac723cf011427a4159549f1ce.png)'
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Red Neon Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[radial-gradient(circle_at_center,_#FF2E2E_0%,_transparent_70%)] blur-[150px] translate-x-1/4 translate-y-1/4 pointer-events-none animate-neon-pulse" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">
        
        {/* Top Section - Feature Badges */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 w-full mt-4"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-[20px] h-[20px] text-[#FF2E2E]" />
            <span className="text-[12px] text-white font-bold uppercase tracking-[1px]">Premium Training</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-[20px] h-[20px] text-[#FF2E2E]" />
            <span className="text-[12px] text-white font-bold uppercase tracking-[1px]">Expert Coaches</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-[20px] h-[20px] text-[#FF2E2E]" />
            <span className="text-[12px] text-white font-bold uppercase tracking-[1px]">Real Results</span>
          </div>
        </motion.div>

        {/* Middle Section - Main Heading & Buttons */}
        <div className="flex flex-col items-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-[16px] text-white font-medium uppercase tracking-[2px] opacity-90 mb-4">
              Transform Your Body
            </span>
            <h1 className="text-[40px] md:text-[56px] lg:text-[72px] text-[#FF2E2E] font-black uppercase tracking-[3px] leading-none text-shadow-red mb-2">
              Build Strength
            </h1>
            <h2 className="text-[40px] md:text-[56px] lg:text-[72px] text-white font-black uppercase tracking-[3px] leading-none text-shadow-white mb-10">
              Stay Fit
            </h2>
          </motion.div>

          {/* CTA Buttons Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center w-full sm:w-auto"
          >
            <a
              href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#FF2E2E] text-white px-[32px] md:px-[40px] lg:px-[48px] py-[12px] md:py-[14px] lg:py-[16px] rounded-[8px] font-bold text-[16px] shadow-[0_4px_15px_rgba(255,46,46,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] text-center whitespace-nowrap"
            >
              Join Now (WhatsApp)
            </a>
            
            <a
              href="#programs"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-[32px] md:px-[40px] lg:px-[48px] py-[12px] md:py-[14px] lg:py-[16px] rounded-[8px] font-bold text-[16px] shadow-[0_4px_15px_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 text-center whitespace-nowrap"
            >
              View Programs
            </a>
          </motion.div>
        </div>

        {/* Bottom Section - Benefit Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-5xl mt-8 mb-4"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <Dumbbell className="w-[30px] h-[30px] text-[#FF2E2E]" />
            <span className="text-[12px] text-white font-bold uppercase tracking-wide">Modern Equipment</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Award className="w-[30px] h-[30px] text-[#FF2E2E]" />
            <span className="text-[12px] text-white font-bold uppercase tracking-wide">Certified Trainers</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Target className="w-[30px] h-[30px] text-[#FF2E2E]" />
            <span className="text-[12px] text-white font-bold uppercase tracking-wide">Personalized Plans</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <ShieldCheck className="w-[30px] h-[30px] text-[#FF2E2E]" />
            <span className="text-[12px] text-white font-bold uppercase tracking-wide">Transformation Guaranteed</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;
