import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/Api';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id)
      .then(res => {
        setReviews(res);
      })
      .catch(error => console.log(error));

  }, [id]);

  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <p>Автор: {el.author}.</p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "У нас немає рецензій на цей фільм"
      )}
    </div>
  );
}
