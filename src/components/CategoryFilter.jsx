export default function CategoryFilter({ currentCategory, onSelect }) {
  const categories = [
  { value: 'all', label: 'Все новости' },
  { value: 'economics', label: 'Экономика' },
  { value: 'health', label: 'Здравоохранение' },
  { value: 'tech', label: 'Технологии' },
  { value: 'ecology', label: 'Экология' },
  { value: 'sport', label: 'Спорт' },
  { value: 'culture', label: 'Культура' },
  { value: 'education', label: 'Образование' },
  { value: 'politics', label: 'Политика' },
  { value: 'science', label: 'Наука' },
  { value: 'auto', label: 'Автомобили' },
  { value: 'tourism', label: 'Туризм' },
  { value: 'art', label: 'Искусство' }
];

  return (
    <>
      <div className="section-title">КАТЕГОРИИ</div>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat.value}>
            <a href="#" data-category={cat.value}
               className={currentCategory === cat.value ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); onSelect(cat.value); }}>
              {cat.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}