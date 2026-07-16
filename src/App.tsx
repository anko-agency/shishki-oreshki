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
    descLeft: 'Освежающий микс японского зеленого чая матча, нежного кокосового молока, сладких ананасов и жевательной тапиоки. Яркий летний вкус.',
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
    case 1: // Matcha (leaves layout)
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 4" opacity={opacity} />
          {/* 4 small leaves */}
          {[0, 90, 180, 270].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 28 + radius * Math.cos(rad);
            const y = 28 + radius * Math.sin(rad);
            return (
              <path
                key={angle}
                d="M-1.5 -3 C0 -1.5, 0 1.5, -1.5 3 C1.5 1.5, 1.5 -1.5, -1.5 -3"
                fill={isActive ? accentColor : 'rgba(255,255,255,0.4)'}
                transform={`translate(${x}, ${y}) rotate(${angle + 45})`}
              />
            );
          })}
        </svg>
      );
    case 2: // Blueberry Rose (berry dots)
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.2" strokeDasharray="14 3" opacity={opacity} />
          {[30, 90, 150, 210, 270, 330].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return (
              <circle
                key={angle}
                cx={cx}
                cy={cy}
                r="2"
                fill={idx % 2 === 0 ? '#9bbbe3' : '#e38da2'}
                stroke="rgba(0,0,0,0.3)"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      );
    case 3: // Taro (pearl circles around the rim)
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" opacity={opacity} />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return (
              <circle
                key={angle}
                cx={cx}
                cy={cy}
                r="2.5"
                fill="#2c1a3c"
                stroke={isActive ? accentColor : 'rgba(255,255,255,0.3)'}
                strokeWidth="0.8"
              />
            );
          })}
        </svg>
      );
    case 4: // Cranberry (segmented ice ticks)
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="2 6" opacity={opacity} />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return (
              <rect
                key={angle}
                x={cx - 1.5}
                y={cy - 1.5}
                width="3"
                height="3"
                rx="0.5"
                fill="#fff"
                stroke="#e38da2"
                strokeWidth="0.5"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            );
          })}
        </svg>
      );
    case 5: // Mango (mango square chunks)
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="8 4" opacity={opacity} />
          {[15, 75, 135, 195, 255, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return (
              <rect
                key={angle}
                x={cx - 2}
                y={cy - 2}
                width="4"
                height="4"
                fill="#f7c374"
                rx="0.8"
                transform={`rotate(${angle + 12} ${cx} ${cy})`}
              />
            );
          })}
        </svg>
      );
    case 6: // Coffee Latte / Gold Key (coffee beans)
      return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={radius} fill="none" stroke={strokeColor} strokeWidth="1.5" opacity={opacity} />
          {[0, 72, 144, 216, 288].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = 28 + radius * Math.cos(rad);
            const cy = 28 + radius * Math.sin(rad);
            return (
              <ellipse
                key={angle}
                cx={cx}
                cy={cy}
                rx="2.5"
                ry="1.5"
                fill="#553a25"
                stroke={isActive ? accentColor : 'rgba(255,255,255,0.4)'}
                strokeWidth="0.5"
                transform={`rotate(${angle + 30} ${cx} ${cy})`}
              />
            );
          })}
        </svg>
      );
    default:
      return null;
  }
}

