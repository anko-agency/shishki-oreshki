import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Grid } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/bg_image_1.jpg',
    thumb: '/thumb_matcha.png',
    titleColor: '#9db08c',
    accentColor: '#9db08c',
    descLeft: 'Освежающие напитки для яркого лета в Шишки Орешки. Натуральные ингредиенты, насыщенный вкус, заряд прохлады в каждом глотке.',
    buttonLabel: 'БАБЛ МАТЧА\nЛАТТЕ',
    shortLabel: 'БАБЛ МАТЧА ЛАТТЕ',
  },
  {
    id: 2,
    image: '/bg_image_2.jpg',
    thumb: '/thumb_blueberry.png',
    titleColor: '#9bbbe3',
    accentColor: '#9bbbe3',
    descLeft: 'Нежное сочетание спелой лесной черники с утонченным ароматом дамасской розы, сливочной основы и мягких жемчужин черной тапиоки.',
    buttonLabel: 'БАБЛ ЧЕРНИКА\nРОЗА',
    shortLabel: 'БАБЛ ЧЕРНИКА РОЗА',
  },
  {
    id: 3,
    image: '/bg_image_3.jpg',
    thumb: '/thumb_taro.png',
    titleColor: '#c5aade',
    accentColor: '#c5aade',
    descLeft: 'Экзотический сливочный латте на основе фиолетового корня таро, обладающего уникальным песочно-ореховым вкусом, с добавлением тапиоки.',
    buttonLabel: 'БАБЛ ТАРО\nЛАТТЕ',
    shortLabel: 'БАБЛ ТАРО ЛАТТЕ',
  },
  {
    id: 4,
    image: '/bg_image_4.jpg',
    thumb: '/thumb_cranberry.png',
    titleColor: '#e38da2',
    accentColor: '#e38da2',
    descLeft: 'Освежающий таёжный лимонад на основе терпкой сибирской клюквы, бодрящего сока свежего лайма и прохладного тоника с кубиками льда.',
    buttonLabel: 'ТОНИК\nКЛЮКВА-ЛАЙМ',
    shortLabel: 'ТОНИК КЛЮКВА-ЛАЙМ',
  },
  {
    id: 5,
    image: '/bg_image_5.jpg',
    thumb: '/thumb_mango.png',
    titleColor: '#f7c374',
    accentColor: '#f7c374',
    descLeft: 'Густой ледяной смузи-коктейль из спелого тропического манго. Обладает бархатистой текстурой и дарит мощный заряд прохлады.',
    buttonLabel: 'МАНГОВЫЙ\nФРАППЕ',
    shortLabel: 'МАНГОВЫЙ ФРАППЕ',
  },
  {
    id: 6,
    image: '/bg_image_6.jpg',
    thumb: '/thumb_latte.png',
    titleColor: '#d6b796',
    accentColor: '#d6b796',
    descLeft: 'Насыщенный сливочный кофе с добавлением обжаренного лесного ореха, нежных сливок и сладкого карамельного сиропа.',
    buttonLabel: 'АЙС ЛАТТЕ\nЗОЛОТОЙ КЛЮЧИК',
    shortLabel: 'ОРЕХОВЫЙ РАФ',
  },
];

