/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Smile,
  Zap,
  HeartPulse,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { cn } from './lib/utils';
import { CLINIC_INFO, SERVICES, TESTIMONIALS } from './constants';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 px-6 py-3 rounded-full w-[90%] max-w-5xl",
      isScrolled ? "glass shadow-2xl border-white/40" : "bg-transparent"
    )}>
      <div className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-accent-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-accent-200 group-hover:rotate-12 transition-transform duration-500">
            <HeartPulse size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base leading-none text-slate-900">Dr. Ravi Sharma</span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-accent-600">Dental Studio</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-accent-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#appointment" 
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-600 transition-all shadow-xl active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-full mt-4 left-0 right-0 glass rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-2xl border-white/40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-bold text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#appointment" 
              className="bg-accent-600 text-white px-6 py-4 rounded-2xl text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white via-slate-50 to-accent-50/30 -z-10" />
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent-100/40 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="container-custom px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-accent-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-600"></span>
            </span>
            <span>Excellence in Modern Dentistry</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-[0.95] tracking-tighter">
            Precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">Dentistry.</span> <br />
            Pure Comfort.
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Redefining the dental experience in Indore through advanced technology and a serene, patient-first environment.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
            <a 
              href="#appointment" 
              className="btn-premium bg-slate-900 text-white shadow-2xl shadow-slate-200 hover:bg-accent-600 hover:-translate-y-1 transition-all group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href={`tel:${CLINIC_INFO.phone}`} 
              className="btn-premium bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-3"
            >
              <Phone size={18} />
              Contact Studio
            </a>
          </div>

          <div className="mt-16 lg:mt-20 flex items-center justify-center lg:justify-start gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">4.7</span>
              <div className="flex text-amber-400 mt-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-2">Google Rating</span>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">15+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-2">Years Exp.</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1074&auto=format&fit=crop" 
              alt="Modern Dental Studio" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
              fetchPriority="high"
            />
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 lg:-bottom-10 lg:-right-10 glass p-6 lg:p-8 rounded-[24px] lg:rounded-[32px] shadow-2xl z-20 max-w-[240px] lg:max-w-[280px] border-white/60"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent-50 text-accent-600 rounded-xl lg:rounded-2xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <span className="font-bold text-slate-900 leading-tight text-sm lg:text-base">Digital <br />Precision</span>
            </div>
            <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed font-medium">
              We utilize 3D imaging and AI-driven diagnostics for unmatched accuracy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white relative overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-xs font-bold text-accent-600 uppercase tracking-[0.3em] mb-8">The Visionary</h2>
            <h3 className="text-5xl md:text-6xl font-bold text-slate-900 mb-10 tracking-tighter leading-[0.95]">
              Artistry Meets <br />Clinical Mastery.
            </h3>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              Dr. Ravi Sharma approach is defined by a rare combination of technical precision and aesthetic intuition. Every smile is treated as a unique masterpiece.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                "Advanced Diagnostics",
                "Aesthetic Integration",
                "Minimally Invasive",
                "Patient-Centric Care",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-600" />
                  <span className="font-bold text-slate-900 text-sm uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <HeartPulse size={24} />
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium italic">
                "We don't just treat teeth; we enhance lives through confident smiles. Our studio is a sanctuary for those who value excellence."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm overflow-hidden border border-slate-200">
                  <img src="https://picsum.photos/seed/doctor/100/100" alt="Dr. Ravi Sharma" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg tracking-tight">{CLINIC_INFO.doctor}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent-600">Founder & Lead Surgeon</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
              <img 
                src="https://images.pexels.com/photos/5738735/pexels-photo-5738735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent-500/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Sparkles': return <Sparkles size={24} />;
    case 'Stethoscope': return <Stethoscope size={24} />;
    case 'ShieldCheck': return <ShieldCheck size={24} />;
    case 'Smile': return <Smile size={24} />;
    case 'Zap': return <Zap size={24} />;
    case 'HeartPulse': return <HeartPulse size={24} />;
    default: return <HeartPulse size={24} />;
  }
};

const Services = () => {
  return (
    <section id="services" className="container-custom section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <h2 className="text-xs font-bold text-accent-600 uppercase tracking-[0.3em] mb-6">Our Expertise</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter">Bespoke Dental <br />Solutions.</h3>
        </div>
        <p className="text-slate-500 max-w-xs text-sm leading-relaxed font-medium">
          Tailored treatments combining clinical excellence with aesthetic mastery.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "group bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col",
              i === 0 || i === 3 ? "md:col-span-7" : "md:col-span-5"
            )}
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={(service as any).image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur text-slate-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-accent-600 group-hover:text-white transition-all duration-500">
                <ServiceIcon name={service.icon} />
              </div>
            </div>
            
            <div className="p-10 pt-4 flex flex-col justify-between flex-1">
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-xs">
                  {service.description}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <a href="#appointment" className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-accent-600 group-hover:text-white transition-all duration-500">
                  <ArrowRight size={20} />
                </a>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">0{i + 1}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-950 text-white section-padding overflow-hidden relative rounded-[60px] mx-6">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,85,255,0.1),transparent)] -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-xs font-bold text-accent-400 uppercase tracking-[0.4em] mb-8">The Studio Standard</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Why Global Patients <br />Trust Us.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Clinical Mastery", desc: "15+ years of refining complex dental procedures.", icon: <Star /> },
            { title: "Zero-Infection Zone", desc: "Hospital-grade sterilization and hygiene protocols.", icon: <ShieldCheck /> },
            { title: "Anxiety-Free", desc: "Sedation dentistry and a calming studio atmosphere.", icon: <Smile /> },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-accent-400 group hover:bg-accent-600 hover:text-white transition-all duration-500">
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="container-custom section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <h2 className="text-xs font-bold text-accent-600 uppercase tracking-[0.3em] mb-6">Patient Stories</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter">Trusted by the <br />Community.</h3>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex text-amber-400 mb-2">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-current" />)}
          </div>
          <p className="text-slate-900 font-bold text-lg">{CLINIC_INFO.rating} Average Rating</p>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">From {CLINIC_INFO.reviewsCount} Google Reviews</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="flex text-amber-400 mb-8">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-current" />)}
            </div>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed font-medium">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center font-bold text-accent-600 border border-slate-100">
                {t.name[0]}
              </div>
              <div>
                <span className="font-bold text-slate-900 block tracking-tight">{t.name}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Verified Patient</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <a 
          href="https://www.google.com/maps/place/Dr.Ravi+Sharma+Dental+Clinic/@22.744026,75.854433,15z" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-premium bg-white border border-slate-200 text-slate-900 inline-flex items-center gap-3 hover:bg-slate-50"
        >
          View Google Reviews
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

