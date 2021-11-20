// import { getAllMovies } from '../../utils/api';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import { GetFavorites, toggleFavorites } from '../../utils/helpers'
import { useEffect, useState } from 'react';

//A componnent incharge of displaying and selecting a film for display and adding to favorites
const SideBar = ({ films, onSelect }) => {

   //saves the state of the favorites in the app
   const [favorites, setFavorites] = useState({});

   //adding a film to favorites in the app and localStorage
   const handleFavorites = (e, id) => {
      e.stopPropagation();
      setFavorites({
         ...favorites,
         [id]: !favorites[id],
      });
      toggleFavorites(id);
   };

   //on initialization of the componnent set favorites to the localStorage
   useEffect(() => {
      setFavorites(GetFavorites());
   }, []);

   //return JSX of the table of content with the list of films and the favorites
   return (
      <div className="table-of-content">
         <h2>List Of Films</h2>
         {Object.values(films).map((film) =>
            <li className={"film-title-container"} key={`film-link-${film.episode_id}`} onClick={() => onSelect(film.episode_id)}>
               <span className={"film-title"} >
                  {film.title}
               </span>
               < FontAwesomeIcon className={"icon-heart"}
                  icon={favorites[film.episode_id] ? heartSolid : heartRegular}
                  onClick={(event) => handleFavorites(event, film.episode_id)}
               />
            </li>
         )}
      </div>
   );
}

export default SideBar;