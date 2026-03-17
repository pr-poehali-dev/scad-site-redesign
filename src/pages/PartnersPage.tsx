import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const partners = [
  { name: 'HAVAL', country: 'Тульская обл.', type: 'OEM', sector: 'B2B, OEM', desc: 'Поставки дисков для производства кроссоверов и внедорожников HAVAL на российском заводе.' },
  { name: 'ПАО «АВТОВАЗ»', country: 'г. Тольятти', type: 'OEM', sector: 'B2B', desc: 'Многолетний партнёр. Диски СКАД устанавливаются на конвейер LADA для первичной сборки.' },
  { name: 'ООО «УАЗ»', country: 'г. Ульяновск', type: 'OEM', sector: 'B2B', desc: 'Поставки литых алюминиевых дисков для сборки автомобилей УАЗ.' },
  { name: 'ФГУП «НАМИ»', country: 'г. Москва', type: 'R&D', sector: 'Исследования', desc: 'Партнёрство в области научных исследований и разработок в автомобильной промышленности.' },
  { name: 'Дистрибьюторы РФ', country: 'Россия', type: 'B2B', sector: 'Aftermarket', desc: 'Оптовая торговля автомобильными деталями. Независимый вторичный рынок запчастей.' },
  { name: 'Ford Motor Company', country: 'Германия, Испания', type: 'OEM (экспорт)', sector: 'B2B', desc: 'С 2014 года — отгрузки дисков для сборочных линий Ford в Германии и Испании. Статус Q1 присвоен в 2008 году.' },
];

const consumers = [
  { type: 'OEM-поставки', desc: 'HAVAL, ПАО «АВТОВАЗ», ООО «УАЗ», Ford', sector: 'B2B, OEM' },
  { type: 'Научные партнёры', desc: 'ФГУП «НАМИ» — исследования и разработки', sector: 'R&D' },
  { type: 'Оптово-розничные компании', desc: 'Торговля АТС, шинные центры, Aftermarket', sector: 'B2B2C' },
  { type: 'Физические лица', desc: 'Потребительский рынок через розницу', sector: 'B2C' },
];

const testimonials = [
  {
    company: 'ПАО «АВТОВАЗ»',
    person: 'г. Тольятти',
    role: 'OEM-партнёр',
    text: 'Диски СКАД устанавливаются на конвейер LADA для первичной сборки. Многолетнее сотрудничество. Качество соответствует всем требованиям автомобильного OEM-рынка.',
    rating: 5,
  },
  {
    company: 'HAVAL',
    person: 'Тульская область',
    role: 'OEM-партнёр',
    text: 'Поставки дисков для производства кроссоверов и внедорожников. Строгие требования по качеству выполняются стабильно. Надёжный российский поставщик.',
    rating: 5,
  },
  {
    company: 'Ford Motor Company',
    person: 'Германия / Испания',
    role: 'Статус Q1, с 2008 г.',
    text: 'SKAD received Ford Q1 status in 2008. Since 2014, wheels are supplied to Ford assembly lines in Germany and Spain. European quality standards are consistently met.',
    rating: 5,
  },
  {
    company: 'ФГУП «НАМИ»',
    person: 'г. Москва',
    role: 'Научный партнёр',
    text: 'Сотрудничество в сфере научных исследований и разработок в области автомобильной промышленности. ЛМЗ СКАД — активный участник отраслевых R&D-проектов.',
    rating: 5,
  },
];

export default function PartnersPage({ onNavigate: _onNavigate }: { onNavigate: (page: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16 font-body">

      {/* Header */}
      <div className="bg-[#0d1d4a] py-16 relative">
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-[#ffb800]">Партнёры</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Партнёры и клиенты</h1>
          <div className="h-0.5 w-16 bg-[#ffb800]" />
        </div>
      </div>

      {/* Partner cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Ключевые партнёры</h2>
            <p className="text-[#6b7280] mt-6 max-w-xl mx-auto">
              OEM-поставки на автозаводы, дистрибьюторская сеть по России, экспорт в Европу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="border border-steel-200 hover:border-[#ffb800] hover:shadow-md transition-all p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-[#0d1d4a] flex items-center justify-center">
                    <span className="font-heading text-[#ffb800] text-lg font-bold">
                      {p.name.substring(0, 2)}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="bg-[#f0f2f5] text-[#6b7280] text-xs px-2 py-1 mb-1">{p.type}</div>
                    <div className="text-[#9ca3af] text-xs">{p.sector}</div>
                  </div>
                </div>
                <h3 className="font-heading text-xl text-[#0d1d4a] mb-1 group-hover:text-[#ffb800] transition-colors">{p.name}</h3>
                <div className="text-[#ffb800] text-xs mb-3">{p.country}</div>
                <p className="text-steel-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="py-16 bg-[#0d1d4a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-white gold-line-center">
              Сегменты потребителей
            </h2>
            <p className="text-white/50 mt-6 text-sm">OEM, B2B, B2B2C и B2C — полный охват рынка</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {consumers.map((c) => (
              <div key={c.type} className="bg-white/5 border border-white/10 p-6 hover:border-[#ffb800] transition-colors">
                <div className="inline-block bg-[#ffb800] text-[#0d1d4a] text-[10px] px-2 py-0.5 font-heading tracking-widest mb-3">{c.sector}</div>
                <div className="font-heading text-white text-sm mb-3">{c.type}</div>
                <div className="text-white/50 text-xs leading-relaxed">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-steel-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Отзывы партнёров
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.company} className="bg-white p-8 shadow-sm">
                <div className="flex mb-4 gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[#ffb800] fill-[#ffb800]" />
                  ))}
                </div>
                <div className="text-4xl text-[#ffb800] font-heading leading-none mb-3">"</div>
                <p className="text-steel-600 leading-relaxed mb-6 italic text-sm">{t.text}</p>
                <div className="border-t border-steel-100 pt-4 flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#0d1d4a] flex items-center justify-center shrink-0">
                    <span className="font-heading text-[#ffb800] text-sm font-bold">
                      {t.company.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading text-[#0d1d4a] text-sm">{t.person}</div>
                    <div className="text-steel-400 text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become partner CTA */}
      <section className="py-12 bg-[#ffb800]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-[#0d1d4a] mb-4">Стать партнёром</h2>
          <p className="text-[#0d1d4a]/70 mb-6 max-w-md mx-auto text-sm">
            Если вы хотите стать дилером или наладить оптовые поставки — свяжитесь с нашим отделом продаж
          </p>
          <button className="bg-[#0d1d4a] text-white px-8 py-4 font-heading font-semibold tracking-wide hover:bg-[#152a6e] transition-colors">
            Отправить заявку
          </button>
        </div>
      </section>

    </div>
  );
}