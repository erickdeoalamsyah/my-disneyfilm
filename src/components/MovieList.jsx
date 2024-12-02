import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import MovieCard from "./MovieCard";

function MovieList({ genreId, addToWatchList }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    setLoading(true);
    GlobalApi.getMovieByGenreId(genreId)
      .then((resp) => {
        setMovieList(resp.data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  if (loading) {
    return <p>Loading movies...</p>;
  }

  const SliderRight = () => {
    elementRef.current.scrollLeft += 500;
  };

  const SliderLeft = () => {
    elementRef.current.scrollLeft -= 500;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-[35px] absolute ml-[-20px] mt-[155px] cursor-pointer"
        onClick={SliderLeft}
      />
      <HiChevronRight
        className="hidden md:block text-[35px] absolute mr-[-5px] mt-[155px] cursor-pointer right-9"
        onClick={SliderRight}
      />
      <div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-5 pt-5 pb-3 px-5"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <MovieCard key={item.id} movie={item} addToWatchList={addToWatchList} />
        ))}
      </div>
    </div>
    
  );
}

export default MovieList;
