import Link from "next/link";
import React from "react";
import Movie from "../../components/movie";
import styles from '../../styles/home.module.css'
import { API_URL } from "../contant";

export const metadata = {
    title:'home'
}

const getMovies = async() => {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

const HomePage = async() => {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map(movie => (
                <Movie 
                    key={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    id={movie.id}
                />
            ))}
        </div>
    )
};

export default HomePage;
