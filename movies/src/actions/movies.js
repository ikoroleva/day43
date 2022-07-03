import axios from 'axios';

const key = '312ebdd06a024bdfe7d3427ac0cab6ad';

export const getMoviesData = async () => {

    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=312ebdd06a024bdfe7d3427ac0cab6ad');


    return res.data;

}