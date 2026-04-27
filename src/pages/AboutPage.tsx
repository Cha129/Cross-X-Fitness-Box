import { Helmet } from 'react-helmet';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FounderSection from '@/components/FounderSection';
import StatsSection from '@/components/StatsSection';
import MissionSection from '@/components/MissionSection';
import VisionSection from '@/components/VisionSection';
import ValuesSection from '@/components/ValuesSection';
import CTASection from '@/components/CTASection';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Cross X Fitness Box - Pragati Nagar</title>
        <meta name="description" content="Learn about Cross X Fitness Box, our founder Rohith, our mission, vision, and core values. Building strength, discipline, and transformation in Pragati Nagar." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Page Header */}
          <section className="relative py-32 bg-background overflow-hidden border-b border-border">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-background/0 pointer-events-none" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary uppercase tracking-tight">
                  About Cross X Fitness Box
                </h1>
                <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                <p className="text-xl md:text-2xl text-white font-medium">
                  Building strength, discipline, and transformation
                </p>
              </motion.div>
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FounderSection />
            <StatsSection />
            <MissionSection />
            <VisionSection />
            <ValuesSection />
            <CTASection />
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