function CircularBadge({ accent }: { accent: string }) {
  const text = 'ТОЛЬКО НАТУРАЛЬНЫЕ · ИНГРЕДИЕНТЫ · ';
  const radius = 42;
  return (
    <div className="relative w-[110px] h-[110px] flex-shrink-0">
      <svg viewBox="0 0 110 110" className="w-full h-full">
        <defs>
          <path id="circ" d={`M 55 55 m -${radius} 0 a ${radius} ${radius} 0 1 1 ${radius*2} 0 a ${radius} ${radius} 0 1 1 -${radius*2} 0`} />
        </defs>
        {/* Spinning text container */}
        <g className="animate-[spin_24s_linear_infinite]" style={{ transformOrigin: '55px 55px' }}>
          <circle cx="55" cy="55" r={radius} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
          <text fontSize="7.2" fontFamily="Inter,sans-serif" fontWeight="900" letterSpacing="1.8" fill="rgba(255,255,255,0.75)">
            <textPath href="#circ">{text}</textPath>
          </text>
        </g>
        {/* Inner background circle */}
        <circle cx="55" cy="55" r="26" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        {/* Beautiful two detailed leaves matching the user request crop */}
        <g transform="translate(55, 55) scale(0.95)">
          {/* Leaf 1 */}
          <path d="M-2 -2 C-14 -12, -22 0, -4 14 C-4 14, -8 4, -2 -2" fill={accent} opacity="0.9" />
          <path d="M-2 -2 C-14 -12, -22 0, -4 14 Z" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M-10 4 C-6 1, -2 -1, -4 14" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.5" />
          {/* Leaf 2 */}
          <path d="M12 -8 C2 -16, -10 -4, 2 12 C2 12, 4 2, 12 -8" fill={accent} opacity="0.75" />
          <path d="M12 -8 C2 -16, -10 -4, 2 12 Z" stroke="#fff" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M4 -2 C2 -5, -4 -7, 2 12" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
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

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-b from-black/65 to-transparent">
        {/* Horizontal Logo matching the reference image */}
        <div className="flex items-center select-none">
          <img src="/logo_horizontal.png" className="h-[18px] sm:h-[22px] w-auto object-contain" alt="Шишки & Орешки" />
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-7 items-center">
          {(['Menu','About','Locations','Franchise','Contacts'] as const).map((tab) => {
            const labels: Record<string,string> = { Menu:'МЕНЮ', About:'О НАС', Locations:'АДРЕСА', Franchise:'ФРАНШИЗА', Contacts:'КОНТАКТЫ' };
            const isActive = activeTab === tab;
            return (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`relative text-[11px] font-extrabold tracking-widest transition-colors duration-300 pb-1 ${isActive ? 'text-white' : 'text-white/45 hover:text-white/75'}`}
              >
                {labels[tab]}
                {isActive && <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ background: currentSlide.accentColor }} />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex bg-white hover:bg-white/90 text-neutral-950 text-[11px] font-extrabold uppercase tracking-widest px-6 py-2.5 rounded-full items-center gap-2 transition-all shadow-md">
            <span>Заказать столик</span>
            <ArrowRight size={12} />
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
            {isMobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[90] bg-neutral-950/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-400 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-6">
          {[{id:'Menu',label:'МЕНЮ'},{id:'About',label:'О НАС'},{id:'Locations',label:'АДРЕСА'},{id:'Franchise',label:'ФРАНШИЗА'},{id:'Contacts',label:'КОНТАКТЫ'}].map((item) => (
            <button key={item.id} onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className="text-2xl font-black tracking-wide transition-colors"
              style={{ color: activeTab === item.id ? currentSlide.accentColor : 'rgba(255,255,255,0.45)' }}>
              {item.label}
            </button>
          ))}
        </div>
        <button onClick={() => setIsMobileMenuOpen(false)} className="bg-white hover:bg-white/90 text-neutral-950 font-bold px-8 py-3 rounded-full text-sm tracking-wider uppercase transition-all shadow-md">Заказать столик</button>
      </div>

      {/* HERO */}
      <section className="relative w-full overflow-hidden h-screen flex flex-col bg-neutral-950" style={{ height:'100dvh' }}>

        {/* Left text column */}
        <div className="relative z-30 w-full md:w-[46%] h-full flex flex-col justify-between px-6 sm:px-10 md:pl-16 md:pr-6 pt-20 pb-6 md:pt-24 pointer-events-none">

          <div key={`panel-${activeSlideIndex}`} className="pointer-events-auto flex flex-col flex-1 justify-center items-start">

            {/* Overline */}
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/40 mb-5 hero-anim hero-fade" style={{ animationDelay:'0.04s' }}>
              Новое летнее меню
            </p>

            {/* Giant title */}
            <h1 className="flex flex-col items-start font-black uppercase leading-[0.88] tracking-[-0.03em] mb-3" style={{ fontSize:'clamp(2.8rem,7.2vw,6rem)' }}>
              <span className="hero-anim hero-reveal" style={{ animationDelay:'0.1s', color:'#fff', textShadow:'0 2px 8px rgba(0,0,0,0.5)' }}>
                {currentSlide.titleLine1}
              </span>
              <span className="hero-anim hero-reveal" style={{ animationDelay:'0.22s', color: currentSlide.titleColor, textShadow:'0 2px 8px rgba(0,0,0,0.35)' }}>
                {currentSlide.titleLine2}
              </span>
            </h1>

            {/* Wavy line */}
            <div className="mb-5 hero-anim hero-fade" style={{ animationDelay:'0.3s' }}>
              <svg width="68" height="11" viewBox="0 0 68 11" fill="none">
                <path d="M2 8.5 C7 2,13 2,19 8.5 C25 15,31 15,37 8.5 C43 2,49 2,55 8.5 C61 15,65 15,67 8.5"
                  stroke={currentSlide.accentColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-[13px] sm:text-sm text-white/60 max-w-[310px] leading-relaxed font-medium mb-6 hero-anim hero-fade" style={{ animationDelay:'0.4s' }}>
              {currentSlide.descLeft}
            </p>



            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 hero-anim hero-fade" style={{ animationDelay:'0.64s' }}>
              <button className="text-neutral-950 text-[11px] font-black uppercase tracking-wider px-8 py-3.5 rounded-full flex items-center gap-2 transition-all hover:opacity-85 active:scale-95 shadow-md"
                style={{ background: currentSlide.accentColor }}>
                <span>Попробовать</span>
                <ArrowRight size={13} />
              </button>
              <button className="text-white/55 hover:text-white/90 text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 transition-colors group">
                <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/55 flex items-center justify-center transition-colors">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </span>
                <span>Смотреть видео</span>
              </button>
            </div>
          </div>


        </div>

        {/* Circular badge — positioned directly under the 'Заказать столик' button */}
        <div className="absolute z-30 hidden md:block" style={{ top: '84px', right: '114px' }}>
          <CircularBadge accent={currentSlide.accentColor} />
        </div>

        {/* Slide dots — vertical right edge */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setActiveSlideIndex(idx)} className="transition-all duration-300 rounded-full"
              style={{ width: idx === activeSlideIndex ? '5px' : '4px', height: idx === activeSlideIndex ? '22px' : '4px',
                background: idx === activeSlideIndex ? currentSlide.accentColor : 'rgba(255,255,255,0.22)' }} />
          ))}
        </div>

        {/* Background slides */}
        <div className="w-full absolute inset-0 h-full z-10 overflow-hidden">
          {slides.map((slide, idx) => (
            <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              <div className="absolute inset-0 bg-center bg-cover bg-no-repeat md:bg-[length:auto_100%] md:bg-right"
                style={{ backgroundImage: `url(${slide.image})` }} />
            </div>
          ))}
          {/* Gradient — UNTOUCHED */}
          <div className="absolute inset-0 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.6) 18%, rgba(0,0,0,0) 38%)' }} />
        </div>

        {/* BOTTOM BAR — dark */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2.5rem)] max-w-6xl">
          <div className="bg-[#111111]/96 backdrop-blur-md border border-white/8 rounded-[28px] py-3 px-4 sm:px-6 flex items-center justify-between shadow-2xl">

            {/* Left Season Title block integrated directly into bottom bar */}
            <div className="flex flex-col items-start pr-6 pl-2 border-r border-white/10 relative mr-2 flex-shrink-0">
              <span className="text-[8px] font-bold tracking-[0.25em] uppercase text-white/40 mb-0.5 leading-none">Сезон</span>
              <div className="flex items-baseline gap-1 leading-none">
                <span className="font-black text-lg sm:text-[22px] tracking-wide text-white">ЛЕТО</span>
                <span className="font-black text-lg sm:text-[22px] tracking-wide ml-1.5" style={{ color: currentSlide.accentColor }}>2026</span>
              </div>
              {/* Vertical line diamond connector */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-[#111111] border border-white/20 z-10" />
            </div>

            {/* Thumbnails with custom SVG infographics and labels on the right */}
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar mx-3 px-1 py-1 select-none">
              {slides.map((slide, idx) => {
                const isActive = idx === activeSlideIndex;
                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    className="flex items-center gap-2.5 cursor-pointer flex-shrink-0 group transition-all"
                  >
                    {/* Circle wrapper with custom SVG border */}
                    <div
                      className="w-12 h-12 sm:w-[50px] sm:h-[50px] relative flex items-center justify-center transition-all duration-300"
                      style={{
                        transform: isActive ? 'scale(1.08)' : 'scale(1)',
                        opacity: isActive ? 1 : 0.5,
                      }}
                    >
                      {/* Detailed custom SVG infographics */}
                      {renderThumbnailGraphics(slide.id, slide.accentColor, isActive)}

                      {/* Inner drink image */}
                      <div
                        className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full overflow-hidden flex items-center justify-center bg-white/5 backdrop-blur-sm z-10"
                        style={{
                          boxShadow: isActive ? `0 0 10px ${slide.accentColor}33` : 'none',
                        }}
                      >
                        <img src={slide.thumb} className="w-[85%] h-[85%] object-contain" alt={slide.shortLabel} />
                      </div>
                    </div>

                    {/* Label placed on the right side of the circle */}
                    <span
                      className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-left leading-[1.2] whitespace-pre-line transition-colors"
                      style={{
                        color: isActive ? slide.accentColor : 'rgba(255,255,255,0.4)',
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
            <button className="w-9 h-9 rounded-full border border-white/15 text-white/45 hover:text-white/80 hover:border-white/40 flex items-center justify-center flex-shrink-0 transition-all" aria-label="Все напитки">
              <Grid size={13} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
