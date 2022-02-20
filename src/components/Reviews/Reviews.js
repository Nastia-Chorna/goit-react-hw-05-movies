import {useState, useEffect} from "react";
import {getPublicationReviewsId} from "../services/theMovieApi";
import {useParams} from "react-router-dom";

export const Reviews =() => {
const [movieID] = useParams();
const [reviews, setReviews] = useState();

useEffect(() => {
    async function FetchReviews () {
        try{
            const reviewsData = await getPublicationReviewsId(movieID);
            setReviews(reviewsData)
        }
        catch (error) {
        } 
    }
FetchReviews();
}, [movieID])

if (reviews.length !== 0) {
    return(
        <div>
            <ul>
                {reviews.map(({id, writer, text}) => (
                    <li key={id}>
                        <h1>writer: {writer}</h1>
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
} else{
    return(
        <p>No reviews</p>
    )
}

}