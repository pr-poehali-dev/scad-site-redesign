import Icon from '@/components/ui/icon';

interface DocumentsPageProps {
  onNavigate: (page: string) => void;
}

const standards = [
  {
    code: 'ГОСТ Р 50597-2017',
    name: '«Дороги автомобильные и улицы. Требования к эксплуатационному состоянию, допустимому по условиям обеспечения безопасности дорожного движения. Методы контроля»',
    cat: 'Дороги',
  },
  {
    code: 'Стандарт IATF 16949',
    name: '«Фундаментальные требования к системе менеджмента качества для производства автомобильной промышленности и организации, производящих соответствующие сервисные части»',
    cat: 'Автомобильный',
  },
  {
    code: 'ГОСТ Р 58139-2024',
    name: '«Системы менеджмента качества. Требования к организациям автомобильной промышленности»',
    cat: 'Автомобильный',
  },
  {
    code: 'ГОСТ Р ИСО 9001-2015',
    name: '«Системы менеджмента качества. Требования»',
    cat: 'СМК',
  },
  {
    code: 'ГОСТ 31993-2013',
    name: 'Материалы лакокрасочные. Определение толщины покрытия',
    cat: 'ЛКП',
  },
  {
    code: 'ГОСТ 52165-2003',
    name: 'Материалы лакокрасочные. Лаки. Общие технические условия',
    cat: 'ЛКП',
  },
  {
    code: 'ГОСТ Р 53464-2009',
    name: 'Отливки из металлов и сплавов. Допуски размеров, массы и припуски на механическую обработку',
    cat: 'Литьё',
  },
  {
    code: 'ГОСТ Р ИСО 10360-2-2017',
    name: 'Характеристики изделий геометрические. Приёмочные и перепроверочные испытания координатно-измерительных машин. Координатно-измерительные машины, применяемые для измерения линейных размеров',
    cat: 'Метрология',
  },
];

const internalDocs = [
  { title: 'Политика в области качества', icon: 'ShieldCheck' },
  { title: 'Кодекс делового партнёра', icon: 'Handshake' },
  { title: 'Кодекс корпоративной этики', icon: 'Scale' },
  { title: 'Политика по противодействию недобросовестным действиям', icon: 'Ban' },
  { title: 'Паспорт колеса', icon: 'FileText' },
  {
    title: 'Политика в отношении обработки персональных данных и сведения о реализуемых требованиях к защите персональных данных',
    icon: 'Lock',
  },
];

const catColors: Record<string, string> = {
  'Дороги': 'bg-blue-50 text-blue-700',
  'Автомобильный': 'bg-amber-50 text-amber-700',
  'СМК': 'bg-green-50 text-green-700',
  'ЛКП': 'bg-purple-50 text-purple-700',
  'Литьё': 'bg-orange-50 text-orange-700',
  'Метрология': 'bg-teal-50 text-teal-700',
};

export default function DocumentsPage({ onNavigate }: DocumentsPageProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#0d1d4a] py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 border border-[#ffb800] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-[#ffb800] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-widest uppercase font-body">ООО «ЛМЗ «СКАД»</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 leading-tight">
              Документы
            </h1>
            <p className="text-white/60 text-base leading-relaxed">
              Нормативная база и внутренние документы предприятия в системе менеджмента качества
            </p>
          </div>
        </div>
      </section>

      {/* Standards section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#ffb800]" />
              <h2 className="font-heading text-2xl text-[#0d1d4a]">Раздел документов</h2>
            </div>
            <p className="text-[#6b7280] text-sm mb-8 max-w-3xl">
              Перечень нормативных документов, применяемых в системе менеджмента качества ООО «ЛМЗ «СКАД»
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {standards.map((doc, i) => (
                <div
                  key={doc.code}
                  className="border border-[#e5e7eb] hover:border-[#ffb800] transition-colors p-5 flex gap-4 group"
                >
                  <div className="shrink-0 w-8 h-8 bg-[#0d1d4a] flex items-center justify-center text-[#ffb800] font-heading text-xs">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-heading text-sm text-[#0d1d4a] group-hover:text-[#ffb800] transition-colors">
                        {doc.code}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 shrink-0 font-medium rounded-sm ${catColors[doc.cat] ?? 'bg-gray-100 text-gray-600'}`}>
                        {doc.cat}
                      </span>
                    </div>
                    <p className="text-[#6b7280] text-xs leading-relaxed">{doc.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal documents */}
      <section className="py-16 bg-[#f0f2f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#ffb800]" />
              <h2 className="font-heading text-2xl text-[#0d1d4a]">Внутренние документы предприятия</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {internalDocs.map((doc) => (
                <div
                  key={doc.title}
                  className="bg-white border border-[#e5e7eb] hover:border-[#ffb800] hover:shadow-md transition-all p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#0d1d4a] flex items-center justify-center shrink-0">
                    <Icon name={doc.icon} size={16} className="text-[#ffb800]" />
                  </div>
                  <span className="text-[#0d1d4a] text-sm leading-relaxed font-body">{doc.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#0d1d4a]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm mb-4">
            Для получения документации и сертификатов свяжитесь с нами
          </p>
          <button
            onClick={() => onNavigate('contacts')}
            className="bg-[#ffb800] text-[#0d1d4a] px-6 py-3 font-heading font-semibold text-sm hover:bg-[#ffd966] transition-colors"
          >
            Связаться с нами
          </button>
        </div>
      </section>
    </div>
  );
}
