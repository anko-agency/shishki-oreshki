import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Play, Grid } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/bg_image_1.jpg',
    thumb: '/thumb_matcha.png',
    titleLine1: 'Тропическая',
    titleLine2: 'Бабл Матча',
    titleColor: '#9db08c',
    accentColor: '#9db08c',
    descLeft: 'Освежающие напитки для яркого лета в Шишки Орешки. Натуральные ингредиенты, насыщенный вкус, заряд прохлады в каждом глотке.',
    buttonLabel: 'БАБЛ МАТЧА\nЛАТТЕ',
    shortLabel: 'БАБЛ МАТЧА ЛАТТЕ',
    props: [
      { icon: '🍃', text: 'НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ' },
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🍍', text: 'СОЧНЫЙ АНАНАС' },
    ]
  },
  {
    id: 2,
    image: '/bg_image_2.jpg',
    thumb: '/thumb_blueberry.png',
    titleLine1: 'Бабл Черника',
    titleLine2: 'Роза',
    titleColor: '#9bbbe3',
    accentColor: '#9bbbe3',
    descLeft: 'Нежное сочетание спелой лесной черники с утонченным ароматом дамасской розы, сливочной основы и мягких жемчужин черной тапиоки.',
    buttonLabel: 'БАБЛ ЧЕРНИКА\nРОЗА',
    shortLabel: 'БАБЛ ЧЕРНИКА РОЗА',
    props: [
      { icon: '🍃', text: 'НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ' },
      { icon: '🌹', text: 'АРОМАТНЫЙ' },
      { icon: '🫐', text: 'СВЕЖАЯ ЧЕРНИКА' },
    ]
  },
  {
    id: 3,
    image: '/bg_image_3.jpg',
    thumb: '/thumb_taro.png',
    titleLine1: 'Бабл Таро',
    titleLine2: 'Латте',
    titleColor: '#c5aade',
    accentColor: '#c5aade',
    descLeft: 'Экзотический сливочный латте на основе фиолетового корня таро, обладающего уникальным песочно-ореховым вкусом, с добавлением тапиоки.',
    buttonLabel: 'БАБЛ ТАРО\nЛАТТЕ',
    shortLabel: 'БАБЛ ТАРО ЛАТТЕ',
    props: [
      { icon: '🍃', text: 'НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ' },
      { icon: '🥛', text: 'СЛИВОЧНЫЙ' },
      { icon: '🍠', text: 'ПОЛЕЗНЫЙ ТАРО' },
    ]
  },
  {
    id: 4,
    image: '/bg_image_4.jpg',
    thumb: '/thumb_cranberry.png',
    titleLine1: 'Тоник',
    titleLine2: 'Клюква-Лайм',
    titleColor: '#e38da2',
    accentColor: '#e38da2',
    descLeft: 'Освежающий таёжный лимонад на основе терпкой сибирской клюквы, бодрящего сока свежего лайма и прохладного тоника с кубиками льда.',
    buttonLabel: 'ТОНИК\nКЛЮКВА-ЛАЙМ',
    shortLabel: 'ТОНИК КЛЮКВА-ЛАЙМ',
    props: [
      { icon: '🍃', text: 'НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ' },
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🍒', text: 'ДИКАЯ КЛЮКВА' },
    ]
  },
  {
    id: 5,
    image: '/bg_image_5.jpg',
    thumb: '/thumb_mango.png',
    titleLine1: 'Манговый',
    titleLine2: 'Фраппе',
    titleColor: '#f7c374',
    accentColor: '#f7c374',
    descLeft: 'Густой ледяной смузи-коктейль из спелого тропического манго. Обладает бархатистой текстурой и дарит мощный заряд прохлады.',
    buttonLabel: 'МАНГОВЫЙ\nФРАППЕ',
    shortLabel: 'МАНГОВЫЙ ФРАППЕ',
    props: [
      { icon: '🍃', text: 'НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ' },
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🥭', text: 'СПЕЛОЕ МАНГО' },
    ]
  },
  {
    id: 6,
    image: '/bg_image_6.jpg',
    thumb: '/thumb_latte.png',
    titleLine1: 'Ореховый',
    titleLine2: 'Раф',
    titleColor: '#d6b796',
    accentColor: '#d6b796',
    descLeft: 'Насыщенный сливочный кофе с добавлением обжаренного лесного ореха, нежных сливок и сладкого карамельного сиропа.',
    buttonLabel: 'АЙС ЛАТТЕ\nЗОЛОТОЙ КЛЮЧИК',
    shortLabel: 'ОРЕХОВЫЙ РАФ',
    props: [
      { icon: '🍃', text: 'НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ' },
      { icon: '☕', text: 'БОДРЯЩИЙ' },
      { icon: '🍯', text: 'ИРИС КЛЮЧИК' },
    ]
  },
];

