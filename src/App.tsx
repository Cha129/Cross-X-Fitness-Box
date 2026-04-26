import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Star, 
  Phone, 
  Instagram, 
  Menu, 
  X, 
  ChevronRight, 
  Play, 
  MapPin, 
  MessageCircle,
  TrendingUp,
  Award,
  Zap,
  Target,
  Clock,
} from 'lucide-react';

// --- Constants ---
const LOGO_URL = "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/ea1751d07526eeddf000970efbe8c957.png";
const HERO_BG = "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/de8a87bac723cf011427a4159549f1ce.png";
const FOUNDER_URL = "https://horizons-cdn.hostinger.com/458e8059-a950-443b-b78c-2cdce8230e69/303f5e8b39f41b50e66c9255381729e2.jpg";

const CONTACT_PHONES = [
  { number: "+91 91212 33317", tel: "+919121233317", wa: "https://wa.me/919121233317?text=Hi%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box" },
  { number: "+91 7997777211", tel: "+917997777211", wa: "https://wa.me/917997777211?text=Hi%20I%20want%20to%20join%20Cross%20X%20Fitness%20Box" }
];

const PRIMARY_WA_LINK = CONTACT_PHONES[0].wa;

const PROGRAMS = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Build lean muscle and increase explosive power with our expert-guided weight training program.",
    icon: <Dumbbell className="w-8 h-8" />,
    videos: [
      "https://drive.google.com/file/d/1ZK2tWJuWpBtrT07uRMqALgnjp3lJHcOE/preview",
      "https://drive.google.com/file/d/1Mmn1xmTUrLqtpLi1ITbXgfX2JdNwGdgg/preview",
      "https://drive.google.com/file/d/1CsPg022Neh41v0JRiWLelTtk4UUfGZZZ/preview"
    ]
  },
  {
    id: "functional",
    title: "Functional Training",
    description: "Master real-world movements and improve agility with dynamic, high-intensity workouts.",
    icon: <TrendingUp className="w-8 h-8" />,
    videos: [
      "https://drive.google.com/file/d/1C1Nxm0v3vULgu2QsHbEnaQ2zhT3gynw4/preview",
      "https://drive.google.com/file/d/1CylihNrt8SjH3hxeW0mTnPrdu-iCxKjY/preview"
    ]
  },
  {
    id: "personal",
    title: "Personal Training",
    description: "Get dedicated 1-on-1 coaching with customized nutrition and transformation plans.",
    icon: <Award className="w-8 h-8" />,
    videos: [
      "https://drive.google.com/file/d/1C1Nxm0v3vULgu2QsHbEnaQ2zhT3gynw4/preview"
    ]
  },
  {
    id: "zumba",
    title: "Zumba",
    description: "Burn calories and de-stress with high-energy dance fitness sessions led by certified pros.",
    icon: <Zap className="w-8 h-8" />,
    videos: [
      "https://drive.google.com/file/d/1To935l7dtpJxak6ajjNYV-V07Wf0yldO/preview",
      "https://drive.google.com/file/d/1O38u-9KCetjA4fCu3rPEVGLi9dR_f5S2/preview",
      "https://drive.google.com/file/d/1TDzCh9RM7_jQQ2m4FN6dz9TOmWqJc8jH/preview"
    ]
  }
];

