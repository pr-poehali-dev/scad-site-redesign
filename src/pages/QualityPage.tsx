import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const QUALITY_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/54c5e594-92ff-43e7-9392-ec6f9df89ea3.jpg';

const certs = [
  {
    code: 'ГОСТ Р ИСО 9001-2015',
    name: 'Система менеджмента качества',
    body: 'EURO CERT',
    num: '№ 00.12.3218',
    valid: 'Действует',
    desc: 'Международный стандарт СМК. Сертификация подтверждает соответствие системы управления качеством всем требованиям стандарта.',
  },
  {
    code: 'ГОСТ Р 58139-2024',
    name: 'СМК. Требования для автомобильной промышленности',
    body: 'Объединённый регистр ЮРС-РУСЬ',
    num: '№ 0104/СМ/РУС',
    valid: 'Действует',
    desc: 'Отраслевой стандарт для поставщиков автомобильной промышленности. Аналог IATF 16949 в российской нормативной базе.',
  },
  {
    code: 'ГОСТ Р ИСО 14001-2016',
    name: 'Система экологического менеджмента',
    body: 'EURO CERT',
    num: '№ 00.02.2006',
    valid: 'Действует',
    desc: 'Подтверждает соответствие системы экологического менеджмента требованиям стандарта. Комплексный подход к управлению воздействием на окружающую среду.',
  },
  {
    code: 'ГОСТ 35243-2025',
    name: 'Колёса для автотранспортных средств',
    body: 'Национальный стандарт РФ',
    num: 'Производственный стандарт',
    valid: 'Действует',
    desc: 'Национальный стандарт, по которому производятся литые диски предприятия. Устанавливает требования к стендовым испытаниям колёс.',
  },
];

const qcStages = [
  {
    stage: '1',
    title: 'Входной контроль первичного алюминия',
    desc: 'Контроль химического состава сплава в печи ИАТ-2,5. Проверка химического состава сплава литейной машины GIMA. Проведение контроля газосодержания в сплаве.',
    checks: ['Спектральный анализ сплава АК7 по ГОСТ 1583-93', 'Контроль газосодержания', 'Проверка документов поставщика АО ОК РУСАЛ'],
  },
  {
    stage: '2',
    title: 'Контроль отливки',
    desc: 'Взвешивание отливки. Контроль внутренней структуры — выявление пор, раковин и трещин методом рентгенографии по ASTM E155-05 и T08-20. Контроль геометрических размеров отливки.',
    checks: ['Взвешивание: 8,1 ± 0,2 кг', 'Рентгенографический контроль структуры (ASTM E155-05)', 'Геометрический контроль отливки'],
  },
  {
    stage: '3',
    title: 'Механическая обработка',
    desc: 'Измерение геометрических размеров колеса на КИМ. Контроль правильности нарезки резьбы. Измерение дисбаланса. Контроль параметров процесса.',
    checks: ['КИМ: DIA 110,1±0,05 мм, ET 60±0,5 мм', 'Смещение PCD (Ø 98) ≤ 0,16 мм', 'Неплоскостность ступицы ≤ 0,1 мм'],
  },
  {
    stage: '4',
    title: 'Контроль покраски',
    desc: 'Контроль адгезии лакокрасочного покрытия LANKWITZER. Контроль толщины ЛКП толщиномером. Проверка внешнего вида лицевой поверхности по КБ 17-01.',
    checks: ['Контроль адгезии покрытия', 'Толщина ЛКП согласно техкарте', 'Внешний вид по КБ 17-01'],
  },
  {
    stage: '5',
    title: 'Проверка на герметичность',
    desc: 'Проверка каждого диска на герметичность. Допустимый уровень утечки — не более 3,2 × 10⁻⁵ м³/с. Стендовые испытания по ГОСТ 35243-2025.',
    checks: ['Герметичность ≤ 3,2 × 10⁻⁵ м³/с', 'Стендовые испытания ГОСТ 35243-2025', 'Финальный визуальный контроль'],
  },
];

const nomQuality = [
  { param: 'Материал', val: 'Сплав АК7 ГОСТ 1583-93' },
  { param: 'Механические свойства', val: 'ГОСТ 1583-93' },
  { param: 'Внутренние дефекты', val: 'ASTM E155-05, T08-20' },
  { param: 'DIA', val: '110,1 ± 0,05 мм' },
  { param: 'ET', val: '60 ± 0,5 мм' },
  { param: 'Ширина обода', val: '216 ± 1,5 мм' },
  { param: 'Масса неокрашенного колеса', val: '8,1 ± 0,2 кг' },
  { param: 'Угол конусной части крепёжного отверстия', val: '60° −1°' },
  { param: 'Смещение PCD (Ø 98) от DIA', val: '0,16 мм max' },
  { param: 'Неплоскостность ступицы', val: '0,1 мм max' },
  { param: 'Герметичность (уровень утечки)', val: '3,2 × 10⁻⁵ м³/с max' },
  { param: 'Стендовые испытания', val: 'ГОСТ 35243-2025' },
];

