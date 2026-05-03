/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { 
  Building2, 
  Hammer, 
  Ruler, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  HardHat, 
  ChevronRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    title: "گرے اسٹرکچر (کچا کام)",
    description: "لینٹر، دیوار اور بنیاد کا مضبوط کام۔ ہم آپ کی عمارت کے لیے بہترین اور پائیدار بنیاد فراہم کرتے ہیں۔",
    icon: <Building2 className="w-8 h-8" />
  },
  {
    title: "پیور بلاکس اور روڈز",
    description: "اعلیٰ معیار کے پیور بلاکس اور سڑکوں کی تعمیر۔ گلیوں اور شاہراہوں کے لیے پائیدار حل۔",
    icon: <Hammer className="w-8 h-8" />
  },
  {
    title: "گورنمنٹ اور PPHI پروجیکٹس",
    description: "سرکاری ہسپتالوں اور PPHI بلڈنگز کی تعمیر کا وسیع تجربہ۔ معیار پر کوئی سمجھوتہ نہیں۔",
    icon: <CheckCircle2 className="w-8 h-8" />
  },
  {
    title: "تعمیر نو (Renovation)",
    description: "پرانی بلڈنگ کو نیا لک دینا۔ ہم پرانے گھروں کو جدید اور خوبصورت بناتے ہیں۔",
    icon: <Ruler className="w-8 h-8" />
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "سپر اسپیشلٹی ہسپتال (1000 بیڈز)",
    location: "Hyderabad, Sindh",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    category: "Government"
  },
  {
    id: 2,
    title: "جدید میڈیکل انسٹی ٹیوٹ (Progress)",
    location: "Sindh Region",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
    category: "Healthcare"
  },
  {
    id: 3,
    title: "پیور بلاک روڈ ورک (کاروکوہ)",
    location: "Karokoh Area",
    image: "https://images.unsplash.com/photo-1517089596392-db9a5e062cb1?auto=format&fit=crop&q=80&w=800",
    category: "Infrastructure"
  },
  {
    id: 4,
    title: "کثیر المنزلہ کمرشل بلڈنگ",
    location: "Main City Center",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    category: "Commercial"
  },
  {
    id: 5,
    title: "گرے اسٹرکچر ہسپتال ونگ",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800",
    category: "Grey Structure"
  },
  {
    id: 6,
    title: "مین ہائی وے روڈ پروجیکٹ",
    location: "Sindh",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    category: "Roads"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900" dir="rtl">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3" dir="ltr">
              <div className="relative">
                <div className="bg-brand-blue p-2.5 rounded-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-brand-orange w-4 h-4 rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black tracking-tighter text-slate-900 leading-none">NAZEER <span className="text-brand-orange">&</span> SONS</span>
                <span className="text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase mt-1">Construction & Builders</span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-semibold hover:text-brand-orange transition-colors">ہوم</a>
              <a href="#about" className="text-sm font-semibold hover:text-brand-orange transition-colors">ہمارے بارے میں</a>
              <a href="#services" className="text-sm font-semibold hover:text-brand-orange transition-colors">ہماری خدمات</a>
              <a href="#projects" className="text-sm font-semibold hover:text-brand-orange transition-colors">پروجیکٹس</a>
              <a href="#contact" className="bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-blue/90 transition-all">رابطہ کریں</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>ہوم</a>
                <a href="#about" className="block text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>ہمارے بارے میں</a>
                <a href="#services" className="block text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>ہماری خدمات</a>
                <a href="#projects" className="block text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>پروجیکٹس</a>
                <a href="#contact" className="block bg-brand-blue text-white px-6 py-3 rounded-xl text-center font-bold" onClick={() => setIsMenuOpen(false)}>رابطہ کریں</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-right">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mr-auto"
          >
            <span className="inline-block bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              بہترین تعمیر اور بھروسہ
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              آپ کا خواب، <span className="text-brand-orange">ہماری تعمیر</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Nazeer & Sons آپ کے گھر اور کمرشل بلڈنگز کو بہترین کوالٹی اور مضبوطی کے ساتھ تعمیر کرتے ہیں۔
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a href="#projects" className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2">
                ہمارے پروجیکٹس دیکھیں <ArrowRight className="w-5 h-5 rotate-180" />
              </a>
              <a href="#contact" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center">
                مفت مشورہ
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center md:text-right">
                <p className="text-3xl font-display font-bold text-white">250+</p>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider">پروجیکٹس مکمل</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-display font-bold text-white">25+</p>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider">سالوں کا تجربہ</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-display font-bold text-white">150+</p>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider">مطمئن کلائنٹس</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-display font-bold text-white">50+</p>
                <p className="text-sm text-slate-300 font-medium uppercase tracking-wider">ماہر ٹیم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Construction Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-orange p-8 rounded-3xl text-white shadow-xl hidden sm:block">
                <p className="text-5xl font-display font-bold mb-1">25</p>
                <p className="text-sm font-bold uppercase tracking-widest">سالوں کا بھروسہ</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-right order-1 lg:order-2"
            >
              <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">ہماری کہانی</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                کوالٹی تعمیر بذریعہ <span className="text-brand-orange">نذیر اینڈ سنز</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nazeer & Sons پچھلے 25 سالوں سے تعمیراتی شعبے میں بہترین خدمات انجام دے رہا ہے۔ ہماری ٹیم گورنمنٹ سول ہسپتال حیدرآباد، PPHI بلڈنگز اور کاروکوہ جیسے بڑے پروجیکٹس مکمل کر چکی ہے۔
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "مضبوط گرے اسٹرکچر (کچا کام)",
                  "پیور بلاکس اور روڈ کی تعمیر",
                  "وقت پر کام کی تکمیل",
                  "مناسب ریٹ اور بہترین کوالٹی"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-end">
                    <span className="font-semibold text-slate-700">{item}</span>
                    <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all mr-auto">
                <ChevronRight className="w-5 h-5 rotate-180" /> مزید جاننے کے لیے
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owner's Message Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 md:p-20 text-right order-2 lg:order-1">
                <div className="bg-brand-orange/10 w-12 h-12 rounded-full flex items-center justify-center mb-8 mr-auto ml-0">
                  <span className="text-3xl text-brand-orange font-serif">"</span>
                </div>
                <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">اونر کا پیغام</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                  معیار اور دیانتداری ہماری <span className="text-brand-orange">پہلی ترجیح</span> ہے
                </h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed italic">
                  "نذیر اینڈ سنز کا مقصد صرف عمارتیں بنانا نہیں، بلکہ لوگوں کے خوابوں کو حقیقت کا روپ دینا ہے۔ ہم ہر اینٹ اور ہر بنیاد میں ایمانداری اور بہترین معیار کو یقینی بناتے ہیں تاکہ آپ کی آنے والی نسلیں محفوظ رہیں۔"
                </p>
                <div>
                  <p className="text-2xl font-display font-bold text-slate-900">نذیر احمد</p>
                  <p className="text-brand-orange font-bold uppercase tracking-widest text-sm">بانی و چیئرمین - نذیر اینڈ سنز</p>
                </div>
              </div>
              <div className="relative h-[500px] lg:h-full order-1 lg:order-2">
                <img 
                  src="https://i.ibb.co/QF6ms0jC/owner.jpg" 
                  alt="Owner of Nazeer & Sons"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-right">
              <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">ہمارا کام</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">جدید تعمیرات کی <span className="text-brand-orange">ایک جھلک</span></h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                ہم صرف عمارتیں نہیں بناتے، بلکہ معیار اور بھروسے کی بنیاد رکھتے ہیں۔ اس ویڈیو میں آپ ہمارے بڑے پروجیکٹس بشمول سپر اسپیشلٹی ہسپتال اور کمرشل بلڈنگز کی تعمیر دیکھ سکتے ہیں۔
              </p>
              <div className="flex gap-6 justify-end">
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">1000+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">بیڈز ہسپتال</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">6+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">منزلہ بلڈنگز</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800 group">
              <video 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-construction-site-with-cranes-and-building-structures-31711-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="text-right w-full">
                  <p className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-2">لائیو سائٹ اپ ڈیٹ</p>
                  <h3 className="text-xl font-bold text-white">سپر اسپیشلٹی ہسپتال کی تعمیراتی پیشرفت</h3>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-brand-orange/90 p-6 rounded-full text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                  <Building2 className="w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">ہماری خدمات</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">ہر قسم کی تعمیراتی سہولیات</h2>
            <p className="text-slate-600 text-lg">
              ہم ہر قسم کے رہائشی اور کمرشل پروجیکٹس کو پروفیشنل طریقے سے ہینڈل کرتے ہیں۔
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group text-right"
              >
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors mr-auto ml-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-sm font-bold text-brand-blue flex items-center gap-1 hover:gap-2 transition-all mr-auto">
                  <ChevronRight className="w-4 h-4 rotate-180" /> مزید دیکھیں
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl text-right">
              <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">ہمارا پورٹ فولیو</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">ہمارے <span className="text-brand-orange">بہترین پروجیکٹس</span></h2>
            </div>
            <div className="flex gap-4">
              <button className="bg-slate-100 px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-orange hover:text-white transition-all">سب</button>
              <button className="bg-slate-100 px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-orange hover:text-white transition-all">سرکاری پروجیکٹس</button>
              <button className="bg-slate-100 px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-orange hover:text-white transition-all">سڑکیں</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-right">
                  <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-slate-300 flex items-center gap-1 text-sm justify-end">
                    {project.location} <MapPin className="w-4 h-4" />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-blue/90 transition-all shadow-lg">
              تمام پروجیکٹس دیکھیں
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 skew-x-12 -translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="text-right">
              <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">رابطہ کریں</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">نیا پروجیکٹ شروع <span className="text-brand-orange">کرنا ہے؟</span></h2>
              <p className="text-slate-300 text-lg mb-12 leading-relaxed">
                آپ کے پاس کوئی آئیڈیا ہے یا مکمل پلان، ہم سے رابطہ کریں۔ ہم آپ کو بہترین مشورہ اور کوٹیشن دیں گے۔
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">کال / واٹس ایپ</p>
                    <p className="text-xl font-bold" dir="ltr">03101306235</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-brand-orange" />
                  </div>
                </div>
                <div className="flex items-start gap-6 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">ای میل</p>
                    <p className="text-xl font-bold">nazeerimran624@gmail.com</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Mail className="w-6 h-6 text-brand-orange" />
                  </div>
                </div>
                <div className="flex items-start gap-6 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-1">پتہ</p>
                    <p className="text-xl font-bold">حیدرآباد، سندھ، پاکستان</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-brand-orange" />
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-2xl text-right"
            >
              <h3 className="text-2xl font-bold mb-8">پیغام بھیجیں</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">آپ کا نام</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors text-right" placeholder="نذیر اینڈ سنز" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">فون نمبر</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors text-right" placeholder="0310..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">پروجیکٹ کی قسم</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors text-right">
                    <option>گرے اسٹرکچر</option>
                    <option>روڈ / پیور بلاکس</option>
                    <option>سرکاری پروجیکٹ</option>
                    <option>تعمیر نو</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">پیغام</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange transition-colors min-h-[150px] resize-none text-right" placeholder="اپنے پروجیکٹ کے بارے میں بتائیں..."></textarea>
                </div>
                <button className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-orange/90 transition-all shadow-lg">
                  پیغام بھیجیں
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1 text-right">
              <div className="flex items-center gap-2 mb-6 justify-end" dir="ltr">
                <div className="bg-brand-orange p-2 rounded-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-display font-bold tracking-tight">NAZEER & SONS</span>
                  <p className="text-[10px] font-bold text-brand-orange tracking-[0.2em] uppercase -mt-1">Construction & Builders</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                جدید ٹیکنالوجی اور معیار کے ساتھ تعمیرات۔ آپ کا بھروسہ ہماری پہچان۔
              </p>
              <div className="flex gap-4 justify-end">
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-orange transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-orange transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-orange transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="text-right">
              <h4 className="text-lg font-bold mb-8">لنکس</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#home" className="hover:text-brand-orange transition-colors">ہوم</a></li>
                <li><a href="#about" className="hover:text-brand-orange transition-colors">ہمارے بارے میں</a></li>
                <li><a href="#services" className="hover:text-brand-orange transition-colors">ہماری خدمات</a></li>
                <li><a href="#projects" className="hover:text-brand-orange transition-colors">پروجیکٹس</a></li>
                <li><a href="#contact" className="hover:text-brand-orange transition-colors">رابطہ کریں</a></li>
              </ul>
            </div>

            <div className="text-right">
              <h4 className="text-lg font-bold mb-8">خدمات</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-brand-orange transition-colors">گرے اسٹرکچر</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">پیور بلاکس</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">روڈ ورک</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">سرکاری پروجیکٹس</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">PPHI بلڈنگز</a></li>
              </ul>
            </div>

            <div className="text-right">
              <h4 className="text-lg font-bold mb-8">نیوز لیٹر</h4>
              <p className="text-slate-400 mb-6">تازہ ترین اپ ڈیٹس کے لیے سبسکرائب کریں۔</p>
              <form className="space-y-4">
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange text-right" placeholder="ای میل ایڈریس" />
                <button className="w-full bg-brand-orange text-white py-3 rounded-xl font-bold hover:bg-brand-orange/90 transition-all">سبسکرائب</button>
              </form>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Nazeer & Sons. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
