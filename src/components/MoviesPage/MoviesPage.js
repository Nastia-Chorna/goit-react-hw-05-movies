import  {useState, useEffect} from "react";
import { getSearchPublication } from "../services/theMovieApi";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { TailSpin } from  'react-loader-spinner'



export const MoviesPage = () => {  
    const [searhFilm, setSearhFilm] = useState([])    
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoad, setIsLoad] = useState(false)
    const location = useLocation();
    const query = searchParams.get('query')

    useEffect(() => {
        if (query === null) {
            return;
        }
     async function FetchSearch () {
        setIsLoad(true);
         try {
             const cardSearch = await getSearchPublication(query)
             if (cardSearch.length === 0) {
                 alert(`по запросу "${query}", фильмов не найдено`)
            } 
             
             setSearhFilm(cardSearch)
             
         } catch (error) {
             
         } finally {
            setIsLoad(false)
          } 
     }
     FetchSearch();
    }, [query])
       
    const hendleSubmit = e => {
        e.preventDefault();
       
        setSearchParams({ query: e.currentTarget.elements.query.value });

        if (e.currentTarget.elements.query.value.trim() === '') {
            alert('введите название фильма')
            return;            
        }
        e.currentTarget.reset();
    }
   
    return ( 
        <>
            {isLoad && <TailSpin />}
            <div>
                <header className="searchbar">
                    <form className="form" onSubmit={hendleSubmit}>
                        
                            <button type="submit" className="button" >
                                <span className="button-label">Search</span>
                            </button>
                                            
                    <input                        
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"                        
                        name="query"
                    />
                    </form>
                </header>
            </div>
            {searhFilm.length > 0 && (
            <ul>
                {searhFilm.map(({id, title}) => (
                    <li key={id}>
                        <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
                    </li>
                ))}
            </ul>
            )}           
        </>
    )
}