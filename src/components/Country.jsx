import styles from './Country.module.css';

export default function Country( {country} ) {
  return (
    <li>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  )
}
