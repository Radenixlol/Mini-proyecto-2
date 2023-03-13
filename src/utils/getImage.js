import imgdefault from '../assets/imgdefault.jpg'

export function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : imgdefault;
}