import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const PROD_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/d8feb38b-09ff-4eee-a16e-d0df0d64c58c.jpg';
const CNC_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/ea07a892-bc01-47b1-ad0c-466e15ddcd27.jpg';
const QUALITY_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/54c5e594-92ff-43e7-9392-ec6f9df89ea3.jpg';

const stages = [
  {
    num: '01',
    title: 'Загрузка и подготовка сплава',
    icon: 'Flame',
    desc: 'Загрузка сплава ALSi в мелкой или Т-образной чушке в печь ИАТ-2,5. Обработка сплава флюсом №1, замешивание. Доведение температуры до нормативной.',
    details: [
      'Поставщик: АО ОК РУСАЛ ТД, АО «РУСАЛ Красноярск»',
      'Материал: сплав АК7 по ГОСТ 1583-93',
      'Печь: ИАТ-2,5',
      'Контроль газосодержания в сплаве',
    ],
  },
  {
    num: '02',
    title: 'Входной контроль алюминия',
    icon: 'FlaskConical',
    desc: 'Контроль химического состава сплава в печи ИАТ-2,5. Контроль химического состава сплава литейной машины GIMA. Контроль газосодержания.',
    details: [
      'Спектральный анализ в собственной лаборатории',
      'Проверка соответствия ГОСТ 1583-93',
      'Контроль газосодержания',
      'Проверка сертификатов поставщика',
    ],
  },
  {
    num: '03',
    title: 'Литьё на машине GIMA',
    icon: 'Layers',
    desc: 'Получение слитого сплава с печи ИАТ. Заливка в литейную машину GIMA под давлением. Контроль параметров процесса на каждом такте.',
    details: [
      'Оборудование: литейная машина GIMA',
      'Метод: литьё под давлением',
      'Контроль параметров процесса',
      'Контроль геометрии отливки',
    ],
  },
  {
    num: '04',
    title: 'Контроль отливки',
    icon: 'ScanLine',
    desc: 'Взвешивание отливки — 8,1 ± 0,2 кг. Контроль внутренней структуры по ASTM E155-05. Рентгенографический контроль. Геометрический контроль отливки.',
    details: [
      'Взвешивание: 8,1 ± 0,2 кг',
      'Рентгенография по ASTM E155-05, T08-20',
      'Контроль дефектов: поры, раковины, трещины',
      'Геометрический контроль отливки',
    ],
  },
  {
    num: '05',
    title: 'Механическая обработка',
    icon: 'Settings',
    desc: 'Высокоточная механическая обработка на станках с ЧПУ EMAG. Измерение геометрических размеров колеса на КИМ Zeiss. Контроль нарезки резьбы. Измерение дисбаланса.',
    details: [
      'Оборудование: станки EMAG (ЧПУ)',
      'КИМ-контроль: Zeiss',
      'DIA: 110,1 ± 0,05 мм · ET: 60 ± 0,5 мм',
      'Неплоскостность ≤ 0,1 мм · PCD смещение ≤ 0,16 мм',
    ],
  },
  {
    num: '06',
    title: 'Покраска и нанесение ЛКП',
    icon: 'Paintbrush',
    desc: 'Нанесение лакокрасочного покрытия LANKWITZER LACKFABRIK. Контроль адгезии. Контроль толщины ЛКП. Проверка внешнего вида по КБ 17-01.',
    details: [
      'ЛКП: LANKWITZER LACKFABRIK, ООО «Техноальянс»',
      'Контроль адгезии',
      'Измерение толщины покрытия',
      'Внешний вид: КБ 17-01',
    ],
  },
  {
    num: '07',
    title: 'Испытание на герметичность',
    icon: 'Gauge',
    desc: 'Проверка герметичности каждого готового колеса. Допустимый уровень утечки — не более 3,2 × 10⁻⁵ м³/с. Стендовые испытания по ГОСТ 35243-2025.',
    details: [
      'Проверка 100% изделий',
      'Уровень утечки ≤ 3,2 × 10⁻⁵ м³/с',
      'Стендовые испытания по ГОСТ 35243-2025',
    ],
  },
  {
    num: '08',
    title: 'Ошиновка, балансировка и отгрузка',
    icon: 'PackageCheck',
    desc: 'Ошиновка и балансировка силами ООО «ВОЯДЖЕР+». Финальный визуальный осмотр. Упаковка и отгрузка OEM-партнёрам и в дистрибьюторскую сеть.',
    details: [
      'Партнёр по балансировке: ООО «ВОЯДЖЕР+»',
      'Финальный контроль качества',
      'Отгрузка: HAVAL, АвтоВАЗ, УАЗ, дистрибьюторы',
    ],
  },
];

