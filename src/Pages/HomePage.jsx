import { useSearchParams } from "react-router-dom";
import {MovieGrid} from "../Components/HomePage/MovieGrid";
import { Search } from "../Components/HomePage/Search";
import { useDebounce } from "../hooks/useDebounce";

export function HomePage() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <Search />
      <MovieGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
