import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";
import axios from "axios";
import { getUrl } from "../../utils/httpRequests";

export function MovieGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = getUrl(search, page);

    axios.get(searchUrl).then((response) => {
      setMovies((prevMovies) => prevMovies.concat(response.data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
    >
      <ul className="grid gap-10 justify-center p-10 grid-cols-[repeat(auto-fill,_230px)]">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}