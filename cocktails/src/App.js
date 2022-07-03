import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Search } from './Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cocktail } from './Cocktail';

function App() {

  const [data, setData] = useState(null);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.drinks[0]);
    setData(data.drinks[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (


    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cocktail/:id" element={<Cocktail cocktailData={data} />} />
        </Routes>
        <Search />
        {data
          ? <><h2>{data.strDrink}</h2>
            <p>Category: {data.strCategory}</p>
            <p>{data.strAlcoholic}</p>

            <div className="drink_image">
              <img src={data.strDrinkThumb} alt="Drink thumb"></img>
            </div>

            <p>{data.strInstructions}</p></>
          : <></>
        }
      </BrowserRouter>
    </div>

  );
}

export default App;
