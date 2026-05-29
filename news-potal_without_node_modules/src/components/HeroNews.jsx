export default function HeroNews({ article }) {
  if (!article) return null;
  return (
    <section className="hero-news">
      <img src={article.image} alt="Главная новость" className="hero-image" />
      <div className="hero-overlay">
        <div className="hero-label">САМАЯ НОВАЯ НОВОСТЬ:</div>
        <h1 className="hero-title">{article.title}</h1>
        <p className="hero-excerpt">{article.excerpt || article.content.substring(0, 120)}</p>
      </div>
    </section>
  );
}