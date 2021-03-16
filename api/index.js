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



export function getWikiSection(city){
    return axios({
        "method":"GET",
        "url":"https://en.wikipedia.org/w/api.php?",
        "params":{
            "action":"parse",
            "format":"json",
            "page": city,
            "prop":"sections"
        }
    })
    .then(res => {
        const sections = res.data.parse.sections
        console.log(sections.filter((s) => s["anchor"].includes('History')))

    })
    .catch(err => console.log(err.message))
}