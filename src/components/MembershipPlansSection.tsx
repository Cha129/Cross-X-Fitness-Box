function MembershipPlansSection() {
  const plans = [
    {
      title: "Gym Membership",
      prices: [
        { price: "₹1999", duration: "1 month" },
        { price: "₹4499", duration: "3 months", recommended: true },
        { price: "₹5999", duration: "6 months" },
        { price: "₹7999", duration: "1 year" }
      ]
    },
    {
      title: "Personal Training",
      prices: [
        { price: "₹7999", duration: "1 month" },
        { price: "₹14999", duration: "3 months", recommended: true },
        { price: "₹29999", duration: "6 months" },
        { price: "₹49999", duration: "1 year" }
      ]
    },
    {
      title: "Student Offer",
      prices: [
        { price: "₹1500", duration: "1 month" },
        { price: "₹4000", duration: "3 months", recommended: true }
      ]
    }
  ];

  return (
    <section className="py-24 bg-background px-4 sm:px-6 lg:px-8">
      <h2 className="text-[28px] text-white font-bold text-center mb-[40px]">Membership Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-items-center max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="w-full max-w-[350px] bg-[#1A1A1A] border-2 border-transparent rounded-[12px] p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:scale-105 relative flex flex-col h-full"
          >
            {plan.prices.some(p => p.recommended) && (
              <div className="absolute top-4 right-4 bg-[#FFD700] text-black font-bold text-[12px] py-[6px] px-[12px] rounded-[20px] shadow-sm">
                3 Months Plan
              </div>
            )}
            
            <h3 className="text-[20px] text-white font-bold mb-[24px] pr-20">{plan.title}</h3>
            
            <div className="flex flex-col gap-4 mb-8 flex-grow">
              {plan.prices.map((tier, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-2 last:border-0">
                  <span className="text-[14px] text-[#CCCCCC]">{tier.duration}</span>
                  <span className="text-[18px] text-[#FFD700] font-bold">{tier.price}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box%20for%20${encodeURIComponent(plan.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#FF2E2E] text-white py-[12px] rounded-[8px] font-bold text-[14px] text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] mt-auto inline-block"
            >
              Join Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MembershipPlansSection;
