import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { normalizedYearOfMovie, normolizedGenres } from '../../helper/Helper';
import placeholder from '../../images/posterholder.jpg';
import s from './MovieInfo.module.css';

export default function MovieInfo({ movieInfo }) {
  const { poster_path, vote_average, overview, title, release_date, genres } =
    movieInfo;
  const location = useLocation();
  const navigate = useNavigate();

  const normalizedUserScore = (vote_average * 10).toFixed(0);

  return (
    <>
      <button
        className={s.button}
        onClick={() => navigate(location.state ?? '/')}
      >
        Назад
      </button>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : placeholder
          }
          alt={`${title}`}
        />
        <div>
          <h2>{`${title} (${normalizedYearOfMovie(release_date)})`}</h2>
          <p>
            <span>User score: </span> {normalizedUserScore}%
          </p>
          <p>
            <span>Overview: </span> {overview}
          </p>
          <p>
            <span>Genes:</span> {normolizedGenres(genres)}
          </p>
        </div>
      </div>
    </>
  );
}

MovieInfo.propTypes = {
  info: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
  }),
};
