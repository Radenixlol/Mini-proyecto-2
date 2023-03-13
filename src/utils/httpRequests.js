const api_key = '198211b29869f46d00a2c959098a1d49'

export function getUrl(search, page){
    if (search){
        return url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search}&page=${page}`
    }else{
        return url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=${page}`
    }
}

export function getMovieUrl(movieId){
    return url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`

}