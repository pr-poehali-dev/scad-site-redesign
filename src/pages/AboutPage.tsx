import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const FACTORY_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/3943c9a0-fef2-4766-9a8c-8420c27ae504.jpg';
const PROD_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/d8feb38b-09ff-4eee-a16e-d0df0d64c58c.jpg';

const timeline = [
  { year: '1991', title: 'Основание Красноярской площадки', desc: 'Запуск как совместного российско-германского предприятия на территории Красноярского металлургического завода.' },
  { year: '1992', title: 'Первый литой диск', desc: 'Первый литой диск, изготовленный с полным соблюдением технологического процесса, выпущен 15 октября 1992 года.' },
  { year: '2002', title: 'Дивногорская площадка', desc: 'Основание производственной площадки в г. Дивногорске Красноярского края.' },
  { year: '2004', title: 'Запуск бренда SKAD', desc: 'Начало массового производства дисков под маркой SKAD. Формирование розничного и оптового направления.' },
  { year: '2006', title: 'OEM-поставки на автозаводы', desc: 'Начало поставок дисков на российские автозаводы для первичной сборки, включая Ford и других производителей.' },
  { year: '2007', title: 'Сертификат KBA (ЕС)', desc: 'Получение сертификата KBA, необходимого для поставки продукции в страны Европейского союза.' },
  { year: '2008', title: 'Статус Q1 Ford Motor Company', desc: 'Присвоение звания приоритетного поставщика Ford Motor Company (Q1) — ключевой момент для международных цепочек поставок.' },
  { year: '2009–2014', title: 'Золотые медали «ГЕММА»', desc: 'Продукция SKAD завоевала золотые медали на конкурсе «ГЕММА» в 2009–2010 и 2014 годах.' },
  { year: '2013', title: 'Внедрение СМК', desc: 'Запуск документированной системы менеджмента качества, разработанной за полтора года без консультационных услуг.' },
  { year: '2014–2016', title: 'Экспорт в ЕС', desc: 'Поставки на сборочные линии Ford в Германии и Испании. Привлечение финансовой поддержки для расширения экспорта.' },
  { year: '2024', title: 'Рекорд производства', desc: 'Объём производства превысил 3 миллиона штук — новый рекорд предприятия.' },
];

const values = [
  { icon: 'ShieldCheck', title: 'Качество', desc: 'СМК по ГОСТ Р ИСО 9001-2015 и ГОСТ Р 58139-2024. Нулевая терпимость к браку. Каждый диск проходит многоступенчатый контроль.' },
  { icon: 'Lightbulb', title: 'Инновации', desc: 'Современное оборудование KURTZ, EMAG, Zeiss. Непрерывное совершенствование технологических процессов.' },
  { icon: 'Handshake', title: 'Партнёрство', desc: 'Долгосрочные отношения с OEM-партнёрами (HAVAL, АвтоВАЗ, УАЗ) и научными организациями (НАМИ).' },
  { icon: 'Leaf', title: 'Экология', desc: 'Система экологического менеджмента по ГОСТ Р ИСО 14001-2016. Ответственное отношение к окружающей среде.' },
  { icon: 'Users', title: 'Коллектив', desc: '1 081 высококвалифицированный сотрудник, 40 подразделений. Люди — главная ценность завода.' },
  { icon: 'Globe', title: 'Экспорт', desc: 'Международная сертификация, поставки в ЕС, интеграция в международные цепочки автомобильных поставок.' },
];

