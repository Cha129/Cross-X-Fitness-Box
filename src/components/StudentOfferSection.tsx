import { motion } from 'motion/react';
import { Dumbbell, Zap, User, Clock } from 'lucide-react';

function StudentOfferSection() {
  const benefits = [
    { icon: Dumbbell, text: 'Access to all gym equipment' },
    { icon: Zap, text: 'Strength training + CrossFit + Zumba included' },
    { icon: User, text: 'Professional trainer guidance' },
    { icon: Clock, text: 'Flexible workout timings' }
  ];

  return (
    <section className="bg-[#0B0B0B] py-[40px] md:py-[60px] px-[20px] my-[60px] text-center overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-3">
            Student Special Offer
          </h2>
          <p className="text-[#CCCCCC] text-base md:text-lg font-normal max-w-2xl mx-auto">
            Affordable fitness plans exclusively for students
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ 
            y: -12, 
            boxShadow: "0 0 50px rgba(255, 215, 0, 0.4)" 
          }}
          style={{ boxShadow: "0 0 40px rgba(255, 215, 0, 0.2)" }}
          className="relative bg-[#1A1A1A] border-2 border-[#FFD700] rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px] max-w-full md:max-w-[600px] lg:max-w-[700px] mx-auto transition-all duration-300"
        >
          {/* Badge */}
          <div className="absolute -top-4 -right-2 md:-right-6 bg-[#FF2E2E] text-[#FFFFFF] font-bold text-[12px] py-[8px] px-[16px] rotate-[6deg] rounded shadow-lg z-10 uppercase tracking-wider">
            Limited Time Student Offer
          </div>

          {/* Pricing Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 border-b border-white/10 pb-8">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#FFD700] font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-none mb-1">
                ₹1500
              </div>
              <div className="text-[#CCCCCC] text-[14px]">
                per month
              </div>
            </div>
            <div className="flex flex-col items-center justify-center relative">
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>
              <div className="text-[#FFD700] font-bold text-[28px] md:text-[32px] lg:text-[36px] leading-none mb-1">
                ₹4000
              </div>
              <div className="text-[#CCCCCC] text-[14px]">
                for 3 months
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-5 mb-10 text-left max-w-md mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="text-[#FFD700] w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]" />
                  </div>
                  <p className="text-[#CCCCCC] text-[14px] md:text-[16px] leading-[1.6]">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/919121233317?text=Hi%2C%20I%20am%20a%20student%20and%20want%20to%20join%20Cross%20X%20Fitness%20Box"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto bg-[#FF2E2E] text-[#FFFFFF] font-bold text-[16px] py-[16px] px-[40px] rounded-[8px] text-center"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.6)" 
            }}
            transition={{ duration: 0.3 }}
          >
            Join Now on WhatsApp
          </motion.a>

          {/* Disclaimer */}
          <p className="text-[#CCCCCC] text-[12px] italic mt-[16px]">
            * Valid student ID required
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default StudentOfferSection;
