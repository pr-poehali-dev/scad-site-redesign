import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080f2e] text-white">
      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800]" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#ffb800] flex items-center justify-center font-heading font-bold text-[#0d1d4a] text-sm">
                СКАД
              </div>
              <div>
                <div className="font-heading text-lg">ЛМЗ «СКАД»</div>
                <div className="text-[10px] text-[#ffb800] tracking-widest uppercase">Литейно-механический завод</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Производство литых алюминиевых дисков с 1992 года. Площадки в Красноярске и Дивногорске. Сертифицировано по ГОСТ Р ИСО 9001-2015, ГОСТ Р 58139-2024, ГОСТ Р ИСО 14001-2016.
            </p>
            <div className="flex gap-3">
              {['vk', 'youtube', 'telegram'].map((net) => (
                <a
                  key={net}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#ffb800] hover:text-[#ffb800] transition-colors text-xs uppercase font-bold"
                >
                  {net.substring(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-[#ffb800] text-sm tracking-widest uppercase mb-4">Навигация</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О заводе' },
                { id: 'products', label: 'Продукция' },
                { id: 'quality', label: 'Качество' },
                { id: 'production', label: 'Производство' },
                { id: 'partners', label: 'Партнёры' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-white/60 hover:text-[#ffb800] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#ffb800] text-xs">›</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading text-[#ffb800] text-sm tracking-widest uppercase mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={16} className="text-[#ffb800] mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Красноярский край, г. Дивногорск. Красноярская площадка: КрАМЗ</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={16} className="text-[#ffb800] shrink-0" />
                <a href="tel:+73912345678" className="text-white/60 text-sm hover:text-[#ffb800] transition-colors">
                  +7 (391) 234-56-78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" size={16} className="text-[#ffb800] shrink-0" />
                <a href="mailto:info@scad.ru" className="text-white/60 text-sm hover:text-[#ffb800] transition-colors">
                  info@scad.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Globe" size={16} className="text-[#ffb800] shrink-0" />
                <a href="https://scad.ru" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm hover:text-[#ffb800] transition-colors">
                  scad.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Working hours + cert */}
          <div>
            <h4 className="font-heading text-[#ffb800] text-sm tracking-widest uppercase mb-4">График работы</h4>
            <ul className="space-y-2 text-sm text-white/60 mb-6">
              <li className="flex justify-between">
                <span>Пн–Пт</span>
                <span className="text-white">08:00–17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота</span>
                <span className="text-white">09:00–14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье</span>
                <span className="text-white/40">Выходной</span>
              </li>
            </ul>
            <div className="border border-[#ffb800]/30 p-3">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="ShieldCheck" size={14} className="text-[#ffb800]" />
                <span className="text-[#ffb800] text-xs font-heading tracking-wide">СЕРТИФИКАТ</span>
              </div>
              <div className="text-white/60 text-xs">ГОСТ Р ИСО 9001-2015 (EURO CERT)</div>
              <div className="text-white/60 text-xs">ГОСТ Р 58139-2024 (ЮРС-РУСЬ)</div>
              <div className="text-white/60 text-xs">ГОСТ Р ИСО 14001-2016 (EURO CERT)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © 2025 ООО «ЛМЗ «СКАД». Все права защищены. Производство с 1992 г.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors">Реквизиты</a>
          </div>
        </div>
      </div>
    </footer>
  );
}