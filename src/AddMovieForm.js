import React, { useState } from 'react';

function AddMovieForm({ setList, list }) {
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
    if (!inputs.movieRating || inputs.movieRating === "0") {
      alert("empty rating");
      return;
    }

    const newList = list.concat({
      movieName: inputs.movieName,
      movieRating: inputs.movieRating,
    });
    setList(newList);
    setInputs({});
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

export default AddMovieForm;
