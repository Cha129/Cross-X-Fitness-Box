import TrainerCard from './TrainerCard';

function TrainersTab({ selectedProgram }: { selectedProgram: any }) {
  const allTrainers = [
    {
      id: 'vikas',
      name: 'Vikas',
      image: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/e71c3a32eae9a192bcf45e35c239dae3.jpg',
      experience: '7+ Years Experience',
      specialization: 'Strength Training & Muscle Building',
      bio: 'Certified strength coach specializing in personalized training programs designed to build functional power and correct muscular imbalances.',
      programs: ['Strength Training', 'Personal Training', 'CrossFit / Functional']
    },
    {
      id: 'prashant',
      name: 'Prashant',
      image: 'https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/23395143607a832eb83f2315c601c63e.png',
      experience: '7+ Years Experience',
      specialization: 'CrossFit & Functional Training',
      bio: 'Expert CrossFit trainer dedicated to functional fitness excellence. Prashant helps athletes of all levels push their limits safely and effectively.',
      programs: ['CrossFit / Functional', 'Personal Training', 'Strength Training']
    }
  ];

  // Filter trainers based on the selected program
  const filteredTrainers = allTrainers.filter(trainer => 
    trainer.programs.includes(selectedProgram?.name)
  );

  return (
    <div className="animate-in fade-in duration-500 w-full px-4">
      {filteredTrainers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredTrainers.map((trainer) => {
            return (
              <TrainerCard key={trainer.id} trainer={trainer} />
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-card border border-border rounded-xl max-w-5xl mx-auto">
          <p className="text-muted-foreground text-lg">No trainers currently assigned to this program.</p>
        </div>
      )}
    </div>
  );
}

export default TrainersTab;
