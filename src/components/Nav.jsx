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
        <li>
          <NavLink to='/login' className={styles.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}
