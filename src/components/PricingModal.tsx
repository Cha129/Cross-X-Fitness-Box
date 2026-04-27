import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Check } from 'lucide-react';

interface Plan {
    title: string;
    sessionsPerMonth: number;
    duration: string;
    originalPrice: string;
    discountedPrice: string;
    discountPercent: string;
    isPopular: boolean;
    features: string[];
}

const ModalPricingCard = ({ title, sessionsPerMonth, duration, originalPrice, discountedPrice, discountPercent, isPopular, features, onGetStarted }: Plan & { onGetStarted: () => void }) => (
    <div className={`relative bg-black/40 border ${isPopular ? 'border-primary' : 'border-border'} rounded-2xl p-6 flex flex-col h-full hover:border-primary/50 transition-colors`}>
        {isPopular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
            </div>
        )}
        <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{sessionsPerMonth} sessions / month • {duration}</p>
            <div className="flex items-center gap-3">
               <span className="text-muted-foreground line-through text-lg">{originalPrice}</span>
               <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">{discountPercent} OFF</span>
            </div>
            <div className="text-4xl font-black text-white mt-1">{discountedPrice}</div>
        </div>
        <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <Check size={18} className="text-primary shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button 
            onClick={onGetStarted}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
            Get Expert Coaching
        </button>
    </div>
);

function PricingModal({ onClose }: { onClose: () => void }) {
  const plans: Plan[] = [
    {
      title: "Starter",
      sessionsPerMonth: 4,
      duration: "1 hour each",
      originalPrice: "₹8,000",
      discountedPrice: "₹6,500",
      discountPercent: "18%",
      isPopular: false,
      features: [
        "Personalized workout plan",
        "Form correction",
        "Progress tracking"
      ]
    },
    {
      title: "Professional",
      sessionsPerMonth: 8,
      duration: "1 hour each",
      originalPrice: "₹15,000",
      discountedPrice: "₹12,000",
      discountPercent: "20%",
      isPopular: true,
      features: [
        "Personalized workout plan",
        "Form correction",
        "Progress tracking",
        "Nutrition guidance",
        "Weekly check-ins"
      ]
    },
    {
      title: "Elite",
      sessionsPerMonth: 12,
      duration: "1 hour each",
      originalPrice: "₹22,000",
      discountedPrice: "₹17,600",
      discountPercent: "20%",
      isPopular: false,
      features: [
        "Personalized workout plan",
        "Form correction",
        "Progress tracking",
        "Nutrition guidance",
        "Weekly check-ins",
        "24/7 support",
        "Custom meal plans"
      ]
    }
  ];

  const handleGetStarted = (planTitle: string) => {
    const message = `I'm interested in Personal Training - ${planTitle} Plan`;
    const whatsappUrl = `https://wa.me/919121233317?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background border-border shadow-[0_0_50px_rgba(0,0,0,0.9)] p-6 md:p-10">
      <DialogHeader className="mb-8">
        <DialogTitle className="text-3xl md:text-4xl font-black text-white text-center uppercase tracking-tight">
          Personal Training Plans
        </DialogTitle>
        <p className="text-muted-foreground text-center mt-2 text-lg">
          Choose the perfect plan for your fitness goals
        </p>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-lg transition-all duration-300 text-muted-foreground hover:text-secondary hover:bg-black"
        >
          <X className="w-6 h-6" />
        </button>
      </DialogHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 pt-4 pb-8">
        {plans.map((plan) => (
          <ModalPricingCard 
            key={plan.title}
            {...plan}
            onGetStarted={() => handleGetStarted(plan.title)}
          />
        ))}
      </div>
    </DialogContent>
  );
}

export default PricingModal;
