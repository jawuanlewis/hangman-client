import Level from "./Level";
import movies from "@/assets/images/movies.png";
import videoGames from "@/assets/images/video-games.png";
import sports from "@/assets/images/sports.png";
import idioms from "@/assets/images/idioms.png";
import tvShows from "@/assets/images/tv-shows.png";
import food from "@/assets/images/food.png";
import animals from "@/assets/images/animals.png";
import cities from "@/assets/images/cities.png";

const Levels = () => {
  return (
    <div id="levels-container">
      <Level image={movies} title="Movies" />
      <Level image={videoGames} title="Video Games" />
      <Level image={sports} title="Sports" />
      <Level image={idioms} title="Idioms" />
      <Level image={tvShows} title="TV Shows" />
      <Level image={food} title="Food" />
      <Level image={animals} title="Animals" />
      <Level image={cities} title="Cities" />
    </div>
  );
};

export default Levels;
