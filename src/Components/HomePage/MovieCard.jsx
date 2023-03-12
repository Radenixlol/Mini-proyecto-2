import React from 'react'
import { Link } from 'react-router-dom';

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return(
        <li className="text-white list-none text-2xl text-center hover: opacity-70">\
            <Link to = {"/movies/" + movie.id}>
                <img width = {230} height = {345} className="rounded bg-[#007FFF]" src={imageUrl} alt = {movie.title}/>  
                <div>{movie.title}</div>
            </Link>
        </li>
    )

}