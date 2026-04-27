import { useEffect } from 'react';
import PricingTab from './PricingTab';
import VideosTab from './VideosTab';
import TrainersTab from './TrainersTab';
import ZumbaContactSection from './ZumbaContactSection';

function ProgramDetailsSection({ selectedProgram, activeTab, setActiveTab }: { selectedProgram: any, activeTab: string, setActiveTab: (tab: string) => void }) {
  useEffect(() => {
    if (selectedProgram) {
      if (selectedProgram.name === 'Zumba') {
        setActiveTab('Videos');
      } else {
        setActiveTab('Pricing');
      }
    }
  }, [selectedProgram?.name, setActiveTab]);

  if (!selectedProgram) return null;

  const isZumba = selectedProgram.name === 'Zumba';
  const tabs = isZumba ? ['Videos', 'Trainers'] : ['Pricing', 'Videos', 'Trainers'];

  return (
    <section id="program-details" className="py-24 bg-background border-t border-border scroll-mt-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary uppercase tracking-tight mb-4 text-cx-red">
            {selectedProgram.name} Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore {isZumba ? 'videos and meet the expert coaches' : 'pricing, watch training videos, and meet the expert coaches'} for this program.
          </p>
        </div>

        {isZumba && <ZumbaContactSection />}

        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-border pb-px">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-base font-bold transition-all duration-300 relative ${
                activeTab === tab 
                  ? 'text-white' 
                  : 'text-muted-foreground hover:text-secondary'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-secondary rounded-t-full shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[400px] flex items-start justify-center w-full">
          {activeTab === 'Pricing' && !isZumba && <PricingTab selectedProgram={selectedProgram} />}
          {activeTab === 'Videos' && <VideosTab selectedProgram={selectedProgram} />}
          {activeTab === 'Trainers' && <TrainersTab selectedProgram={selectedProgram} />}
        </div>
      </div>
    </section>
  );
}

export default ProgramDetailsSection;
