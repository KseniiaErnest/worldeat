import { NavLink } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav >
      <ul className={styles.nav}>
        <li>
          <NavLink to='/'>Homepage</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
      </ul>
    </nav>
  )
}
