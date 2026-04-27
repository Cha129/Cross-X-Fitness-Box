import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function GymGallerySection() {
  const images = [
    {
      url: 'https://drive.google.com/uc?export=view&id=1ub7MzRHt97KwmnC6BOHsTUTvWv6RxgPC',
      category: 'Gym Interior',
      alt: 'Cross X Fitness Box Interior'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1ndpFyrXrnXqeo7bOlIuRJk3YFTmSHe5v',
      category: 'Equipment',
      alt: 'Gym Equipment'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1uSAq6RVZBv5kPewBlP0vSZYRCbEprP-R',
      category: 'Training Area',
      alt: 'Training Environment'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=12-sjj4lTuF6EQ4c4Ayl2wBRhjwebL-ej',
      category: 'Cardio Section',
      alt: 'Cardio Equipment'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1LwtZE6RG2aOTvm9dVZ1F02MZ9v87fAb-',
      category: 'Strength Training',
      alt: 'Weight Lifting Area'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1fH3g9LRg3YCf2l7fegVw7BXp1oNifBHo',
      category: 'Functional Fitness',
      alt: 'Functional Training Zone'
    },
    {
      url: 'https://drive.google.com/uc?export=view&id=1i33iqSoaRqGf-DjTRWusv9omtpitGS-R',
      category: 'Gym Atmosphere',
      alt: 'Inside Our Gym'
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Inside Our Gym
          </h2>
          <div className="w-24 h-1 bg-[#FF2E2E] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[#CCCCCC] max-w-2xl mx-auto">
            Explore our space, equipment, and training environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-3 group"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#1A1A1A] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#FFD700]/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                <img
                  src={image.url}
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <Link 
                     to="/gallery" 
                     className="bg-[#FFD700] text-black font-black uppercase text-xs tracking-widest px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                   >
                     View Gallery
                   </Link>
                </div>
              </div>
              <p className="text-[#FFD700] font-bold text-center uppercase tracking-widest text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                {image.category}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full border border-white/10 transition-all hover:border-[#FFD700]/50 group"
          >
            Explore Full Gallery
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GymGallerySection;