const PRICING = {
  basic: [
    { name: "1 Month", price: "₹1,999", oldPrice: "₹2,499", discount: "20% OFF" },
    { name: "3 Months", price: "₹4,499", oldPrice: "₹5,499", discount: "Popular!", badge: "Most Popular" },
    { name: "6 Months", price: "₹5,999", oldPrice: "₹7,999", discount: "Best Value" },
    { name: "1 Year", price: "₹7,999", oldPrice: "₹10,999", discount: "Long Term" }
  ],
  premium: [
    { name: "1 Month", price: "₹7,999", oldPrice: "", discount: "Intensive" },
    { name: "3 Months", price: "₹14,999", oldPrice: "", discount: "Results Focused" },
    { name: "6 Months", price: "₹29,999", oldPrice: "", discount: "Transformation" },
    { name: "1 Year", price: "₹49,999", oldPrice: "", discount: "Total Rebirth" }
  ]
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cx-bg/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="Cross X Fitness Box" 
            className="h-10 md:h-12 w-auto brightness-200 contrast-125 transition-transform hover:scale-105" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black text-cx-grey hover:text-cx-red transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {/* Phone Dropdown */}
          <div className="relative" onMouseEnter={() => setIsPhoneDropdownOpen(true)} onMouseLeave={() => setIsPhoneDropdownOpen(false)}>
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-cx-red/10 flex items-center justify-center text-cx-red group-hover:bg-cx-red group-hover:text-white transition-all">
                <Phone size={14} />
              </div>
              <span className="text-xs font-black tracking-widest text-white group-hover:text-cx-red transition-colors">
                {CONTACT_PHONES[0].number}
              </span>
            </div>
            
            <AnimatePresence>
              {isPhoneDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-cx-card border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest text-cx-grey mb-3">Call Assistance</p>
                  <div className="space-y-3">
                    {CONTACT_PHONES.map((phone) => (
                      <a 
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="flex items-center justify-between group/item"
                      >
                        <span className="text-xs font-bold text-white group-hover/item:text-cx-red transition-colors">{phone.number}</span>
                        <Phone size={12} className="text-cx-grey group-hover/item:text-cx-red" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href={PRIMARY_WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-cx-red hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-black transition-all glow-red hover:scale-105 active:scale-95 uppercase text-[10px] tracking-widest">
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href={`tel:${CONTACT_PHONES[0].tel}`} className="text-white p-2">
            <Phone size={24} />
          </a>
          <button 
            className="p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 bottom-0 z-50 bg-cx-bg flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <img src={LOGO_URL} alt="Logo" className="h-10 brightness-200 contrast-125" />
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-black uppercase tracking-tighter hover:text-cx-red transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-8 border-t border-white/10 space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cx-grey">Support Lines</p>
                {CONTACT_PHONES.map(phone => (
                  <a href={`tel:${phone.tel}`} key={phone.tel} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="font-black text-white">{phone.number}</span>
                    <Phone size={18} className="text-cx-red" />
                  </a>
                ))}
              </div>

              <a 
                href={PRIMARY_WA_LINK}
                className="mt-4 bg-cx-red text-white py-4 rounded-xl text-center font-black uppercase tracking-widest glow-red"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Now (WhatsApp)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cx-bg/80 via-cx-bg/60 to-cx-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-cx-bg/40 via-transparent to-cx-red/20 opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-cx-red/30 bg-cx-red/10 text-cx-red text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6">
            Elite Fitness Destination
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
            Build <span className="text-cx-red text-glow-red">Strength</span><br />
            Stay <span className="text-white">Fit.</span>
          </h1>
          <p className="text-lg md:text-xl text-cx-grey max-w-2xl mx-auto mb-10 font-medium">
            Premium training. Real transformations. Experience the next level of fitness at Cross X Fitness Box.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={PRIMARY_WA_LINK}
              className="w-full sm:w-auto bg-cx-red hover:bg-red-600 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all glow-red hover:scale-105 active:scale-95"
            >
              Join Now (WhatsApp)
            </a>
            <a 
              href="#programs"
              className="w-full sm:w-auto px-10 py-5 rounded-full border-2 border-white/20 hover:border-white hover:bg-white/10 text-white font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
            >
              Explore Programs
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 items-center justify-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-cx-red mb-1">
                <Star size={24} fill="currentColor" />
                <span className="text-3xl font-black text-white">4.7</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-cx-grey font-bold">Google Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-cx-red mb-1">
                <Users size={24} />
                <span className="text-3xl font-black text-white">2</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-cx-grey font-bold">Certified Trainers</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-cx-red mb-1">
                <Dumbbell size={24} />
                <span className="text-3xl font-black text-white">1000+</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-cx-grey font-bold">Active Members</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cx-red to-transparent" />
      </div>
    </section>
  );
};

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-cx-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cx-red mb-4">What we offer</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Premium Programs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => (
            <motion.div
              key={program.id}
              whileHover={{ y: -10 }}
              className="bg-cx-card p-8 rounded-3xl border border-white/5 hover:border-cx-red/50 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-cx-red/10 flex items-center justify-center text-cx-red mb-6 group-hover:bg-cx-red group-hover:text-white transition-all duration-500">
                {program.icon}
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase italic">{program.title}</h4>
              <p className="text-cx-grey text-sm leading-relaxed mb-8">
                {program.description}
              </p>
              <a 
                href="#videos" 
                className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white group-hover:text-cx-red transition-colors"
              >
                View Videos <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoShowcase = () => {
  return (
    <section id="videos" className="py-24 bg-cx-bg border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Video Gallery</h2>
          <p className="mt-4 text-cx-grey">Witness the intensity and the vibe of our premium facility.</p>
        </div>

        <div className="space-y-24">
          {PROGRAMS.map((program) => (
            <div key={program.id}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-cx-red/30" />
                <h4 className="text-2xl font-black uppercase italic tracking-widest">{program.title}</h4>
                <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-cx-red/30" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.videos.map((url, idx) => (
                  <div 
                    key={idx} 
                    className="aspect-video bg-cx-card rounded-2xl overflow-hidden shadow-2xl relative group border border-white/10 hover:border-cx-red/40 transition-all"
                  >
                    <iframe 
                      src={url} 
                      className="absolute inset-0 w-full h-full" 
                      allow="autoplay"
                      title={`${program.title} Video ${idx + 1}`}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors pointer-events-none flex items-center justify-center">
                       <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-cx-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Founder Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative z-10 border border-white/10 shadow-2xl group">
              <img 
                src={FOUNDER_URL} 
                alt="Rohith - Founder & Head Coach" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cx-bg/90 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-0.5 w-10 bg-cx-red" />
                  <span className="text-cx-red font-black uppercase tracking-[0.3em] text-[10px]">The Founder</span>
                </div>
                <h4 className="text-5xl font-black uppercase italic tracking-tighter text-white mb-1">Rohith</h4>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">15+ Years Industry Experience</p>
              </div>
            </div>
            
            {/* Decorative back elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cx-red/10 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cx-red/5 rounded-full blur-[100px]" />
          </motion.div>

          {/* Founder Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cx-red mb-6">About Cross X Fitness Box</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[1.1] tracking-tighter mb-8">
              Transforming Lives Through <span className="text-cx-red">Discipline</span> & Dedication.
            </h3>
            
            <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">
              Rohith, the founder of Cross X Fitness Box, brings over 15 years of experience in the fitness industry. 
              With a passion for transforming lives, he established the gym 7 years ago with a vision to create a 
              results-driven training environment.
            </p>
            
            <p className="text-cx-grey leading-relaxed mb-10">
              His expertise in strength training, functional workouts, and personal coaching has helped hundreds 
              of members achieve their fitness goals. Under his leadership, Cross X Fitness Box has become a 
              trusted fitness destination known for discipline, energy, and real transformations.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cx-red/10 flex items-center justify-center text-cx-red group-hover:bg-cx-red group-hover:text-white transition-all">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-xl font-black text-white block">15+ Years</span>
                  <span className="text-[10px] uppercase tracking-widest text-cx-grey font-bold">Experience</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cx-red/10 flex items-center justify-center text-cx-red group-hover:bg-cx-red group-hover:text-white transition-all">
                  <Award size={20} />
                </div>
                <div>
                  <span className="text-xl font-black text-white block">7+ Years</span>
                  <span className="text-[10px] uppercase tracking-widest text-cx-grey font-bold">Gym Legacy</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cx-red/10 flex items-center justify-center text-cx-red group-hover:bg-cx-red group-hover:text-white transition-all">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <span className="text-xl font-black text-white block">1000+</span>
                  <span className="text-[10px] uppercase tracking-widest text-cx-grey font-bold">Transformations</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-cx-red/10 flex items-center justify-center text-cx-red group-hover:bg-cx-red group-hover:text-white transition-all">
                  <Target size={20} />
                </div>
                <div>
                  <span className="text-xl font-black text-white block">Certified</span>
                  <span className="text-[10px] uppercase tracking-widest text-cx-grey font-bold">Trainer Expert</span>
                </div>
              </div>
            </div>

            {/* Premium Touch Quote */}
            <div className="bg-white/[0.03] backdrop-blur-md border-l-4 border-cx-red p-8 rounded-r-3xl mb-12 relative overflow-hidden group">
               <div className="relative z-10">
                 <p className="text-xl md:text-2xl font-black text-white mb-3 italic leading-tight">
                   "Fitness is not just about lifting weights, it's about building a stronger life."
                 </p>
                 <div className="flex items-center gap-2">
                   <div className="h-px w-6 bg-white/30" />
                   <span className="text-cx-grey text-[10px] uppercase font-black tracking-widest italic">Rohith, Founder</span>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-24 h-24 bg-cx-red/5 rounded-full blur-2xl group-hover:bg-cx-red/10 transition-all" />
            </div>

            <a 
              href={PRIMARY_WA_LINK}
              className="inline-flex items-center gap-3 bg-cx-red hover:bg-red-600 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all glow-red hover:scale-105 active:scale-95"
            >
              Join Our Fitness Community <MessageCircle size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'basic' | 'premium'>('basic');

  return (
    <section id="pricing" className="py-24 bg-cx-black section-spacing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            Membership <span className="text-cx-red">Structure</span>
          </h2>
          
          <div className="inline-flex p-1.5 bg-cx-card rounded-full border border-white/10 mb-12">
            <button 
              onClick={() => setActiveTab('basic')}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'basic' ? 'bg-cx-red text-white shadow-lg shadow-cx-red/20' : 'text-cx-grey hover:text-white'}`}
            >
              Basic Plans
            </button>
            <button 
              onClick={() => setActiveTab('premium')}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'premium' ? 'bg-cx-red text-white shadow-lg shadow-cx-red/20' : 'text-cx-grey hover:text-white'}`}
            >
              Premium (w/ PT)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING[activeTab].map((plan, idx) => (
            <motion.div
              layout
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-cx-card p-10 rounded-[40px] border-2 transition-all duration-500 overflow-hidden group ${plan.badge ? 'border-cx-red -translate-y-4' : 'border-white/5 hover:border-cx-red/30'}`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 py-2 px-8 bg-cx-red text-white text-[10px] font-black uppercase tracking-[0.2em] -rotate-45 translate-x-8 translate-y-6">
                  {plan.badge}
                </div>
              )}
              
              <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">{plan.name}</h4>
              <p className="text-cx-red font-black text-[10px] uppercase mb-8 tracking-widest">{plan.discount}</p>
              
              <div className="mb-8">
                {plan.oldPrice && (
                  <span className="text-xs text-cx-grey line-through block mb-1 font-medium">{plan.oldPrice}</span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white leading-none">{plan.price}</span>
                </div>
                <span className="text-[10px] text-cx-grey font-bold uppercase tracking-widest mt-2 block italic opacity-60">
                   {activeTab === 'basic' ? '/ One Time' : '/ Per Month'}
                </span>
              </div>

              <div className="space-y-4 mb-10 text-cx-grey text-xs uppercase font-black tracking-widest">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-cx-red" />
                   High-Tech Gym Access
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-cx-red" />
                   Locker Room Access
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-cx-red" />
                   Cross Training Area
                </div>
              </div>

              <a 
                href={PRIMARY_WA_LINK}
                className={`flex items-center justify-center gap-2 w-full py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${plan.badge ? 'bg-white text-black hover:bg-cx-red hover:text-white' : 'bg-transparent border-2 border-white/10 text-white hover:bg-white hover:text-black'}`}
              >
                Join Now <MessageCircle size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramSection = () => {
  return (
    <section className="py-24 bg-cx-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="w-24 h-24 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-[30px] flex items-center justify-center mx-auto mb-10 shadow-2xl hover:rotate-6 transition-transform">
             <Instagram size={48} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">Follow us on Instagram</h2>
          <a 
            href="https://instagram.com/crossxfitnessbox" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-black hover:bg-cx-red hover:text-white px-12 py-5 rounded-full font-black uppercase text-sm tracking-widest transition-all glow-gold shadow-xl"
          >
            Visit Instagram @crossxfitnessbox
          </a>
        </motion.div>
      </div>
      
      {/* Decroative grid elements */}
      <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-cx-red/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-cx-red/5 rounded-full blur-[100px]" />
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cx-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-4 italic tracking-tighter">Get in <span className="text-cx-red">Touch</span></h2>
            <p className="text-cx-grey mb-12">Building a community of iron and discipline. Start your transformation today.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cx-card border border-white/10 flex items-center justify-center text-cx-red shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-bold uppercase tracking-widest mb-1 italic">Location</h5>
                  <p className="text-cx-grey text-sm">3rd Floor, Above Vijetha Super Market, Kakatiya Hills, Pragathi Nagar, Hyderabad 500090</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cx-card border border-white/10 flex items-center justify-center text-cx-red shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-bold uppercase tracking-widest mb-1 italic">📞 Call Us</h5>
                  <div className="space-y-2">
                    {CONTACT_PHONES.map(phone => (
                      <a 
                        key={phone.tel}
                        href={`tel:${phone.tel}`} 
                        className="text-white hover:text-cx-red text-lg font-black tracking-tighter block transition-colors flex items-center gap-2"
                      >
                        {phone.number}
                        <div className="w-1.5 h-1.5 rounded-full bg-cx-red animate-pulse" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-cx-card rounded-[32px] border border-white/5 relative overflow-hidden">
               <div className="relative z-10">
                 <h6 className="font-black italic uppercase tracking-widest text-white mb-6">Chat with us</h6>
                 <div className="flex flex-wrap gap-4">
                    {CONTACT_PHONES.map((phone, idx) => (
                      <a 
                        key={phone.wa}
                        href={phone.wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all hover:scale-105 active:scale-95"
                      >
                        Contact {idx === 0 ? "Rohith" : "Team"} <MessageCircle size={18} />
                      </a>
                    ))}
                 </div>
               </div>
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="bg-cx-card p-10 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
            <div className="h-64 rounded-3xl overflow-hidden mb-8 border border-white/5 grayscale saturate-50 hover:grayscale-0 transition-all duration-700 shadow-inner">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.511786196238!2d78.39414237554902!3d17.51336449866847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f5589d4bd4b%3A0xa79cc452eb645faf!2sCross%20X%20Fitness%20Box!5e0!3m2!1sen!2sin!4v1713532800000!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-cx-grey ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-cx-black/50 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-cx-red transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-cx-grey ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full bg-cx-black/50 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-cx-red transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-cx-grey ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help?" 
                  className="w-full bg-cx-black/50 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-cx-red transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-cx-red hover:bg-red-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all glow-red shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-cx-card border border-white/10 p-6 rounded-[32px] shadow-2xl mb-2 w-64 backdrop-blur-xl"
          >
            <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6 italic">Who to contact?</h4>
            <div className="space-y-3">
              {CONTACT_PHONES.map((phone, idx) => (
                <a 
                  key={phone.wa}
                  href={phone.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-cx-red transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-cx-grey group-hover:text-white/80">{idx === 0 ? "Rohith (Founder)" : "Team Assistance"}</span>
                    <span className="text-xs font-black text-white">{phone.number}</span>
                  </div>
                  <MessageCircle size={18} className="text-green-500 group-hover:text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-16 h-16 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl group-hover:blur-2xl transition-all animate-pulse-red" />
        <div className={`relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white transition-all transform ${isOpen ? 'rotate-90 bg-cx-red' : 'rotate-0'}`}>
           {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
        </div>
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cx-black border-t-2 border-cx-red pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <img src={LOGO_URL} alt="Logo" className="h-14 brightness-200 contrast-125 mb-8" />
            <p className="text-cx-grey text-sm leading-relaxed mb-8">
              Transforming lives in Pragati Nagar through explosive strength, functional discipline, and unmatched energy. Join the box today.
            </p>
          </div>

          <div>
            <h6 className="text-sm font-black uppercase tracking-widest text-white mb-8 italic">Quick Links</h6>
            <ul className="space-y-4">
              <li><a href="#home" className="text-cx-grey hover:text-cx-red transition-colors text-xs font-bold uppercase tracking-widest">Home</a></li>
              <li><a href="#programs" className="text-cx-grey hover:text-cx-red transition-colors text-xs font-bold uppercase tracking-widest">Programs</a></li>
              <li><a href="#pricing" className="text-cx-grey hover:text-cx-red transition-colors text-xs font-bold uppercase tracking-widest">Pricing</a></li>
              <li><a href="#about" className="text-cx-grey hover:text-cx-red transition-colors text-xs font-bold uppercase tracking-widest">About</a></li>
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-black uppercase tracking-widest text-white mb-8 italic">Contact Info</h6>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-cx-red shrink-0" />
                <span className="text-cx-grey text-xs leading-relaxed uppercase font-bold tracking-widest">Pragati Nagar, Hyderabad</span>
              </li>
              {CONTACT_PHONES.map(phone => (
                <li key={phone.tel} className="flex gap-3 group">
                  <Phone size={18} className="text-cx-red shrink-0" />
                  <a href={`tel:${phone.tel}`} className="text-white group-hover:text-cx-red transition-colors text-xs font-black tracking-widest uppercase italic">{phone.number}</a>
                  <a href={phone.wa} target="_blank" rel="noopener noreferrer" className="ml-auto text-green-500"><MessageCircle size={14} /></a>
                </li>
              ))}
              <li className="flex gap-3">
                <Instagram size={18} className="text-cx-red shrink-0" />
                <span className="text-cx-grey text-xs font-bold uppercase tracking-widest">@crossxfitnessbox</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <h6 className="text-sm font-black uppercase tracking-widest text-white mb-8 italic">Newsletter</h6>
            <div className="relative w-full">
              <input 
                type="email" 
                placeholder="email address" 
                className="w-full bg-cx-card border border-white/10 rounded-full py-4 px-6 text-xs focus:outline-none focus:border-cx-red transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-cx-red text-white w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] uppercase font-black tracking-widest text-cx-grey">
             © 2026 Cross X Fitness Box. All Rights Reserved.
           </p>
           <div className="flex gap-10">
              <a href="#" className="text-[10px] uppercase font-black tracking-widest text-cx-grey hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase font-black tracking-widest text-cx-grey hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const GymTour = () => {
  const tourVideos = [
    "https://drive.google.com/file/d/1HDfEEnbv_MIP50X2L36Xhb4hUkVZZWBk/preview",
    "https://drive.google.com/file/d/1uZ-vb41pE-85eqEDeyzUewFBYD2dVKOq/preview"
  ];

  return (
    <section className="py-24 bg-cx-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter italic italic italic leading-none mb-4 italic">Gym <span className="text-cx-red">Tour</span></h2>
          <p className="text-cx-grey">Witness our state-of-the-art facilities in action.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourVideos.map((url, idx) => (
            <div key={idx} className="aspect-video bg-cx-card rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group">
              <iframe 
                src={url} 
                className="absolute inset-0 w-full h-full" 
                title={`Gym Tour Phase ${idx + 1}`}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TRAINERS = [
  {
    id: "vikas",
    name: "Vikas",
    specialization: "Strength Training & Muscle Building",
    experience: "7+ YEARS EXPERIENCE",
    description: "Certified strength coach specializing in personalized training programs designed to build functional power and correct muscular imbalances."
  },
  {
    id: "prashant",
    name: "Prashant",
    specialization: "CrossFit & Functional Training",
    experience: "7+ YEARS EXPERIENCE",
    description: "Expert CrossFit trainer dedicated to functional fitness excellence. Prashant helps athletes of all levels push their limits safely and effectively."
  }
];

interface TrainerProps {
  trainer: {
    id: string;
    name: string;
    specialization: string;
    experience: string;
    description: string;
  };
}

const TrainerCard: React.FC<TrainerProps> = ({ trainer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#151515] rounded-[24px] overflow-hidden border border-white/5 transition-all duration-500 hover:border-cx-red/30 shadow-2xl flex flex-col h-full"
    >
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-cx-red/10 flex items-center justify-center text-cx-red">
            <Award size={24} />
          </div>
          <div>
            <h4 className="text-2xl font-black text-white tracking-tight">{trainer.name}</h4>
            <p className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em]">{trainer.experience}</p>
          </div>
        </div>
        
        <p className="text-yellow-500 font-bold text-sm mb-4 uppercase tracking-tight">{trainer.specialization}</p>
        
        <p className="text-white/70 text-sm leading-relaxed mb-4 font-medium">
          {trainer.description}
        </p>
      </div>

      <div className="mt-auto p-6 pt-0">
        <a 
          href={PRIMARY_WA_LINK}
          className="flex items-center justify-center gap-3 w-full bg-transparent border border-white/10 hover:bg-white hover:text-black text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
        >
          Book Session <ChevronRight size={18} />
        </a>
      </div>
    </motion.div>
  );
};

const Trainers = () => {
  return (
    <section id="trainers" className="py-32 bg-cx-bg border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-cx-red mb-4">The Pros</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">Expert Coaching</h3>
          <p className="text-cx-grey max-w-xl mx-auto">Train with certified professionals and achieve real results faster through discipline and iron strength.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TRAINERS.map(trainer => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default function App() {
  return (
    <div className="min-h-screen bg-cx-bg flex flex-col">
      <Navbar />
      <Hero />
      <Programs />
      <VideoShowcase />
      <GymTour />
      <Trainers />
      <About />
      <Pricing />
      <InstagramSection />
      <Contact />
      <Footer />

      <FloatingWhatsApp />

      {/* Sticky Join Button Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cx-bg to-transparent z-[50]">
         <a 
          href={PRIMARY_WA_LINK}
          className="block w-full bg-cx-red text-white py-4 rounded-2xl text-center font-black uppercase text-[10px] tracking-[0.3em] glow-red"
         >
           Join Cross X Now
         </a>
      </div>
    </div>
  );
}
