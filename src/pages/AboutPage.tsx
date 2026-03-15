import { useEffect } from 'react';
import Icon from '@/components/ui/icon';

const FACTORY_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/5cacd003-06c6-4f0e-b3f1-8cbc2506e640.jpg';

const timeline = [
  { year: '1996', title: 'Основание завода', desc: 'Создание ООО «ЛМЗ «СКАД» в г. Дивногорске. Первые литые диски сошли с конвейера.' },
  { year: '2001', title: 'Расширение производства', desc: 'Запуск второй производственной линии. Мощность выросла до 500 000 дисков в год.' },
  { year: '2005', title: 'Первый сертификат ISO', desc: 'Получение сертификата ISO 9001. Начало экспортных поставок в страны СНГ.' },
  { year: '2010', title: 'Международные рынки', desc: 'Выход на европейский рынок. Партнёрство с Škoda Auto и Renault.' },
  { year: '2015', title: 'Модернизация', desc: 'Масштабная модернизация производства. Внедрение станков с ЧПУ последнего поколения.' },
  { year: '2020', title: 'Цифровизация', desc: 'Внедрение цифровых систем управления качеством. Собственный R&D центр.' },
  { year: '2024', title: 'Сегодня', desc: 'Более 3,5 млн дисков в год. 500+ моделей. Поставки в 40 стран мира.' },
];

const values = [
  { icon: 'ShieldCheck', title: 'Качество', desc: 'Каждый диск проходит многоступенчатый контроль. Нулевая терпимость к браку.' },
  { icon: 'Lightbulb', title: 'Инновации', desc: 'Собственный R&D центр разрабатывает новые сплавы и конструкции.' },
  { icon: 'Handshake', title: 'Партнёрство', desc: 'Долгосрочные отношения с клиентами, основанные на доверии и взаимной выгоде.' },
  { icon: 'Leaf', title: 'Экология', desc: 'Замкнутый цикл производства. Минимальное воздействие на окружающую среду.' },
  { icon: 'Users', title: 'Команда', desc: 'Более 1 200 высококвалифицированных специалистов — главная ценность завода.' },
  { icon: 'Globe', title: 'Экспорт', desc: 'Присутствие в 40 странах подтверждает международное признание качества.' },
];

const management = [
  { name: 'Иванов Алексей Петрович', role: 'Генеральный директор', exp: '25 лет в отрасли' },
  { name: 'Сидорова Марина Викторовна', role: 'Директор по качеству', exp: 'ISO Lead Auditor' },
  { name: 'Козлов Дмитрий Сергеевич', role: 'Технический директор', desc: 'Д.т.н., профессор' },
];

export default function AboutPage({ onNavigate: _onNavigate }: { onNavigate: (page: string) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-16 font-body">

      {/* Page header */}
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

      {/* Mission & Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#ffb800]" />
                <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">Наша миссия</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] mb-6 gold-line">
                Завод, которому доверяют
              </h2>
              <p className="text-steel-600 leading-relaxed mb-4">
                ООО «ЛМЗ «СКАД» — ведущий российский производитель литых алюминиевых дисков, основанный в 1996 году в городе Дивногорск Красноярского края. Мы специализируемся на производстве высококачественных литых дисков для легковых автомобилей, внедорожников и коммерческой техники.
              </p>
              <p className="text-steel-600 leading-relaxed mb-4">
                Наша миссия — обеспечивать водителей надёжными и стильными колёсными дисками, которые отвечают самым строгим международным стандартам качества. Мы верим, что каждый автомобиль заслуживает дисков, созданных с точностью и заботой.
              </p>
              <p className="text-steel-600 leading-relaxed mb-8">
                Сегодня СКАД — это более 3,5 миллиона дисков в год, свыше 500 моделей в каталоге и поставки в 40 стран мира. Продукция завода устанавливается на конвейерах АвтоВАЗа, Škoda, Renault, а также продаётся через разветвлённую дилерскую сеть.
              </p>

              <div className="bg-[#0d1d4a] p-6 border-l-4 border-[#ffb800]">
                <p className="text-white italic font-body text-lg leading-relaxed mb-3">
                  «Качество — это не случайность. Это результат постоянных усилий, высоких стандартов и преданности своему делу.»
                </p>
                <div className="text-[#ffb800] text-sm font-heading">— Генеральный директор ООО «ЛМЗ «СКАД»</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img src={FACTORY_IMG} alt="Завод СКАД" className="w-full h-64 object-cover shadow-xl" />
                <div className="absolute -bottom-3 -right-3 bg-[#ffb800] px-4 py-3">
                  <div className="font-heading text-[#0d1d4a] text-sm font-bold">60 000 м²</div>
                  <div className="text-[#0d1d4a]/70 text-xs">производственных площадей</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: '28+', label: 'лет опыта' },
                  { val: '1200+', label: 'сотрудников' },
                  { val: '40', label: 'стран сбыта' },
                ].map((s) => (
                  <div key={s.label} className="bg-steel-100 p-4 text-center">
                    <div className="font-heading text-2xl text-[#0d1d4a] font-bold">{s.val}</div>
                    <div className="text-steel-500 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-steel-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-[#ffb800]" />
              <span className="text-[#ffb800] text-xs tracking-[0.25em] uppercase">История</span>
              <div className="h-px w-12 bg-[#ffb800]" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Наш путь</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-steel-300 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 shadow-md inline-block w-full md:max-w-sm">
                      <div className="font-heading text-[#ffb800] text-lg font-bold mb-1">{item.year}</div>
                      <div className="font-heading text-[#0d1d4a] text-base mb-2">{item.title}</div>
                      <div className="text-steel-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-[#ffb800] border-4 border-white shadow-md rounded-full shrink-0 z-10" />
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
            <h2 className="font-heading text-3xl md:text-4xl text-[#0d1d4a] gold-line-center">Наши ценности</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 border border-steel-200 hover:border-[#ffb800] hover:shadow-md transition-all group">
                <Icon name={v.icon} size={28} className="text-[#ffb800] mb-4" />
                <h3 className="font-heading text-xl text-[#0d1d4a] mb-3 group-hover:text-[#ffb800] transition-colors">{v.title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 bg-[#0d1d4a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl text-white gold-line-center">Руководство</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {management.map((m) => (
              <div key={m.name} className="bg-white/5 border border-white/10 p-6 text-center hover:border-[#ffb800] transition-colors">
                <div className="w-20 h-20 bg-[#ffb800]/20 border-2 border-[#ffb800] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-[#ffb800]" />
                </div>
                <div className="font-heading text-white text-base mb-1">{m.name}</div>
                <div className="text-[#ffb800] text-sm mb-2">{m.role}</div>
                <div className="text-white/50 text-xs">{m.exp || m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}