import { Link } from 'react-router-dom';
import styles from './City.module.css';

const formatDate = (date) => {
new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date(date));
}

export default function City({city}) {

  const {cityName, emoji, date, id, position} = city;
  return (
    <li>
    <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
      <span>{emoji}</span>
      <h3>{cityName}</h3>
      <time>{formatDate(date)}</time>
      <button>&times;</button>
      </Link>
    </li>
  )
}
