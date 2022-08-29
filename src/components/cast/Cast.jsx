import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getCast } from '../../api/Api';
import placeholder from '../../images/posterholder.jpg';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id)
      .then(res => {
        setCast(res);
      })
      .catch(error => console.log(error));
    
  }, [id]);

  return (
    <div>
      {cast.length ? (
        <ul>
          {cast.map(el => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : placeholder
                }
                alt={`${el.name}`}
              />
              <p>{el.name}.</p>
              <p>Характер: {el.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        "У нас немає акторів для цього фільму"
      )}
    </div>
  );
}
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};