import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: {
    duration: string;
    sessions?: string;
    originalPrice: string;
    discountedPrice: string;
    discount: string;
    features: string[];
  };
  programName: string;
}

function PricingCard({ plan, programName }: PricingCardProps) {
  const whatsappMessage = encodeURIComponent(`Hi, I want to join Cross X Fitness Box - ${programName} (${plan.duration} Plan)`);
  const whatsappUrl = `https://wa.me/919121233317?text=${whatsappMessage}`;

  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full hover:translate-y-[-8px] transition-transform duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-1">{plan.duration}</h3>
        {plan.sessions && (
          <p className="text-sm text-muted-foreground mb-2">{plan.sessions}</p>
        )}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-muted-foreground line-through text-sm">₹{plan.originalPrice}</span>
          <span className="bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 rounded-full">
            {plan.discount}
          </span>
        </div>
        <div className="text-4xl font-black text-secondary mb-6">
          ₹{plan.discountedPrice}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm text-muted-foreground">
            <Check className="w-5 h-5 text-primary mr-2 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] mt-auto"
      >
        Join Now
      </a>
    </div>
  );
}

export default PricingCard;
