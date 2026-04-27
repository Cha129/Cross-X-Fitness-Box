import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import GymTourSection from '@/components/GymTourSection';
import GymTourMapSection from '@/components/GymTourMapSection';
import ProgramsSection from '@/components/ProgramsSection';
import TrainersSection from '@/components/TrainersSection';
import TransformationsSection from '@/components/TransformationsSection';
import InstagramSection from '@/components/InstagramSection';
import StrengthSection from '@/components/StrengthSection';
import FunctionalSection from '@/components/FunctionalSection';
import PersonalTrainingSection from '@/components/PersonalTrainingSection';
import ZumbaSection from '@/components/ZumbaSection';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Cross X Fitness Box - Home</title>
        <meta name="description" content="Premium gym facilities in Hyderabad offering strength training, CrossFit, personal training, and Zumba classes. Join Cross X Fitness Box today." />
      </Helmet>

      <div className="min-h-screen bg-[#0B0B0B] flex flex-col">
        <Header />

        <main className="flex-grow">
          <HeroSection />
          
          < GymTourSection />

          <GymTourMapSection />
          
          <ProgramsSection />

          <StrengthSection />
          <FunctionalSection />
          <PersonalTrainingSection />
          <ZumbaSection />
          
          <TrainersSection />
          
          <TransformationsSection />
          
          <InstagramSection />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
