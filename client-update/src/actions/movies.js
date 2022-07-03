import axios from 'axios';

const key = '89d5e38d026c204f34147b6f3ab406d5';


export const getMoviesData = async () => {

    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + key);
                                
    return res.data;

}