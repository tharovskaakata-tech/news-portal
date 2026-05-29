import { useNavigate } from 'react-router-dom';

export default function NewsCard({ news }) {
  const navigate = useNavigate();
  const handleDiscuss = (e, id) => {
    e.stopPropagation();
    alert(`Обсуждение новости #${id}`);
  };
  return (
    <article className="news-card" onClick={() => navigate(`/article/${news.id}`)}>
      <div className="news-card-image">
        <img src={news.image} alt={news.title} />
      </div>
      <h3 className="news-card-title">{news.title}</h3>
      <div className="news-card-date">{news.date}</div>
      <a href="#" className="news-card-link" onClick={(e) => e.preventDefault()}>СМОТРЕТЬ НА НОВОСТИ</a>
      <button className="discuss-btn" onClick={(e) => handleDiscuss(e, news.id)}>ОБСУДИТЬ</button>
    </article>
  );
}