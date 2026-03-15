import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const partners = [
  { name: 'АвтоВАЗ', country: 'Россия', type: 'Конвейер', since: '1998', desc: 'Официальный поставщик дисков для конвейерной сборки автомобилей LADA' },
  { name: 'Škoda Auto', country: 'Чехия', type: 'Конвейер', since: '2008', desc: 'Поставки дисков для моделей Fabia, Rapid, Octavia на заводе в Млада Болеслав' },
  { name: 'Renault', country: 'Франция', type: 'OEM', since: '2010', desc: 'Партнёрство по поставкам дисков для российского рынка' },
  { name: 'Hyundai Motor', country: 'Южная Корея', type: 'OEM', since: '2012', desc: 'Сертифицированный поставщик для заводов в России и Казахстане' },
  { name: 'LADA Запчасти', country: 'Россия', type: 'Дистрибьютор', since: '2000', desc: 'Эксклюзивный дистрибьютор дисков СКАД в официальной дилерской сети LADA' },
  { name: 'Emex', country: 'Россия', type: 'Дистрибьютор', since: '2005', desc: 'Партнёр по онлайн-продажам в крупнейшем интернет-магазине запчастей' },
];

const geography = [
  { region: 'Россия и СНГ', countries: 'Россия, Казахстан, Беларусь, Узбекистан, Армения', pct: '65%' },
  { region: 'Европа', countries: 'Чехия, Польша, Германия, Франция, Италия', pct: '20%' },
  { region: 'Азия', countries: 'Южная Корея, Китай, ОАЭ', pct: '10%' },
  { region: 'Прочие', countries: 'Латинская Америка, Африка', pct: '5%' },
];

const testimonials = [
  {
    company: 'АвтоВАЗ',
    person: 'Петров Иван Алексеевич',
    role: 'Директор по закупкам',
    text: 'Сотрудничаем с СКАД с 1998 года. За эти годы не было ни одного случая отзыва продукции по вине завода. Качество стабильное, поставки всегда в срок. Рекомендуем как надёжного партнёра.',
    rating: 5,
  },
  {
    company: 'Škoda Auto a.s.',
    person: 'Jan Novák',
    role: 'Head of Supply Chain',
    text: 'SKAD has been our trusted partner since 2008. Their wheels consistently meet our European quality standards. The certification process was smooth and the team is very professional.',
    rating: 5,
  },
  {
    company: 'LADA Запчасти',
    person: 'Соколов Михаил Витальевич',
    role: 'Коммерческий директор',
    text: 'Лучшее соотношение цены и качества на российском рынке. Наши клиенты довольны продукцией СКАД, рекламаций крайне мало. Широкий ассортимент позволяет закрыть потребности любого покупателя.',
    rating: 5,
  },
  {
    company: 'Авто Мир',
    person: 'Кузнецова Ольга Петровна',
    role: 'Директор закупок',
    text: 'Диски СКАД — основа нашего ассортимента уже более 12 лет. Покупатели возвращаются за повторными покупками. Гарантийные случаи единичны.',
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
            <p className="text-steel-500 mt-6 max-w-xl mx-auto">
              Нашу продукцию выбирают ведущие автопроизводители и крупнейшие дистрибьюторы мира
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
                    <div className="bg-steel-100 text-steel-600 text-xs px-2 py-1 mb-1">{p.type}</div>
                    <div className="text-steel-400 text-xs">с {p.since} г.</div>
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
              География поставок
            </h2>
            <p className="text-white/50 mt-6 text-sm">Присутствие в 40 странах мира</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {geography.map((g) => (
              <div key={g.region} className="bg-white/5 border border-white/10 p-6 hover:border-[#ffb800] transition-colors">
                <div className="font-heading text-3xl text-[#ffb800] font-bold mb-2">{g.pct}</div>
                <div className="font-heading text-white text-base mb-3">{g.region}</div>
                <div className="text-white/50 text-xs leading-relaxed">{g.countries}</div>
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