const technologies = [
  { icon: 'Cpu', title: 'КИМ-контроль', desc: 'Координатно-измерительные машины для 3D-контроля всех геометрических параметров' },
  { icon: 'ScanLine', title: 'Рентгенография', desc: 'Цифровой рентгенографический контроль 100% отливок по ASTM E155-05 и T08-20' },
  { icon: 'FlaskConical', title: 'Спектральный анализ', desc: 'Собственная лаборатория для анализа химического состава сплавов и газосодержания' },
  { icon: 'Gauge', title: 'Испытания на герметичность', desc: 'Проверка каждого диска: уровень утечки ≤ 3,2 × 10⁻⁵ м³/с' },
];

export default function QualityPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16 font-body">

      {/* Header */}
      <div className="bg-[#0d1d4a] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffb800 0, #ffb800 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-[#ffb800]">Качество</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Качество и СМК</h1>
              <div className="h-0.5 w-16 bg-[#ffb800] mb-6" />
              <p className="text-white/70 leading-relaxed max-w-lg">
                В ООО «ЛМЗ «СКАД» с 2013 года функционирует документированная СМК, соответствующая требованиям ГОСТ Р ИСО 9001-2015 и ГОСТ Р 58139-2024. Последняя ресертификация — июнь 2025 года.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '2013', label: 'год внедрения СМК' },
                { val: '0%', label: 'допустимый брак' },
                { val: '5', label: 'этапов контроля' },
                { val: '3 года', label: 'цикл ресертификации' },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 p-4 text-center">
                  <div className="font-heading text-2xl text-[#ffb800] font-bold">{s.val}</div>
                  <div className="text-white/50 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SMK Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] mb-4 gold-line-center">
              Система менеджмента качества
            </h2>
            <p className="text-[#6b7280] mt-6 leading-relaxed">
              СМК ООО «ЛМЗ «СКАД» разработана и внедрена в 2013 году за полтора года без консультационных услуг. Система соответствует требованиям ГОСТ Р ИСО 9001-2015 и ГОСТ Р 58139-2024. Сертификация осуществляется в трёхгодичный период с прохождением всех необходимых этапов. Ежегодно проводятся инспекционные аудиты международной независимой организацией.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Планирование (Plan)', desc: 'Установка целей качества, анализ рисков, планирование ресурсов и процессов согласно требованиям стандартов', icon: 'Target' },
              { title: 'Реализация (Do)', desc: 'Выполнение запланированных процессов, управление производством, контроль на всех этапах', icon: 'Settings' },
              { title: 'Контроль (Check)', desc: 'Мониторинг и измерение процессов, проверка соответствия продукции установленным требованиям и стандартам', icon: 'ClipboardCheck' },
              { title: 'Улучшение (Act)', desc: 'Анализ результатов, корректирующие действия, постоянное совершенствование СМК', icon: 'TrendingUp' },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#ffb800] pl-6 py-4">
                <Icon name={item.icon} size={24} className="text-[#ffb800] mb-3" />
                <h3 className="font-heading text-xl text-[#0d1d4a] mb-2">{item.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f0f2f5] p-6 border-l-4 border-[#ffb800] max-w-3xl mx-auto">
            <div className="font-heading text-[#0d1d4a] text-sm mb-2">Органы сертификации</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#374151]">
              <div>
                <div className="font-medium text-[#0d1d4a]">EURO CERT</div>
                <div className="text-xs text-[#6b7280]">ГОСТ Р ИСО 9001-2015 · № 00.12.3218</div>
                <div className="text-xs text-[#6b7280]">ГОСТ Р ИСО 14001-2016 · № 00.02.2006</div>
              </div>
              <div>
                <div className="font-medium text-[#0d1d4a]">Объединённый регистр ЮРС-РУСЬ</div>
                <div className="text-xs text-[#6b7280]">ГОСТ Р 58139-2024 · № 0104/СМ/РУС</div>
                <div className="text-xs text-[#6b7280]">Последняя ресертификация — июнь 2025 года</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Сертификаты</h2>
            <p className="text-[#6b7280] mt-6 max-w-xl mx-auto text-sm">Актуальные сертификаты в формате PDF доступны для скачивания</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map((c) => (
              <div key={c.code} className="bg-white shadow-sm p-6 flex gap-5 hover:shadow-md transition-shadow">
                <div className="w-16 h-20 bg-[#0d1d4a] flex flex-col items-center justify-center shrink-0">
                  <Icon name="FileText" size={20} className="text-[#ffb800] mb-1" />
                  <span className="text-white text-[9px] text-center leading-tight">PDF</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="font-heading text-base text-[#0d1d4a]">{c.code}</div>
                      <div className="text-[#ffb800] text-xs">{c.name}</div>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 font-medium shrink-0 rounded-sm">
                      {c.valid}
                    </div>
                  </div>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-3">{c.desc}</p>
                  <div className="flex items-center justify-between text-xs text-[#9ca3af]">
                    <span>Орган: {c.body}</span>
                    <span>{c.num}</span>
                  </div>
                  <button className="mt-3 flex items-center gap-2 text-[#0d1d4a] text-sm font-medium hover:text-[#ffb800] transition-colors">
                    <Icon name="Download" size={14} />
                    Скачать сертификат
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QC Stages */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Контроль качества на производстве
            </h2>
            <p className="text-[#6b7280] mt-6 max-w-xl mx-auto text-sm">
              Пять этапов контроля обеспечивают полный цикл — от химического состава сырья до эксплуатационной устойчивости готового колеса
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {qcStages.map((s) => (
                <div key={s.stage} className="border border-[#e5e7eb] p-5 bg-white hover:border-[#ffb800] transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0d1d4a] group-hover:bg-[#ffb800] flex items-center justify-center shrink-0 transition-colors">
                      <span className="font-heading text-white group-hover:text-[#0d1d4a] font-bold text-sm transition-colors">{s.stage}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-base text-[#0d1d4a] mb-1">{s.title}</h3>
                      <p className="text-[#6b7280] text-xs leading-relaxed mb-2">{s.desc}</p>
                      <div className="flex flex-wrap gap-1">
                        {s.checks.map((ch) => (
                          <span key={ch} className="bg-[#f0f2f5] text-[#374151] text-[10px] px-2 py-0.5 rounded-sm">
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky top-24 space-y-4">
              <div className="relative">
                <img src={QUALITY_IMG} alt="Контроль качества" className="w-full h-64 object-cover shadow-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d4a]/70 to-transparent flex items-end p-4">
                  <div>
                    <div className="text-[#ffb800] text-xs tracking-widest uppercase mb-1">Лаборатория</div>
                    <div className="text-white font-heading text-lg">Входной контроль</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1d4a] p-5">
                <div className="font-heading text-white text-sm mb-3">Нормативная база контроля</div>
                <div className="space-y-2">
                  {[
                    { code: 'ГОСТ 1583-93', desc: 'Механические свойства сплавов' },
                    { code: 'ASTM E155-05', desc: 'Внутренние дефекты отливок' },
                    { code: 'T08-20', desc: 'Отраслевой технологический регламент' },
                    { code: 'ГОСТ 35243-2025', desc: 'Стендовые испытания колёс' },
                  ].map((n) => (
                    <div key={n.code} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#ffb800] rounded-full mt-1.5 shrink-0" />
                      <div>
                        <span className="text-[#ffb800] text-xs font-heading">{n.code}</span>
                        <span className="text-white/60 text-xs"> — {n.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Nomenclature */}
      <section className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Номенклатура показателей качества
            </h2>
            <p className="text-[#6b7280] mt-6 max-w-xl mx-auto text-sm">
              Технические требования и допуски на литые диски ООО «ЛМЗ «СКАД»
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 bg-[#0d1d4a] px-5 py-3">
              <div className="font-heading text-[#ffb800] text-sm">Показатель качества</div>
              <div className="font-heading text-[#ffb800] text-sm">Технические требования / Допуск</div>
            </div>
            {nomQuality.map((row, i) => (
              <div key={row.param} className={`grid grid-cols-2 px-5 py-3 border-b border-[#e5e7eb] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]'}`}>
                <div className="text-[#374151] text-sm">{row.param}</div>
                <div className="text-[#0d1d4a] text-sm font-medium">{row.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">
              Технологии и оборудование
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((t) => (
              <div key={t.title} className="text-center p-6 bg-[#f0f2f5] hover:bg-white hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#0d1d4a] flex items-center justify-center mx-auto mb-4">
                  <Icon name={t.icon} size={20} className="text-[#ffb800]" />
                </div>
                <h3 className="font-heading text-base text-[#0d1d4a] mb-2">{t.title}</h3>
                <p className="text-[#6b7280] text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents CTA */}
      <section className="py-12 bg-[#0d1d4a]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icon name="FileText" size={16} className="text-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-widest uppercase font-body">Нормативная база</span>
              </div>
              <p className="text-white font-heading text-lg">ГОСТы, стандарты и внутренние документы предприятия</p>
              <p className="text-white/50 text-sm mt-1">Политики, кодексы, паспорт колеса и вся нормативная документация</p>
            </div>
            <button
              onClick={() => onNavigate('documents')}
              className="shrink-0 bg-[#ffb800] text-[#0d1d4a] px-6 py-3 font-heading font-semibold text-sm hover:bg-[#ffd966] transition-colors flex items-center gap-2"
            >
              Перейти к документам
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}