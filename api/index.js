import axios from 'axios'


export function getCityName(location) {
    return axios({
        "method":"GET",
        "url": "https://trueway-geocoding.p.rapidapi.com/ReverseGeocode",
        "headers":{
            "X-RapidAPI-Key":process.env.API_KEY,
            "X-RapidAPI-Host":process.env.API_HOST,
            "useQueryString": true
        },
        "params":{
            "location":location
        }
    })
    .then(res => res.data)
    .catch(err => console.log(err.message))
}