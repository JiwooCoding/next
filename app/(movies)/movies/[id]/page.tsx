import React, { Suspense } from 'react'
import MovieInfo, { getMovies } from '../../../components/movie-info';
import MovieVideos, { getVideos } from '../../../components/movie-videos';


const MovieDetail = async({params:{id}}:{params:{id:string}}) => {

    return (
        <div>
            <h3>Movie detail page</h3>
            <Suspense fallback={<h1>Loading Movie Info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}

export default MovieDetail