export default function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Menu');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setActiveSlideIndex((p) => (p + 1) % slides.length);
      else if (e.key === 'ArrowLeft') setActiveSlideIndex((p) => (p - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlide = slides[activeSlideIndex];

  return (
    <div className="min-h-screen bg-neutral-950 text-white tracking-[-0.02em] select-none overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* SVG Asset Overlays from Дизайн без названия (4) */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        
        {/* Left margin torn paper */}
        <div className="absolute left-0 top-0 bottom-0 w-[16vw] max-w-[240px] z-[55]">
          <img src="/assets_v4/img_2.png" alt="torn edge" className="w-full h-full object-cover object-right mix-blend-normal opacity-100 drop-shadow-[5px_0_15px_rgba(0,0,0,0.8)]" />
          
          {/* Pinecone drawing on the dark paper */}
          <img src="/assets_v4/img_4.png" alt="pinecone" className="absolute left-[3vw] bottom-[15%] w-32 h-auto opacity-70 transform -rotate-12 mix-blend-screen" />
          <img src="/assets_v4/img_4.png" alt="pinecone" className="absolute left-[2vw] top-[30%] w-20 h-auto opacity-40 transform rotate-45 mix-blend-screen" />
        </div>

        {/* Scattered nuts and leaves in the background */}
        <img src="/assets_v4/img_3.png" alt="nuts cluster" className="absolute left-[38%] top-[18%] w-24 h-auto opacity-80 mix-blend-screen transform rotate-12" />
        <img src="/assets_v4/img_18.png" alt="scattered nuts" className="absolute right-[30%] bottom-[25%] w-40 h-auto opacity-60 mix-blend-screen" />
        
        {/* White brush swooshes */}
        <img src="/assets_v4/img_12.png" alt="brush swoosh" className="absolute left-[48%] top-[10%] w-40 h-auto opacity-90 mix-blend-screen transform -rotate-12" />
        <img src="/assets_v4/img_12.png" alt="brush swoosh" className="absolute left-[22%] bottom-[32%] w-48 h-auto opacity-50 mix-blend-screen transform rotate-[160deg]" />

      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 sm:px-12 py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center select-none ml-4 relative z-50 gap-3">
          {/* Logo Pinecone Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" className="drop-shadow-md">
             <path d="M12 2L16 6C16 6 18 8 18 12C18 16 12 22 12 22C12 22 6 16 6 12C6 8 8 6 8 6L12 2Z" />
             <path d="M12 2L12 22" />
             <path d="M8 10L16 10" />
             <path d="M7 14L17 14" />
          </svg>
          <img src="/logo_horizontal.png" className="h-[28px] sm:h-[32px] w-auto object-contain filter drop-shadow-md" alt="Шишки & Орешки" />
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 items-center mt-1 z-50">
          {(['Menu','About','Locations','Franchise','Contacts'] as const).map((tab) => {
            const labels: Record<string,string> = { Menu:'МЕНЮ', About:'О НАС', Locations:'АДРЕСА', Franchise:'ФРАНШИЗА', Contacts:'КОНТАКТЫ' };
            const isActive = activeTab === tab;
            return (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`relative text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 pb-1.5 ${isActive ? 'text-white' : 'text-white/60 hover:text-white/90'}`}
              >
                {labels[tab]}
                {isActive && (
                  <svg className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[120%] h-[6px]" preserveAspectRatio="none" viewBox="0 0 40 10" fill="none">
                    <path d="M 0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5" stroke="#f4a123" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-5 relative z-50">
          <button className="hidden md:flex bg-[#f4a123] hover:bg-[#ffb03a] text-neutral-950 text-[13px] font-extrabold uppercase tracking-widest px-8 py-3.5 rounded-full items-center gap-2 transition-all shadow-[0_4px_14px_rgba(244,161,35,0.4)]">
            <span>Заказать столик</span>
            <ArrowRight size={15} strokeWidth={3} />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10 hover:border-white/70 transition-colors">
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative w-full overflow-hidden h-screen flex flex-col bg-neutral-950" style={{ height:'100dvh' }}>

        <div className="relative z-[60] w-full h-full flex flex-col justify-center px-8 sm:px-12 md:pl-48 md:pr-6 pt-20 pb-40 md:pt-24 pointer-events-none">
          
          <div key={`panel-${activeSlideIndex}`} className="pointer-events-auto flex flex-col items-start mt-[-10vh]">

            {/* Creative Torn Tape Label */}
            <div className="inline-block relative text-black font-extrabold text-[12px] sm:text-[13px] uppercase px-6 py-3 transform -rotate-3 mb-10 ml-4">
              <img src="/assets_v4/img_11.png" alt="tape background" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-90 drop-shadow-md" style={{ filter: 'hue-rotate(345deg) saturate(1.5)' }} />
              Новое летнее меню
            </div>

            {/* Giant Distressed Title using Bebas Neue & Caveat */}
            <h1 className="flex flex-col items-start leading-[0.75] mb-12 relative w-full drop-shadow-2xl">
              <span className="block font-[Bebas_Neue] text-white tracking-widest" style={{ fontSize:'clamp(7rem, 20vw, 16rem)', textShadow:'0 10px 40px rgba(0,0,0,0.8)' }}>
                ЛЕТО
              </span>
              
              {/* 2026 Brush Accent overlapping */}
              <span className="absolute left-[38%] top-[35%] font-caveat text-[#f4a123] transform rotate-[-8deg] drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] z-10" style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', fontWeight: 700 }}>
                2026
                {/* Brush stroke underline */}
                <svg className="absolute -bottom-6 left-[-15%] w-[140%] h-12 text-white opacity-95" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q30,20 60,10 T100,5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
                {/* Drawn pinecone next to 2026 */}
                <img src="/assets_v4/img_4.png" alt="pinecone" className="absolute -right-[35%] top-1/2 -translate-y-1/2 w-24 h-auto opacity-90 mix-blend-screen transform rotate-12" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] text-white/90 max-w-[400px] leading-relaxed font-medium mb-12 drop-shadow-md ml-4">
              {currentSlide.descLeft}
            </p>

            {/* Creative Buttons */}
            <div className="flex flex-wrap items-center gap-8 ml-4">
              {/* Main creative button: circle with arrow + text outside */}
              <button className="group flex items-center gap-4 transition-all hover:opacity-90 active:scale-95">
                <span className="w-14 h-14 rounded-full bg-[#f4a123] flex items-center justify-center shadow-[0_4px_20px_rgba(244,161,35,0.5)] transition-transform group-hover:scale-110">
                  <ArrowRight size={20} className="text-neutral-900" strokeWidth={3} />
                </span>
                <span className="text-white font-black text-[14px] sm:text-[15px] uppercase tracking-widest drop-shadow-md">
                  Попробовать меню
                </span>
              </button>

              {/* Watch video button */}
              <button className="group flex items-center gap-3 transition-all hover:opacity-90">
                <span className="w-12 h-12 rounded-full border border-white/40 group-hover:border-white/90 flex items-center justify-center transition-all bg-black/20 backdrop-blur-sm">
                  <Play size={14} fill="white" className="ml-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-white/70 group-hover:text-white font-bold text-[12px] uppercase tracking-wider transition-colors drop-shadow-sm">
                  Смотреть видео
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Paper Tag "100% натуральные ингредиенты" */}
        <div className="absolute z-[60] right-[8%] top-[30%] hidden lg:flex flex-col items-center justify-center transform rotate-6 drop-shadow-2xl" 
             style={{ width: '240px', height: '200px' }}>
          {/* Craft Paper Background Image from SVG */}
          <img src="/assets_v4/img_27.png" alt="craft paper" className="absolute inset-0 w-full h-full object-fill drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] opacity-100" />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 -mt-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a3621" strokeWidth="2" className="mb-2 opacity-90">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span className="font-caveat text-[#4a3621] text-[32px] font-bold leading-[0.9] transform -rotate-2">
              100%<br/>натуральные<br/>ингредиенты
            </span>
          </div>
        </div>

        {/* Background slides */}
        <div className="w-full absolute inset-0 h-full z-10 overflow-hidden">
          {slides.map((slide, idx) => (
            <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <div className="absolute inset-0 bg-center bg-cover bg-no-repeat md:bg-[length:auto_100%] md:bg-right"
                style={{ backgroundImage: `url(${slide.image})` }} />
              {/* Colored brush stroke / glow behind the drink */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 mix-blend-overlay">
                 <div className="w-[80vh] h-[80vh] rounded-full blur-[100px]" style={{ backgroundColor: slide.accentColor, transform: 'translate(15%, 5%)' }}></div>
              </div>
            </div>
          ))}
          <div className="absolute inset-0 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 65%)' }} />
        </div>

        {/* BOTTOM BAR - Borderless, open layout */}
        <div className="absolute bottom-8 left-0 right-0 z-[100]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-16 max-w-[1600px] mx-auto w-full">

            {/* Left Season Title block */}
            <div className="flex flex-col items-center md:items-start relative z-10 mb-2 md:mb-0">
              <span className="font-[Bebas_Neue] text-white/80 text-[48px] md:text-[54px] leading-[0.8] tracking-widest drop-shadow-md">ЛЕТО</span>
              <div className="flex items-center gap-1 relative mt-1">
                <span className="font-caveat text-[#f4a123] text-[42px] md:text-[46px] leading-[0.8] font-bold drop-shadow-md">2026</span>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" className="opacity-80 absolute -right-8 top-0" style={{ transform: 'rotate(15deg)' }}>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Thumbnails - open layout */}
            <div className="flex items-center gap-6 sm:gap-10 overflow-x-auto no-scrollbar py-4 px-2 select-none flex-1 justify-center md:justify-start ml-0 md:ml-12 w-full max-w-full">
              {slides.map((slide, idx) => {
                const isActive = idx === activeSlideIndex;
                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className="flex items-center gap-3 cursor-pointer group transition-all relative py-2 px-3 flex-shrink-0"
                  >
                    {/* Active Background Paint Stroke (Tape) */}
                    {isActive && (
                      <div className="absolute inset-0 z-0 opacity-100 flex items-center justify-center">
                        <img src="/assets_v4/img_11.png" alt="active background" className="absolute w-[130%] h-[150%] max-w-none object-fill opacity-95 drop-shadow-md" style={{ filter: 'hue-rotate(345deg) saturate(1.5)' }} />
                      </div>
                    )}

                    {/* Circle Image */}
                    <div className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md z-10 shadow-lg border border-white/20"
                         style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}>
                      <img src={slide.thumb} className="w-[85%] h-[85%] object-contain drop-shadow-lg" alt={slide.shortLabel} />
                    </div>

                    {/* Label placed on the right */}
                    <span
                      className={`text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-left leading-[1.2] whitespace-pre-line z-10 transition-colors ${isActive ? 'text-neutral-950' : 'text-white/60 group-hover:text-white/90'}`}
                      style={{ maxWidth: '100px' }}
                    >
                      {slide.buttonLabel}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Grid button */}
            <button className="hidden md:flex w-12 h-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/80 items-center justify-center flex-shrink-0 transition-all bg-black/20 backdrop-blur-md relative z-10" aria-label="Все напитки">
              <Grid size={18} strokeWidth={2.5} />
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}
