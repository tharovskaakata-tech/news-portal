import { useNavigate } from 'react-router-dom';
import { newsData } from '../data/newsData';

export default function TrendingList({ items }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/article/${id}`);
  };
  return (
    <>
      <div className="section-title">В ТРЕНДЕ</div>
      <ol className="trending-list">
        {items.map((item, idx) => (
          <li key={idx} onClick={() => handleClick(item.id)}>
            <div className="trending-title">{item.title}</div>
          </li>
        ))}
      </ol>
    </>
  );
}