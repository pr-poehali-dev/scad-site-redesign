import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const FACTORY_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/5cacd003-06c6-4f0e-b3f1-8cbc2506e640.jpg';
const WHEEL_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/4162c717-8a7d-418e-9314-fba147da6f46.jpg';

const stages = [
  {
    num: '01',
    title: 'Подготовка сплава',
    desc: 'Алюминиевые сплавы тщательно отбираются и подвергаются входному контролю в спектральной лаборатории. Точный химический состав — залог прочности готового изделия.',
    details: ['Спектральный анализ', 'Дегазация расплава', 'Контроль температуры'],
    icon: 'Flame',
  },
  {
    num: '02',
    title: 'Литьё под давлением',
    desc: 'Расплавленный металл под давлением 80–120 МПа заливается в стальные кокильные формы. Современные машины литья под низким давлением обеспечивают однородную структуру.',
    details: ['Машины KURTZ', 'Давление до 120 МПа', 'Температурный контроль'],
    icon: 'Zap',
  },
  {
    num: '03',
    title: 'Термическая обработка',
    desc: 'Отливки проходят цикл T6 — закалку и искусственное старение. Это повышает прочность и твёрдость диска до требуемых характеристик.',
    details: ['Закалка T6', 'Температура 540°C', 'Искусственное старение'],
    icon: 'Thermometer',
  },
  {
    num: '04',
    title: 'Механическая обработка',
    desc: 'Токарные центры с ЧПУ обрабатывают диск до финальных геометрических параметров. Точность обработки — до 0,01 мм.',
    details: ['Станки EMAG / Mazak', 'Точность ±0.01 мм', 'КИМ-контроль'],
    icon: 'Settings',
  },
  {
    num: '05',
    title: 'Поверхностная обработка',
    desc: 'Химическая подготовка поверхности: обезжиривание, фосфатирование. Нанесение порошкового или жидкого ЛКП в электростатическом поле.',
    details: ['Порошковая покраска', 'Электрофорезное покрытие', 'Полировка лицевой части'],
    icon: 'Paintbrush',
  },
  {
    num: '06',
    title: 'Контроль и упаковка',
    desc: 'Финальная проверка геометрии, покрытия, балансировки. Каждый диск маркируется, проходит балансировочный стенд и упаковывается для отгрузки.',
    details: ['Балансировочный стенд', 'Ультразвуковой контроль', 'Индивидуальная упаковка'],
    icon: 'PackageCheck',
  },
];

const equipment = [
  { name: 'Машины литья под давлением', brand: 'KURTZ (Германия)', qty: '12 ед.', desc: 'Литьё дисков диаметром R13–R22' },
  { name: 'Токарные обрабатывающие центры', brand: 'EMAG (Германия)', qty: '24 ед.', desc: 'Высокоточная механическая обработка' },
  { name: 'Координатно-измерительные машины', brand: 'Zeiss (Германия)', qty: '4 ед.', desc: 'Трёхмерный контроль геометрии' },
  { name: 'Рентгенографические установки', brand: 'GE Inspection', qty: '3 ед.', desc: 'Контроль внутренней структуры' },
  { name: 'Покрасочные линии', brand: 'Eisenmann (Германия)', qty: '2 лин.', desc: 'Нанесение ЛКП и полировка' },
  { name: 'Спектральные анализаторы', brand: 'Bruker (США)', qty: '3 ед.', desc: 'Контроль состава сплавов' },
];

export default function ProductionPage({ onNavigate: _onNavigate }: { onNavigate: (page: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16 font-body">

      {/* Header */}
      <div className="bg-[#0d1d4a] py-16 relative overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${FACTORY_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-[#0d1d4a]/80" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-[#ffb800]">Производство</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Производство</h1>
          <div className="h-0.5 w-16 bg-[#ffb800]" />
          <p className="text-white/60 mt-4 max-w-xl">
            Современное оборудование, строжайший контроль качества и опытный коллектив — три кита производства СКАД
          </p>
        </div>
      </div>

      {/* Video tour placeholder */}
      <section className="py-12 bg-steel-900">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <img src={FACTORY_IMG} alt="Видео-тур" className="w-full h-72 md:h-96 object-cover opacity-60" />
            <div className="absolute inset-0 bg-[#0d1d4a]/60 flex flex-col items-center justify-center">
              <div className="w-20 h-20 border-4 border-[#ffb800] rounded-full flex items-center justify-center mb-4 hover:bg-[#ffb800]/20 transition-colors cursor-pointer">
                <Icon name="Play" size={32} className="text-[#ffb800] ml-1" />
              </div>
              <div className="font-heading text-white text-xl">Видео-тур по заводу</div>
              <div className="text-white/50 text-sm mt-2">Смотрите как создаются наши диски</div>
            </div>
          </div>
        </div>
      </section>

      {/* Production stages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Технология</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Этапы производства
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, i) => (
              <div key={stage.num} className="relative bg-white border border-steel-200 hover:border-[#ffb800] hover:shadow-lg transition-all p-6 group">
                <div className="absolute -top-3 -right-3 bg-[#0d1d4a] w-12 h-8 flex items-center justify-center">
                  <span className="font-heading text-[#ffb800] text-xs font-bold">{stage.num}</span>
                </div>
                <Icon name={stage.icon} size={28} className="text-[#ffb800] mb-4" />
                <h3 className="font-heading text-xl text-[#0d1d4a] mb-3 group-hover:text-[#ffb800] transition-colors">{stage.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed mb-4">{stage.desc}</p>
                <div className="space-y-1.5">
                  {stage.details.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-steel-600">
                      <div className="w-1.5 h-1.5 bg-[#ffb800] rounded-full shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory photos */}
      <section className="py-12 bg-steel-100">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl text-[#0d1d4a] mb-8 gold-line">Фотогалерея завода</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="overflow-hidden aspect-square bg-steel-200">
                <img
                  src={i % 2 === 0 ? FACTORY_IMG : WHEEL_IMG}
                  alt={`Завод СКАД - фото ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Оборудование
            </h2>
            <p className="text-steel-500 mt-6 max-w-xl mx-auto text-sm">
              Только передовые технологии от ведущих мировых производителей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((eq) => (
              <div key={eq.name} className="border border-steel-200 p-5 hover:border-[#ffb800] transition-colors">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-heading text-[#0d1d4a] text-base leading-tight">{eq.name}</h3>
                  <span className="bg-[#0d1d4a] text-[#ffb800] text-xs px-2 py-1 font-heading font-bold shrink-0">{eq.qty}</span>
                </div>
                <div className="text-[#ffb800] text-xs mb-2 font-medium">{eq.brand}</div>
                <p className="text-steel-500 text-sm">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}