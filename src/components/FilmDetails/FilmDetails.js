import './FilmDetails.css';

//A componnent incharge of displaying the selected film details
const FilmDetails = ({ film }) => {

   // if there is no selected film yet don't display any details
   if (!film) {
      return <div className="film-details-container" />
   }

   //returns JSX with the film's details 
   return (
      <div className="film-details-container">
         <div className={"title-episode-container"}>
            <div className={"film-details__title"}>STAR WARS: {film.title}</div>
            <div className={"film-details__episode"}>Episode {film.episode_id}</div>
         </div>
         <div className={"film-details"}>
            <div className={"film-details__release"}><span className={"details-titles"}>Release Date:</span> {film.release_date}</div>
            <div className={"film-details__director"}><span className={"details-titles"}>Director:</span> {film.director}</div>
            <div className={"film-details__producer"}><span className={"details-titles"}>Producer:</span> {film.producer}</div>
            <div className={"film-details__crawl"}><span className={"details-titles"}>Opening crawl:</span> {film.opening_crawl}</div>
         </div>
      </div>
   );
}

export default FilmDetails;