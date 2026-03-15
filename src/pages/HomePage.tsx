import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/5cacd003-06c6-4f0e-b3f1-8cbc2506e640.jpg';
const WHEEL_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/4162c717-8a7d-418e-9314-fba147da6f46.jpg';
const CATALOG_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/6a1eea26-3d26-4cb1-a1aa-9f52cfd05a9d.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '28', label: 'лет на рынке', suffix: '+' },
  { value: '500', label: 'моделей дисков', suffix: '+' },
  { value: '3.5', label: 'млн дисков в год', suffix: 'М' },
  { value: '40', label: 'стран поставок', suffix: '+' },
];

const products = [
  { name: 'Диски классик', desc: 'Надёжные и доступные литые диски для массового рынка', tag: 'Популярное' },
  { name: 'Диски Sport', desc: 'Лёгкие спортивные диски с улучшенной аэродинамикой', tag: 'Спорт' },
  { name: 'Диски Premium', desc: 'Эксклюзивные дизайнерские диски для премиальных авто', tag: 'Премиум' },
  { name: 'Диски Off-Road', desc: 'Усиленные диски для внедорожников и SUV', tag: 'Внедорожник' },
];

const certs = [
  { icon: 'ShieldCheck', title: 'ISO 9001:2015', desc: 'Система менеджмента качества' },
  { icon: 'Award', title: 'ГОСТ Р ИСО 9001', desc: 'Российский стандарт качества' },
  { icon: 'CheckCircle', title: 'ЕАС сертификация', desc: 'Таможенный союз ЕАЭС' },
  { icon: 'Star', title: 'TÜV Rheinland', desc: 'Международная сертификация' },
];

const productionSteps = [
  { num: '01', title: 'Литьё', desc: 'Расплавленный алюминиевый сплав заливается в пресс-форму под давлением' },
  { num: '02', title: 'Обработка', desc: 'Механическая обработка на станках с ЧПУ до точных размеров' },
  { num: '03', title: 'Покраска', desc: 'Нанесение защитного покрытия и декоративной отделки' },
  { num: '04', title: 'Контроль', desc: 'Многоступенчатая проверка качества каждого изделия' },
];

