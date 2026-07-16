import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Grid } from 'lucide-react';
import { MenuBar } from './components/ui/glow-menu';

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

// Helper to render grayscale PNGs as colored masks
const SvgMask = ({ src, className, color, style = {} }: any) => (
  <div 
    className={className} 
    style={{ 
      backgroundColor: color || 'currentColor',
      WebkitMaskImage: `url(${src})`, 
      WebkitMaskSize: '100% 100%', 
      WebkitMaskRepeat: 'no-repeat',
      maskImage: `url(${src})`, 
      maskSize: '100% 100%', 
      maskRepeat: 'no-repeat',
      ...style 
    }} 
  />
);

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

      {/* SVG Filters for UI elements */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <filter id="torn-edge">
          <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* SVG Asset Overlays from Дизайн без названия (4) */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        
        {/* Left margin torn paper */}
        <div className="absolute left-0 top-0 bottom-0 w-[14vw] max-w-[200px] z-[55] drop-shadow-[10px_0_20px_rgba(0,0,0,0.9)] pointer-events-none">
          <img src="/assets_v4/img_2.png" className="w-full h-full object-cover object-right" alt="torn edge" />
          
          {/* Pinecone drawing on the dark paper */}
          <img src="/assets_v4/img_4.png" className="absolute left-[3vw] bottom-[15%] w-32 h-auto opacity-70 transform -rotate-12" alt="pinecone" />
          <img src="/assets_v4/img_4.png" className="absolute left-[2vw] top-[30%] w-20 h-auto opacity-40 transform rotate-45" alt="pinecone" />
        </div>

        {/* Scattered nuts and leaves in the background */}
        <img src="/assets_v4/img_3.png" className="absolute left-[38%] top-[18%] w-24 h-auto opacity-80 transform rotate-12" alt="nuts" />
        <img src="/assets_v4/img_18.png" className="absolute right-[25%] bottom-[25%] w-48 h-auto opacity-40" alt="scattered nuts" />
        
        {/* White brush swooshes */}
        <img src="/assets_v4/img_12.png" className="absolute left-[45%] top-[12%] w-48 h-auto opacity-80 transform -rotate-12" alt="brush" />
        <img src="/assets_v4/img_12.png" className="absolute left-[22%] bottom-[32%] w-56 h-auto opacity-40 transform rotate-[160deg]" alt="brush" />

      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 sm:px-12 py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center select-none ml-4 relative z-50 gap-3">
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
                    <path d="M 0 5 Q 5 0, 10 5 T 20 5 T 30 5 T 40 5" stroke={currentSlide.accentColor} strokeWidth="3" strokeLinecap="round" style={{ transition: 'stroke 0.7s ease' }}/>
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-5 relative z-50">
          <button 
            className="hidden md:flex text-neutral-950 text-[13px] font-extrabold uppercase tracking-widest px-8 py-3.5 rounded-full items-center gap-2 transition-all"
            style={{ backgroundColor: currentSlide.accentColor, boxShadow: `0 4px 14px ${currentSlide.accentColor}66` }}
          >
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
            <div className="inline-block relative font-extrabold text-[12px] sm:text-[13px] uppercase px-6 py-3 transform -rotate-3 mb-10 ml-4 z-10">
              <div 
                className="absolute inset-0 z-[-1] drop-shadow-md" 
                style={{ 
                  filter: 'url(#torn-edge)', 
                  backgroundColor: currentSlide.accentColor, 
                  transition: 'background-color 0.7s ease' 
                }}
              ></div>
              <span className="text-black tracking-widest relative z-10 drop-shadow-sm">Новое летнее меню</span>
            </div>

            {/* Dynamic Drink Title */}
            <h1 className="flex flex-col items-start leading-[1] mb-8 relative w-full drop-shadow-2xl uppercase font-black tracking-tight" style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)' }}>
              {currentSlide.buttonLabel.split('\n').map((line, idx) => (
                <span key={idx} className={idx === 1 ? "" : "text-white"} style={{ color: idx === 1 ? currentSlide.accentColor : undefined, textShadow:'0 10px 30px rgba(0,0,0,0.7)', transition: 'color 0.7s ease' }}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] text-white/90 max-w-[400px] leading-relaxed font-medium mb-12 drop-shadow-md ml-4">
              {currentSlide.descLeft}
            </p>

            {/* Creative Buttons */}
            <div className="flex flex-wrap items-center gap-8 ml-4">
              {/* Main creative button: circle with arrow + text outside */}
              <button className="group flex items-center gap-4 transition-all hover:opacity-90 active:scale-95">
                <span className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: currentSlide.accentColor, boxShadow: `0 4px 20px ${currentSlide.accentColor}80` }}>
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
        <div className="absolute z-[60] right-[8%] top-[30%] hidden lg:flex flex-col items-center justify-center transform rotate-6 drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]" 
             style={{ width: '220px', height: '180px' }}>
          {/* Craft Paper Background Mask */}
          <SvgMask src="/assets_v4/img_27.png" className="absolute inset-0 w-full h-full opacity-100" color="#e4d0b8" />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 -mt-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a3621" strokeWidth="2" className="mb-2 opacity-90">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            {/* Real text using Caveat instead of img_22.png so it looks crisp */}
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
                 <div className="w-[80vh] h-[80vh] rounded-full blur-[100px] transition-colors duration-700" style={{ backgroundColor: slide.accentColor, transform: 'translate(15%, 5%)' }}></div>
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
                <span className="font-caveat text-[42px] md:text-[46px] leading-[0.8] font-bold drop-shadow-md" style={{ color: currentSlide.accentColor, transition: 'color 0.7s ease' }}>2026</span>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" className="opacity-80 absolute -right-8 top-0" style={{ transform: 'rotate(15deg)' }}>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Thumbnails - Glow Menu Integration */}
            <div className="flex-1 ml-0 md:ml-12 w-full max-w-full md:max-w-[70%]">
              <MenuBar 
                items={slides.map(slide => ({
                  icon: (props: any) => <img src={slide.thumb} alt={slide.shortLabel} {...props} className="h-6 w-6 object-contain" />,
                  label: slide.buttonLabel,
                  href: '#',
                  gradient: `radial-gradient(circle, ${slide.accentColor}33 0%, ${slide.accentColor}11 50%, transparent 100%)`,
                  iconColor: "",
                  color: slide.accentColor
                }))}
                activeItem={currentSlide.buttonLabel}
                onItemClick={(label) => {
                  const idx = slides.findIndex(s => s.buttonLabel === label);
                  if (idx !== -1) setActiveSlideIndex(idx);
                }}
                className="w-full bg-black/40 border-white/10"
              />
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
