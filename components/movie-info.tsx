import axios from 'axios';
import React from 'react'
import styles from '../styles/movie-info.module.css'
import MovieSimilar from './movie-similar';
import { API_URL } from '../app/contant';

export const getMovies = async(id:string) => {
    console.log(`Fetching movies ${Date.now()}`);
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}

const MovieInfo = async({id}:{id:string}) => {

    const movie = await getMovies(id);

    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title}/>
            <div>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐ {(movie.vote_average).toFixed(2)}</h3>
                <p className={styles.info}>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
                <MovieSimilar id={id}/>
            </div>
            <div>
                <h3>Company</h3>
                {movie.production_companies.map((logo) => (
                    <div key={logo.id}>
                        <p>{logo.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieInfo