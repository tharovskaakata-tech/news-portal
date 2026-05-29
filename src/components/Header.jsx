import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { searchDatabase } from '../data/newsData';

export default function Header() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState('RU');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase().trim();
    setQuery(q);
    if (q.length >= 2) {
      const filtered = searchDatabase.filter(item =>
        item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/13.png" alt="N NEWS Logo" className="logo-image" />
        </Link>
        <div className="header-tools">
          <div className="search-wrapper">
            <input type="text" id="search-input" placeholder="Поиск новостей..."
              value={query} onChange={handleSearch} autoComplete="off" />
            {showResults && (
              <div className="search-results active">
                {results.length ? results.map(res => (
                  <div key={res.id} className="search-item" onClick={() => window.location.href=`/article/${res.id}`}>
                    <div className="search-item-title">{res.title}</div>
                    <div className="search-item-category">{res.category}</div>
                  </div>
                )) : <div className="search-item">Ничего не найдено</div>}
              </div>
            )}
          </div>
          <div className="language-selector">
            <button className="lang-btn" onClick={() => setLang(lang === 'RU' ? 'EN' : 'RU')}>🌐 {lang}</button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}