import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

function FloatingWhatsAppButton() {
  const whatsappUrl = "https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box%20-%20Pragati%20Nagar";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{
        // Using inline styles for specific colors not easily available in default tailwind tokens
        // Or I can add them to theme if I setup tailwind.config.ts correctly
      }}
      className="fixed bottom-5 right-5 z-[999] flex items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:scale-110 hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-[#25D366]"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
    </motion.a>
  );
}

export default FloatingWhatsAppButton;
