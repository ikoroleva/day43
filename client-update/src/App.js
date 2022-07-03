import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { getMoviesData } from './actions/movies';
import Card from './components/Card';

const App = () => {


  const [ formData, setFormData ] = useState({
    results: [],
    total_results: 0
  });

  const [ loadingData, setLoadingData ] = useState(false);


  const fetchData = async () => {

    setLoadingData(true)

    const res = await getMoviesData();

    setFormData({
      results: res.results,
      total_results: res.total_results
    })

    setLoadingData(false)

  }

  useEffect(() => {

    fetchData()

  }, [])

  const [ phrase, setPhrase ] = useState(null)

  const key = '89d5e38d026c204f34147b6f3ab406d5';

  const handleSearch = async ( e ) => {

    setPhrase(e.target.value);

    const options = {
      params: {
        api_key: key,
        query: phrase
      }
    }

    const res = await axios.get('https://api.themoviedb.org/3/search/movie', options);

    
    setFormData(res.data)
  }



  return (
    <Fragment>
      <header className="App-header">
        
        <h1>Movies</h1>

      </header>
      <main>

        <input type="text" name="phrase" value={phrase || ''} onChange={(e) => handleSearch(e)} />

        {
          loadingData ? 

            'loading...' : 

              formData.results.length ? 

                formData.results.map((element) => <Card key={element.id} element={element} />) : 

                  'There is no data to display.'
        }
      </main>
    </Fragment>
  );
}

export default App;
