import React from 'react';
import starImg from './images/star.png';
import deleteImg from './images/delete.png';

function BuildMovieLI(props) {
    const rating = parseInt(props.movieRating);
    const stars = [];
  
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img
          key={i}
          src={starImg}
          alt="star"
          style={{ width: '20px', height: '20px', marginRight: '2px', textAlign: 'right'}}
        />
      );
    }
  
    return (
      <li className="movie-item">
        {props.movieName}{' '}
        <span>{stars}
            <img
            src={deleteImg}
            alt="delete"
            className="delete-icon"
            onClick={props.deleteMovie}
            style={{ width: '20px', height: '20px', marginRight: '2px', textAlign: 'right'}}/>
        </span>
      </li>
    );
}

export default BuildMovieLI;
