import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/d8feb38b-09ff-4eee-a16e-d0df0d64c58c.jpg';
const WHEEL_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/54688edf-5e3d-4a73-9c9e-a71d7575514f.jpg';
const CATALOG_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/ed7cf4e6-21b4-4b3e-9017-31f87114f361.jpg';
const QUALITY_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/54c5e594-92ff-43e7-9392-ec6f9df89ea3.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '32', label: 'года на рынке', suffix: '+' },
  { value: '100', label: 'дизайнов дисков', suffix: '+' },
  { value: '3', label: 'млн дисков в 2024 г.', suffix: 'М+' },
  { value: '1081', label: 'сотрудников', suffix: '' },
];

const products = [
  { name: 'SKAD', desc: 'Основной бренд завода — надёжные литые диски для массового рынка', tag: 'Основной бренд' },
  { name: 'K&K', desc: 'Стильные диски с уникальным дизайном для современных автомобилей', tag: 'Дизайн' },
  { name: 'iFree', desc: 'Доступная серия дисков оптимального соотношения цены и качества', tag: 'Эконом' },
  { name: 'Premium Series', desc: 'Эксклюзивные диски для требовательных владельцев премиальных авто', tag: 'Премиум' },
];

const certs = [
  { icon: 'ShieldCheck', title: 'ГОСТ Р ИСО 9001-2015', desc: 'Сертификат № 00.12.3218, орган EURO CERT' },
  { icon: 'Award', title: 'ГОСТ Р 58139-2024', desc: 'Сертификат № 0104/СМ/РУС, орган ЮРС-РУСЬ' },
  { icon: 'Leaf', title: 'ГОСТ Р ИСО 14001-2016', desc: 'Экологический менеджмент, № 00.02.2006, EURO CERT' },
  { icon: 'CheckCircle', title: 'ГОСТ 35243-2025', desc: 'Производство по действующему национальному стандарту' },
];

const productionSteps = [
  { num: '01', title: 'Входной контроль', desc: 'Спектральный анализ алюминиевого сплава АК7, проверка сертификатов поставщика АО ОК РУСАЛ' },
  { num: '02', title: 'Литьё', desc: 'Расплавленный сплав заливается в литейную машину GIMA под давлением при контроле температуры' },
  { num: '03', title: 'Механическая обработка', desc: 'Высокоточная обработка на станках с ЧПУ — контроль КИМ всех критических размеров' },
  { num: '04', title: 'Покраска и контроль', desc: 'Нанесение ЛКП LANKWITZER, проверка адгезии, толщины покрытия и герметичности' },
];

const testimonials = [
  { company: 'HAVAL', person: 'Тульская область', role: 'OEM-партнёр', text: 'Поставки дисков для производства кроссоверов и внедорожников. Высокие требования по качеству выполняются стабильно.' },
  { company: 'ПАО «АВТОВАЗ»', person: 'г. Тольятти', role: 'OEM-партнёр', text: 'Многолетнее сотрудничество. Диски СКАД устанавливаются на конвейер Lada. Качество соответствует всем требованиям OEM.' },
  { company: 'ФГУП «НАМИ»', person: 'г. Москва', role: 'Научный партнёр', text: 'Партнёрство в области научных исследований и разработок в автомобильной промышленности.' },
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
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1d4a]/97 via-[#0d1d4a]/85 to-[#0d1d4a]/50" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-12 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.3em] uppercase font-body font-medium">
                  Производство литых алюминиевых дисков
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-7xl text-white leading-[1.05] mb-4 tracking-wide">
                ЛМЗ<br />
                <span className="text-[#ffb800]">«СКАД»</span>
              </h1>

              <p className="text-white/75 text-xl md:text-2xl font-body font-light mb-3 leading-relaxed">
                Ваша уверенность на дороге.
              </p>
              <p className="text-white/55 text-base mb-3 max-w-lg leading-relaxed">
                Российское предприятие — производитель литых алюминиевых дисков с 1992 года. Площадки в Красноярске и Дивногорске. Более 3 млн дисков в 2024 году.
              </p>
              <p className="text-white/50 text-sm mb-10 max-w-lg leading-relaxed">
                Сертифицированы по ГОСТ Р ИСО 9001-2015, ГОСТ Р 58139-2024 и ГОСТ Р ИСО 14001-2016. Поставщик HAVAL, АвтоВАЗ, УАЗ, НАМИ.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-[#ffb800] text-[#0d1d4a] px-8 py-4 font-heading font-semibold text-base tracking-wide hover:bg-[#ffd966] transition-all hover:shadow-lg hover:shadow-[#ffb800]/30 active:scale-95"
                >
                  Смотреть каталог
                </button>
                <button
                  onClick={() => onNavigate('quality')}
                  className="border border-white/40 text-white px-8 py-4 font-heading font-semibold text-base tracking-wide hover:border-white hover:bg-white/10 transition-all"
                >
                  Система качества
                </button>
              </div>
            </div>
          </div>
        </div>

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
              <p className="text-[#374151] text-base leading-relaxed mb-4">
                ООО «Литейно-механический завод «СКАД» — российское предприятие, производящее литые алюминиевые диски для легковых автомобилей с использованием современных технологий. Производственные мощности расположены на территории Красноярского металлургического завода и в г. Дивногорске.
              </p>
              <p className="text-[#374151] text-base leading-relaxed mb-4">
                Красноярская площадка начала работу в 1991 году как совместное российско-германское предприятие. Первый литой диск выпущен 15 октября 1992 года. Дивногорская площадка основана в 2002 году, массовое производство под маркой SKAD — с 2004 года.
              </p>
              <p className="text-[#374151] text-base leading-relaxed mb-8">
                В 2024 году объём производства достиг рекордных 3 миллионов штук. На предприятии работает 1 081 сотрудник, 40 подразделений. Ассортимент включает бренды SKAD, K&K, iFree, Wheels Up, Premium Series — более 100 дизайнов, диаметры от 13 до 20 дюймов, около 3 000 типоразмеров.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: 'Factory', label: 'Два производства', desc: 'Красноярск + Дивногорск' },
                  { icon: 'Users', label: '1 081 сотрудник', desc: '40 подразделений' },
                  { icon: 'Truck', label: 'OEM-поставки', desc: 'HAVAL, АвтоВАЗ, УАЗ, НАМИ' },
                  { icon: 'Award', label: 'Рекордный год', desc: '3 000 000 дисков в 2024 г.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 bg-[#f0f2f5] rounded-sm">
                    <Icon name={item.icon} size={20} className="text-[#ffb800] mt-0.5 shrink-0" />
                    <div>
                      <div className="font-heading text-sm text-[#0d1d4a] font-semibold">{item.label}</div>
                      <div className="text-xs text-[#6b7280] mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="flex items-center gap-2 text-[#0d1d4a] font-heading font-semibold text-sm tracking-wide border-b-2 border-[#ffb800] pb-1 hover:text-[#ffb800] transition-colors"
              >
                Подробнее о заводе
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img src={WHEEL_IMG} alt="Литые диски СКАД" className="w-full h-72 object-cover shadow-xl" />
                <div className="absolute -bottom-3 -right-3 bg-[#ffb800] px-4 py-3">
                  <div className="font-heading text-[#0d1d4a] text-sm font-bold">с 1992 года</div>
                  <div className="text-[#0d1d4a]/70 text-xs">производство дисков</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '3 млн', label: 'дисков в 2024' },
                  { val: '3000', label: 'типоразмеров' },
                  { val: '100+', label: 'дизайнов' },
                ].map((s) => (
                  <div key={s.label} className="bg-[#f0f2f5] p-4 text-center">
                    <div className="font-heading text-xl text-[#0d1d4a] font-bold">{s.val}</div>
                    <div className="text-[#6b7280] text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS PREVIEW ─────────────────────────────────────── */}
      <section className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-0.5 w-8 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Каталог</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a]">Бренды СКАД</h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="hidden md:flex items-center gap-2 text-[#0d1d4a] text-sm font-medium hover:text-[#ffb800] transition-colors"
            >
              Весь каталог <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <div
                key={p.name}
                className="bg-white p-6 cursor-pointer hover:shadow-lg transition-all duration-200 group border border-transparent hover:border-[#ffb800]/30"
                onClick={() => onNavigate('products')}
              >
                <div className="h-32 overflow-hidden mb-4 -mx-6 -mt-6">
                  <img src={CATALOG_IMG} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="inline-block bg-[#0d1d4a] text-[#ffb800] text-[10px] px-2 py-0.5 font-heading tracking-widest mb-3">
                  {p.tag}
                </div>
                <h3 className="font-heading text-xl text-[#0d1d4a] mb-2">{p.name}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUALITY ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#0d1d4a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffb800 0, #ffb800 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Система качества</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
                СМК с 2013 года.<br />
                <span className="text-[#ffb800]">Сертификация каждые 3 года.</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                В ООО «ЛМЗ «СКАД» с 2013 года функционирует документированная СМК, разработанная без консультационных услуг за полтора года. Ресертификационный аудит проводится каждые 3 года, ежегодно — инспекционные аудиты международной независимой организацией. Последняя ресертификация — июнь 2025 года.
              </p>
              <button
                onClick={() => onNavigate('quality')}
                className="flex items-center gap-2 bg-[#ffb800] text-[#0d1d4a] px-6 py-3 font-heading font-semibold text-sm tracking-wide hover:bg-[#ffd966] transition-colors"
              >
                Подробнее о СМК <Icon name="ArrowRight" size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certs.map((c) => (
                <div key={c.title} className="bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                  <Icon name={c.icon} size={24} className="text-[#ffb800] mb-3" />
                  <div className="font-heading text-white text-sm mb-1">{c.title}</div>
                  <div className="text-white/50 text-xs leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTION ──────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Производство</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Полный цикл производства
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-0">
              {productionSteps.map((step, i) => (
                <div key={step.num} className={`flex gap-5 p-5 ${i % 2 === 0 ? 'bg-[#f0f2f5]' : 'bg-white'}`}>
                  <div className="font-heading text-4xl text-[#ffb800]/30 font-bold shrink-0 leading-none mt-1">{step.num}</div>
                  <div>
                    <div className="font-heading text-lg text-[#0d1d4a] mb-1">{step.title}</div>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img src={QUALITY_IMG} alt="Контроль качества СКАД" className="w-full object-cover shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d4a]/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <div className="text-[#ffb800] text-xs tracking-widest uppercase mb-1">Контроль качества</div>
                  <div className="text-white font-heading text-xl">Каждый диск проверяется</div>
                  <div className="text-white/70 text-sm mt-1">ГОСТ 35243-2025 · ASTM E155-05 · ГОСТ 1583-93</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('production')}
              className="border-2 border-[#0d1d4a] text-[#0d1d4a] px-8 py-3 font-heading font-semibold text-sm tracking-wide hover:bg-[#0d1d4a] hover:text-white transition-all"
            >
              Подробнее о производстве
            </button>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Партнёры и потребители
            </h2>
            <p className="text-[#6b7280] mt-6 max-w-xl mx-auto text-sm">
              ООО «ЛМЗ «СКАД» работает в сегментах B2B (OEM), B2B2C и B2C на российском и международном рынках
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t) => (
              <div key={t.company} className="bg-white p-6 shadow-sm border-t-2 border-[#ffb800]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0d1d4a] flex items-center justify-center rounded-sm shrink-0">
                    <Icon name="Building2" size={18} className="text-[#ffb800]" />
                  </div>
                  <div>
                    <div className="font-heading text-[#0d1d4a] font-semibold text-sm">{t.company}</div>
                    <div className="text-[#6b7280] text-xs">{t.person} · {t.role}</div>
                  </div>
                </div>
                <p className="text-[#374151] text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'OEM-поставки', val: 'HAVAL, АвтоВАЗ, УАЗ' },
              { label: 'R&D партнёр', val: 'ФГУП «НАМИ»' },
              { label: 'Aftermarket', val: 'Дистрибьюторы РФ' },
              { label: 'Розница', val: 'Шинные центры, B2C' },
            ].map((item) => (
              <div key={item.label} className="bg-white p-5 border border-[#e5e7eb]">
                <div className="font-heading text-sm text-[#0d1d4a] mb-1">{item.label}</div>
                <div className="text-[#6b7280] text-xs">{item.val}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('partners')}
              className="flex items-center gap-2 text-[#0d1d4a] font-heading font-semibold text-sm tracking-wide border-b-2 border-[#ffb800] pb-1 hover:text-[#ffb800] transition-colors mx-auto"
            >
              Все партнёры <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0d1d4a] relative overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-5xl text-white mb-4">
            Интернет-магазин SKAD
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Весь ассортимент литых дисков, подбор по автомобилю, доставка по России
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://scad.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ffb800] text-[#0d1d4a] px-8 py-4 font-heading font-semibold text-base tracking-wide hover:bg-[#ffd966] transition-all inline-flex items-center gap-2"
            >
              <Icon name="ShoppingCart" size={18} />
              Перейти на scad.ru
            </a>
            <button
              onClick={() => onNavigate('contacts')}
              className="border border-white/40 text-white px-8 py-4 font-heading font-semibold text-base tracking-wide hover:border-white hover:bg-white/10 transition-all"
            >
              Связаться с нами
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
