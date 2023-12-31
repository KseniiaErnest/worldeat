import styles from './City.module.css';

const formatDate = (date) => {
new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(new Date(date));
}

export default function City({city}) {
  const {cityName, emoji, date} = city;
  return (
    <li>
      <span>{emoji}</span>
      <h3>{cityName}</h3>
      <time>{formatDate(date)}</time>
      <button>&times;</button>
    </li>
  )
}
