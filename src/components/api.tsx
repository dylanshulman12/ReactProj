import {CheckData} from "../logic src/logic.tsx";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQ4ZGJmNTA2N2YzYTUxMjcxMjZjOTIyNjJlY2RlOCIsInN1YiI6IjY2NGY3MzNlZWM4NTY1YmFkOTRmODYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HpZjyBX34ZuwzOsrNRasoGstoHLiihmv8jEJvgrjqdA'
    }
};

// import './app.css'


export async function getCall(d) {

    const response = await fetch(d, options)
        .then(function (response) {
            if (!response.ok) {
                console.log('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
    const data = await response;
    return data.results.map(obj => ({
        title: obj.title,
        id: obj.id,
        description: obj.overview,
        releaseDate: obj.release_date,
        poster: `http://image.tmdb.org/t/p/w500${obj.poster_path}`
    }));

}
