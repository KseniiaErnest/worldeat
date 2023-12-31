import styles from './CitiesList.module.css';
import City from './City';
import Message from './Message';
import Spinner from './Spinner';

export default function CitiesList({cities, isLoading}) {
  if (isLoading) return <Spinner />

  if (!cities.length) return <Message message='Add your first city by clicking on a city on the map' />
  return (
    <ul>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </ul>
  )
}
