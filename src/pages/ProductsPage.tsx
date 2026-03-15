import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const WHEEL_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/4162c717-8a7d-418e-9314-fba147da6f46.jpg';
const CATALOG_IMG = 'https://cdn.poehali.dev/projects/74e4c8ec-015f-4a15-8a11-075f235a115c/files/6a1eea26-3d26-4cb1-a1aa-9f52cfd05a9d.jpg';

type Product = {
  id: number;
  name: string;
  brand: string;
  type: string;
  size: string;
  pcd: string;
  width: string;
  et: string;
  color: string;
  weight: string;
  compat: string[];
  tag?: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: 'СКАД Арена R16', brand: 'Универсал', type: 'Классик', size: 'R16', pcd: '5×114.3', width: '6.5J', et: 'ET45', color: 'Серебро', weight: '8.2 кг', compat: ['Lada Vesta', 'Kia Rio', 'Hyundai Solaris'], tag: 'Хит продаж', price: 'от 3 200 ₽' },
  { id: 2, name: 'СКАД Спарта R17', brand: 'Lada', type: 'Спорт', size: 'R17', pcd: '4×100', width: '7.0J', et: 'ET40', color: 'Антрацит', weight: '7.8 кг', compat: ['Lada Vesta', 'Lada XRAY'], tag: 'Спорт', price: 'от 4 100 ₽' },
  { id: 3, name: 'СКАД Аякс R18', brand: 'Toyota', type: 'Премиум', size: 'R18', pcd: '5×100', width: '7.5J', et: 'ET38', color: 'Серебро', weight: '9.1 кг', compat: ['Toyota Camry', 'Toyota Corolla'], price: 'от 5 800 ₽' },
  { id: 4, name: 'СКАД Нептун R16', brand: 'VAG', type: 'Классик', size: 'R16', pcd: '5×112', width: '6.5J', et: 'ET50', color: 'Серебро', weight: '8.0 кг', compat: ['VW Polo', 'Škoda Octavia', 'Audi A3'], price: 'от 3 600 ₽' },
  { id: 5, name: 'СКАД Леон R19', brand: 'BMW', type: 'Премиум', size: 'R19', pcd: '5×120', width: '8.5J', et: 'ET25', color: 'Черный мат', weight: '10.2 кг', compat: ['BMW 3 series', 'BMW 5 series'], tag: 'Премиум', price: 'от 8 500 ₽' },
  { id: 6, name: 'СКАД Грозный R17', brand: 'Hyundai/Kia', type: 'Внедорожник', size: 'R17', pcd: '5×114.3', width: '7.5J', et: 'ET41', color: 'Серебро', weight: '9.8 кг', compat: ['Hyundai Tucson', 'Kia Sportage'], price: 'от 4 900 ₽' },
  { id: 7, name: 'СКАД Тор R20', brand: 'Mercedes', type: 'Внедорожник', size: 'R20', pcd: '5×112', width: '9.0J', et: 'ET32', color: 'Антрацит', weight: '12.1 кг', compat: ['Mercedes GLE', 'Mercedes ML'], tag: 'SUV', price: 'от 11 200 ₽' },
  { id: 8, name: 'СКАД Форсаж R15', brand: 'Lada', type: 'Классик', size: 'R15', pcd: '4×98', width: '6.0J', et: 'ET35', color: 'Серебро', weight: '7.1 кг', compat: ['Lada Priora', 'Lada Kalina', 'Lada Granta'], price: 'от 2 500 ₽' },
];

