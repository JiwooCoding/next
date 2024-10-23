import React from 'react'
import axios from "axios";
import { API_URL } from "../(home)/page";

export const getVideos = async(id:string) => {
    console.log(`Fetching vidoes ${Date.now()}`);
    throw new Error('something broken....');
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // const response = await axios.get(`${API_URL}/${id}/videos`);
    // return response.data;
}


const MovieVideos = async({id}:{id:string}) => {
    
    const videos = await getVideos(id);

    return (
        <h6>{JSON.stringify(videos)}</h6>
    )
}

export default MovieVideos