function renderThumbnailGraphics(slideId: number, accentColor: string, isActive: boolean) {
  const radius = 22;
  const strokeColor = isActive ? accentColor : 'rgba(255,255,255,0.15)';
  const opacity = isActive ? '1' : '0.4';

  switch (slideId) {
    case 1:
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 4" opacity={opacity} />
          {[0, 90, 180, 270].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 28 + radius * Math.cos(rad);
            const y = 28 + radius * Math.sin(rad);
            return <path key={angle} d="M-1.5 -3 C0 -1.5, 0 1.5, -1.5 3 C1.5 1.5, 1.5 -1.5, -1.5 -3" fill={isActive ? accentColor : 'rgba(255,255,255,0.4)'} transform={`translate(${x}, ${y}) rotate(${angle + 45})`} />;
          })}
        </svg>
      );
    case 2:
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="14 3" opacity={opacity} />
          {[30, 90, 150, 210, 270, 330].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return <circle key={angle} cx={cx} cy={cy} r="2" fill={idx % 2 === 0 ? '#9bbbe3' : '#e38da2'} stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />;
          })}
        </svg>
      );
    case 3:
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" opacity={opacity} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return <circle key={angle} cx={cx} cy={cy} r="2.5" fill="#2c1a3c" stroke={isActive ? accentColor : 'rgba(255,255,255,0.3)'} strokeWidth="0.8" />;
          })}
        </svg>
      );
    case 4:
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 6" opacity={opacity} />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return <rect key={angle} x={cx - 1.5} y={cy - 1.5} width="3" height="3" rx="0.5" fill="#fff" stroke="#e38da2" strokeWidth="0.5" transform={`rotate(${angle} ${cx} ${cy})`} />;
          })}
        </svg>
      );
    case 5:
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="8 4" opacity={opacity} />
          {[15, 75, 135, 195, 255, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return <rect key={angle} x={cx - 2} y={cy - 2} width="4" height="4" fill="#f7c374" rx="0.8" transform={`rotate(${angle + 12} ${cx} ${cy})`} />;
          })}
        </svg>
      );
    case 6:
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" opacity={opacity} />
          {[0, 72, 144, 216, 288].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return <ellipse key={angle} cx={cx} cy={cy} rx="2.5" ry="1.5" fill="#553a25" stroke={isActive ? accentColor : 'rgba(255,255,255,0.4)'} strokeWidth="0.5" transform={`rotate(${angle + 30} ${cx} ${cy})`} />;
          })}
        </svg>
      );
    default:
      return null;
  }
}

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

      {/* Abstract background graphics (creative brush strokes & leaves) */}
      <div className="absolute inset-0 pointer-events-none z-15 overflow-hidden">
        {/* Torn paper texture on the left */}
        <svg className="absolute left-0 top-0 h-full w-[12vw] drop-shadow-2xl opacity-95 text-[#181b16] z-50" preserveAspectRatio="none" viewBox="0 0 100 1000">
          <path d="M0,0 L80,0 Q90,50 85,100 T95,200 Q80,300 90,400 T85,500 Q95,600 80,700 T90,800 Q85,900 90,1000 L0,1000 Z" fill="currentColor" />
        </svg>

        {/* Drawn line-art pinecone on the dark paper */}
        <svg className="absolute left-[2vw] top-[20%] w-16 h-24 opacity-60 text-white/50 z-50" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 10 C30 40, 20 80, 50 140 C80 80, 70 40, 50 10 Z" />
          <path d="M25 60 C40 70, 60 70, 75 60" />
          <path d="M20 90 C40 100, 60 100, 80 90" />
          <path d="M28 115 C45 125, 55 125, 72 115" />
          <path d="M50 10 L50 140" strokeDasharray="2 4" />
        </svg>

        {/* Brush stroke near title */}
        <svg className="absolute left-[8%] top-[30%] opacity-50 mix-blend-screen w-[40vw] h-[40vh]" viewBox="0 0 200 200" fill="none">
          <path d="M20,100 Q80,60 150,120 Q180,150 160,160 Q100,180 40,140 Z" fill={currentSlide.accentColor} filter="blur(20px)"/>
        </svg>

        {/* Floating white leaves */}
        <svg className="absolute left-[45%] top-[12%] w-16 h-16 opacity-40 -rotate-12 drop-shadow-lg" viewBox="0 0 100 100" stroke="#fff" strokeWidth="2.5" fill="none">
          <path d="M50 90 C30 70, 10 50, 50 10 C90 50, 70 70, 50 90 Z" />
          <path d="M50 90 L50 10" strokeDasharray="4 4" />
        </svg>
        <svg className="absolute right-[32%] bottom-[28%] w-12 h-12 opacity-30 rotate-45" viewBox="0 0 100 100" stroke="#fff" strokeWidth="2" fill="none">
          <path d="M50 90 C30 70, 10 50, 50 10 C90 50, 70 70, 50 90 Z" />
          <path d="M50 90 L50 10" strokeDasharray="3 3" />
        </svg>

        {/* Small doodles (dots, arrows) */}
        <svg className="absolute right-[25%] top-[25%] w-20 h-20 opacity-30" viewBox="0 0 100 100" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round">
          <path d="M10 90 Q40 10 90 40" strokeDasharray="4 6" />
          <path d="M75 35 L90 40 L85 55" />
        </svg>

        <svg className="absolute left-[28%] bottom-[22%] w-24 h-24 opacity-25" viewBox="0 0 100 100" stroke="#fff" strokeWidth="2" fill="none" strokeDasharray="2 8" strokeLinecap="round">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 sm:px-12 py-5 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center select-none ml-4">
          <img src="/logo_horizontal.png" className="h-[22px] sm:h-[26px] w-auto object-contain" alt="Шишки & Орешки" />
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 items-center mt-1">
          {(['Menu','About','Locations','Franchise','Contacts'] as const).map((tab) => {
            const labels: Record<string,string> = { Menu:'МЕНЮ', About:'О НАС', Locations:'АДРЕСА', Franchise:'ФРАНШИЗА', Contacts:'КОНТАКТЫ' };
            const isActive = activeTab === tab;
            return (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`relative text-[11px] font-extrabold tracking-widest transition-colors duration-300 pb-1.5 ${isActive ? 'text-white' : 'text-white/45 hover:text-white/75'}`}
              >
                {labels[tab]}
                {isActive && (
                  <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[3px]" preserveAspectRatio="none" viewBox="0 0 40 8" fill="none">
                    <path d="M 0 4 Q 5 0, 10 4 T 20 4 T 30 4 T 40 4" stroke={currentSlide.accentColor} strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-white hover:bg-white/90 text-neutral-950 text-[11px] font-extrabold uppercase tracking-widest px-7 py-3 rounded-full items-center gap-2 transition-all shadow-md">
            <span>Заказать столик</span>
            <ArrowRight size={13} strokeWidth={2.5} />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-colors">
            {isMobileMenuOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative w-full overflow-hidden h-screen flex flex-col bg-neutral-950" style={{ height:'100dvh' }}>

        <div className="relative z-30 w-full md:w-[50%] h-full flex flex-col justify-center px-8 sm:px-12 md:pl-20 md:pr-6 pt-20 pb-32 md:pt-24 pointer-events-none">
          
          <div key={`panel-${activeSlideIndex}`} className="pointer-events-auto flex flex-col items-start ml-2">

            {/* Creative Torn Tape Label */}
            <div className="inline-block relative text-black font-extrabold text-[11px] sm:text-[12px] uppercase px-5 py-2 transform -rotate-2 shadow-sm mb-8 hero-anim hero-fade" style={{ animationDelay:'0.04s' }}>
              <svg className="absolute inset-0 w-full h-full text-[#f4a123] -z-10 drop-shadow-md" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M2,5 Q50,0 98,3 L99,95 Q50,100 3,97 Z" fill="currentColor" />
              </svg>
              Новое летнее меню
            </div>

            {/* Giant Distressed Title using Bebas Neue */}
            <h1 className="flex flex-col items-start font-[Bebas_Neue] uppercase leading-[0.85] tracking-[0.02em] mb-6 relative w-full" 
                style={{ fontSize:'clamp(4.5rem,9vw,7.5rem)' }}>
              
              <span className="hero-anim hero-reveal block" style={{ animationDelay:'0.1s', color:'#fff', textShadow:'0 4px 15px rgba(0,0,0,0.5)' }}>
                {currentSlide.titleLine1}
              </span>
              <span className="hero-anim hero-reveal block relative" style={{ animationDelay:'0.22s', color: currentSlide.titleColor, textShadow:'0 4px 15px rgba(0,0,0,0.4)' }}>
                {currentSlide.titleLine2}
                
                {/* 2026 Brush Accent overlapping */}
                <span className="absolute -right-8 sm:-right-16 -top-4 sm:-top-8 font-caveat text-[#f4a123] transform rotate-[-12deg] drop-shadow-md" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
                  2026
                  <svg className="absolute -bottom-2 left-0 w-[120%] h-4 text-white opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q30,20 60,10 T100,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[13px] sm:text-sm text-white/70 max-w-[340px] leading-relaxed font-medium mb-10 hero-anim hero-fade" style={{ animationDelay:'0.4s' }}>
              {currentSlide.descLeft}
            </p>

            {/* Creative Buttons */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 hero-anim hero-fade" style={{ animationDelay:'0.64s' }}>
              
              {/* Main creative button: circle with arrow + text outside */}
              <button className="group flex items-center gap-3.5 transition-all hover:opacity-90 active:scale-95">
                <span className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 border border-white/20" style={{ backgroundColor: currentSlide.accentColor }}>
                  <ArrowRight size={18} className="text-neutral-900" strokeWidth={2.5} />
                </span>
                <span className="text-white font-black text-[12px] sm:text-[13px] uppercase tracking-wider">
                  Попробовать меню
                </span>
              </button>

              {/* Watch video button */}
              <button className="group flex items-center gap-3 transition-all hover:opacity-90">
                <span className="w-12 h-12 rounded-full border border-white/30 group-hover:border-white/70 flex items-center justify-center transition-all bg-white/5 backdrop-blur-sm">
                  <Play size={14} fill="white" className="ml-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-white/60 group-hover:text-white font-bold text-[11px] uppercase tracking-wider transition-colors">
                  Смотреть видео
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Paper Tag "100% натуральные ингредиенты" */}
        <div className="absolute z-40 right-[8%] top-[25%] hidden lg:flex flex-col items-center justify-center transform rotate-6 drop-shadow-xl" 
             style={{ width: '150px', height: '140px' }}>
          {/* Paper Background SVG */}
          <svg className="absolute inset-0 w-full h-full text-[#d3bd9d] drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M2,2 L98,4 L96,96 L4,98 Z" fill="currentColor" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          </svg>
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a3621" strokeWidth="1.5" className="mb-2 opacity-80">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <span className="font-caveat text-[#4a3621] text-[26px] font-bold leading-[0.9]">
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
            </div>
          ))}
          <div className="absolute inset-0 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.65) 25%, rgba(0,0,0,0) 45%)' }} />
        </div>

        {/* BOTTOM BAR — dark, no borders, brushed accents */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[1200px]">
          <div className="bg-[#111111]/90 backdrop-blur-lg border border-white/10 rounded-[28px] py-2.5 px-4 flex items-center justify-between shadow-2xl">

            {/* Left Season Title block with hand-drawn sun */}
            <div className="flex flex-col items-start pr-6 pl-4 border-r border-white/10 relative mr-2 flex-shrink-0">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50 mb-0.5 leading-none">Сезон</span>
              <div className="flex items-baseline gap-1.5 leading-none relative">
                <span className="font-black text-xl sm:text-[24px] tracking-wide text-white">ЛЕТО</span>
                <span className="font-black text-xl sm:text-[24px] tracking-wide" style={{ color: currentSlide.accentColor }}>2026</span>
                
                {/* Drawn sun icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60 absolute -right-7 -top-2" style={{ transform: 'rotate(15deg)' }}>
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Thumbnails with custom SVG infographics and labels on the right */}
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar px-1 py-1 select-none flex-1">
              {slides.map((slide, idx) => {
                const isActive = idx === activeSlideIndex;
                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className="flex items-center gap-2.5 cursor-pointer flex-shrink-0 group transition-all relative py-1.5 px-2 rounded-lg"
                  >
                    {/* Active brush background */}
                    {isActive && (
                      <div className="absolute inset-0 z-0 opacity-100 flex items-center justify-center overflow-hidden rounded-lg">
                        <svg className="w-[120%] h-[120%] object-cover opacity-90" viewBox="0 0 200 60" preserveAspectRatio="none">
                          <path d="M10,20 Q40,5 100,20 T190,15 L180,45 Q120,55 50,45 T15,50 Z" fill="#f4a123" />
                        </svg>
                      </div>
                    )}

                    {/* Circle wrapper with custom SVG border */}
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 relative flex items-center justify-center transition-all duration-300 z-10"
                      style={{
                        transform: isActive ? 'scale(1.05)' : 'scale(1)',
                        opacity: isActive ? 1 : 0.6,
                      }}
                    >
                      {/* Detailed custom SVG infographics */}
                      {renderThumbnailGraphics(slide.id, isActive ? '#111' : slide.accentColor, isActive)}

                      {/* Inner drink image */}
                      <div className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] rounded-full overflow-hidden flex items-center justify-center bg-white/5 backdrop-blur-sm z-10">
                        <img src={slide.thumb} className="w-[90%] h-[90%] object-contain drop-shadow-md" alt={slide.shortLabel} />
                      </div>
                    </div>

                    {/* Label placed on the right side of the circle */}
                    <span
                      className="text-[9px] font-black uppercase tracking-wider text-left leading-[1.2] whitespace-pre-line transition-colors z-10 mr-1"
                      style={{
                        color: isActive ? '#111' : 'rgba(255,255,255,0.45)',
                        maxWidth: '90px',
                      }}
                    >
                      {slide.buttonLabel}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Grid button */}
            <button className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 flex items-center justify-center flex-shrink-0 transition-all ml-2" aria-label="Все напитки">
              <Grid size={15} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
