import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function FlipkartPricingCard({ plan }: { plan: any }) {
  return (
    <div className="relative bg-[#1A1A1A] border border-border rounded-xl p-6 flex flex-col h-full hover:border-[#FFD700] transition-colors overflow-hidden">
      {/* Badge */}
      {plan.badge && (
        <div 
          className="absolute top-[8px] right-[8px] text-white px-[8px] py-[4px] rounded-[4px] text-[10px] font-bold uppercase z-10"
          style={{ backgroundColor: plan.badgeColor === 'green' ? '#4CAF50' : plan.badgeColor === 'yellow' ? '#FFD700' : '#FF2E2E', color: plan.badgeColor === 'yellow' ? '#000' : '#FFF' }}
        >
          {plan.badge}
        </div>
      )}

      {/* Plan Name & Duration */}
      <h3 className="text-[16px] font-bold text-white mt-[8px] mb-[8px] leading-tight">
        {plan.name}
      </h3>
      
      {plan.premiumLabel && (
        <div className="text-[11px] text-[#FFD700] font-bold mb-[8px] leading-tight">
          {plan.premiumLabel}
        </div>
      )}

      <div className="text-[12px] text-[#AAAAAA] mb-[12px]">
        {plan.duration}
      </div>

      {/* Pricing Block */}
      <div className="mt-auto">
        {plan.originalPrice && (
          <div className="text-[12px] text-[#999999] line-through mb-[4px]">
            {plan.originalPrice}
          </div>
        )}
        
        {plan.discount && (
          <div className="text-[13px] text-[#4CAF50] font-bold mb-[8px]">
            {plan.discount}
          </div>
        )}

        <div className="text-[24px] text-[#FF2E2E] font-[900] mb-[4px] leading-none">
          {plan.finalPrice}
        </div>

        <div className="text-[11px] text-[#AAAAAA] mb-[12px]">
          Inclusive of all taxes
        </div>

        {/* CTA Button */}
        <a
          href={plan.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#FF2E2E] text-white py-[10px] px-[16px] rounded-[4px] font-bold text-[13px] text-center cursor-pointer transition-all duration-300 hover:scale-105 border-none"
        >
          Join Now
        </a>
      </div>
    </div>
  );
}

function PricingPage() {
  const gymPlans = [
    {
      name: 'Gym Membership',
      duration: '1 Month',
      originalPrice: '₹2,499',
      finalPrice: '₹1,999',
      discount: '20% OFF',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    },
    {
      name: 'Gym Membership',
      duration: '3 Months',
      originalPrice: '₹6,499',
      finalPrice: '₹4,499',
      discount: '30% OFF',
      badge: 'Best Seller',
      badgeColor: 'red',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    },
    {
      name: 'Gym Membership',
      duration: '6 Months',
      originalPrice: '₹8,999',
      finalPrice: '₹5,999',
      discount: '33% OFF',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    },
    {
      name: 'Gym Membership',
      duration: '1 Year',
      originalPrice: '₹11,999',
      finalPrice: '₹7,999',
      discount: '33% OFF',
      badge: 'Limited Offer',
      badgeColor: 'green',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    }
  ];

  const premiumPlans = [
    {
      name: 'Premium Training',
      premiumLabel: 'Includes Personal Training',
      duration: '1 Month',
      finalPrice: '₹7,999',
      badge: 'Premium',
      badgeColor: 'yellow',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    },
    {
      name: 'Premium Training',
      premiumLabel: 'Includes Personal Training',
      duration: '3 Months',
      originalPrice: '₹23,999',
      finalPrice: '₹14,999',
      discount: '37% OFF',
      badge: 'Best Seller',
      badgeColor: 'red',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    },
    {
      name: 'Premium Training',
      premiumLabel: 'Includes Personal Training',
      duration: '6 Months',
      originalPrice: '₹47,999',
      finalPrice: '₹29,999',
      discount: '37% OFF',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    },
    {
      name: 'Premium Training',
      premiumLabel: 'Includes Personal Training',
      duration: '1 Year',
      originalPrice: '₹74,999',
      finalPrice: '₹49,999',
      discount: '33% OFF',
      link: 'https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Membership Plans - Cross X Fitness Box</title>
        <meta name="description" content="Choose the best gym membership or personal training plan for your fitness journey at Cross X Fitness Box, Pragati Nagar." />
      </Helmet>

      <div className="min-h-screen bg-[#0B0B0B] flex flex-col">
        <Header />

        <main className="flex-grow py-12 md:py-20 px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-white text-[36px] font-bold mb-2">
              Membership Plans
            </h1>
            <p className="text-[#CCCCCC] text-[16px]">
              Choose the best plan for your fitness journey
            </p>
          </div>

          {/* Gym Membership Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {gymPlans.map((plan, index) => (
                <FlipkartPricingCard key={index} plan={plan} />
              ))}
            </div>
          </div>

          {/* Premium Training Section */}
          <div className="mb-16">
            <h2 className="text-white text-[24px] font-bold mb-[30px] mt-[40px] text-center md:text-left max-w-[1200px] mx-auto">
              Premium Training (With Personal Trainer)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {premiumPlans.map((plan, index) => (
                <FlipkartPricingCard key={index} plan={plan} />
              ))}
            </div>
          </div>

          {/* Student Offer Banner */}
          <div className="relative bg-[#1A1A1A] border-2 border-[#FFD700] rounded-3xl p-10 max-w-4xl mx-auto text-center overflow-hidden">
            <div className="absolute -top-[12px] right-[20px] bg-[#FF2E2E] text-white px-[12px] py-[6px] rounded-[4px] text-[11px] font-bold uppercase shadow-md">
              LIMITED OFFER
            </div>

            <h2 className="text-white text-3xl font-bold mb-[10px]">
              🎓 Student Special Offer
            </h2>
            <p className="text-[#FFEB3B] text-[14px] mb-[20px]">
              Valid with Student ID
            </p>

            <div className="flex flex-wrap justify-center items-center gap-[20px] md:gap-[40px] mb-[30px]">
              <div className="text-center">
                <div className="text-white text-[28px] font-bold mb-[5px] leading-none">₹1,499</div>
                <div className="text-[#FFEB3B] text-[12px]">per month</div>
              </div>
              <div className="text-center">
                <div className="text-white text-[28px] font-bold mb-[5px] leading-none">₹4,499</div>
                <div className="text-[#FFEB3B] text-[12px]">for 3 months</div>
              </div>
            </div>

            <a
              href="https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20claim%20the%20student%20offer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#FF2E2E] py-[12px] px-[32px] rounded-[4px] font-bold text-[14px] cursor-pointer transition-all duration-300 hover:scale-105 border-none"
            >
              Claim Offer
            </a>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default PricingPage;
