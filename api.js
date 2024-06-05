const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQ4ZGJmNTA2N2YzYTUxMjcxMjZjOTIyNjJlY2RlOCIsInN1YiI6IjY2NGY3MzNlZWM4NTY1YmFkOTRmODYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HpZjyBX34ZuwzOsrNRasoGstoHLiihmv8jEJvgrjqdA'
    }
};


let text = "yas";
async function getCall() {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(function (response) {
            if (!response.ok) {
                console.log('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(function(data) {
            // Update the text variable with the JSON data
            text = data;

        })



}

getCall().then(function() {

    // console.log(text)
    text.results.forEach(obj => {

        console.log("title: " + obj.title);
        console.log("id: " + obj.id);
        console.log("descrip: " + obj.overview);
        console.log("release date: " + obj.release_date);
        console.log("poster: http://image.tmdb.org/t/p/w500" + obj.poster_path + "/n");
     });

});


