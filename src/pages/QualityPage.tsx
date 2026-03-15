import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const certs = [
  {
    code: 'ISO 9001:2015',
    name: 'Система менеджмента качества',
    body: 'TÜV Rheinland',
    valid: 'до 2026 г.',
    desc: 'Международный стандарт, устанавливающий требования к системе менеджмента качества организаций.',
  },
  {
    code: 'ГОСТ Р ИСО 9001',
    name: 'Российский стандарт качества',
    body: 'Росстандарт',
    valid: 'до 2026 г.',
    desc: 'Национальный аналог международного стандарта ISO 9001, обязательный для российского рынка.',
  },
  {
    code: 'ЕАС / ТР ТС',
    name: 'Технический регламент ЕАЭС',
    body: 'ЕАЭС',
    valid: 'Бессрочно',
    desc: 'Подтверждает соответствие продукции техническому регламенту таможенного союза.',
  },
  {
    code: 'IATF 16949',
    name: 'Стандарт автомобильной отрасли',
    body: 'Bureau Veritas',
    valid: 'до 2025 г.',
    desc: 'Специализированный стандарт качества для поставщиков автомобильной промышленности.',
  },
];

const qcStages = [
  {
    stage: '1',
    title: 'Входной контроль',
    desc: 'Каждая партия алюминиевых сплавов проходит химический анализ в собственной лаборатории. Проверяется состав, механические свойства, наличие примесей.',
    checks: ['Спектральный анализ сплава', 'Механические испытания', 'Проверка сертификатов поставщика'],
  },
  {
    stage: '2',
    title: 'Контроль литья',
    desc: 'Каждый отлитый диск проходит рентгенографический контроль для выявления внутренних дефектов литья — пор, раковин, трещин.',
    checks: ['Рентгенография 100% изделий', 'Контроль геометрии формы', 'Визуальный осмотр'],
  },
  {
    stage: '3',
    title: 'Механическая обработка',
    desc: 'После обработки на станках ЧПУ проводится измерение всех критических размеров с применением КИМ (координатно-измерительных машин).',
    checks: ['КИМ-контроль размеров', 'Контроль биения', 'Проверка резьбовых соединений'],
  },
  {
    stage: '4',
    title: 'Контроль покрытия',
    desc: 'Толщина и адгезия лакокрасочного покрытия контролируется толщиномером. Соляной туман — проверка коррозионной стойкости.',
    checks: ['Измерение толщины ЛКП', 'Испытание соляным туманом 720 ч', 'Испытание на скол'],
  },
  {
    stage: '5',
    title: 'Финальные испытания',
    desc: 'Каждый тип диска проходит динамические испытания: ударная нагрузка, усталостное кручение, динамический дисбаланс.',
    checks: ['Испытание ударной нагрузкой', 'Испытание усталостью (2 млн циклов)', 'Балансировочный контроль'],
  },
];

const technologies = [
  { icon: 'Cpu', title: 'Станки с ЧПУ', desc: 'Высокоточная обработка на обрабатывающих центрах EMAG и Mazak' },
  { icon: 'ScanLine', title: 'Рентгенография', desc: 'Цифровой рентгенографический контроль 100% отливок' },
  { icon: 'FlaskConical', title: 'Спектроанализ', desc: 'Собственная спектральная лаборатория для контроля сплавов' },
  { icon: 'Gauge', title: 'КИМ-контроль', desc: 'Координатно-измерительные машины для 3D контроля' },
];

export default function QualityPage({ onNavigate: _onNavigate }: { onNavigate: (page: string) => void }) {
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
                Система менеджмента качества ООО «ЛМЗ «СКАД» — это комплексный подход к обеспечению надёжности на каждом этапе производства.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: 'ISO 9001', label: 'Международный стандарт' },
                { val: '0%', label: 'Допустимый брак' },
                { val: '5', label: 'Этапов контроля' },
                { val: '720ч', label: 'Соляной туман' },
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
            <p className="text-steel-500 mt-6 leading-relaxed">
              СМК ООО «ЛМЗ «СКАД» построена на принципах цикла PDCA (Plan-Do-Check-Act) и охватывает все процессы предприятия — от закупки сырья до обслуживания клиентов. Ежегодные внутренние и внешние аудиты подтверждают эффективность системы.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Планирование', desc: 'Установка целей качества, анализ рисков, планирование ресурсов и процессов', icon: 'Target' },
              { title: 'Реализация', desc: 'Выполнение запланированных процессов, управление производством, контроль', icon: 'Settings' },
              { title: 'Улучшение', desc: 'Анализ результатов, корректирующие действия, постоянное совершенствование', icon: 'TrendingUp' },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#ffb800] pl-6 py-4">
                <Icon name={item.icon} size={24} className="text-[#ffb800] mb-3" />
                <h3 className="font-heading text-xl text-[#0d1d4a] mb-2">{item.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-steel-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Сертификаты</h2>
            <p className="text-steel-500 mt-6 max-w-xl mx-auto text-sm">Вы можете скачать актуальные сертификаты в формате PDF</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map((c) => (
              <div key={c.code} className="bg-white shadow-md p-6 flex gap-5 hover:shadow-lg transition-shadow">
                <div className="w-16 h-20 bg-[#0d1d4a] flex flex-col items-center justify-center shrink-0">
                  <Icon name="FileText" size={20} className="text-[#ffb800] mb-1" />
                  <span className="text-white text-[9px] text-center leading-tight">PDF</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="font-heading text-lg text-[#0d1d4a]">{c.code}</div>
                      <div className="text-[#ffb800] text-sm">{c.name}</div>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 font-medium shrink-0 rounded-sm">
                      Действует
                    </div>
                  </div>
                  <p className="text-steel-500 text-sm leading-relaxed mb-3">{c.desc}</p>
                  <div className="flex items-center justify-between text-xs text-steel-400">
                    <span>Орган: {c.body}</span>
                    <span>Действителен {c.valid}</span>
                  </div>
                  <button className="mt-3 flex items-center gap-2 text-[#0d1d4a] text-sm font-medium hover:text-[#ffb800] transition-colors">
                    <Icon name="Download" size={14} />
                    Скачать PDF
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
              Контроль качества на каждом этапе
            </h2>
          </div>

          <div className="space-y-6">
            {qcStages.map((stage, i) => (
              <div key={stage.stage} className="grid grid-cols-1 md:grid-cols-4 gap-0 bg-white shadow-sm overflow-hidden">
                <div className={`p-6 flex items-center justify-center ${i % 2 === 0 ? 'bg-[#0d1d4a]' : 'bg-[#152a6e]'}`}>
                  <div className="text-center">
                    <div className="font-heading text-5xl text-[#ffb800] font-bold leading-none">0{stage.stage}</div>
                    <div className="text-white/70 text-sm mt-2">{stage.title}</div>
                  </div>
                </div>
                <div className="md:col-span-3 p-6">
                  <p className="text-steel-600 text-sm leading-relaxed mb-4">{stage.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.checks.map((check) => (
                      <span key={check} className="flex items-center gap-1.5 bg-steel-100 text-steel-700 text-xs px-3 py-1.5">
                        <Icon name="Check" size={12} className="text-[#ffb800]" />
                        {check}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-[#0d1d4a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-white gold-line-center">Технологии и инновации</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map((t) => (
              <div key={t.title} className="bg-white/5 border border-white/10 p-6 hover:border-[#ffb800] transition-colors text-center">
                <Icon name={t.icon} size={32} className="text-[#ffb800] mx-auto mb-4" />
                <h3 className="font-heading text-white text-base mb-2">{t.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}