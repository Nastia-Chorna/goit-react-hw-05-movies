
import {useState, useEffect} from "react";
import {getPublications} from "../services/theMovieApi";
import { Link, useLocation } from "react-router-dom";
import {
    Container,
    Title,
    Movies,
    Card,
    MoviePic,
    MovieTtitle
    
} from './HomePage.styled';


export const HomePage = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        async function fetchItems() {
            try {
               const items = await getPublications();
               setItems(items);
            } catch (error) {
            }
        }
        fetchItems();
        
    }, []);
    

    return (
        <Container>
            <Title>Home page</Title>
            <Movies>    
                {items.map(item => (
                <Card key={item.id}>
                    <Link to={`/movies/${item.id}`} state={{from: location}}>
                    <MovieTtitle>{item.title}</MovieTtitle>
                    <MoviePic
                    src={`https://www.themoviedb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title}
                     />
                    </Link>
                    </Card>
            ))}
            </Movies>            
        </Container>
    )}