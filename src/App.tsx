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
    descLeft: 'Освежающий микс японского зеленого чая матча, нежного кокосового молока, сладких ананасов и жевательной тапиоки. Яркий летний вкус.',
    buttonLabel: 'БАБЛ МАТЧА ЛАТТЕ',
    props: [
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🌱', text: 'НАТУРАЛЬНЫЙ' },
      { icon: '🍍', text: 'СОЧНЫЙ АНАНАС' }
    ]
  },
  {
    id: 2,
    image: '/bg_image_2.jpg',
    thumb: '/thumb_blueberry.png',
    titleLine1: 'Бабл Черника',
    titleLine2: 'Роза',
    titleColor: '#9bbbe3',
    descLeft: 'Нежное сочетание спелой лесной черники с утонченным ароматом дамасской розы, сливочной основы и мягких жемчужин черной тапиоки.',
    buttonLabel: 'БАБЛ ЧЕРНИКА РОЗА',
    props: [
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🌹', text: 'АРОМАТНЫЙ' },
      { icon: '🫐', text: 'СВЕЖАЯ ЧЕРНИКА' }
    ]
  },
  {
    id: 3,
    image: '/bg_image_3.jpg',
    thumb: '/thumb_taro.png',
    titleLine1: 'Бабл Таро',
    titleLine2: 'Латте',
    titleColor: '#c5aade',
    descLeft: 'Экзотический сливочный латте на основе фиолетового корня таро, обладающего уникальным песочно-ореховым вкусом, с добавлением тапиоки.',
    buttonLabel: 'БАБЛ ТАРО ЛАТТЕ',
    props: [
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🥛', text: 'СЛИВОЧНЫЙ' },
      { icon: '🍠', text: 'ПОЛЕЗНЫЙ ТАРО' }
    ]
  },
  {
    id: 4,
    image: '/bg_image_4.jpg',
    thumb: '/thumb_cranberry.png',
    titleLine1: 'Тоник',
    titleLine2: 'Клюква-Лайм',
    titleColor: '#e38da2',
    descLeft: 'Освежающий таёжный лимонад на основе терпкой сибирской клюквы, бодрящего сока свежего лайма и прохладного тоника с кубиками льда.',
    buttonLabel: 'ТОНИК КЛЮКВА ЛАЙМ',
    props: [
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🍋', text: 'КИСЛЕНЬКИЙ' },
      { icon: '🍒', text: 'ДИКАЯ КЛЮКВА' }
    ]
  },
  {
    id: 5,
    image: '/bg_image_5.jpg',
    thumb: '/thumb_mango.png',
    titleLine1: 'Манговый',
    titleLine2: 'Фраппе',
    titleColor: '#f7c374',
    descLeft: 'Густой ледяной смузи-коктейль из спелого тропического mango. Обладает бархатистой текстурой и дарит мощный заряд прохлады.',
    buttonLabel: 'МАНГОВЫЙ ФРАППЕ',
    props: [
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '🌱', text: 'НАТУРАЛЬНЫЙ' },
      { icon: '🥭', text: 'СПЕЛОЕ МАНГО' }
    ]
  },
  {
    id: 6,
    image: '/bg_image_6.jpg',
    thumb: '/thumb_latte.png',
    titleLine1: 'Ореховый',
    titleLine2: 'Раф',
    titleColor: '#d6b796',
    descLeft: 'Насыщенный сливочный кофе с добавлением обжаренного лесного ореха, нежных сливок и сладкого карамельного сиропа.',
    buttonLabel: 'ОРЕХОВЫЙ РАФ',
    props: [
      { icon: '❄️', text: 'ОСВЕЖАЮЩИЙ' },
      { icon: '☕', text: 'БОДРЯЩИЙ' },
      { icon: '🍯', text: 'ИРИС КЛЮЧИК' }
    ]
  },
];

