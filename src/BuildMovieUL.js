import React from 'react';
import BuildMovieLI from './BuildMovieLI';

const BuildMovieUL = ({ setList, list }) => (
    <ul id="movies">
      {list.map((movieItem, index) => (
        <BuildMovieLI
          key={index}
          movieName={movieItem.movieName}
          movieRating={movieItem.movieRating}
          deleteMovie={() => {
            const newList = [...list];
            newList.splice(index, 1);
            setList(newList);
          }}
        />
      ))}
    </ul>
);

export default BuildMovieUL;
