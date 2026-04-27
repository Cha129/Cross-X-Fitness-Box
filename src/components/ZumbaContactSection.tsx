function ZumbaContactSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919121233317?text=Hi%2C%20I%20want%20to%20know%20about%20Zumba%20classes%20at%20Cross%20X%20Fitness%20Box', '_blank');
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#FFD700] rounded-3xl p-8 max-w-2xl mx-auto mb-12 text-center flex flex-col items-center justify-center">
      <h3 className="text-2xl font-bold text-white mb-3">
        Zumba Class Details
      </h3>
      <p className="text-[#CCCCCC] text-[16px] leading-[1.6] mb-6 max-w-md mx-auto">
        For pricing and class schedule details, please contact us on WhatsApp
      </p>
      <button
        onClick={handleWhatsAppClick}
        className="bg-[#25D366] text-white font-bold py-4 px-10 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-green-500/20"
      >
        Contact on WhatsApp
      </button>
    </div>
  );
}

export default ZumbaContactSection;
