import axios from 'axios';
import React from 'react'
import { API_URL } from '../(home)/page';

export const getMovies = async(id:string) => {
    console.log(`Fetching movies ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

const MovieInfo = async({id}:{id:string}) => {

    const movie = await getMovies(id);

    return (
        <h6>{JSON.stringify(movie)}</h6>
    )
}

export default MovieInfo