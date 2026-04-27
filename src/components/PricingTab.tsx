import PricingCard from './PricingCard';

function PricingTab({ selectedProgram }: { selectedProgram: any }) {
  const isPersonalTraining = selectedProgram?.name === 'Personal Training';

  const ptPlans = [
    {
      duration: 'Monthly',
      sessions: '12 Sessions',
      originalPrice: '9999',
      discountedPrice: '7999',
      discount: '20% OFF',
      features: ['1-on-1 Expert Coaching', 'Customized Workout Plan', 'Nutrition Guidance', 'Weekly Progress Tracking', 'Full Gym Access']
    },
    {
      duration: '3 Months',
      sessions: '36 Sessions',
      originalPrice: '18999',
      discountedPrice: '14999',
      discount: '21% OFF',
      features: ['1-on-1 Expert Coaching', 'Customized Workout Plan', 'Nutrition Guidance', 'Weekly Progress Tracking', 'Full Gym Access']
    },
    {
      duration: '6 Months',
      sessions: '72 Sessions',
      originalPrice: '37999',
      discountedPrice: '29999',
      discount: '21% OFF',
      features: ['1-on-1 Expert Coaching', 'Customized Workout Plan', 'Nutrition Guidance', 'Weekly Progress Tracking', 'Full Gym Access', 'Free Body Composition Analysis']
    },
    {
      duration: 'Yearly',
      sessions: '144 Sessions',
      originalPrice: '62499',
      discountedPrice: '49999',
      discount: '20% OFF',
      features: ['1-on-1 Expert Coaching', 'Customized Workout Plan', 'Nutrition Guidance', 'Weekly Progress Tracking', 'Full Gym Access', 'Free Body Composition Analysis', 'Priority Booking']
    }
  ];

  const standardPlans = [
    {
      duration: 'Monthly',
      originalPrice: '2499',
      discountedPrice: '1999',
      discount: '20% OFF',
      features: ['Full Gym Access', 'Group Classes Included', 'General Guidance', 'Locker Room Access']
    },
    {
      duration: '3 Months',
      originalPrice: '5624',
      discountedPrice: '4499',
      discount: '20% OFF',
      features: ['Full Gym Access', 'Group Classes Included', 'General Guidance', 'Locker Room Access', '1 Free PT Session']
    },
    {
      duration: '6 Months',
      originalPrice: '7499',
      discountedPrice: '5999',
      discount: '20% OFF',
      features: ['Full Gym Access', 'Group Classes Included', 'General Guidance', 'Locker Room Access', '2 Free PT Sessions', 'Diet Plan Template']
    },
    {
      duration: 'Yearly',
      originalPrice: '9999',
      discountedPrice: '7999',
      discount: '20% OFF',
      features: ['Full Gym Access', 'Group Classes Included', 'General Guidance', 'Locker Room Access', '3 Free PT Sessions', 'Custom Diet Plan', 'Freeze Option (1 Month)']
    }
  ];

  const plans = isPersonalTraining ? ptPlans : standardPlans;

  return (
    <div className="animate-in fade-in duration-500 max-w-full">
      <div className="text-center mb-10 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {isPersonalTraining ? 'Personal Training Plans' : `All ${selectedProgram?.name} sessions are included in our gym membership plans`}
        </h3>
        <p className="text-muted-foreground">Choose the duration that fits your goals and commit to your transformation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
        {plans.map((plan, index) => (
          <PricingCard 
            key={index} 
            plan={plan} 
            programName={selectedProgram?.name || 'Gym Membership'} 
          />
        ))}
      </div>
    </div>
  );
}

export default PricingTab;