const Appointment = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <section id="appointment" className="section-padding">
      <div className="container-custom">
        <div className="bg-slate-900 rounded-[60px] p-8 md:p-20 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,85,255,0.15),transparent)] -z-0" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-xs font-bold text-accent-400 uppercase tracking-[0.4em] mb-8">Reservations</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tighter leading-[0.95]">
                Begin Your <br />Transformation.
              </h3>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                Experience the future of dental care. Our studio provides a seamless, luxurious environment for all your needs.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent-400">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                    <p className="text-2xl font-bold text-white tracking-tight">{CLINIC_INFO.phoneDisplay}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-accent-400">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-1">Studio Hours</p>
                    <p className="text-xl font-bold text-white tracking-tight">{CLINIC_INFO.timings.weekdays}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[40px]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-white placeholder:text-slate-600"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter your phone"
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-white placeholder:text-slate-600"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 ml-1">Message</label>
                  <textarea 
                    placeholder="How can we assist you?"
                    rows={3}
                    className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-white placeholder:text-slate-600 resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-accent-600 text-white rounded-2xl font-bold text-lg hover:bg-accent-500 transition-all shadow-2xl shadow-accent-900/20 active:scale-95"
                >
                  {isSubmitted ? "Request Received" : "Request Appointment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="container-custom section-padding">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-xs font-bold text-accent-600 uppercase tracking-[0.3em] mb-8">Location</h2>
          <h3 className="text-5xl md:text-6xl font-bold text-slate-900 mb-12 tracking-tighter leading-[0.95]">Visit Our <br />Studio.</h3>
          
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center flex-shrink-0 border border-slate-100">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">Address</h4>
                <p className="text-slate-500 leading-relaxed max-w-xs font-medium">
                  {CLINIC_INFO.address}
                </p>
                <p className="text-accent-600 font-bold mt-4 text-[10px] uppercase tracking-widest">{CLINIC_INFO.locationTag}</p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center flex-shrink-0 border border-slate-100">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">Direct Line</h4>
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-slate-500 text-xl font-bold hover:text-accent-600 transition-colors tracking-tight">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border-8 border-white h-[500px]">
          <iframe 
            src={CLINIC_INFO.mapEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="container-custom pt-32 pb-12 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-accent-600 rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base leading-none text-slate-900">Dr. Ravi Sharma</span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-accent-600">Dental Studio</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
              Redefining dental excellence through clinical mastery and aesthetic intuition.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-accent-600 hover:bg-white hover:shadow-lg transition-all border border-slate-100">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.3em] mb-8">Studio</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Reviews', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-500 hover:text-accent-600 text-sm font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.3em] mb-8">Expertise</h4>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.title}>
                  <a href="#services" className="text-slate-500 hover:text-accent-600 text-sm font-medium transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.3em] mb-8">Connect</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 text-sm text-slate-500 font-medium">
                <MapPin size={18} className="text-accent-600 flex-shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex gap-4 text-sm text-slate-500 font-medium">
                <Phone size={18} className="text-accent-600 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-slate-900 font-bold">{CLINIC_INFO.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Dr. Ravi Sharma Dental Studio.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-slate-900 text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse gap-4">
    <motion.a
      href={`https://wa.me/${CLINIC_INFO.phone}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all"
      title="WhatsApp Us"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.544 4.197 1.582 6.025L0 24l6.149-1.613a11.771 11.771 0 005.9 1.594h.005c6.632 0 12.028-5.391 12.03-12.027a11.76 11.76 0 00-3.522-8.455"/>
      </svg>
    </motion.a>
    
    <motion.a
      href={`tel:${CLINIC_INFO.phone}`}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="w-16 h-16 bg-accent-600 text-white rounded-2xl flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,85,255,0.4)] transition-all md:hidden"
      title="Call Us"
    >
      <Phone size={32} />
    </motion.a>
  </div>
);

// --- Main App ---

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": CLINIC_INFO.name,
          "image": "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000",
          "@id": "",
          "url": window.location.href,
          "telephone": CLINIC_INFO.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1/1, Near Teen Puliya, Opposite School, Sarwahara Nagar, Teen Puliya Square",
            "addressLocality": "Indore",
            "postalCode": "452011",
            "addressRegion": "MP",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.744026,
            "longitude": 75.854433
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "14:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "17:30",
              "closes": "21:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": CLINIC_INFO.rating,
            "reviewCount": CLINIC_INFO.reviewsCount
          }
        })}
      </script>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      
      <FloatingCTA />
    </div>
  );
}