export default function AboutPage({ onNavigate: _onNavigate }: { onNavigate: (page: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16 font-body">

      {/* Header */}
      <div className="bg-[#0d1d4a] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url(${FACTORY_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-[#0d1d4a]/80" />
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 font-body">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-[#ffb800]">О заводе</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">О заводе</h1>
          <div className="h-0.5 w-16 bg-[#ffb800]" />
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">О предприятии</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] mb-6 gold-line">
                ООО «ЛМЗ «СКАД»
              </h2>
              <p className="text-[#374151] leading-relaxed mb-4">
                ООО «Литейно-механический завод «СКАД» — российское предприятие, занимающееся производством литых алюминиевых дисков для легковых автомобилей с использованием современных технологий. Производственные мощности находятся на территории Красноярского металлургического завода и в г. Дивногорске.
              </p>
              <p className="text-[#374151] leading-relaxed mb-4">
                Организационная структура предприятия спроектирована для эффективного управления производственным процессом, маркетингом, продажами и другими ключевыми функциями. На предприятии 40 подразделений, численность работников — 1 081 человек.
              </p>
              <p className="text-[#374151] leading-relaxed mb-8">
                Основная продукция — алюминиевые колёсные диски в литом исполнении для легковых автомобилей. Ассортимент включает бренды SKAD, K&K, iFree, Wheels Up, Premium Series и другие — более 100 дизайнерских решений, диаметры от 13 до 20 дюймов, около 3 000 типоразмеров.
              </p>

              <div className="bg-[#0d1d4a] p-6 border-l-4 border-[#ffb800]">
                <p className="text-white italic font-body text-base leading-relaxed mb-3">
                  «На сегодняшний день SKAD занимает одну из ведущих позиций на российском рынке. Компания производит широкий ассортимент дисков и реализует проекты по локализации производства для нескольких международных автопроизводителей.»
                </p>
                <div className="text-[#ffb800] text-sm font-heading">— ООО «ЛМЗ «СКАД»</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img src={FACTORY_IMG} alt="Завод СКАД" className="w-full h-64 object-cover shadow-xl" />
                <div className="absolute -bottom-3 -right-3 bg-[#ffb800] px-4 py-3">
                  <div className="font-heading text-[#0d1d4a] text-sm font-bold">с 1992 года</div>
                  <div className="text-[#0d1d4a]/70 text-xs">производство дисков</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '3 млн', label: 'дисков в 2024' },
                  { val: '1 081', label: 'сотрудников' },
                  { val: '40', label: 'подразделений' },
                ].map((s) => (
                  <div key={s.label} className="bg-[#f0f2f5] p-4 text-center">
                    <div className="font-heading text-xl text-[#0d1d4a] font-bold">{s.val}</div>
                    <div className="text-[#6b7280] text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#f0f2f5] p-5">
                <div className="font-heading text-[#0d1d4a] text-sm mb-3">Сертификации предприятия</div>
                <div className="space-y-2">
                  {[
                    'ГОСТ Р ИСО 9001-2015 (EURO CERT, № 00.12.3218)',
                    'ГОСТ Р 58139-2024 (ЮРС-РУСЬ, № 0104/СМ/РУС)',
                    'ГОСТ Р ИСО 14001-2016 (EURO CERT, № 00.02.2006)',
                    'Производство по ГОСТ 35243-2025',
                  ].map((cert) => (
                    <div key={cert} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={14} className="text-[#ffb800] mt-0.5 shrink-0" />
                      <span className="text-[#374151] text-xs leading-relaxed">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">История</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Путь завода</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[120px] md:left-1/2 top-0 bottom-0 w-px bg-[#d1d5db] hidden sm:block" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="bg-white p-5 shadow-sm inline-block w-full sm:max-w-sm">
                      <div className="font-heading text-[#ffb800] text-base font-bold mb-1">{item.year}</div>
                      <div className="font-heading text-[#0d1d4a] text-sm mb-2">{item.title}</div>
                      <div className="text-[#6b7280] text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex w-3 h-3 bg-[#ffb800] border-4 border-white shadow-md rounded-full shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Ценности завода</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 p-6 bg-[#f0f2f5] hover:bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-[#0d1d4a] flex items-center justify-center shrink-0">
                  <Icon name={v.icon} size={18} className="text-[#ffb800]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-[#0d1d4a] mb-2">{v.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory photo */}
      <section className="py-16 bg-[#0d1d4a] relative overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Производство</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
                Два производственных центра
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Предприятие работает на двух площадках: в Красноярске (в кооперации с КрАЗ) и в Дивногорске. Именно такое расположение обеспечивает гибкость в управлении производством и логистике.
              </p>
              <div className="space-y-3">
                {[
                  { icon: 'MapPin', text: 'Красноярская площадка — на базе КрАМЗ, с 1991 года' },
                  { icon: 'MapPin', text: 'Дивногорская площадка — с 2002 года, SKAD с 2004 года' },
                  { icon: 'Package', text: '3 000 000 дисков произведено в 2024 году' },
                  { icon: 'Layers', text: '~3 000 типоразмеров, диаметры 13–20 дюймов' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} size={16} className="text-[#ffb800] mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={PROD_IMG} alt="Производство СКАД" className="w-full h-64 object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
