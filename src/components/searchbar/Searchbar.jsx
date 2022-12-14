import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('Немає запитів');
      return;
    }

    onSubmit(query);
    
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={s.searchFormButton} aria-label="search">
        <span className="button-label">Пошук</span>
      </button>

      <input
        className={s.searchFormInput}
        type="text"
        placeholder="Пошук фільму"
        name="query"
        value={query}
        onChange={handleQueryChange}
      />
    </form>
  );
}

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
};