import  {useState, useEffect} from "react";
import { getSearchPublication } from "../services/theMovieApi";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { TailSpin } from  'react-loader-spinner';
import {
    ContainerTwo,
    Button,
    Input,
    SearchForm,
    Span
} from "./MoviesPage.styled";
import background from "../images/cinema.jpg"



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
            alert(`Oops, nothing found!`)
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
            alert('Please, enter a Movie Title')
            return;            
        }
        e.currentTarget.reset();
    }
   
return ( 
    <>
     <div style={{ backgroundImage: `url(${background})` }}>
      
    </div>
    {isLoad && <TailSpin />}
     <ContainerTwo>
            <SearchForm className="searchbar">
                <form className="form" onSubmit={hendleSubmit}>
                <Button type="submit" className="button" >
                <Span className="button-label">Search</Span>
                </Button>
                                            
                <Input                        
                 className="input"
                  type="text"
                  autoFocus
                  autoComplete="off"
                  placeholder="Search your movies"                        
                  name="query"
                    />
                    </form>
                </SearchForm>
            </ContainerTwo>
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