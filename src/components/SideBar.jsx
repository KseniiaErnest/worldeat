import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import styles from './SideBar.module.css';

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <AppNav />

     <Outlet />
      <footer>
        <p>&copy; Copyright {new Date().getFullYear()} by WorldEat Inc.</p>
      </footer>
    </div>
  )
}