const testimonials = [
  { company: 'АвтоВАЗ', person: 'Иван Петров', role: 'Директор по закупкам', text: 'Сотрудничаем более 10 лет. Качество стабильное, поставки всегда в срок.' },
  { company: 'Škoda Auto', person: 'Jan Novák', role: 'Supply Chain Manager', text: 'SKAD wheels meet our strict European quality standards consistently.' },
  { company: 'LADA Запчасти', person: 'Михаил Соколов', role: 'Коммерческий директор', text: 'Лучшее соотношение цены и качества на российском рынке.' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-body">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1d4a]/95 via-[#0d1d4a]/80 to-[#0d1d4a]/40" />
        {/* Diagonal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-12 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.3em] uppercase font-body font-medium">
                  Производство литых дисков
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-7xl text-white leading-[1.05] mb-6 tracking-wide">
                ЛМЗ<br />
                <span className="text-[#ffb800]">«СКАД»</span>
              </h1>

              <p className="text-white/80 text-xl md:text-2xl font-body font-light mb-4 leading-relaxed">
                Ваша уверенность на дороге.
              </p>
              <p className="text-white/60 text-base mb-10 max-w-lg leading-relaxed">
                Более 28 лет мы производим литые алюминиевые диски, которым доверяют миллионы водителей и крупнейшие автопроизводители мира.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-[#ffb800] text-[#0d1d4a] px-8 py-4 font-heading font-semibold text-base tracking-wide hover:bg-[#ffd966] transition-all hover:shadow-lg hover:shadow-[#ffb800]/30 active:scale-95"
                >
                  Смотреть каталог
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="border border-white/40 text-white px-8 py-4 font-heading font-semibold text-base tracking-wide hover:border-white hover:bg-white/10 transition-all"
                >
                  О заводе
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#ffb800]" />
          <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────── */}
      <section className="bg-[#0d1d4a] py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center px-6 py-4">
                <div className="font-heading text-4xl md:text-5xl text-[#ffb800] font-bold">
                  {s.value}<span className="text-2xl">{s.suffix}</span>
                </div>
                <div className="text-white/60 text-sm mt-1 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">О предприятии</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-[#0d1d4a] mb-6 gold-line">
                Завод с историей.<br />Продукция с будущим.
              </h2>
              <p className="text-steel-600 text-base leading-relaxed mb-4">
                ООО «ЛМЗ «СКАД» основан в 1996 году в Дивногорске Красноярского края. За почти три десятилетия завод вырос в одного из крупнейших производителей литых алюминиевых дисков в России и СНГ.
              </p>
              <p className="text-steel-600 text-base leading-relaxed mb-8">
                Производственные мощности позволяют выпускать более 3,5 миллиона дисков в год. Продукция СКАД поставляется на конвейеры АвтоВАЗа, Škoda, Renault и экспортируется в 40 стран мира.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: 'Factory', label: 'Современный завод', desc: '60 000 м² производственных площадей' },
                  { icon: 'Users', label: 'Опытный коллектив', desc: 'Более 1 200 сотрудников' },
                  { icon: 'Truck', label: 'Логистика', desc: 'Доставка по всей России и СНГ' },
                  { icon: 'Zap', label: 'Инновации', desc: 'Собственный R&D центр' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 bg-steel-100 rounded-sm">
                    <Icon name={item.icon} size={20} className="text-[#ffb800] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-heading text-sm text-[#0d1d4a] font-semibold">{item.label}</div>
                      <div className="text-xs text-steel-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-[#0d1d4a] text-[#0d1d4a] px-6 py-3 font-heading tracking-wide hover:bg-[#0d1d4a] hover:text-white transition-all text-sm"
              >
                Подробнее о заводе
              </button>
            </div>
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Производство СКАД"
                className="w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#ffb800] p-5 shadow-xl">
                <div className="font-heading text-3xl text-[#0d1d4a] font-bold">1996</div>
                <div className="text-[#0d1d4a]/70 text-xs mt-0.5">Год основания</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#0d1d4a] p-4 shadow-xl border border-[#ffb800]/30">
                <Icon name="ShieldCheck" size={24} className="text-[#ffb800] mb-1" />
                <div className="text-white text-xs font-heading">ISO 9001</div>
                <div className="text-white/50 text-[10px]">Сертифицировано</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────────── */}
      <section className="section-padding bg-steel-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Каталог</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#0d1d4a] gold-line-center">
              Наша продукция
            </h2>
            <p className="text-steel-500 mt-4 max-w-xl mx-auto">
              Широкий ассортимент литых дисков для любого автомобиля и стиля вождения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
                onClick={() => onNavigate('products')}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={WHEEL_IMG}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#ffb800] text-[#0d1d4a] text-xs font-heading font-bold px-2 py-1">
                    {p.tag}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg text-[#0d1d4a] mb-2">{p.name}</h3>
                  <p className="text-steel-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center text-[#ffb800] text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('products')}
              className="bg-[#0d1d4a] text-white px-8 py-4 font-heading tracking-wide hover:bg-[#152a6e] transition-colors"
            >
              Полный каталог продукции
            </button>
          </div>
        </div>
      </section>

      {/* ─── QUALITY ──────────────────────────────────────────────── */}
      <section className="section-padding bg-[#0d1d4a] relative overflow-hidden">
        {/* BG texture */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffb800 0, #ffb800 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">СМК</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 gold-line">
                Качество —<br />наш стандарт
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Система менеджмента качества ООО «ЛМЗ «СКАД» построена на принципах международного стандарта ISO 9001:2015. Каждый диск проходит многоступенчатый контроль — от входного контроля сырья до финальной приёмки готового изделия.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {certs.map((c) => (
                  <div key={c.title} className="border border-white/20 p-4 hover:border-[#ffb800] transition-colors">
                    <Icon name={c.icon} size={22} className="text-[#ffb800] mb-2" />
                    <div className="font-heading text-white text-sm font-semibold">{c.title}</div>
                    <div className="text-white/50 text-xs mt-1">{c.desc}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('quality')}
                className="bg-[#ffb800] text-[#0d1d4a] px-6 py-3 font-heading font-semibold tracking-wide hover:bg-[#ffd966] transition-colors"
              >
                Раздел «Качество»
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { pct: '100%', label: 'Входной контроль сырья' },
                { pct: '100%', label: 'Рентгенографический контроль' },
                { pct: '100%', label: 'Балансировочный контроль' },
                { pct: '100%', label: 'Испытания на прочность' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4">
                  <div className="font-heading text-2xl text-[#ffb800] font-bold w-16 shrink-0">{item.pct}</div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                  <Icon name="CheckCircle" size={16} className="text-[#ffb800] ml-auto shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTION ───────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Производство</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#0d1d4a] gold-line-center">
              Как создаётся диск
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productionSteps.map((step) => (
              <div key={step.num} className="relative">
                <div className="text-[80px] font-heading text-steel-200 leading-none absolute -top-4 -left-2 select-none">
                  {step.num}
                </div>
                <div className="relative z-10 pt-8 pl-2">
                  <h3 className="font-heading text-xl text-[#0d1d4a] mb-3">{step.title}</h3>
                  <p className="text-steel-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-4 h-0.5 bg-gradient-to-r from-[#ffb800] to-transparent" />
              </div>
            ))}
          </div>

          <div className="relative h-64 md:h-96 overflow-hidden">
            <img src={HERO_IMG} alt="Производство" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#0d1d4a]/60 flex items-center justify-center">
              <button
                onClick={() => onNavigate('production')}
                className="flex items-center gap-3 bg-[#ffb800] text-[#0d1d4a] px-8 py-4 font-heading font-semibold tracking-wide hover:bg-[#ffd966] transition-colors"
              >
                <Icon name="Play" size={18} />
                Виртуальный тур по заводу
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="section-padding bg-steel-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Партнёры</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#0d1d4a] gold-line-center">
              Нам доверяют
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.company} className="bg-white p-8 shadow-md relative">
                <div className="text-5xl text-[#ffb800] font-heading leading-none mb-4">"</div>
                <p className="text-steel-600 text-sm leading-relaxed mb-6 italic">{t.text}</p>
                <div className="border-t border-steel-200 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0d1d4a] flex items-center justify-center">
                    <span className="text-[#ffb800] font-heading text-sm font-bold">
                      {t.company.substring(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading text-[#0d1d4a] text-sm">{t.person}</div>
                    <div className="text-steel-400 text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('partners')}
              className="border-2 border-[#0d1d4a] text-[#0d1d4a] px-6 py-3 font-heading tracking-wide hover:bg-[#0d1d4a] hover:text-white transition-all text-sm"
            >
              Все партнёры
            </button>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#ffb800]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] mb-4">
            Готовы к сотрудничеству?
          </h2>
          <p className="text-[#0d1d4a]/70 mb-8 max-w-lg mx-auto">
            Свяжитесь с нашими менеджерами или оформите заявку онлайн. Мы ответим в течение одного рабочего дня.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('contacts')}
              className="bg-[#0d1d4a] text-white px-8 py-4 font-heading font-semibold tracking-wide hover:bg-[#152a6e] transition-colors"
            >
              Связаться с нами
            </button>
            <a
              href="https://scad.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#0d1d4a] text-[#0d1d4a] px-8 py-4 font-heading font-semibold tracking-wide hover:bg-[#0d1d4a] hover:text-white transition-all"
            >
              Интернет-магазин
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}