import axios from 'axios'
import React from 'react'
import { API_URL } from '../app/contant';

const getMovieSimliar = async(id:string) => {
    const response = await axios.get(`${API_URL}/${id}/similar`);
    console.log('data -----> ',response.data);
    return response.data;
}

const MovieSimilar = async({id}:{id:string}) => {

    const similar = await getMovieSimliar(id);

    return (
        <ul>
            {/* {similar.map(item => (
                <li key={item.id}>
                    {item.title}
                    <img src={item.poster_path}/>
                </li>
            ))} */}
        </ul>
    )
}

export default MovieSimilar