import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const key = '5c396a22db43553af358d4e6fa7d8c43';

export const getPublications = async () => {
    const response = await axios.get(`/trending/movie/week?api_key=${key}`);    
    return response.data.results;
    
}
export const getPublicationId = async (id) => {
    const response = await axios.get(`/movie/${id}?api_key=${key}`);
    return response.data;
}
export const getPublicationCastId = async (id) => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${key}`);
    return response.data.cast;
}
export const getPublicationReviewsId = async (id) => {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${key}`);
    return response.data.results;
}
export const getSearchPublication = async (searchMovie) => {
    const response = await axios.get(`/search/movie?api_key=${key}&query=${searchMovie}`);
    return response.data.results;
}