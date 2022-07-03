import { useEffect, useState } from "react";
import { Cocktail } from './Cocktail';

export function Search(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDrink, setSelectedDrink] = useState([]);
    const [data, setData] = useState([]);

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.drinks);
        setData(data.drinks);

    }



    // useEffect(() => {
    //     fetchData();
    // }, [props.name]);

    return (
        <div className="search-container">
            <input className="search" type="text" name="search" placeholder="Search for a cocktail" autoComplete="off" onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={() => { fetchData(url) }}>Search</button>
            {data
                ?
                <ul>
                    {data.map((item, i) =>
                        (<Cocktail key={i} cocktailData={item} selectedDrink={selectedDrink} setSelectedDrink={setSelectedDrink} />))
                    }

                </ul>
                : <></>
            }

        </div>

    )
}