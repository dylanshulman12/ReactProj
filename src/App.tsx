//necessary imports
import 'semantic-ui-css/semantic.min.css'
import { useState } from 'react';
import './App.css'

//input fields and dropdown imports
import DropDownGenres from './components/genreDropdown';
import KeywordInput from './components/keyword';
import DropDownYears from './components/YearDropdown copy';

//storing the data
import { CheckData } from './logic src/logic';
import {getCall} from "./components/api.tsx";




//box to display said data
function CreateResultBox({t, i, d, re, image}) {
  return (
      <div>
        <img src={image} alt={re}/>
        <h1>{t}</h1>
        <p>Description: ${d}</p>
      </div>

  );
}


export default function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    getCall(CheckData()).then(stuff => {
      setData(stuff);
    });
  }
  

  return (
    <div>
      <DropDownGenres/>
      <DropDownYears/>
      <KeywordInput/>
      <button onClick={handleClick} >Discover</button>



      <div className="box">
          {data.map(movie => (
              <CreateResultBox
                  t={movie.id}
                  i={movie.title}
                  d={movie.description}
                  re={movie.releaseDate}
                  image={movie.poster}
              />
              )
          )}
      </div>

    </div>
  );
}

