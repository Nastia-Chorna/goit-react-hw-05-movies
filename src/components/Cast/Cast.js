import {getPublicationCastId} from "../services/theMovieApi";
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {
    List,
    Container
} from "./Cast.styled"

export const Cast =() => {
    const data = useParams();
    const id = data.movieId;
    const [actors, setActors] = useState();

    useEffect(() => {
        async function FetchActors(){
            try{
                const actorsData = await getPublicationCastId(data.movieId)
                setActors(actorsData)
            }
            catch (error){

            }
        } FetchActors()
    }, [data.movieId])

return(
    <Container>
        <List>
            {actors.map(({id, actor_path, actor_name}) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${actor_path}`} alt=""/>
                    <h1>name: {actor_name}</h1>
                </li>
            ))}
        </List>
    </Container>
)


}