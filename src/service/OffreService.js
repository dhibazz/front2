// import axios from 'axios';

const OFFRE_API_BASE_URL = "http://localhost:8080/api/Offre";

const options = { method: 'GET', headers: { 'Accept': 'application/json' }, url: `${OFFRE_API_BASE_URL}/getAllOffres/`, validateStatus: false }


export const getOffers = async () => {
    const data = await fetch('http://localhost:8080/api/Offre/getAllOffres');
    const  offers = await data.json();
    return offers
}

// export const addOffre = (offre) => {
//     return axios.post(`${OFFRE_API_BASE_URL}/getAllOffres/${offre}`, offre);
// }

// export const updateOffre = (offre) => {
//     return axios.put(`${OFFRE_API_BASE_URL}/getAllOffres/`, offre);
// }

export const deleteOffer = async (offer) => {
    
    await fetch(`http://localhost:8080/api/Offre/deleteOffre/${offer.id}`, {
        method: 'DELETE'
    });
    return offer
}