const equipment = [
  { name: 'Литейная машина GIMA', type: 'Литьё', desc: 'Высококачественное литьё под давлением. Контроль параметров процесса на каждом такте.' },
  { name: 'Печь ИАТ-2,5', type: 'Плавка', desc: 'Индукционная плавильная печь для подготовки и обработки алюминиевого сплава АК7.' },
  { name: 'Станки EMAG (ЧПУ)', type: 'Механообработка', desc: 'Высокоточная механическая обработка дисков после литья. Комплексная обработка за минимальное число установок.' },
  { name: 'КИМ Zeiss', type: 'Метрология', desc: 'Координатно-измерительные машины Zeiss для трёхмерного контроля геометрических параметров колёс.' },
  { name: 'Оборудование KURTZ', type: 'Литьё', desc: 'Вспомогательное литейное оборудование для обеспечения стабильного качества отливок.' },
  { name: 'Рентгеновская установка', type: 'Контроль', desc: 'Цифровой рентгенографический контроль 100% отливок по ASTM E155-05 и T08-20.' },
];

const suppliers = [
  { cat: 'Алюминий и сплавы', names: ['АО ОК РУСАЛ ТД', 'АО «РУСАЛ Красноярск»'] },
  { cat: 'Лакокрасочные материалы', names: ['LANKWITZER LACKFABRIK', 'ООО «Техноальянс»'] },
  { cat: 'Комплектующие', names: ['ООО «Фрей» / ООО «Юнитрейд плюс»', 'Wenzhou Sankou', 'Goldminate Associates'] },
  { cat: 'Ошиновка и балансировка', names: ['ООО «ВОЯДЖЕР+»'] },
  { cat: 'Вспомогательные материалы', names: ['ООО «Везувиус»', 'ООО «Энергопром-24»', 'Techceramic-m JSC'] },
  { cat: 'Инструменты и оборудование', names: ['ВсеИнструменты', 'Дельта-проект', 'Компании Енисей-М'] },
];

export default function ProductionPage({ onNavigate: _onNavigate }: { onNavigate: (page: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16 font-body">

      {/* Header */}
      <div className="bg-[#0d1d4a] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${PROD_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-[#0d1d4a]/80" />
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-[#ffb800]">Производство</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Производство</h1>
          <div className="h-0.5 w-16 bg-[#ffb800] mb-6" />
          <p className="text-white/70 max-w-lg leading-relaxed">
            Полный производственный цикл — от жидкого алюминия до готового литого диска. Две площадки: Красноярск и Дивногорск.
          </p>
        </div>
      </div>

      {/* Production stages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Технологический процесс</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Этапы производства
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stages.map((stage) => (
              <div key={stage.num} className="border border-[#e5e7eb] bg-white p-6 hover:border-[#ffb800] hover:shadow-md transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0d1d4a] group-hover:bg-[#ffb800] flex items-center justify-center shrink-0 transition-colors">
                    <Icon name={stage.icon} size={20} className="text-[#ffb800] group-hover:text-[#0d1d4a] transition-colors" />
                  </div>
                  <div>
                    <div className="text-[#ffb800] text-xs font-heading tracking-widest mb-1">ШАГ {stage.num}</div>
                    <h3 className="font-heading text-lg text-[#0d1d4a]">{stage.title}</h3>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{stage.desc}</p>
                <div className="space-y-1">
                  {stage.details.map((d) => (
                    <div key={d} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-[#ffb800] rounded-full mt-2 shrink-0" />
                      <span className="text-[#374151] text-xs">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Производственные площади</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden col-span-2 h-64">
              <img src={PROD_IMG} alt="Производство" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d4a]/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-[#ffb800] text-xs tracking-widest uppercase mb-1">Дивногорск</div>
                  <div className="text-white font-heading text-lg">Литейный цех</div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden h-64">
              <img src={CNC_IMG} alt="Механообработка" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d4a]/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-[#ffb800] text-xs tracking-widest uppercase mb-1">Обработка</div>
                  <div className="text-white font-heading text-lg">Станки ЧПУ EMAG</div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden h-48">
              <img src={QUALITY_IMG} alt="Контроль" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d4a]/70 to-transparent flex items-end p-4">
                <div>
                  <div className="text-[#ffb800] text-xs tracking-widest uppercase mb-1">Лаборатория</div>
                  <div className="text-white font-heading text-base">Контроль качества</div>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-[#0d1d4a] p-6 h-48 flex flex-col justify-between">
              <div className="font-heading text-white text-xl">Производственная мощность</div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '3 млн+', label: 'дисков в 2024' },
                  { val: '3 000', label: 'типоразмеров' },
                  { val: '2', label: 'площадки' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-heading text-2xl text-[#ffb800]">{s.val}</div>
                    <div className="text-white/50 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Основное оборудование</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {equipment.map((eq) => (
              <div key={eq.name} className="bg-[#f0f2f5] p-5 hover:bg-white hover:shadow-md transition-all">
                <div className="inline-block bg-[#0d1d4a] text-[#ffb800] text-[10px] px-2 py-0.5 font-heading tracking-widest mb-3">
                  {eq.type}
                </div>
                <h3 className="font-heading text-base text-[#0d1d4a] mb-2">{eq.name}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="py-16 bg-[#0d1d4a] relative">
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-white gold-line-center">Ключевые поставщики</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suppliers.map((s) => (
              <div key={s.cat} className="bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors">
                <div className="font-heading text-[#ffb800] text-sm mb-3">{s.cat}</div>
                {s.names.map((n) => (
                  <div key={n} className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 bg-[#ffb800] rounded-full shrink-0" />
                    <span className="text-white/70 text-xs">{n}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
