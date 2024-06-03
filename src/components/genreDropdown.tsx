import { useState } from "react"
import { Dropdown } from "semantic-ui-react"
import { setGenre } from "../logic src/logic";



//set info for genres
const movieGenres = [
    { "key": "Action", "text": "Action", "value": 28 },
    { "key": "Adventure", "text": "Adventure", "value": 12 },
    { "key": "Animation", "text": "Animation", "value": 16 },
    { "key": "Comedy", "text": "Comedy", "value": 35 },
    { "key": "Crime", "text": "Crime", "value": 80 },
    { "key": "Documentary", "text": "Documentary", "value": 99 },
    { "key": "Drama", "text": "Drama", "value": 18 },
    { "key": "Family", "text": "Family", "value": 10751 },
    { "key": "Fantasy", "text": "Fantasy", "value": 14 },
    { "key": "History", "text": "History", "value": 36 },
    { "key": "Horror", "text": "Horror", "value": 27 },
    { "key": "Music", "text": "Music", "value": 10402 },
    { "key": "Mystery", "text": "Mystery", "value": 9648 },
    { "key": "Romance", "text": "Romance", "value": 10749 },
    { "key": "Science Fiction", "text": "Science Fiction", "value": 878 },
    { "key": "TV Movie", "text": "TV Movie", "value": 10770 },
    { "key": "Thriller", "text": "Thriller", "value": 53 },
    { "key": "War", "text": "War", "value": 10752 },
    { "key": "Western", "text": "Western", "value": 37 }
];

//create a drop down component
const DropDownGenres = () => {
const [i, seti] = useState(null)

const HandleClick = (event, data) => {
    // const selectedValue = data.value;

    const genreObj = movieGenres.find(element => element.value === data.value)
    seti(genreObj.value);
    console.log(genreObj.key, genreObj.value);
    setGenre(genreObj.value);

};

return (

        <div>
            <Dropdown
                placeholder='Select Genre'
                // fluid
                selection
                options= {movieGenres}
                onChange={HandleClick}
                
            />
            
            {/* {i && <p>Selected Genre: {i}</p>} */}
        </div>
       );

}

export default DropDownGenres;