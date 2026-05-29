import { useParams, useNavigate } from 'react-router-dom';
import { newsData } from '../data/newsData';

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = newsData.find(n => n.id === parseInt(id));
  if (!article) return <div>Статья не найдена</div>;

  const related = newsData.filter(n => n.id !== article.id).slice(0, 3);

  return (
    <div className="article-wrapper">
      <article className="article-main">
        <div className="article-hero">
          <img src={article.image} alt={article.title} className="article-hero-image" />
          <h1 className="article-hero-title">{article.title.toUpperCase()}</h1>
        </div>
        <div className="article-meta">
          <span><strong>Автор:</strong> {article.author}</span>
          <span>|</span>
          <span>{article.date}</span>
          <span>|</span>
          <span>{article.readTime}</span>
        </div>
        <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
      <aside className="article-sidebar">
        <div className="section-title">ЧИТАЙТЕ ТАКЖЕ</div>
        {related.map(rel => (
          <div key={rel.id} className="related-article" onClick={() => navigate(`/article/${rel.id}`)}>
            <div className="related-image"><img src={rel.image} alt={rel.title} /></div>
            <div className="related-info">
              <h4>{rel.title}</h4>
              <div className="related-date">{rel.date}</div>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}