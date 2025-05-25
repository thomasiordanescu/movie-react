import './assignment_6.css';
import React from 'react';
import AddMovieForm from './AddMovieForm';
import BuildMovieUL from './BuildMovieUL';
import { OrderByAlphaButton, OrderByGradeButton } from './Buttons';


function App() {
  const [list, setList] = React.useState([]);

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm list={list} setList={setList} />
      <hr />
      <h2>Filmer</h2>
      <BuildMovieUL list={list} setList={setList} />
      <OrderByAlphaButton list={list} setList={setList} />
      <OrderByGradeButton list={list} setList={setList} />
    </div>
  );
}

export default App;
