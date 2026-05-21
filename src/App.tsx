/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Camera, 
  Video, 
  Clapperboard, 
  Clock, 
  Plane, 
  Plus, 
  Smartphone, 
  ChevronRight,
  MessageCircle,
  Zap,
  Globe,
  Star,
  Award,
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "./assets/images/regenerated_image_1779163048956.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-500/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3" : "bg-transparent py-4 md:py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-transparent flex items-center justify-center overflow-hidden">
              <img 
                src={logo} 
                className="w-full h-full object-contain"
                alt="Cineverse Visual Logo"
              />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-[0.1em] uppercase whitespace-nowrap">
              Cineverse <span className="text-cyan-400">Visual</span>
            </span>
          </motion.div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex gap-8 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
              {["Services", "Pricelist", "Portfolio", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 md:gap-4 border-l border-zinc-800 pl-4 md:pl-6 ml-2">
              <a href="https://www.instagram.com/cineverse.visual/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.tiktok.com/@cak.laed?lang=id-ID" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.42-.33-.22-.65-.46-.94-.73v6.54c0 1.25-.32 2.45-1.01 3.52-.7 1.14-1.8 2.05-3.08 2.48-1.07.38-2.26.47-3.37.28-1.55-.26-3.02-1.12-4.04-2.33-1.08-1.28-1.63-2.95-1.57-4.63.07-1.83.74-3.6 1.95-4.99 1.34-1.54 3.33-2.52 5.37-2.67v4.07c-1.14.07-2.27.53-3.11 1.3-.87.82-1.29 2.05-1.17 3.24.12 1.17.75 2.15 1.62 2.87.81.65 1.83.92 2.81.82 1.16-.1 2.18-.75 2.72-1.74.34-.6.48-1.28.48-1.96V.02Z"/>
                </svg>
              </a>
            </div>


          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-900 p-8 flex flex-col gap-6 md:hidden z-40"
            >
              {["Services", "Pricelist", "Portfolio", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold uppercase tracking-tight"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[85vh] md:min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-white/5 text-zinc-300 border border-white/10 rounded-full backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500 animate-pulse" />
              2026 — Demak, Central Java
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-8xl font-display font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1] uppercase"
            >
              Professional <br /> 
              <span className="text-white">Pricelist</span> <span className="text-cyan-400">2026</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="max-w-2xl mx-auto text-base sm:text-lg md:text-2xl text-zinc-400 mb-8 md:mb-12 font-medium tracking-tight px-4"
            >
              Capture Your Moment
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 px-6 md:px-0">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full sm:w-auto bg-white text-zinc-950 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all hover:bg-cyan-400 hover:scale-105 active:scale-95 shadow-2xl uppercase tracking-widest"
              >
                Explore Packages
              </button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        
        <section className="mb-20 md:mb-40 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-8"
          >
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-widest leading-tight px-2">
              Cineverse Visual <br/>
              <span className="text-zinc-500 font-medium lowercase italic text-xl md:text-3xl">— the art of visual storytelling</span>
            </h2>
            <div className="w-12 h-1 bg-cyan-500 mx-auto rounded-full" />
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
              Kami hadir untuk mengabadikan setiap momen penting melalui lensa profesional, 
              memberikan hasil terbaik untuk setiap kebutuhan dokumentasi Anda.
            </p>
          </motion.div>
        </section>

        <section id="services" className="mb-16 md:mb-40 px-2 md:px-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-16">
            <div className="w-full md:w-2/3">
              <div className="text-cyan-500 font-mono text-[10px] md:text-xs mb-2 md:mb-4 tracking-[0.4em] uppercase opacity-70">// Section 01</div>
              <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tight mb-3 md:mb-6">Event Documentation</h2>
              <p className="text-zinc-400 max-w-2xl text-sm md:text-lg leading-relaxed">
                Layanan dokumentasi untuk mengabadikan momen berharga Anda dengan kualitas sinematik tinggi.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
                {["Seminar", "Gathering", "Sekolah", "Komunitas", "Pengajian"].map(tag => (
                  <span key={tag} className="px-2 md:px-3 py-1 md:py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-[8px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-10 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-hide snap-x snap-mandatory">
            {[
              { 
                name: "Basic", 
                price: "500.000", 
                features: ["Event Photography", "Aftermovie Highlight", "Digital Delivery", "Basic Color Grading"]
              },
              { 
                name: "Standard", 
                price: "1.000.000", 
                popular: true,
                features: ["High-Res Event Photography", "Cinematic Aftermovie", "Full Event Coverage", "Detailed Editing", "Fast Delivery"]
              },
              { 
                name: "Premium", 
                price: "1.200.000", 
                features: ["Event Photography", "Premium Aftermovie", "70 Edited Photos", "Highest Resolution Output", "Same Day Teaser"]
              }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative p-6 md:p-12 rounded-[24px] md:rounded-[48px] overflow-hidden ${pkg.popular ? "bg-zinc-800" : "bg-zinc-900"} border border-zinc-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between min-h-[420px] md:min-h-[550px] min-w-[280px] md:min-w-0 snap-center`}
              >
                <div>
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-cyan-500 text-zinc-950 text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      Recommended
                    </div>
                  )}
                  <h3 className="text-xl md:text-3xl font-display font-bold mb-4 md:mb-8 uppercase tracking-wider">{pkg.name}</h3>
                  <div className="mb-6 md:mb-12">
                    <span className="text-[9px] md:text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest block mb-1 md:mb-2">Service Fee</span>
                    <div className="text-3xl md:text-5xl font-display font-black text-white">Rp {pkg.price}</div>
                  </div>
                  <div className="space-y-3 md:space-y-5 mb-8 md:mb-12">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 md:gap-4 text-zinc-400 text-xs md:text-base leading-relaxed">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-cyan-500 mt-1.5 md:mt-2 shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
                <a 
                  href={`https://wa.me/6282136526079?text=Halo%20Cineverse%2C%20saya%20ingin%20memesan%20paket%20Event%20Documentation%20${pkg.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`block text-center w-full py-3.5 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-[0.2em] text-[9px] md:text-xs transition-all ${pkg.popular ? "bg-white text-zinc-950 hover:bg-cyan-400" : "bg-zinc-950 text-white border border-zinc-800 hover:bg-zinc-800"}`}
                >
                  Choose {pkg.name}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hourly Session */}
        <section id="pricelist" className="mb-16 md:mb-40 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center px-2 md:px-0">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-2 lg:order-1"
          >
            <div className="text-cyan-500 font-mono text-[10px] md:text-xs mb-2 md:mb-4 tracking-[0.4em] uppercase opacity-70">// Section 02</div>
            <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4 md:mb-8">Hourly <br className="hidden md:block"/> Session</h2>
            <p className="text-zinc-400 text-sm md:text-xl leading-relaxed mb-6 md:mb-10 font-light">
              Layanan dokumentasi berbasis durasi waktu yang fleksibel, ideal untuk kebutuhan yang lebih personal dan spesifik.
            </p>
            <div className="p-5 md:p-10 bg-zinc-900/40 backdrop-blur-sm rounded-[24px] md:rounded-[48px] border border-zinc-800/50 mb-8 md:mb-12">
              <h4 className="text-[9px] md:text-xs font-bold text-zinc-500 mb-4 md:mb-6 uppercase tracking-[0.3em]">Perfect For Moments:</h4>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {["Tasyakuran", "Ulang Tahun", "Aqiqah", "Keluarga"].map(item => (
                  <div key={item} className="flex items-center gap-2 md:gap-3 text-xs md:text-base text-zinc-300">
                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-10">
              <a 
                href="https://wa.me/6282136526079?text=Halo%20Cineverse%2C%20saya%20ingin%20tanya%20tentang%20layanan%20Hourly%20Session"
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 md:gap-4 bg-zinc-100 text-zinc-950 px-6 md:px-8 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-sm hover:bg-cyan-400 transition-all shadow-xl"
              >
                Inquire Session
                <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 ml-1" />
              </a>
            </div>
          </motion.div>

          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            {[
              { label: "1 Hour Session", price: "175.000" },
              { label: "2 Hour Session", price: "250.000", highlight: true },
              { label: "Extra Hour Add-On", price: "120.000" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 md:p-12 rounded-[24px] md:rounded-[48px] flex justify-between items-center transition-all border ${item.highlight ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_50px_rgba(34,211,238,0.05)]" : "bg-zinc-900/60 border-zinc-800"}`}
              >
                <span className="text-base md:text-2xl font-bold text-zinc-100 uppercase tracking-tight">{item.label}</span>
                <span className={`text-xl md:text-4xl font-display font-black ${item.highlight ? "text-cyan-400" : "text-white"}`}>Rp {item.price}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Commercial & Social */}
        <section id="portfolio" className="mb-16 md:mb-40 px-2 md:px-0">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-20 text-center md:text-left">
            <div>
              <div className="text-cyan-500 font-mono text-[10px] md:text-xs mb-2 md:mb-4 tracking-[0.4em] uppercase opacity-70">// Section 03</div>
              <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tight">Social Media & Commercial</h2>
              <p className="text-zinc-400 mt-2 md:mt-4 max-w-2xl text-sm md:text-lg leading-relaxed mx-auto md:mx-0 font-light">
                Konten visual kreatif untuk meningkatkan engagement media sosial dan memperkuat branding bisnis Anda.
              </p>
              <div className="mt-4 md:mt-8 flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 items-center px-4 md:px-5 py-2 md:py-2.5 bg-white/5 rounded-full text-[8px] md:text-[10px] text-zinc-400 font-bold uppercase tracking-widest border border-white/5 inline-flex">
                <Clock className="w-3 md:w-3.5 h-3 md:h-3.5 text-cyan-500" /> Fast Content Delivery Pipeline
              </div>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-hide snap-x snap-mandatory">
            {[
              { name: "Content", price: "250.000", detail: "Shooting + Editing", target: "IG / TikTok / Shorts" },
              { name: "Campaign", price: "470.000", detail: "Concept + Shooting + Editing", target: "Business Reels / Promo" },
              { name: "Business", price: "2.700.000", detail: "Concept + Video Production", target: "Company Profile / Branding", accent: true },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`p-8 md:p-12 rounded-[24px] md:rounded-[48px] border flex flex-col justify-between min-h-[380px] md:min-h-[450px] min-w-[280px] md:min-w-0 snap-center ${item.accent ? "bg-white text-zinc-950 border-white shadow-[0_20px_60px_rgba(255,255,255,0.05)]" : "bg-zinc-900/60 text-white border-zinc-800"}`}
              >
                <div>
                  <h3 className={`text-lg md:text-2xl font-bold uppercase tracking-[0.2em] mb-3 md:mb-4 ${item.accent ? "text-zinc-950" : "text-cyan-400"}`}>{item.name}</h3>
                  <div className="text-3xl md:text-5xl font-display font-black mb-6 md:mb-8">Rp {item.price}</div>
                  
                  <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                    <div className={`p-4 md:p-5 rounded-2xl md:rounded-3xl ${item.accent ? "bg-zinc-100" : "bg-white/5 border border-white/5"}`}>
                      <p className={`text-[8px] md:text-[9px] uppercase font-bold tracking-widest mb-1 md:mb-1.5 ${item.accent ? "text-zinc-500" : "text-zinc-500"}`}>Service Details</p>
                      <p className="font-medium text-xs md:text-base leading-snug">{item.detail}</p>
                    </div>
                    <div className={`p-4 md:p-5 rounded-2xl md:rounded-3xl ${item.accent ? "bg-zinc-100" : "bg-white/5 border border-white/5"}`}>
                      <p className={`text-[8px] md:text-[9px] uppercase font-bold tracking-widest mb-1 md:mb-1.5 ${item.accent ? "text-zinc-500" : "text-zinc-500"}`}>Target Output</p>
                      <p className="font-medium text-xs md:text-base leading-snug">{item.target}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/6282136526079?text=Halo%20Cineverse%2C%20saya%20ingin%20konsultasi%20paket%20Commercial%20${item.name}`}
                  target="_blank"
                  rel="noreferrer"
                  className={`block text-center py-3.5 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[9px] md:text-xs transition-all ${item.accent ? "bg-zinc-950 text-white hover:bg-zinc-800" : "bg-white text-zinc-950 hover:bg-cyan-400"}`}
                >
                  Book Commercial {item.name}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:mt-20 p-6 md:p-12 rounded-[24px] md:rounded-[56px] bg-zinc-900/40 border border-zinc-800/50 text-center">
            <p className="text-zinc-500 text-[8px] md:text-[10px] md:text-xs uppercase font-bold tracking-[0.3em] mb-6 md:mb-8">Creative Content Applications</p>
            <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6 text-[8px] md:text-[10px] md:text-xs font-bold text-zinc-400">
              {["INSTAGRAM REELS", "TIKTOK CONTENT", "ADVERTISING", "SCHOOL EVENTS", "UMKM PROMO", "CAFE BRANDING", "BTS VIDEO"].map(tag => (
                <span key={tag} className="hover:text-cyan-400 transition-colors cursor-default tracking-widest">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Duo Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-16 md:mb-40 px-2 md:px-0">
           <motion.div 
            whileHover={{ scale: 1.01 }}
            className="group relative h-[300px] md:h-[450px] rounded-[24px] md:rounded-[56px] overflow-hidden p-6 md:p-12 flex flex-col justify-end"
           >
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.35] group-hover:scale-110 transition-transform duration-1000"
                alt="Editing Service"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Video className="w-4 h-4 md:w-5 md:h-5 text-zinc-950" />
                  </div>
                  <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Section 04</span>
                </div>
                <h3 className="text-2xl md:text-5xl font-display font-bold mb-2 md:mb-4 uppercase tracking-tight">Editing Service</h3>
                <p className="text-zinc-300 text-xs md:text-base mb-6 md:mb-8 max-w-sm leading-relaxed font-light">Turn your raw footage into cinematic masterpieces.</p>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="inline-flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-xl px-4 md:px-8 py-2 md:py-4 rounded-full border border-white/20">
                    <span className="text-[9px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest">Starts</span>
                    <span className="text-lg md:text-2xl font-display font-black text-white">Rp 50k</span>
                  </div>
                  <a 
                    href="https://wa.me/6282136526079?text=Halo%20Cineverse%2C%20saya%20punya%20footage%20yang%20ingin%20diedit"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 md:p-5 bg-white rounded-full text-zinc-950 hover:bg-cyan-400 transition-all font-bold uppercase text-[8px] md:text-[10px] tracking-widest shadow-xl"
                  >
                    Send Footage
                  </a>
                </div>
              </div>
           </motion.div>

           <motion.div 
            whileHover={{ scale: 1.01 }}
            className="group relative h-[300px] md:h-[450px] rounded-[24px] md:rounded-[56px] overflow-hidden p-6 md:p-12 flex flex-col justify-end"
           >
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.35] group-hover:scale-110 transition-transform duration-1000"
                alt="Travel Documentation"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Plane className="w-4 h-4 md:w-5 md:h-5 text-zinc-950" />
                  </div>
                  <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Section 05</span>
                </div>
                <h3 className="text-2xl md:text-5xl font-display font-bold mb-2 md:mb-4 uppercase tracking-tight">Travel Doc</h3>
                <p className="text-zinc-300 text-xs md:text-base mb-6 md:mb-8 max-w-sm leading-relaxed font-light">Custom documentation packages for your adventures.</p>
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                  <div className="inline-flex items-center gap-3 md:gap-4 bg-white/10 backdrop-blur-xl px-4 md:px-8 py-2 md:py-4 rounded-full border border-white/20">
                    <span className="text-[9px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest">Starts</span>
                    <span className="text-lg md:text-2xl font-display font-black text-white">Rp 500k</span>
                  </div>
                  <a 
                    href="https://wa.me/6282136526079?text=Halo%20Cineverse%2C%20saya%20ingin%20memesan%20Travel%20Documentation"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 md:p-5 bg-white rounded-full text-zinc-950 hover:bg-cyan-400 transition-all font-bold uppercase text-[8px] md:text-[10px] tracking-widest shadow-xl"
                  >
                    Plan Trip
                  </a>
                </div>
              </div>
           </motion.div>
        </div>

        {/* Add-Ons */}
        <section className="mb-16 md:mb-48 px-2 md:px-0">
          <div className="text-center mb-10 md:mb-24">
            <div className="text-cyan-500 font-mono text-[10px] md:text-xs mb-2 md:mb-4 tracking-[0.4em] uppercase opacity-70">// Extra Features</div>
            <h2 className="text-2xl md:text-5xl font-display font-bold mb-4 md:mb-6 uppercase tracking-[0.1em] inline-flex items-center gap-4 md:gap-6">
              Production <span className="text-zinc-500 font-light lowercase italic">add-ons</span>
            </h2>
            <div className="h-0.5 w-16 md:w-24 bg-zinc-800 mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {[
              { label: "Drone Service", price: "300k", detail: "Per Battery" },
              { label: "Extra Crew", price: "100k", detail: "Per Session" },
              { label: "Same Day Edit", price: "120k", detail: "Per Project" },
              { label: "Extra Revision", price: "50k", detail: "Per Revision" },
              { label: "Raw Data", price: "75k", detail: "Per Project" },
              { label: "Motion Graphic", price: "40k", detail: "Per Element" },
            ].map((addon, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-4 md:p-10 rounded-[16px] md:rounded-[40px] bg-zinc-900/30 border border-zinc-800/40 hover:border-cyan-400/30 transition-all flex flex-col justify-between shadow-xl hover:shadow-cyan-400/5 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-4 md:mb-10">
                  <div className="text-[7px] md:text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">M — {i + 1 < 10 ? `0${i+1}` : i+1}</div>
                  <Plus className="w-3 md:w-5 h-3 md:h-5 text-cyan-500/40 group-hover:text-cyan-500 group-hover:rotate-90 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xl font-bold text-white mb-1 md:mb-4 uppercase tracking-widest group-hover:text-cyan-400 transition-all truncate">{addon.label}</h4>
                  <div className="flex items-baseline gap-1 md:gap-3">
                    <span className="text-sm md:text-3xl font-display font-black text-white">Rp {addon.price}</span>
                    <span className="hidden sm:inline text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{addon.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

        {/* Footer */}
      <footer id="contact" className="border-t border-zinc-900 pt-24 md:pt-40 pb-12 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 mb-20 md:mb-40">
            <div>
              <div className="flex items-center gap-3 mb-10 md:mb-16">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-transparent flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo} 
                    className="w-full h-full object-contain"
                    alt="Cineverse Visual Logo"
                  />
                </div>
                <span className="font-display font-bold text-lg md:text-2xl uppercase tracking-[0.1em]">Cineverse Visual</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-12 md:mb-16 leading-[1.1] md:leading-tight tracking-tighter">
                Ready to bring your <br /> ideas to <span className="text-zinc-500 italic font-light">life?</span>
              </h2>
              <div className="flex gap-5 md:gap-6">
                <a href="https://www.instagram.com/cineverse.visual/" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-cyan-500 hover:text-zinc-950 transition-all group">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.tiktok.com/@cak.laed?lang=id-ID" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-cyan-500 hover:text-zinc-950 transition-all group">
                  <svg className="w-5 h-5 md:w-6 md:h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.42-.33-.22-.65-.46-.94-.73v6.54c0 1.25-.32 2.45-1.01 3.52-.7 1.14-1.8 2.05-3.08 2.48-1.07.38-2.26.47-3.37.28-1.55-.26-3.02-1.12-4.04-2.33-1.08-1.28-1.63-2.95-1.57-4.63.07-1.83.74-3.6 1.95-4.99 1.34-1.54 3.33-2.52 5.37-2.67v4.07c-1.14.07-2.27.53-3.11 1.3-.87.82-1.29 2.05-1.17 3.24.12 1.17.75 2.15 1.62 2.87.81.65 1.83.92 2.81.82 1.16-.1 2.18-.75 2.72-1.74.34-.6.48-1.28.48-1.96V.02Z"/>
                  </svg>
                </a>
                <a href="https://wa.me/6282136526079" target="_blank" rel="noreferrer" className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-cyan-500 hover:text-zinc-950 transition-all group">
                  <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="bg-zinc-900/60 p-8 md:p-16 rounded-[48px] md:rounded-[64px] text-white flex flex-col justify-between items-start gap-12 md:gap-16 border border-zinc-800 shadow-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-500/[0.02] group-hover:bg-cyan-500/[0.05] transition-colors pointer-events-none" />
              <div className="relative z-10 text-3xl md:text-5xl font-display font-medium tracking-tighter leading-tight italic">
                Let's discuss <br />your project.
              </div>
              <a 
                href="https://wa.me/6282136526079" 
                target="_blank" 
                rel="noreferrer"
                className="relative z-10 flex items-center gap-4 bg-white text-zinc-950 px-8 md:px-10 py-5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase transition-all border border-transparent hover:bg-cyan-400 group-hover:shadow-[0_10px_30px_rgba(34,211,238,0.2)]"
              >
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 text-zinc-950" />
                Contact via WhatsApp
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 md:pt-16 border-t border-zinc-900 gap-8 text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            <p>© 2026 Cineverse Visual — Crafting Vision into Reality.</p>
            <div className="flex gap-10 md:gap-16">
              <a href="#" className="hover:text-cyan-400 transition-colors">Legal</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Support</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Press</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
