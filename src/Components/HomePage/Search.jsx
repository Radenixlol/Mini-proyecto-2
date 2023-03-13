import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className='flex justify-center ' onSubmit={handleSubmit}>
      <div className= 'relative'>
        <input
          className='h-[30px] rounded-xl text-lg pt-[5px] pr-[30px] pb-[5px] pl-[10px] '
          type="text"
          value={search ?? ""}
          autoFocus
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;

            setQuery({ search: value });
          }}
        />
        <FaSearch size={20} color="black" className='absolute right-2 top-0 h-full' />
      </div>
    </form>
  );
}