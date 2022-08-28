import { Link } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <Link className={s.link} to="/">
        На головну
      </Link>

      <Link className={s.link} to="/movies">
      Фільми
      </Link>
    </nav>
  );
}
