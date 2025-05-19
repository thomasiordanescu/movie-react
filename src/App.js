import './assignment_6.css';
import { useState } from 'react';
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
  );}

function App() {
  const [list, setList] = React.useState([]);

  const BuildMovieUL = () => (
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

  function AddMovieForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const { name, value } = event.target;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!inputs.movieName || inputs.movieName.trim() === "") {
        alert("empty movie");
        return;
      }
      if (!inputs.movieRating || inputs.movieRating == "0") {
        alert("empty rating");
        return;
      }

      const newList = list.concat({
        movieName: inputs.movieName,
        movieRating: inputs.movieRating,
      });
      setList(newList);

    };

    return (
      <form id="add-movie-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Lägg till en film</legend>

          <label htmlFor="title-field">Titel:</label>
          <input
            type="text"
            id="title-field"
            className="form-control"
            name="movieName"
            value={inputs.movieName || ""}
            onChange={handleChange}
          />

          <label htmlFor="rating-field">Betyg:</label>
          <select
            id="rating-field"
            className="form-control"
            name="movieRating"
            value={inputs.movieRating || ""}
            onChange={handleChange}
          >
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            className="btn btn-success mt-3"
            value="Spara film"
          />
        </fieldset>
      </form>
    );
  }

  const SortAlphabetic = () => {
      const sortedList = [...list].sort((a, b) =>
        a.movieName.localeCompare(b.movieName)
      );
      setList(sortedList);
  };
  const SortRating = () => {
      const sortedList = [...list].sort(
        (a, b) => parseInt(b.movieRating) - parseInt(a.movieRating)
      );
    setList(sortedList);
  };

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm />
      <hr />
      <h2>Filmer</h2>
      <BuildMovieUL />
      <button type="button" onClick={SortAlphabetic}>Alfabetiskt</button>
      <button type="button" onClick={SortRating}>Betyg</button>
    </div>
  );
}

export default App;