export default function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Menu');

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setActiveSlideIndex((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlide = slides[activeSlideIndex];

  return (
    <div 
      className="min-h-screen bg-[#faf9f6] text-neutral-800 tracking-[-0.02em] select-none overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fixed Navigation bar with white/light colors matching dark theme mockup */}
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[1px]">
        {/* Logo matching Variant 2 Mockup with white text */}
        <div className="flex items-center gap-2.5">
          <img 
            src="/logo_pinecone.png" 
            className="w-[28px] h-[36px] object-contain brightness-0 invert" 
            alt="Шишки & Орешки" 
          />
          <div className="flex flex-col text-white leading-[0.9] font-black uppercase text-[13px] tracking-wider">
            <span>Шишки</span>
            <span>Орешки</span>
          </div>
        </div>

        {/* Center Menu for Desktop (White text links) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 items-center">
          {['About', 'Menu', 'Locations', 'Franchise', 'Contacts'].map((tab) => {
            const labelMap: Record<string, string> = {
              Menu: 'МЕНЮ',
              About: 'О НАС',
              Locations: 'АДРЕСА',
              Franchise: 'ФРАНШИЗА',
              Contacts: 'КОНТАКТЫ',
            };
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-[11px] font-extrabold tracking-widest transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {labelMap[tab]}
                {isActive && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-[#9db08c] w-5 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Buttons: Order Table + Circular Hamburger Menu */}
        <div className="flex items-center gap-3">
          <button 
            className="hidden md:flex bg-[#4c583f] hover:bg-[#3d4632] text-white text-[11px] font-extrabold uppercase tracking-widest px-5 py-3 rounded-lg items-center gap-1.5 transition-all duration-300 shadow-sm"
          >
            <span>Заказать столик</span>
            <span className="text-[14px]">↗</span>
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm cursor-pointer border border-neutral-100"
            aria-label="Открыть меню"
          >
            {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-80 bg-neutral-950/98 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {[
            { id: 'About', label: 'О НАС' },
            { id: 'Menu', label: 'МЕНЮ' },
            { id: 'Locations', label: 'АДРЕСА' },
            { id: 'Franchise', label: 'ФРАНШИЗА' },
            { id: 'Contacts', label: 'КОНТАКТЫ' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-black tracking-wide transition-colors ${
                activeTab === item.id ? 'text-[#9db08c]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 bg-[#4c583f] text-white font-semibold px-8 py-3 rounded-full text-base transition-all active:scale-95 shadow-md"
        >
          Заказать столик ↗
        </button>
      </div>

      {/* Main Container Section */}
      <section 
        className="relative w-full overflow-hidden h-screen bg-neutral-950 flex flex-col md:flex-row"
        style={{ height: '100dvh' }}
      >
        {/* Left Side Content Column (takes 45% width on desktop, transparent background overlaying the full screen bg) */}
        <div className="relative z-30 w-full md:w-[45%] h-full flex flex-col justify-center px-6 sm:px-12 md:pl-20 md:pr-10 pt-16 md:pt-0 pointer-events-none">
          {/* Key based transition wrapper to replay animations */}
          <div key={`left-panel-${activeSlideIndex}`} className="pointer-events-auto flex flex-col items-start">
            {/* Tag Label */}
            <div 
              className="hidden md:flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-[9px] font-extrabold text-white/80 tracking-wider uppercase mb-5 hero-anim hero-fade"
              style={{ animationDelay: '0.05s' }}
            >
              <span>🌿</span>
              <span>натуральные ингредиенты</span>
            </div>

            {/* Drink Title: Line 1 (White), Line 2 (Highlight matching slide color) */}
            <h1 className="text-white leading-[0.9] flex flex-col items-start select-none font-black uppercase text-[2.75rem] sm:text-5xl md:text-[4.2rem] tracking-tight">
              <span className="block hero-anim hero-reveal" style={{ animationDelay: '0.15s' }}>
                {currentSlide.titleLine1}
              </span>
              <span className="block hero-anim hero-reveal" style={{ color: currentSlide.titleColor, animationDelay: '0.28s' }}>
                {currentSlide.titleLine2}
              </span>
            </h1>

            {/* Drink Description (Light gray text) */}
            <p 
              className="text-xs sm:text-sm text-white/70 max-w-[340px] leading-relaxed mt-4 font-medium hero-anim hero-fade"
              style={{ animationDelay: '0.45s' }}
            >
              {currentSlide.descLeft}
            </p>

            {/* Drink Properties (Transparent pill container boxes with white border/text) */}
            <div 
              className="flex flex-wrap items-center gap-3 mt-6 text-[10px] text-white font-extrabold tracking-wider uppercase hero-anim hero-fade"
              style={{ animationDelay: '0.6s' }}
            >
              {currentSlide.props.map((prop, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/5 rounded-full px-3 py-1.5 shadow-sm hover:bg-white/15 transition-colors"
                >
                  <span>{prop.icon}</span>
                  <span>{prop.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Try Now + Watch Video */}
            <div 
              className="flex flex-wrap items-center gap-5 mt-8 hero-anim hero-fade"
              style={{ animationDelay: '0.75s' }}
            >
              <button 
                className="bg-[#4c583f] hover:bg-[#3d4632] text-white text-[11px] font-extrabold uppercase tracking-wider px-6 py-3.5 rounded flex items-center gap-2 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-95"
              >
                <span>Попробовать</span>
                <ArrowRight size={14} />
              </button>
              
              <button 
                className="text-white hover:text-neutral-200 text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 group"
              >
                <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/60 flex items-center justify-center transition-colors">
                  <Play size={10} fill="currentColor" className="ml-0.5" />
                </span>
                <span>Смотреть видео</span>
              </button>
            </div>

            {/* Slide dot progress indicator (White/Gray layout) */}
            <div 
              className="flex items-center mt-10 text-[10px] font-extrabold text-white/40 hero-anim hero-fade"
              style={{ animationDelay: '0.9s' }}
            >
              <span>01</span>
              <div className="w-32 h-[1px] bg-white/10 relative mx-3 rounded-full flex items-center">
                <div 
                  className="absolute w-2.5 h-2.5 rounded-full bg-white transition-all duration-[600ms] ease-out-back"
                  style={{ left: `${(activeSlideIndex / 5) * 100}%`, transform: 'translateX(-50%)' }}
                />
              </div>
              <span>06</span>
            </div>
          </div>
        </div>

        {/* Background Slides — opacity cross-fade between full background images */}
        <div className="w-full absolute inset-0 h-full z-10 overflow-hidden">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat md:bg-[length:auto_100%] md:bg-right"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
            );
          })}

          {/* Dark gradient overlay — left text column only */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.6) 18%, rgba(0,0,0,0) 38%)'
            }}
          />
        </div>

        {/* Floating Bottom Selector Bar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-5xl">
          <div className="bg-white/95 backdrop-blur-sm border border-neutral-100 rounded-[28px] py-4 px-6 sm:px-8 flex items-center justify-between shadow-2xl">
            {/* Left label: Branded Cup Box + Stacked "НАШИ НАПИТКИ" */}
            <div className="flex items-center gap-3 flex-shrink-0 select-none">
              <div className="w-10 h-10 rounded-xl bg-[#4c583f] flex items-center justify-center text-white shadow-sm">
                <span className="text-[18px]">☕</span>
              </div>
              <div className="flex flex-col text-neutral-900 font-black text-[11px] uppercase tracking-wider leading-none">
                <span>Наши</span>
                <span className="text-[#4c583f] mt-0.5">Напитки</span>
              </div>
            </div>

            {/* Center: 6 circle thumbnails (transparent background PNGs) */}
            <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar mx-4 px-2 select-none py-1">
              {slides.map((slide, idx) => {
                const isActive = idx === activeSlideIndex;
                return (
                  <div 
                    key={slide.id} 
                    onClick={() => setActiveSlideIndex(idx)}
                    className="flex flex-col items-center gap-1.5 cursor-pointer flex-shrink-0 group"
                  >
                    {/* Circle thumbnail wrapper */}
                    <div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center p-1 bg-white transition-all duration-300 ${
                        isActive 
                          ? 'border-[#4c583f] ring-2 ring-[#4c583f]/25 scale-105 shadow-sm' 
                          : 'border-neutral-100 group-hover:border-neutral-300'
                      }`}
                    >
                      <img 
                        src={slide.thumb} 
                        className="w-full h-full object-contain" 
                        alt={slide.buttonLabel} 
                      />
                    </div>
                    {/* Tiny item label */}
                    <span 
                      className={`text-[9px] font-bold uppercase tracking-tight transition-colors ${
                        isActive ? 'text-[#323d29]' : 'text-neutral-400 group-hover:text-neutral-600'
                      }`}
                    >
                      {slide.buttonLabel}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right side circular grid button */}
            <button 
              className="bg-[#4c583f] hover:bg-[#3d4632] text-white w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95 flex-shrink-0"
              aria-label="Все напитки"
            >
              <Grid size={15} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
