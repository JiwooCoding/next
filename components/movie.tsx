"use client"

import Link from 'next/link'
import React from 'react'
import styles from '../styles/movie.module.css'
import { useRouter } from 'next/navigation';

interface IMovieProps {
    poster_path:string;
    title:string;
    id:string;
}

const Movie = ({poster_path, title, id}:IMovieProps) => {

    const router  = useRouter();

    const onClick = () => {
        router.push(`/movies/${id}`);
    }

    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link prefetch href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}

export default Movie