import React from 'react'
import axios from "axios";
import styles from '../styles/movie-videos.module.css'
import { API_URL } from '../app/contant';

export const getVideos = async(id:string) => {
    //console.log(`Fetching vidoes ${Date.now()}`);
    const response = await axios.get(`${API_URL}/${id}/videos`);
    return response.data;
}


const MovieVideos = async({id}:{id:string}) => {
    
    const videos = await getVideos(id);

    return (
        // <h6>{JSON.stringify(videos)}</h6>
        <div className={styles.container}>
            {videos.map(video => (
                <iframe 
                key={video.id} 
                src={`https://youtube.com/embed/${video.key}`} 
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            ))}
        </div>
    )
}

export default MovieVideos
