import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import { getMoviesData } from './actions/movies';


function App() {

  const [formData, setFormData] = useState(null);

  const fetchData = async () => {
    const res = await getMoviesData();
    console.log(res);
  }

  useEffect(() => {

    fetchData();

  }, [])

  return (
    <Fragment>
      <header>
        <h1>Movies</h1>
      </header>
      <main>

      </main>
    </Fragment>
  );
}

export default App;
