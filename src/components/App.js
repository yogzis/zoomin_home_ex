import './App.css';
import SideBar from './SideBar/SideBar';
import FilmDetails from './FilmDetails/FilmDetails';
import { buildFilmsMap } from '../utils/helpers'
import { useEffect, useState } from 'react';
import { getAllFilms } from '../utils/api';

//A componnent incharge of displaying and selecting a film for display and adding to favorites
const App = () => {
  //saving the films array from the api in a state
  const [films, setFilms] = useState({});

  //saving the selected film of the user in a state
  const [selectedFilm, setSelectedFilm] = useState('');

  //async function to get the films arr from the api
  const getFilms = async () => {
    const films = await getAllFilms();
    setFilms(buildFilmsMap(films.results));//building a map of films [episode_id => film object] and setting to the film state
  };

  //on initialization of the componnent get and initialize the film map
  useEffect(() => {
    getFilms();
  }, []);

  //return JSX of a Header, SideBar and FilmDetails componnents
  return (
    <div className="App">
      <h1>STAR WARS FILMS</h1>
      <div className="flex-container">
        <SideBar films={films} onSelect={setSelectedFilm} />
        <FilmDetails film={selectedFilm && films[selectedFilm]} />
      </div>
    </div>
  );
}

export default App;
