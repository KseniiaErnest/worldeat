import styles from './CountriesList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import Country from './Country';


export default function CountriesList( {cities, isLoading} ) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.city).includes(city.country)) {
      return [...arr, {country: city.country, emoji: city.emoji}]
    }  else return arr;
  }, []);

  if (isLoading) return <Spinner />

  if (!cities.length) return <Message message='Add your first city by clicking on a city on the map'  />

  return (
    <ul>
      {countries.map((country) => (
        <Country country={country} key={country} />
      ))}
    </ul>
  )
}
