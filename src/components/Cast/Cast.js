import {getPublicationCastId} from "../services/theMovieApi";
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {
    List,
    Container
} from "./Cast.styled"

export const Cast =() => {
    const [movieID] = useParams();
    const [actors, setActors] = useState();

    useEffect(() => {
        async function FetchActors(){
            try{
                const actorsData = await getPublicationCastId(movieID)
                setActors(actorsData)
            }
            catch (error){

            }
        } FetchActors()
    }, [movieID])

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