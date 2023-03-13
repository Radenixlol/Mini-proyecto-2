import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieImg } from "../utils/getImage";
import { getMovieUrl } from "../utils/httpRequests";
import axios from "axios";


export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const urlPath = getMovieUrl(movieId)
    axios.get(urlPath).then((response) => {
      setMovie(response.data);
      setIsLoading(false);
    });
  }, [movieId]);


  const imageUrl = getMovieImg(movie.poster_path, 500);
    return (
        <div className="flex justify-center flex-wrap">
            <img className="max-w-[400px] h-auto  m-3.5 rounded-[15px]" src={imageUrl} alt={movie.title}/>
            <div className="max-w-[400px] h-auto m-3.5">
                <p> <strong>Title: </strong> {movie.title}</p>
                <p>
                    <strong>Genres: </strong>
                    {movie.genres.map(genre => genre.name.join(", "))} 
                </p>
                <p> <strong>Official Language: </strong> {movie.original_language}</p>
                <p> <strong>Budget: </strong> {movie.budget}</p>
                <p> <strong>Overview: </strong> {movie.overview}</p>
                <p> <strong>Popularity Rating: </strong> {movie.popularity}</p>
                <p> 
                    <strong>Production Companies: </strong> 
                    {movie.production_companies.map(production_company => production_company.name.join(", "))}
                </p>
                <p> <strong>Release Date: </strong> {movie.release_date}</p>
                <p> <strong>Status: </strong> {movie.status}</p>
            </div>
        </div>
    )
}

