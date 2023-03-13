import React from 'react'
import { Link } from 'react-router-dom';
import { getMovieImg } from '../../utils/getImage';

export function MovieCard({movie}){
    const imageUrl = getMovieImg(movie.poster_path, 300);
    return(
        <li className="text-white list-none text-2xl text-center hover: opacity-70">\
            <Link to = {"/movies/" + movie.id}>
                <img width = {230} height = {345} className="rounded bg-[#007FFF]" src={imageUrl} alt = {movie.title}/>  
                <div>{movie.title}</div>
            </Link>
        </li>
    )

}