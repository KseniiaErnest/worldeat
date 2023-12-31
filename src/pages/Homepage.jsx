import { Link } from "react-router-dom";
import Nav from "../components/Nav"
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
    <Nav />
      <section>
        <h1>
        Travel the globe, savoring delicious dishes along the way.
          <br />
          Keep a record of your culinary adventures with WorldEat.
        </h1>
        <h2>
        Our interactive map traces your every step across cities, capturing the diverse flavors each has to offer. Cherish your delightful experiences and share with friends the story of your global wanderlust.
        </h2>
        <Link to='/app' className="cta">Start tracking now</Link>
      </section>
    </main>
  );
}
