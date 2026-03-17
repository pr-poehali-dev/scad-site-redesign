import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О заводе' },
  { id: 'products', label: 'Продукция' },
  { id: 'quality', label: 'Качество' },
  { id: 'production', label: 'Производство' },
  { id: 'partners', label: 'Партнёры' },
  { id: 'contacts', label: 'Контакты' },
  { id: 'documents', label: 'Документы' },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d1d4a] shadow-2xl py-2' : 'bg-[#0d1d4a]/95 py-3'
      }`}
    >
      {/* Top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded bg-[#ffb800] flex items-center justify-center font-heading font-bold text-[#0d1d4a] text-sm">
              СКАД
            </div>
            <div className="text-left">
              <div className="font-heading text-white text-lg leading-tight tracking-wide">
                ЛМЗ «СКАД»
              </div>
              <div className="text-[#ffb800] text-[10px] tracking-widest uppercase leading-tight">
                Литейно-механический завод
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-body font-medium tracking-wide transition-all duration-200 border-b-2 ${
                  activePage === item.id
                    ? 'text-[#ffb800] border-[#ffb800]'
                    : 'text-white/80 border-transparent hover:text-white hover:border-white/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="https://scad.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#ffb800] text-[#0d1d4a] px-4 py-2 text-sm font-heading font-semibold tracking-wide hover:bg-[#ffd966] transition-colors"
            >
              <Icon name="ShoppingCart" size={14} />
              Магазин
            </a>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="lg:hidden mt-3 pb-3 border-t border-white/10 pt-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className={`text-left px-3 py-2 text-sm font-body font-medium transition-colors ${
                  activePage === item.id
                    ? 'text-[#ffb800]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}