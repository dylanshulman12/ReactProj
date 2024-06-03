//necessary imports
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react';
import './App.css'

//input fields and dropdown imports
import DropDownGenres from './components/genreDropdown';
import DropDownYears from './components/YearDropdown';
import KeywordInput from './components/keyword';

//storing the data
import { getCallData } from './logic src/logic';

//getting obj, and setting name cause why not
let callData = getCallData();

//styling
import './drop.css'


//with_keywords=${callData.keyword}&

// const link = `https://api.themoviedb.org/3/discover/movie?with_genres=${callData.genre}&year=${callData.year}`

// function call({link}) {

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQ4ZGJmNTA2N2YzYTUxMjcxMjZjOTIyNjJlY2RlOCIsInN1YiI6IjY2NGY3MzNlZWM4NTY1YmFkOTRmODYxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HpZjyBX34ZuwzOsrNRasoGstoHLiihmv8jEJvgrjqdA'
//   }
// };

// fetch(`${link}`, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// }

export default function App() {

 


  return (
    <div
    className="row"
    > 
      <DropDownGenres/>
      <DropDownYears/>
      <KeywordInput/>
     
    </div>

  );
}

