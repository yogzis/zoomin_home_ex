
//saving a name for localStorage
const FAVORITES_FILMS = 'starWarsFavorites';

//getting favorite films from localStorage
export const GetFavorites = () => {
   const favoritesFilmsStorage = localStorage.getItem(FAVORITES_FILMS);
   let favoritesFilms;

   if (!favoritesFilmsStorage) {
      favoritesFilms = {};
      localStorage.setItem(FAVORITES_FILMS, JSON.stringify(favoritesFilms));
   }
   else favoritesFilms = JSON.parse(favoritesFilmsStorage);

   return favoritesFilms;
};

//toggling favorite films in localStorage by episode_id as id
export const toggleFavorites = (id) => {
   let favoritesFilms = GetFavorites();

   favoritesFilms[id] = !favoritesFilms[id];

   localStorage.setItem(FAVORITES_FILMS, JSON.stringify(favoritesFilms));
};

//building map of films [episode_id => film object]
export const buildFilmsMap = (films) => {
   return films.reduce((obj, film) => {
      return {
         ...obj,
         [`${film.episode_id}`]: film
      };
   }, {});
};