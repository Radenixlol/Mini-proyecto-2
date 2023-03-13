<<<<<<< Updated upstream
import Section from "../Components/HomePage/Section"
import { MovieGrid } from "../Components/HomePage/MovieGrid"

export function HomePage (){

    const [sectionToggle, setSectionToggle] = useState({
        first: 'Descubrir'
    })
    const handleToggledValue = (section, selectedValue) =>{
        setSectionToggle (prev =>({
            ...prev, 
            [section]: selectedValue
        }))
    }

 return (
    <div>
    <header>
        <Link to ="/pelis"><h1 className="text-center text-5xl">PELICULAS</h1></Link> 
    </header>
    <main>
        <Section title="Recomendaciones..." items={['Descubrir', "Próximamente"]} onToggle = {handleToggledValue.bind(null, first)} isToggled = {sectionToggle.first==='Descubrir'?false:true}> 
            <MovieGrid fetch={sectionToggle.first}/>
        </Section>     
    </main>
    </div>
 )
 }
=======
import { useSearchParams } from "react-router-dom";
import MovieGrid from "../Components/HomePage/MovieGrid";
import { Search } from "../Components/HomePage/Search";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
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
>>>>>>> Stashed changes
