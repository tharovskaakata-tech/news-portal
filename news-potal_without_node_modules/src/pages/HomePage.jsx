import { useState } from 'react';
import { newsData, trendingArticles } from '../data/newsData';
import CategoryFilter from '../components/CategoryFilter';
import HeroNews from '../components/HeroNews';
import NewsCard from '../components/NewsCard';
import TrendingList from '../components/TrendingList';

export default function HomePage() {
  const [category, setCategory] = useState('all');
  const filteredNews = category === 'all' ? newsData : newsData.filter(n => n.category === category);
  const heroNews = newsData[0];

  return (
    <div className="main-wrapper">
      <aside className="sidebar-left">
        <CategoryFilter currentCategory={category} onSelect={setCategory} />
      </aside>
      <main className="center-content">
        <HeroNews article={heroNews} />
        <section className="news-feed">
          <div className="section-title">ЛЕНТА НОВОСТЕЙ</div>
          <div className="news-grid">
            {filteredNews.map(news => <NewsCard key={news.id} news={news} />)}
          </div>
        </section>
      </main>
      <aside className="sidebar-right">
        <TrendingList items={trendingArticles} />
      </aside>
    </div>
  );
}