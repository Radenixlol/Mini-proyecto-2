import React, {useEffect, useState} from 'react'
import { MovieCard } from "./MovieCard"
import api from '../../utils/api'
import { request } from '../../utils/requests'



export function MoviesGrid( {fetch}){
    const [movies, setMovies] = useState([])
    
    useEffect (()=> {
        const fetchMovies = async() =>{
            const {data} = await api.get(request[fetch])
            setMovies(data.results)
        }

        fetchMovies()
    }, [fetch])
    
    return (
        <ul className="grid gap-10 justify-center p-10 grid-cols-[repeat(auto-fill,_230px)]">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} /> 
            ))}
        </ul>

    );

}