const brands = ['Все марки', 'Универсал', 'Lada', 'Toyota', 'VAG', 'BMW', 'Hyundai/Kia', 'Mercedes'];
const types = ['Все типы', 'Классик', 'Спорт', 'Премиум', 'Внедорожник'];
const sizes = ['Все размеры', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20'];

export default function ProductsPage() {
  const [brandFilter, setBrandFilter] = useState('Все марки');
  const [typeFilter, setTypeFilter] = useState('Все типы');
  const [sizeFilter, setSizeFilter] = useState('Все размеры');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = products.filter((p) => {
    const matchBrand = brandFilter === 'Все марки' || p.brand === brandFilter;
    const matchType = typeFilter === 'Все типы' || p.type === typeFilter;
    const matchSize = sizeFilter === 'Все размеры' || p.size === sizeFilter;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.compat.join(' ').toLowerCase().includes(search.toLowerCase());
    return matchBrand && matchType && matchSize && matchSearch;
  });

  return (
    <div className="pt-16 font-body">

      {/* Header */}
      <div className="bg-[#0d1d4a] py-16 relative overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#ffb800] via-[#ffd966] to-[#ffb800] absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${CATALOG_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-[#0d1d4a]/85" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <span>Главная</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-[#ffb800]">Продукция</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl text-white mb-4">Каталог дисков</h1>
          <div className="h-0.5 w-16 bg-[#ffb800]" />
          <p className="text-white/60 mt-4 max-w-xl">
            Более 500 моделей литых алюминиевых дисков для любого автомобиля
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md sticky top-16 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 items-center">

            {/* Search */}
            <div className="flex-1 min-w-[200px] relative">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-steel-400" />
              <input
                type="text"
                placeholder="Поиск по марке авто или модели диска..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 border border-steel-200 text-sm font-body focus:outline-none focus:border-[#0d1d4a] bg-steel-50"
              />
            </div>

            {/* Brand filter */}
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="border border-steel-200 py-2.5 px-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] bg-white"
            >
              {brands.map((b) => <option key={b}>{b}</option>)}
            </select>

            {/* Type filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border border-steel-200 py-2.5 px-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] bg-white"
            >
              {types.map((t) => <option key={t}>{t}</option>)}
            </select>

            {/* Size filter */}
            <select
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="border border-steel-200 py-2.5 px-3 text-sm font-body focus:outline-none focus:border-[#0d1d4a] bg-white"
            >
              {sizes.map((s) => <option key={s}>{s}</option>)}
            </select>

            {/* Reset */}
            {(brandFilter !== 'Все марки' || typeFilter !== 'Все типы' || sizeFilter !== 'Все размеры' || search) && (
              <button
                onClick={() => { setBrandFilter('Все марки'); setTypeFilter('Все типы'); setSizeFilter('Все размеры'); setSearch(''); }}
                className="text-steel-400 hover:text-[#0d1d4a] text-sm flex items-center gap-1"
              >
                <Icon name="X" size={14} />
                Сбросить
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="bg-steel-100 py-3">
        <div className="container mx-auto px-4">
          <p className="text-steel-500 text-sm">Найдено: <span className="text-[#0d1d4a] font-semibold">{filtered.length}</span> моделей</p>
        </div>
      </div>

      {/* Products grid */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="SearchX" size={48} className="text-steel-300 mx-auto mb-4" />
              <p className="font-heading text-xl text-steel-400">Ничего не найдено</p>
              <p className="text-steel-400 text-sm mt-2">Попробуйте изменить параметры фильтра</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-steel-200 hover:border-[#ffb800]"
                  onClick={() => setSelected(p)}
                >
                  <div className="relative h-44 overflow-hidden bg-steel-100">
                    <img
                      src={WHEEL_IMG}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {p.tag && (
                      <div className="absolute top-3 left-3 bg-[#ffb800] text-[#0d1d4a] text-[10px] font-heading font-bold px-2 py-0.5">
                        {p.tag}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-[#0d1d4a] text-white text-[10px] font-heading px-2 py-0.5">
                      {p.size}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-base text-[#0d1d4a] mb-1 group-hover:text-[#ffb800] transition-colors">{p.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-steel-400 mb-3">
                      <span>{p.type}</span>
                      <span>·</span>
                      <span>{p.color}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-steel-500 mb-4">
                      <span>PCD: <b className="text-steel-700">{p.pcd}</b></span>
                      <span>Ширина: <b className="text-steel-700">{p.width}</b></span>
                      <span>ET: <b className="text-steel-700">{p.et}</b></span>
                      <span>Вес: <b className="text-steel-700">{p.weight}</b></span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-steel-100">
                      <span className="font-heading text-[#0d1d4a] text-sm font-semibold">{p.price}</span>
                      <a
                        href="https://scad.ru"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#ffb800] text-[#0d1d4a] text-xs font-heading font-bold px-3 py-1.5 hover:bg-[#ffd966] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Купить
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-steel-100">
              <img src={WHEEL_IMG} alt={selected.name} className="w-full h-full object-cover" />
              {selected.tag && (
                <div className="absolute top-4 left-4 bg-[#ffb800] text-[#0d1d4a] text-xs font-heading font-bold px-3 py-1">
                  {selected.tag}
                </div>
              )}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-white/90 p-2 hover:bg-white transition-colors"
              >
                <Icon name="X" size={18} className="text-[#0d1d4a]" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="font-heading text-2xl text-[#0d1d4a] mb-1">{selected.name}</h2>
              <div className="text-[#ffb800] text-sm mb-4">{selected.type} · {selected.color}</div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Размер', val: selected.size },
                  { label: 'PCD', val: selected.pcd },
                  { label: 'Ширина', val: selected.width },
                  { label: 'Вылет', val: selected.et },
                  { label: 'Цвет', val: selected.color },
                  { label: 'Вес', val: selected.weight },
                ].map((s) => (
                  <div key={s.label} className="bg-steel-100 p-3 text-center">
                    <div className="font-heading text-[#0d1d4a] text-sm font-semibold">{s.val}</div>
                    <div className="text-steel-400 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-heading text-sm text-steel-400 uppercase tracking-wide mb-3">Совместимость</h3>
                <div className="flex flex-wrap gap-2">
                  {selected.compat.map((c) => (
                    <span key={c} className="bg-[#0d1d4a] text-white text-xs px-3 py-1.5 font-body">{c}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-steel-200">
                <div>
                  <div className="font-heading text-2xl text-[#0d1d4a]">{selected.price}</div>
                  <div className="text-steel-400 text-xs">за штуку, без монтажа</div>
                </div>
                <div className="flex gap-3">
                  <button className="border border-[#0d1d4a] text-[#0d1d4a] px-4 py-3 font-heading text-sm hover:bg-steel-100 transition-colors">
                    Запросить КП
                  </button>
                  <a
                    href="https://scad.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ffb800] text-[#0d1d4a] px-6 py-3 font-heading font-bold text-sm hover:bg-[#ffd966] transition-colors"
                  >
                    Купить на scad.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
