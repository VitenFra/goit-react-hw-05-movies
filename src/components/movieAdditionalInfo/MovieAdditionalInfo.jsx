import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export default function MovieAdditionalInfo() {
  const location = useLocation();

  return (
    <div>
      <h3>Додаткова інформація</h3>
      <ul>
        <li>
          <NavLink to="cast" state={location.state}>
          Aкторський склад
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={location.state}>
          Відгуки
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
