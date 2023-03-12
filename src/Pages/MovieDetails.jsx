import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';

export function MovieDetails(){
    const {movieId} = useParams;
    const {requestMovie} =  'https://api.themoviedb.org/3/movie/' + (movieId) + "?api_key=198211b29869f46d00a2c959098a1d49&language=en-US"; 
    const [movie, setMovie] = useState([])

    useEffect (()=> {
        axios.get(requestMovie).then((response) => {
            setMovie(response.data)
        })


    }, [movieId])

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path; 
    return (
        <div className="flex justify-center flex-wrap">
            <img className="max-w-[400px] h-auto  m-3.5 rounded-[15px]" src={imageUrl} alt={movie.title}/>
            <div className="max-w-[400px] h-auto m-3.5">
                <p> <strong>Titulo: </strong> {movie.title}</p>
                <p>
                    <strong>Generos: </strong>
                    {movie.genres.map(genre => genre.name.join(", "))} 
                </p>
                <p> <strong>Lenguaje original: </strong> {movie.original_language}</p>
                <p> <strong>Presupuesto: </strong> {movie.budget}</p>
                <p> <strong>Descripción: </strong> {movie.overview}</p>
                <p> <strong>Rating de popularidad: </strong> {movie.popularity}</p>
                <p> 
                    <strong>Compañias de produccion: </strong> 
                    {movie.production_companies.map(production_company => production_company.name.join(", "))}
                </p>
                <p> <strong>Fecha de lanzamiento: </strong> {movie.release_date}</p>
                <p> <strong>Estado de la pelicula: </strong> {movie.status}</p>
            </div>
        </div>
    )
}

export default MovieDetails
