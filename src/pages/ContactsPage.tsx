import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage({ onNavigate: _onNavigate }: { onNavigate: (page: string) => void }) {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', company: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="pt-16 font-body">

      {/* Header */}
      <div className="bg-[#0d1d4a] py-16 relative">
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-[#ffb800]">Контакты</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Контакты</h1>
          <div className="h-0.5 w-16 bg-[#ffb800]" />
        </div>
      </div>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl text-[#0d1d4a] mb-6 gold-line">
                  Связаться с нами
                </h2>
              </div>

              {[
                {
                  icon: 'MapPin',
                  title: 'Производство',
                  lines: ['Красноярский край, г. Дивногорск', 'Красноярская площадка: КрАМЗ'],
                },
                {
                  icon: 'Phone',
                  title: 'Телефон',
                  lines: ['+7 (391) 262-xx-xx', 'Отдел продаж: по запросу'],
                },
                {
                  icon: 'Mail',
                  title: 'Email',
                  lines: ['info@scad.ru', 'sales@scad.ru (отдел продаж)'],
                },
                {
                  icon: 'Globe',
                  title: 'Интернет-магазин',
                  lines: ['scad.ru'],
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#ffb800] flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={18} className="text-[#0d1d4a]" />
                  </div>
                  <div>
                    <div className="font-heading text-sm text-steel-400 uppercase tracking-wide mb-1">{item.title}</div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-[#0d1d4a] text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Working hours */}
              <div className="border border-steel-200 p-5 mt-4">
                <div className="font-heading text-[#0d1d4a] text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-[#ffb800]" />
                  График работы
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { day: 'Понедельник – Пятница', time: '08:00 – 17:00', work: true },
                      { day: 'Суббота', time: '09:00 – 14:00', work: true },
                      { day: 'Воскресенье', time: 'Выходной', work: false },
                    ].map((row) => (
                      <tr key={row.day} className="border-b border-steel-100 last:border-0">
                        <td className="py-2 text-steel-500">{row.day}</td>
                        <td className={`py-2 text-right font-medium ${row.work ? 'text-[#0d1d4a]' : 'text-steel-300'}`}>
                          {row.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Departments */}
              <div>
                <div className="font-heading text-[#0d1d4a] text-sm uppercase tracking-wide mb-3">Отделы</div>
                <div className="space-y-2">
                  {[
                    { dept: 'Отдел продаж', phone: '+7 (391) 234-56-80' },
                    { dept: 'Технический отдел', phone: '+7 (391) 234-56-81' },
                    { dept: 'Отдел качества', phone: '+7 (391) 234-56-82' },
                    { dept: 'Бухгалтерия', phone: '+7 (391) 234-56-83' },
                  ].map((d) => (
                    <div key={d.dept} className="flex justify-between text-sm py-1 border-b border-steel-100">
                      <span className="text-steel-500">{d.dept}</span>
                      <a href={`tel:${d.phone.replace(/\D/g,'')}`} className="text-[#0d1d4a] hover:text-[#ffb800] transition-colors font-medium">
                        {d.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form + Map */}
            <div className="lg:col-span-2 space-y-6">

              {/* Map placeholder */}
              <div className="bg-steel-200 h-56 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-steel-200 to-steel-300" />
                <div className="relative z-10 text-center">
                  <Icon name="MapPin" size={36} className="text-[#ffb800] mx-auto mb-2" />
                  <div className="font-heading text-[#0d1d4a] text-base">г. Дивногорск, Красноярский край</div>
                  <a
                    href="https://yandex.ru/maps/?text=Дивногорск+Красноярский+край"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 bg-[#ffb800] text-[#0d1d4a] text-sm px-4 py-2 font-heading font-semibold hover:bg-[#ffd966] transition-colors"
                  >
                    <Icon name="Map" size={14} />
                    Открыть в Яндекс.Картах
                  </a>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-white border border-steel-200 p-6 md:p-8">
                <h3 className="font-heading text-xl text-[#0d1d4a] mb-6">Форма обратной связи</h3>

                {sent && (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 mb-6 flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} />
                    <span className="text-sm font-medium">Сообщение отправлено! Мы свяжемся с вами в течение одного рабочего дня.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-steel-400 uppercase tracking-wide mb-1.5">Ваше имя *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-steel-200 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] transition-colors"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-steel-400 uppercase tracking-wide mb-1.5">Компания</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full border border-steel-200 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] transition-colors"
                        placeholder="ООО «Пример»"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-steel-400 uppercase tracking-wide mb-1.5">Телефон *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-steel-200 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-steel-400 uppercase tracking-wide mb-1.5">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-steel-200 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] transition-colors"
                        placeholder="mail@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-steel-400 uppercase tracking-wide mb-1.5">Сообщение</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-steel-200 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] transition-colors resize-none"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-steel-400 text-xs">* — обязательные поля</p>
                    <button
                      type="submit"
                      className="bg-[#ffb800] text-[#0d1d4a] px-8 py-3 font-heading font-bold tracking-wide hover:bg-[#ffd966] transition-colors flex items-center gap-2"
                    >
                      <Icon name="Send" size={16} />
                      Отправить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}