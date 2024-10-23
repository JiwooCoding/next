import axios from "axios";
import Link from "next/link";
import { resolve } from "path";
import React, { useEffect, useState } from "react";

export const metadata = {
    title:'home'
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async() => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

const HomePage = async() => {
    const movies = await getMovies();

    return (
        <div>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    )
};

export default HomePage;