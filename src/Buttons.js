import React from 'react';

const SortAlphabetic = ({ setList, list }) => {
    const sortedList = [...list].sort((a, b) =>
      a.movieName.localeCompare(b.movieName)
    );
    setList(sortedList);
};

const SortRating = ({ setList, list }) => {
    const sortedList = [...list].sort(
      (a, b) => parseInt(b.movieRating) - parseInt(a.movieRating)
    );
  setList(sortedList);
};

export function OrderByAlphaButton({ setList, list }) {
    return (<button type="button" onClick={() => SortAlphabetic({ list, setList })}>Alfabetiskt</button>);
};

export function OrderByGradeButton({ setList, list }) {
    return (<button type="button" onClick={() => SortRating({ list, setList })}>Betyg</button>);
};
