import { useParams, Link, Route, Routes, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import {FaArrowLeft} from "react-icons/fa"
import { getPublicationId } from "../services/theMovieApi";
import { lazy } from "react";
import{
    MoviePic,
    Details,
    MovieCard,
    PictureContainer,
    
} from "./MovieDetailsPage.styled"


const Cast = lazy(() => 
  import('../Cast/Cast').then(module => ({ default: module.Cast}))
);
const Reviews = lazy(() => 
  import('../Reviews/Reviews').then(module => ({ default: module.Reviews}))
);

export const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const [item, setItem] = useState([]);
    const location = useLocation();
    
    
    
    useEffect(() => {
      async function FetchItem () {
          try {
              const card = await getPublicationId(movieId);                           
              setItem([card])
          } catch (error) {
             
          }
      }
      FetchItem();     
    }, [movieId]);
    
return (
        <MovieCard>
            <hr />
            <Link to={location?.state?.from ?? '/home'}><FaArrowLeft/>Back to the list</Link>
            {item.map(({genres, title, release_date, overview, poster_path, vote_average, id}) => (
                <div key={id}>                       
                <PictureContainer><MoviePic src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/></PictureContainer>
                <Details>                 
                <h1>{title} ({parseFloat(release_date)})</h1>
                <p>User Score: {vote_average}</p>
                <h2>Overview:</h2>
                <p>{overview}</p>
                <h2>Genres:</h2>
                {genres && genres.map(genre => (
                 <li key={genre.id}>{genre.name}</li>
             ))}
                </Details>
            </div>
            ))} 
            <hr />
            <div>
                <Link to={'cast'} state={{from: location?.state?.from ?? '/'}}>Cast</Link>
                <Link to={'reviews'} state={{from: location?.state?.from ?? '/'}}>Reviews</Link>
            </div>
            <div>
            <Routes>
                <Route path="cast" element={<Cast />}/>
                <Route path="reviews" element={<Reviews />}/>
            </Routes>  
            </div>
        </MovieCard>
    
    )
}